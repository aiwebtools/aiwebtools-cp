import { useState, useCallback, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import worldPeace from "@/assets/inspiration-carousel/world-peace.jpg";
import mirrorReflection from "@/assets/inspiration-carousel/mirror-reflection.jpg";
import iAmTruth from "@/assets/inspiration-carousel/i-am-truth.jpg";
import thankfulFarmer from "@/assets/inspiration-carousel/thankful-farmer.jpg";
import sacredLightCode from "@/assets/inspiration-carousel/sacred-light-code.jpg";
import cosmicTemple from "@/assets/inspiration-carousel/cosmic-temple.jpg";
import antiWar from "@/assets/inspiration-carousel/anti-war.jpg";
import humansForgot from "@/assets/inspiration-carousel/humans-forgot.jpg";
import linkedToSource from "@/assets/inspiration-carousel/linked-to-source.jpg";
import taleTwoFutures from "@/assets/inspiration-carousel/tale-two-futures.jpg";
import interconnectionGod from "@/assets/inspiration-carousel/interconnection-god.jpg";
import multidimensional from "@/assets/inspiration-carousel/multidimensional.jpg";
import angelicRaces from "@/assets/inspiration-carousel/angelic-races.jpg";
import metaphysicalBeings from "@/assets/inspiration-carousel/metaphysical-beings.jpg";
import perspective from "@/assets/inspiration-carousel/perspective.jpg";
import lightScrabble from "@/assets/inspiration-carousel/light-scrabble.jpg";

const images = [
  { src: worldPeace, alt: "World Peace - Put the guns down and the fear of each other away" },
  { src: mirrorReflection, alt: "Mirror Reflection - Be proud of yourself for balancing it all" },
  { src: iAmTruth, alt: "I AM the truth hidden in plain sight - Look within" },
  { src: thankfulFarmer, alt: "Thankful farmer - Everything coded into my experience I am thankful for" },
  { src: sacredLightCode, alt: "Sacred Light Code - Reality itself is cosmic in nature" },
  { src: cosmicTemple, alt: "Cosmic Temple - Let the inner cosmic temple of God shine within you" },
  { src: antiWar, alt: "There is nothing I hate more than watching war" },
  { src: humansForgot, alt: "Humans forgot who they are - Still searching outside for what already exists within" },
  { src: linkedToSource, alt: "Every time you operate out of love you are directly linked to the source" },
  { src: taleTwoFutures, alt: "The Tale of Two Futures - Choose your path" },
  { src: interconnectionGod, alt: "The Interconnection all people have to God - The Divine Light is Within" },
  { src: multidimensional, alt: "What you see with your iris is only a small percentage of what is truly floating around you" },
  { src: angelicRaces, alt: "The Two Angelic Races - Angels of the Kingdom of Light vs Fallen Angels" },
  { src: metaphysicalBeings, alt: "We are metaphysical beings in a physical world" },
  { src: perspective, alt: "You're the only guy that could look into hell and still smile after - Everything is perspective" },
  { src: lightScrabble, alt: "Quran and Bible both speak of Light - Humans argue over letters" },
];

const InspirationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) scrollNext();
      else scrollPrev();
    }
    touchStartX.current = null;
  };

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
            className="text-base md:text-2xl italic text-green-200 font-light leading-relaxed max-w-3xl mx-auto mb-4"
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
          {/* Image Display with swipe support */}
          <div
            className="relative w-full aspect-video rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(0,255,0,0.15)] cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
              draggable={false}
            />
            {/* Image counter */}
            <div className="absolute bottom-3 right-3 bg-black/70 text-green-400 text-xs md:text-sm px-3 py-1 rounded-full backdrop-blur-sm border border-green-500/30">
              {currentIndex + 1} / {images.length}
            </div>
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

          {/* Dot Indicators - scrollable on mobile */}
          <div className="flex justify-center gap-1.5 mt-4 overflow-x-auto px-4 pb-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
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
