import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Tool } from "@/types/tools";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: Tool;
}

const FeedbackModal = ({ isOpen, onClose, tool }: FeedbackModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "general",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          toolName: tool.title,
          toolUrl: tool.directUrl,
          toolCategory: tool.category
        }),
      });

      if (response.ok) {
        toast.success("Feedback sent successfully! Thank you for your input.");
        onClose();
        setFormData({ name: "", email: "", feedbackType: "general", message: "" });
      } else {
        throw new Error('Failed to send feedback');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      toast.error("Failed to send feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Pre-fill message template based on feedback type
  const getMessageTemplate = (type: string) => {
    switch (type) {
      case "bug":
        return `I found a bug in ${tool.title}:

Steps to reproduce:
1. 
2. 
3. 

Expected behavior:
[What should happen]

Actual behavior:
[What actually happens]

Additional details:
[Any other relevant information]`;

      case "feature":
        return `I have a feature request for ${tool.title}:

Feature description:
[Describe the feature you'd like to see]

Use case:
[Explain how this would help you]

Additional details:
[Any other relevant information]`;

      case "improvement":
        return `I have suggestions to improve ${tool.title}:

Current experience:
[Describe current experience]

Suggested improvements:
[What could be better]

Additional details:
[Any other relevant information]`;

      default:
        return `I'd like to share feedback about ${tool.title}:

My feedback:
[Please share your thoughts, suggestions, or questions here]

Additional details:
[Any other relevant information]`;
    }
  };

  React.useEffect(() => {
    if (isOpen && formData.message === "") {
      setFormData(prev => ({
        ...prev,
        message: getMessageTemplate(prev.feedbackType)
      }));
    }
  }, [isOpen, formData.feedbackType, tool.title]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-900 text-white border border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cyan-400">
            Send Feedback - {tool.title}
          </DialogTitle>
          <p className="text-gray-300">
            Share your thoughts, report bugs, or suggest improvements for this AI tool.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-cyan-300">Your Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-cyan-300">Your Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="feedbackType" className="text-cyan-300">Feedback Type</Label>
            <select
              id="feedbackType"
              value={formData.feedbackType}
              onChange={(e) => {
                handleInputChange("feedbackType", e.target.value);
                handleInputChange("message", getMessageTemplate(e.target.value));
              }}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
            >
              <option value="general">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement Suggestion</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-cyan-300">Your Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={10}
              className="bg-gray-800 border-gray-600 text-white resize-none"
              required
            />
          </div>

          <div className="text-sm text-gray-400 bg-gray-800 p-3 rounded-md">
            <strong>Tool Details:</strong><br />
            Name: {tool.title}<br />
            Category: {tool.category}<br />
            URL: {tool.directUrl}
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;