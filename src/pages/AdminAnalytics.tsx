import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, TrendingUp, Eye, MousePointer, Search, Clock, Users, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface ToolStats {
  tool_title: string;
  tool_category: string | null;
  total_views: number;
  total_clicks: number;
  search_appearances: number;
  avg_load_time_ms: number | null;
  last_interaction: string | null;
  unique_sessions: number;
}

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<ToolStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [totalEvents, setTotalEvents] = useState(0);

  useEffect(() => {
    checkAdminAndLoadStats();
  }, []);

  const checkAdminAndLoadStats = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error('Please log in to access analytics');
        navigate('/');
        return;
      }

      // Check if user is admin
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
      await loadStats();
    } catch (error) {
      console.error('Error checking admin status:', error);
      toast.error('Failed to verify admin status');
      navigate('/');
    }
  };

  const loadStats = async () => {
    setLoading(true);
    try {
      // Get aggregated stats using the function
      const { data, error } = await supabase.rpc('get_tool_popularity_stats');
      
      if (error) throw error;
      
      setStats(data || []);

      // Get total event count
      const { count } = await supabase
        .from('tool_analytics')
        .select('*', { count: 'exact', head: true });
      
      setTotalEvents(count || 0);
    } catch (error) {
      console.error('Error loading stats:', error);
      toast.error('Failed to load analytics');
    } finally {
      setLoading(false);
    }
  };

  const filteredStats = stats.filter(stat => 
    stat.tool_title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    (stat.tool_category?.toLowerCase() || '').includes(searchFilter.toLowerCase())
  );

  // Calculate totals
  const totalViews = stats.reduce((sum, s) => sum + (s.total_views || 0), 0);
  const totalClicks = stats.reduce((sum, s) => sum + (s.total_clicks || 0), 0);
  const totalSessions = new Set(stats.map(s => s.unique_sessions)).size;
  const avgLoadTime = stats.filter(s => s.avg_load_time_ms).reduce((sum, s, _, arr) => 
    sum + (s.avg_load_time_ms || 0) / arr.length, 0);

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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">📊 Tool Analytics Dashboard</h1>
          </div>
          <Button onClick={loadStats} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Eye className="w-4 h-4" /> Total Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{totalViews.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <MousePointer className="w-4 h-4" /> Total Clicks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-500">{totalClicks.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" /> Total Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-500">{totalEvents.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" /> Avg Load Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-500">
                {avgLoadTime ? `${Math.round(avgLoadTime)}ms` : 'N/A'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search Filter */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search tools or categories..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tools Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Tool Popularity Rankings ({filteredStats.length} tools tracked)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading analytics...</div>
            ) : filteredStats.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {searchFilter ? 'No tools match your search' : 'No analytics data yet. Start using the tools!'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 font-medium text-muted-foreground">#</th>
                      <th className="pb-3 font-medium text-muted-foreground">Tool</th>
                      <th className="pb-3 font-medium text-muted-foreground">Category</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Views</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Clicks</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">CTR</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Sessions</th>
                      <th className="pb-3 font-medium text-muted-foreground text-right">Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStats.map((stat, index) => {
                      const ctr = stat.total_views > 0 
                        ? ((stat.total_clicks / stat.total_views) * 100).toFixed(1)
                        : '0';
                      return (
                        <tr key={stat.tool_title} className="border-b border-border/50 hover:bg-muted/20">
                          <td className="py-3 text-muted-foreground">{index + 1}</td>
                          <td className="py-3 font-medium">{stat.tool_title}</td>
                          <td className="py-3 text-sm text-muted-foreground">
                            {stat.tool_category || 'Uncategorized'}
                          </td>
                          <td className="py-3 text-right">{stat.total_views.toLocaleString()}</td>
                          <td className="py-3 text-right text-green-500">{stat.total_clicks.toLocaleString()}</td>
                          <td className="py-3 text-right text-amber-500">{ctr}%</td>
                          <td className="py-3 text-right text-blue-500">{stat.unique_sessions}</td>
                          <td className="py-3 text-right text-sm text-muted-foreground">
                            {stat.last_interaction 
                              ? new Date(stat.last_interaction).toLocaleDateString()
                              : 'Never'}
                          </td>
                        </tr>
                      );
                    })}
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

export default AdminAnalytics;
