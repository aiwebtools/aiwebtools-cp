
const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div className="space-y-4">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-cyan-100">Popular Tools</h4>
          <ul className="space-y-2 text-cyan-300">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Book Writer GPT</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Movie Script Writer</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Time Machine GPT</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">College Degree GPT</a></li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-cyan-100">Tool Suites</h4>
        <ul className="space-y-2 text-cyan-300">
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Movie Maker Studio</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">StageMaster AI</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">ImmortalizeMe™</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">GodMode GPT</a></li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-cyan-100">Resources</h4>
        <ul className="space-y-2 text-cyan-300">
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Free AI Tools List</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Open Source Prompts</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Domain Services</a></li>
          <li><a href="#" className="hover:text-cyan-400 transition-colors">Support</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
