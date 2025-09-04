import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, Search, Download } from "lucide-react";
import { allTools } from "@/data/toolsData";

interface FooterActionsProps {
  handleExternalLink: (url: string, e: React.MouseEvent) => void;
  handleSubmitTool: () => void;
  handleRequestTool: () => void;
}

const FooterActions = ({ handleExternalLink, handleSubmitTool, handleRequestTool }: FooterActionsProps) => {
  const handleViewAllTools = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/main-category/ALL%20AI%20TOOLS';
  };

  const handleViewPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    handleExternalLink('https://www.aitools.company', e);
  };

  // Complete CSV download with all tools from our database
  const handleDownloadAIList = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      console.log(`📊 Generating complete CSV with ${allTools.length} tools...`);
      
      const headers = [
        "Title", 
        "Category", 
        "URL", 
        "Description", 
        "Emoji", 
        "Tags", 
        "Rating", 
        "Total Votes",
        "Color Scheme",
        "Pricing"
      ];
      
      const rows = allTools.map((tool) => [
        tool.title || "",
        tool.category || "",
        tool.directUrl || "",
        tool.description || "",
        tool.emoji || "",
        (tool.tags || []).join("; "),
        tool.rating?.toString() || "",
        tool.totalVotes?.toString() || "",
        tool.color || "",
        (tool.tags || []).find(tag => 
          tag.toLowerCase().includes('free') || 
          tag.toLowerCase().includes('premium') || 
          tag.toLowerCase().includes('freemium')
        ) || "Not specified"
      ]);
      
      const escapeCSV = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;
      const csv = [headers, ...rows]
        .map((r) => r.map((c) => escapeCSV(String(c))).join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai-tools-complete-database-${allTools.length}-tools-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log(`✅ CSV download complete! ${allTools.length} tools exported from complete database`);
    } catch (err) {
      console.error("Failed to generate CSV:", err);
      // Fallback to external link if CSV generation fails
      handleExternalLink('https://docs.google.com/document/d/e/2PACX-1vQW1HCKPrEDguchQct7UnoxPg-DW84Q6fKWFbF7IIygEPaNJnQn-N0h8yVD_FzxZg/pub', e);
    }
  };

  return (
    <div className="text-center mb-16">
      <h3 className="text-2xl font-bold text-cyan-300 mb-6 cyber-glow">
        🚀 Discover More AI Tools
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-5xl mx-auto">
        <Button
          onClick={handleDownloadAIList}
          variant="gold"
          size="lg"
          className="w-full sm:w-auto sm:min-w-[240px] px-8 sm:px-10 leading-snug"
        >
          <Download className="mr-2 h-5 w-5" />
          DOWNLOAD {allTools.length}+ AI TOOLS (FREE CSV)
        </Button>
        
        <Button
          onClick={handleViewAllTools}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <Search className="mr-2 h-5 w-5" />
          VIEW ALL AI TOOLS
        </Button>
        
        <Button
          onClick={handleViewPortfolio}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-yellow-500 text-yellow-300 hover:bg-yellow-500/20 hover:text-white transition-all duration-300 sm:min-w-[280px] px-8 sm:px-10 leading-snug"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          VIEW AI WEB TOOLS PERSONAL PORTFOLIO
        </Button>
        
        <Button
          onClick={handleSubmitTool}
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto border-green-500 text-green-300 hover:bg-green-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <Plus className="mr-2 h-5 w-5" />
          SUBMIT YOUR TOOL
        </Button>
        
        <Button
          onClick={handleRequestTool}
          variant="outline"
          size="lg" 
          className="w-full sm:w-auto border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all duration-300 sm:min-w-[240px] px-8 sm:px-10 leading-snug sm:whitespace-nowrap"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          REQUEST CUSTOM TOOL
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;
