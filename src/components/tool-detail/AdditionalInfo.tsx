
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdditionalInfo = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-gray-900/80 backdrop-blur-md shadow-lg border border-cyan-500/30 neon-border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
            How to Get Started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-gray-300">
            <p>1. Click the "USE IT NOW" button above</p>
            <p>2. Follow the tool's setup instructions</p>
            <p>3. Start exploring the AI capabilities</p>
            <p>4. Experiment with different features and settings</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900/80 backdrop-blur-md shadow-lg border border-cyan-500/30 neon-border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cyber-glow">
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-gray-300">
            <p>• Be specific and clear in your requests</p>
            <p>• Experiment with different prompt styles</p>
            <p>• Save successful configurations for future use</p>
            <p>• Explore advanced features gradually</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalInfo;
