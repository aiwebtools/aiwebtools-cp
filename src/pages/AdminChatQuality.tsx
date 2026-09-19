import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, RefreshCw, MessageSquare, ImageIcon, AlertTriangle, Timer, Search } from 'lucide-react';
import { toast } from 'sonner';

interface ChatLogRow {
  app_slug: string;
  status: string | null;
  latency_ms: number | null;
  image_requested: boolean | null;
  image_succeeded: boolean | null;
  reply_chars: number | null;
  created_at: string;
}

interface RoomStat {
  slug: string;
  total: number;
  ok: number;
  failures: number;
  imageRequested: number;
  imageSucceeded: number;
  avgLatency: number;
  avgReplyChars: number;
  lastActive: string | null;
}

const WINDOW_DAYS = 14;

const AdminChatQuality = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<ChatLogRow[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          toast.error('Please log in to view chat quality');
          navigate('/');
          return;
        }
        const { data: roleData } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .maybeSingle();
        if (!roleData) {
          toast.error('Admin access required');
          navigate('/');
          return;
        }
        setIsAdmin(true);
        await load();
      } catch (e) {
        console.error(e);
        navigate('/');
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      const since = new Date(Date.now() - WINDOW_DAYS * 86400000).toISOString();
      const { data, error } = await supabase
        .from('gpt_chat_logs')
        .select('app_slug,status,latency_ms,image_requested,image_succeeded,reply_chars,created_at')
        .gte('created_at', since)
        .order('created_at', { ascending: false })
        .limit(5000);
      if (error) throw error;
      setRows((data || []) as ChatLogRow[]);
    } catch (e) {
      console.error(e);
      toast.error('Failed to load chat logs');
    } finally {
      setLoading(false);
    }
  };

  const stats = useMemo<RoomStat[]>(() => {
    const map = new Map<string, RoomStat & { latencySum: number; latencyCount: number; charSum: number; charCount: number }>();
    for (const r of rows) {
      const slug = r.app_slug || 'unknown';
      let s = map.get(slug);
      if (!s) {
        s = {
          slug, total: 0, ok: 0, failures: 0, imageRequested: 0, imageSucceeded: 0,
          avgLatency: 0, avgReplyChars: 0, lastActive: null,
          latencySum: 0, latencyCount: 0, charSum: 0, charCount: 0,
        };
        map.set(slug, s);
      }
      s.total += 1;
      if (r.status === 'ok') s.ok += 1; else s.failures += 1;
      if (r.image_requested) s.imageRequested += 1;
      if (r.image_succeeded) s.imageSucceeded += 1;
      if (typeof r.latency_ms === 'number') { s.latencySum += r.latency_ms; s.latencyCount += 1; }
      if (typeof r.reply_chars === 'number') { s.charSum += r.reply_chars; s.charCount += 1; }
      if (!s.lastActive || r.created_at > s.lastActive) s.lastActive = r.created_at;
    }
    return Array.from(map.values())
      .map((s) => ({
        ...s,
        avgLatency: s.latencyCount ? Math.round(s.latencySum / s.latencyCount) : 0,
        avgReplyChars: s.charCount ? Math.round(s.charSum / s.charCount) : 0,
      }))
      .sort((a, b) => (b.failures - a.failures) || (b.total - a.total));
  }, [rows]);

  const filtered = stats.filter((s) => s.slug.toLowerCase().includes(filter.toLowerCase()));

  const totals = useMemo(() => {
    const total = rows.length;
    const failures = rows.filter((r) => r.status !== 'ok').length;
    const imgReq = rows.filter((r) => r.image_requested).length;
    const imgOk = rows.filter((r) => r.image_succeeded).length;
    const lat = rows.filter((r) => typeof r.latency_ms === 'number');
    const avgLat = lat.length ? Math.round(lat.reduce((a, r) => a + (r.latency_ms || 0), 0) / lat.length) : 0;
    return { total, failures, imgReq, imgOk, avgLat };
  }, [rows]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Checking admin status...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-xl md:text-3xl font-bold">🧪 Chat Quality Dashboard</h1>
          </div>
          <Button onClick={load} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Messages ({WINDOW_DAYS}d)
              </CardTitle>
            </CardHeader>
            <CardContent><p className="text-2xl font-bold text-primary">{totals.total.toLocaleString()}</p></CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Failures
              </CardTitle>
            </CardHeader>
            <CardContent><p className="text-2xl font-bold text-red-500">{totals.failures.toLocaleString()}</p></CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Pictures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-500">{totals.imgOk}/{totals.imgReq}</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Timer className="w-4 h-4" /> Avg Reply Time
              </CardTitle>
            </CardHeader>
            <CardContent><p className="text-2xl font-bold text-amber-500">{totals.avgLat ? `${totals.avgLat}ms` : 'N/A'}</p></CardContent>
          </Card>
        </div>

        <div className="mb-6 relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Filter chat rooms..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10"
          />
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Rooms ({filtered.length}) — worst first</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading chat logs...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No chat activity recorded in the last {WINDOW_DAYS} days.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 font-medium text-muted-foreground">Room</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Msgs</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">OK</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Failures</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Pictures</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Avg ms</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Avg reply</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Last active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((s) => (
                      <tr key={s.slug} className="border-b border-border/50 hover:bg-muted/20">
                        <td className="py-3 font-medium">{s.slug}</td>
                        <td className="py-3 text-right">{s.total}</td>
                        <td className="py-3 text-right text-green-500">{s.ok}</td>
                        <td className={`py-3 text-right ${s.failures ? 'text-red-500 font-semibold' : 'text-muted-foreground'}`}>{s.failures}</td>
                        <td className="py-3 text-right text-emerald-500">
                          {s.imageRequested ? `${s.imageSucceeded}/${s.imageRequested}` : '—'}
                        </td>
                        <td className="py-3 text-right text-amber-500">{s.avgLatency || '—'}</td>
                        <td className="py-3 text-right text-muted-foreground">{s.avgReplyChars || '—'}</td>
                        <td className="py-3 text-right text-muted-foreground">
                          {s.lastActive ? new Date(s.lastActive).toLocaleString() : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminChatQuality;
