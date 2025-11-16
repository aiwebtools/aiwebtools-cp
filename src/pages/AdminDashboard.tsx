import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Check, X, Eye, ExternalLink } from "lucide-react";
import { format } from "date-fns";

interface Submission {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  video_url: string | null;
  image_url: string | null;
  submitter_name: string | null;
  submitter_email: string;
  status: string;
  admin_notes: string | null;
  submitted_at: string;
  reviewed_at: string | null;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [adminNotes, setAdminNotes] = useState("");

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth?redirect=/admin");
        return;
      }

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .single();

      if (!roleData) {
        toast({
          title: "Access Denied",
          description: "You don't have admin permissions.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      fetchSubmissions();
    } catch (error) {
      console.error("Error checking admin status:", error);
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("tool_submissions")
      .select("*")
      .order("submitted_at", { ascending: false });

    if (error) {
      console.error("Error fetching submissions:", error);
      toast({
        title: "Error",
        description: "Failed to load submissions.",
        variant: "destructive",
      });
      return;
    }

    setSubmissions(data || []);
  };

  const handleReview = async (submissionId: string, status: "approved" | "rejected") => {
    const { data: { session } } = await supabase.auth.getSession();
    
    const { error } = await supabase
      .from("tool_submissions")
      .update({
        status,
        admin_notes: adminNotes,
        reviewed_at: new Date().toISOString(),
        reviewed_by: session?.user.id,
      })
      .eq("id", submissionId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update submission status.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: `Submission ${status}.`,
    });

    setSelectedSubmission(null);
    setAdminNotes("");
    fetchSubmissions();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const pendingCount = submissions.filter((s) => s.status === "pending").length;
  const approvedCount = submissions.filter((s) => s.status === "approved").length;
  const rejectedCount = submissions.filter((s) => s.status === "rejected").length;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Review and manage tool submissions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-500">{pendingCount}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-500">{approvedCount}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Rejected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">{rejectedCount}</p>
            </CardContent>
          </Card>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {submissions.map((submission) => (
            <Card key={submission.id} className={selectedSubmission?.id === submission.id ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{submission.name}</CardTitle>
                    <CardDescription>
                      {submission.submitter_name || "Anonymous"} ({submission.submitter_email})
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      submission.status === "pending"
                        ? "secondary"
                        : submission.status === "approved"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {submission.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Category: {submission.category}</p>
                  <p className="text-sm text-muted-foreground">{submission.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(submission.url, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Tool
                  </Button>
                  {submission.video_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(submission.video_url!, "_blank")}
                    >
                      <Eye className="mr-2 h-3 w-3" />
                      Video
                    </Button>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">
                  Submitted: {format(new Date(submission.submitted_at), "PPpp")}
                </p>

                {submission.status === "pending" && (
                  <div className="border-t pt-4 space-y-3">
                    {selectedSubmission?.id === submission.id ? (
                      <>
                        <Textarea
                          placeholder="Admin notes (optional)..."
                          value={adminNotes}
                          onChange={(e) => setAdminNotes(e.target.value)}
                          rows={3}
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleReview(submission.id, "approved")}
                            className="flex-1"
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleReview(submission.id, "rejected")}
                            variant="destructive"
                            className="flex-1"
                          >
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button
                            onClick={() => {
                              setSelectedSubmission(null);
                              setAdminNotes("");
                            }}
                            variant="outline"
                          >
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <Button
                        onClick={() => setSelectedSubmission(submission)}
                        variant="outline"
                        className="w-full"
                      >
                        Review This Submission
                      </Button>
                    )}
                  </div>
                )}

                {submission.admin_notes && (
                  <div className="border-t pt-3">
                    <p className="text-sm font-medium mb-1">Admin Notes:</p>
                    <p className="text-sm text-muted-foreground">{submission.admin_notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {submissions.length === 0 && (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No submissions yet.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
