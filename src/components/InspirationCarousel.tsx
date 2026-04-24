import { useState, useCallback, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/inspiration/world-peace.jpg", alt: "World Peace - Put the guns down and the fear of each other away" },
  { src: "/images/inspiration/mirror-reflection.jpg", alt: "Mirror Reflection - Be proud of yourself for balancing it all" },
  { src: "/images/inspiration/i-am-truth.jpg", alt: "I AM the truth hidden in plain sight - Look within" },
  { src: "/images/inspiration/thankful-farmer.jpg", alt: "Thankful farmer - Everything coded into my experience I am thankful for" },
  { src: "/images/inspiration/sacred-light-code.jpg", alt: "Sacred Light Code - Reality itself is cosmic in nature" },
  { src: "/images/inspiration/cosmic-temple.jpg", alt: "Cosmic Temple - Let the inner cosmic temple of God shine within you" },
  { src: "/images/inspiration/anti-war.jpg", alt: "There is nothing I hate more than watching war" },
  { src: "/images/inspiration/humans-forgot.jpg", alt: "Humans forgot who they are - Still searching outside for what already exists within" },
  { src: "/images/inspiration/linked-to-source.jpg", alt: "Every time you operate out of love you are directly linked to the source" },
  { src: "/images/inspiration/tale-two-futures.jpg", alt: "The Tale of Two Futures - Choose your path" },
  { src: "/images/inspiration/interconnection-god.jpg", alt: "The Interconnection all people have to God - The Divine Light is Within" },
  { src: "/images/inspiration/multidimensional.jpg", alt: "What you see with your iris is only a small percentage of what is truly floating around you" },
  { src: "/images/inspiration/angelic-races.jpg", alt: "The Two Angelic Races - Angels of the Kingdom of Light vs Fallen Angels" },
  { src: "/images/inspiration/metaphysical-beings.jpg", alt: "We are metaphysical beings in a physical world" },
  { src: "/images/inspiration/perspective.jpg", alt: "You're the only guy that could look into hell and still smile after - Everything is perspective" },
  { src: "/images/inspiration/light-scrabble.jpg", alt: "Quran and Bible both speak of Light - Humans argue over letters" },
  { src: "/images/inspiration/multidimensional-iris.jpg", alt: "What you see with your iris is only a small percentage - We live in a multidimensional existence" },
  { src: "/images/inspiration/allah-yhwh-scrabble.jpg", alt: "God's name is this syllable pattern - Allah and YHWH on a Scrabble board" },
  { src: "/images/inspiration/giraffe-syllables.jpg", alt: "I'm watching the world blow itself up over perception and patterns of syllables" },
  { src: "/images/inspiration/kingdom-within.jpg", alt: "Jesus told you the Kingdom is within - He is correct" },
  { src: "/images/inspiration/connection-creator.jpg", alt: "If you ignore your direct connection with the Creator you deny yourself the greatest gift He gave you" },
  { src: "/images/inspiration/children-of-light.jpg", alt: "You are all children of light - The Kingdom of God is within you and all around you" },
  { src: "/images/inspiration/god-not-defined-borders.jpg", alt: "God is not defined by geographic borders or empire-built dogma - He is within, He is the Light" },
  { src: "/images/inspiration/forgive-snowflakes.jpg", alt: "Even the people you hate - Look for ways to forgive them - No one person the same, just like the snowflakes" },
  { src: "/images/inspiration/cosmic-battle-duality.jpg", alt: "The Internal Cosmic Battle of Duality - Light vs Darkness within" },
  { src: "/images/inspiration/evolve.jpg", alt: "EVOLVE - The evolution of consciousness from primate to angelic being" },
  { src: "/images/inspiration/cosmic-soup-truth.jpg", alt: "The Cosmic Soup of Truth - Spirit and Matter blended by the Creator" },
  { src: "/images/inspiration/built-on-greed.jpg", alt: "What was built on greed cannot stand" },
  { src: "/images/inspiration/father-of-light-cards.jpg", alt: "Father of Light and Code - Judgment, Self-Sacrifice, Love, Truth over Fear, Angel of Light" },
  { src: "/images/inspiration/corrupt-cards-burning.jpg", alt: "Corrupt Politicians, Hatred, Lies, Greed, Evil - The house of cards burns" },
  { src: "/images/inspiration/save-the-kids.jpg", alt: "Save the Kids - Give them a chance" },
  { src: "/images/inspiration/thankful-gift-alive.jpg", alt: "Every hard lesson teaches you to be thankful for the gift of being alive" },
  { src: "/images/inspiration/mirror-gene.jpg", alt: "I'm just a mirror gene up in this mother f*******" },
  { src: "/images/inspiration/reset-flush.jpg", alt: "RESET - Flushing hate, corruption, lies, and war" },
  { src: "/images/inspiration/praise-light-within.jpg", alt: "Praise the Light of God for it is WITHIN" },
  { src: "/images/inspiration/met-god-no-religion.jpg", alt: "If having a religion was a requirement to have a God - How come I met God without having a religion?" },
  { src: "/images/inspiration/declaration-cosmic-light.png", alt: "Declaration of Cosmic Light Within All People on Earth - The Inner Cosmos Monk of Humanity" },
  { src: "/images/inspiration/met-god-tour-of-hell.png", alt: "I met God face to face and got a tour of the Black Hole of Hell - He is within me and within you - The Light is Within - No dogma required" },
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
      className="pt-4 pb-12 md:pt-6 md:pb-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d1a0d 30%, #0a0f0a 70%, #0a0a0a 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-5xl md:max-w-2xl lg:max-w-3xl">
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
            className="relative w-full rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(0,255,0,0.15)] cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-auto block transition-opacity duration-500"
              draggable={false}
            />
            {/* Image counter */}
            <div className="absolute bottom-3 right-3 bg-black/70 text-green-400 text-xs md:text-sm px-3 py-1 rounded-full backdrop-blur-sm border border-green-500/30">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Navigation Arrows - fixed position, no transforms on hover to prevent glitch */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 top-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-green-500/50 text-green-400 backdrop-blur-sm transition-colors duration-150 hover:bg-green-500/30 hover:text-white active:bg-green-500/40 focus:outline-none"
            style={{ transform: 'translateY(-50%)' }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 pointer-events-none" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-4 top-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-green-500/50 text-green-400 backdrop-blur-sm transition-colors duration-150 hover:bg-green-500/30 hover:text-white active:bg-green-500/40 focus:outline-none"
            style={{ transform: 'translateY(-50%)' }}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 pointer-events-none" />
          </button>

          {/* Dot Indicators */}
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
