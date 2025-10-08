import { BookOpen, ExternalLink, Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { createTimePortalEffect } from "@/utils/timeEffects";

const BookPromotionCard = () => {
  const handleBuyBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🌀 Book purchase clicked - triggering time warp');
    createTimePortalEffect("https://www.amazon.com/Gospel-Deployable-Robots-Instructions-www-AiWebTools-Ai-ebook/dp/B0DT419F2W?dplnkId=21c79e26-79fa-4837-9c84-4aebe9053749", "Gospel of Deployable Robots Book");
  };

  const handleDownloadBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📥 Free book download clicked');
    createTimePortalEffect("https://docs.google.com/document/d/18LHLsPXIjjtZgIAaXry5IktOGm9lacTq/edit?usp=sharing&ouid=116187507271950139405&rtpof=true&sd=true", "Free Gospel of Deployable Robots Download");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Book Visual */}
              <div className="lg:w-1/3 p-8 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-64 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="p-4 text-center h-full flex flex-col justify-between">
                      <div>
                        <BookOpen className="text-white mx-auto mb-2" size={32} />
                        <h3 className="text-white font-bold text-lg leading-tight">The Gospel of</h3>
                        <h3 className="text-white font-bold text-xl leading-tight">Deployable Robots</h3>
                      </div>
                      <div className="text-white text-sm">
                        By AIWebTools.AI
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl -z-10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 p-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      The Gospel of Deployable Robots
                    </span>
                  </h2>
                  
                  <p className="text-purple-200 text-lg mb-4">
                    By <span className="text-cyan-400 font-semibold">AIWebTools.AI</span>
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-300">
                      <span className="text-cyan-400">🤖</span>
                      <span>Over 60 Deployable Robots & Key AI Insights</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-300">
                      <span className="text-cyan-400">⚡</span>
                      <span>Put you ahead of the game with cutting-edge AI</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-300">
                      <span className="text-cyan-400">📋</span>
                      <span>Copy & paste ready prompts for personal AI tool deployment</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleBuyBook}
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <BookOpen className="mr-2" size={20} />
                        📖 Buy on Amazon
                        <ExternalLink className="ml-2" size={16} />
                      </Button>

                      <Button
                        onClick={handleDownloadBook}
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-6 py-4 rounded-xl text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="mr-2" size={20} />
                        📥 Download Free Copy (DOCX)
                        <ExternalLink className="ml-2" size={16} />
                      </Button>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                        >
                          <Eye className="mr-2" size={20} />
                          👁️ View Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>Gospel of Deployable Robots - Preview</DialogTitle>
                        </DialogHeader>
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                          <iframe 
                            src="https://drive.google.com/file/d/18LHLsPXIjjtZgIAaXry5IktOGm9lacTq/preview" 
                            className="w-full flex-1 rounded-lg pointer-events-auto select-text"
                            allow="autoplay"
                            title="Gospel of Deployable Robots Preview"
                            style={{ userSelect: 'text' }}
                          />
                          <DialogClose asChild>
                            <Button
                              variant="outline"
                              size="lg"
                              className="bg-red-500/10 hover:bg-red-500/20 border-red-500 text-red-500 hover:text-red-600"
                            >
                              <X className="mr-2" size={20} />
                              Close Preview
                            </Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromotionCard;
