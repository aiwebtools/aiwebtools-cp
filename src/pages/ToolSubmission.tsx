import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Send } from "lucide-react";

const categories = [
  "Education",
  "Productivity",
  "Creative",
  "Business",
  "Developer",
  "Research",
  "Healthcare",
  "Entertainment",
  "Communication",
  "Other",
];

const ToolSubmission = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    category: "",
    videoUrl: "",
    imageUrl: "",
    submitterName: "",
    submitterEmail: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.description || !formData.url || !formData.category || !formData.submitterEmail) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Call edge function to send email
      const { error } = await supabase.functions.invoke("submit-tool", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Submission Successful!",
        description: "Thank you for your submission. We'll review it and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        description: "",
        url: "",
        category: "",
        videoUrl: "",
        imageUrl: "",
        submitterName: "",
        submitterEmail: "",
      });

      // Navigate back after a delay
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error submitting tool:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your tool. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Directory
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Submit Your AI Tool</CardTitle>
            <CardDescription>
              Share your AI tool with the community. All submissions are reviewed before being added to the directory.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Submitter Information */}
              <div className="space-y-4 border-b pb-6">
                <h3 className="text-lg font-semibold">Your Information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="submitterName">Your Name (Optional)</Label>
                    <Input
                      id="submitterName"
                      value={formData.submitterName}
                      onChange={(e) =>
                        setFormData({ ...formData, submitterName: e.target.value })
                      }
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="submitterEmail">Your Email *</Label>
                    <Input
                      id="submitterEmail"
                      type="email"
                      required
                      value={formData.submitterEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, submitterEmail: e.target.value })
                      }
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Tool Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tool Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Tool Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="My Awesome AI Tool"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Tool Description *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Describe what your tool does, who it's for, and what problems it solves..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="url">Tool URL *</Label>
                  <Input
                    id="url"
                    type="url"
                    required
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                    placeholder="https://yourtool.com/?via=aiwebtools"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="videoUrl">YouTube Demo Video URL (Optional)</Label>
                  <Input
                    id="videoUrl"
                    type="url"
                    value={formData.videoUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, videoUrl: e.target.value })
                    }
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Tool Image URL (Optional)</Label>
                  <Input
                    id="imageUrl"
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="https://example.com/image.png"
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Tool for Review
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            By submitting, you agree to our{" "}
            <button
              onClick={() => navigate("/disclaimers")}
              className="underline hover:text-foreground"
            >
              guidelines and terms
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolSubmission;
