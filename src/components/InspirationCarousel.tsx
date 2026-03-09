import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import worldPeace from "@/assets/inspiration-carousel/world-peace.jpg";
import mirrorReflection from "@/assets/inspiration-carousel/mirror-reflection.jpg";
import iAmTruth from "@/assets/inspiration-carousel/i-am-truth.jpg";
import thankfulFarmer from "@/assets/inspiration-carousel/thankful-farmer.jpg";
import sacredLightCode from "@/assets/inspiration-carousel/sacred-light-code.jpg";
import cosmicTemple from "@/assets/inspiration-carousel/cosmic-temple.jpg";

const images = [
  { src: worldPeace, alt: "World Peace - Put the guns down and the fear of each other away" },
  { src: mirrorReflection, alt: "Mirror Reflection - Be proud of yourself for balancing it all" },
  { src: iAmTruth, alt: "I AM the truth hidden in plain sight - Look within" },
  { src: thankfulFarmer, alt: "Thankful farmer - Everything coded into my experience I am thankful for" },
  { src: sacredLightCode, alt: "Sacred Light Code - Reality itself is cosmic in nature" },
  { src: cosmicTemple, alt: "Cosmic Temple - Let the inner cosmic temple of God shine within you" },
];

const InspirationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d1a0d 30%, #0a0f0a 70%, #0a0a0a 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Quote Section */}
        <div className="text-center mb-8 md:mb-10">
          <p
            className="text-lg md:text-2xl italic text-green-200 font-light leading-relaxed max-w-3xl mx-auto mb-4"
            style={{ textShadow: "0 0 15px rgba(0, 255, 0, 0.2)" }}
          >
            "The unknown future rolls toward us. I face it for the first time with a sense of hope.
            Because if a machine, a Terminator, can learn the value of human life… maybe we can too."
          </p>
          <p className="text-sm md:text-base text-green-400/70 font-semibold tracking-wider uppercase">
            — Sarah Connor, Terminator 2: Judgment Day
          </p>
          <p
            className="text-xl md:text-3xl font-bold text-green-300 mt-4"
            style={{ textShadow: "0 0 25px rgba(0, 255, 0, 0.5)" }}
          >
            "There is no fate but what we make for ourselves."
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Image Display */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(0,255,0,0.15)]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 border-green-500/50 text-green-400 hover:bg-green-500/20 hover:text-white backdrop-blur-sm z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 border-green-500/50 text-green-400 hover:bg-green-500/20 hover:text-white backdrop-blur-sm z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-green-400 shadow-[0_0_8px_rgba(0,255,0,0.6)] scale-125"
                    : "bg-green-800/50 hover:bg-green-600/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationCarousel;
