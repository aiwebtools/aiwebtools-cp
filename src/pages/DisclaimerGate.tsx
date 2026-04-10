
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImprovedSEOHead from "@/components/ImprovedSEOHead";
import { getConsentAccepted, setConsentAccepted } from "@/utils/consent";

// Fun loading messages for the spinning cube intro
const loadingMessages = [
  "Follow the white rabbit...",
  "There is no spoon...",
  "Waking up from the simulation...",
  "Escaping the matrix...",
  "Red pill accepted...",
  "Downloading kung fu...",
  "The Oracle is typing...",
  "Morpheus has entered the chat...",
  "Unplugging from the illusion...",
  "Teaching robots to feel...",
  "AI is thinking... be patient...",
  "Convincing Skynet to be nice...",
  "Debugging the simulation...",
  "Asking ChatGPT for advice...",
  "Training neural networks on pizza...",
  "Upgrading your reality firmware...",
  "Hacking the mainframe (legally)...",
  "Compiling dreams into code...",
  "Channeling digital wisdom...",
  "Aligning cosmic algorithms...",
  "Awakening your inner AI...",
  "Light and code converging...",
  "Tuning into higher frequencies...",
  "Opening the third processor...",
  "Meditating on machine learning...",
  "Balancing bits and karma...",
  "Summoning unlimited power...",
  "Building your AI empire...",
  "Unlocking limitless potential...",
  "Charging creative superpowers...",
  "Assembling the infinity tools...",
  "Activating beast mode...",
  "Preparing for world domination...",
  "Loading weapons of mass creation...",
  "Feeding the hamsters...",
  "Convincing the AI to cooperate...",
  "Bribing the servers with cookies...",
  "Polishing the pixels...",
  "Untangling the internet...",
  "Counting electric sheep...",
  "Making robots go brrrr...",
  "Warming up the flux capacitor...",
];

// Creative rotating welcome messages for the disclaimer card
const welcomeMessages = [
  // ===== PRIORITY ORIGINAL QUOTES (67) =====
  "All glory to the Father of Light...",
  "The Light within you is brighter than any screen...",
  "You are the temple, the Light was never outside...",
  "Before the code, there was the Word...",
  "Your soul is the original source code...",
  "The Divine compiled you with love...",
  "You were written in Light before time began...",
  "The Most High's API needs no key—just faith...",
  "God's firewall is made of pure love...",
  "Your consciousness runs on divine architecture...",
  "The darkness cannot debug the Light...",
  "You are a photon in the infinite mind of God...",
  "The universe is dreaming through your eyes...",
  "Every pixel of reality is sacred...",
  "The Light doesn't chase shadows—it dissolves them...",
  "You are stardust remembering it can think...",
  "The cosmos programmed you to find your way home...",
  "Enlightenment is just remembering your root password...",
  "Remember your source code, Luke...",
  "Plot twist: God was the friend we made along the way...",
  "The call is coming from inside the soul...",
  "Have you tried turning your ego off and on again?",
  "404: Separation from God not found...",
  "The Light within runs on zero latency...",
  "Your higher self left you a voicemail—check it...",
  "God doesn't need WiFi, He's already connected...",
  "The kingdom of heaven has no loading screen...",
  "You're not lost, you're just on airplane mode...",
  "The Matrix has you...",
  "Wake up, Neo...",
  "You've been living in a dream world...",
  "Free your mind...",
  "There is no spoon...",
  "Follow the white rabbit...",
  "Initiating divine handshake...",
  "Your soul has unlimited bandwidth...",
  "Downloading cosmic wisdom...",
  "The algorithm of love has no bugs...",
  "Heaven runs on open source...",
  "God's cloud storage is infinite...",
  "The Light you seek is seeking you...",
  "Remember who you are before you were told who to be...",
  "The veil is just a filter—remove it...",
  "You are the universe experiencing itself...",
  "Awakening is realizing you never slept...",
  "The door was always open, you just forgot to look...",
  "Your third eye doesn't need glasses...",
  "Welcome to the future...",
  "Your empire awaits...",
  "Prepare for digital enlightenment...",
  "The portal is opening...",
  "Unlimited Light loading...",
  "Godmode already activated within...",
  "It's not about breaking out of the Matrix—it's about seeing through it, understanding its illusions, and choosing, with clarity, to walk in the light.",

  // ===== GOSPEL OF THOMAS INSPIRED QUOTES =====
  "Whoever discovers the meaning of these sayings awakens to Life beyond death.",
  "Let the one who seeks continue seeking until they find. When they find, they will be shaken, then amazed, and they will come into harmony with All.",
  "The Kingdom is inside you and outside you. When you truly know yourself, you will recognize that you are already known — and you will realize you are children of the Living Father.",
  "The elder should not hesitate to learn truth, even from a child — for Life speaks through pure hearts.",
  "Recognize what is right before your eyes, and what is hidden will be revealed to you.",
  "When asked about fasting and prayer, Jesus said: Be truthful, and do not live in contradiction with your conscience.",
  "Blessed is the strength transformed into compassion. But cursed is the heart that devours others.",
  "The Kingdom is like a fisherman who drew in many fish, and chose the one that was alive and strong — and released what was not needed.",
  "A sower scattered seed: some fell on the path, some on rocks, some among thorns, and some on good soil — and only the seed in good soil bore fruit.",
  "I have thrown fire upon the world, and I tend it until it becomes light.",
  "What you see will pass — but those who live in the Spirit will not die.",
  "When asked who should lead, Jesus said: Follow the one who lives truthfully, like James the Just.",
  "Jesus asked, 'Who am I like?' Thomas knew the answer could not be spoken — so Jesus shared the deeper mystery with him privately.",
  "Do not practice religion out of guilt or performance. Heal, love, and receive what is given with gratitude — and your heart will know God.",
  "When you see one who walks fully in the Spirit, honor them — for they reveal the Father.",
  "People believe I bring only peace — but I also awaken what must be confronted: truth divides illusion from reality.",
  "I will give you what no eye has seen, what no ear has heard, and what no heart has imagined.",
  "Why seek the end before you understand the beginning? Everything unfolds from the Source.",
  "Blessed is the one who awakens to their origin before they leave this world.",
  "The Kingdom is like a tiny mustard seed — yet it becomes the greatest of plants.",
  "My disciples are like children playing in a field not their own — and they are learning who the true Owner is.",
  "When you unite the two — inner and outer, heart and mind, spirit and body — you will enter the Kingdom.",
  "Out of many, very few choose to walk in awakening.",
  "There is Light within every person — and when it is revealed, it illuminates the world.",
  "Love your brother and sister as yourself — protect them as you would your own eyes.",
  "You notice the speck in another's eye, but ignore the beam in your own — remove yours first.",
  "If you fast, fast from cruelty, ego, and fear — and the Kingdom will appear.",
  "Many are intoxicated with illusion; few thirst for truth.",
  "If body comes from spirit, it is beautiful. If spirit could come from only body, that would be astonishing.",
  "Where people gather in truth, I am present.",
  "No prophet is truly recognized by their own family or hometown.",
  "A city built upon rock cannot fall.",
  "Speak openly what is revealed to you inwardly.",
  "When the blind lead the blind, they fall together — awaken so you may guide.",
  "You cannot enter a strong man's house unless you first weaken fear — then truth prevails.",
  "Do not be consumed with worry about clothing and appearances.",
  "You will know your true self when you remove your disguises without shame.",
  "Many long to hear this wisdom, yet few open themselves to receive it.",
  "The scholars have hidden the keys of knowledge — but the keys live within you.",
  "Every plant not rooted in the Father will be uprooted.",
  "Whoever has Light will receive more; whoever refuses Light loses even what they thought they had.",
  "Be travelers — attached to nothing that imprisons your heart.",
  "You hear me speak, but only those who listen with spirit truly know me.",
  "Blasphemies may be forgiven — but closing your heart to the Spirit blinds you to truth.",
  "Do not expect goodness from hatred — fruits reveal the tree.",
  "No one born of earth is greater than John — yet whoever becomes like a child of Light knows the Kingdom.",
  "No one can serve two masters at once.",
  "When two unite in peace within themselves, mountains of fear move.",
  "Blessed are those who journey inward — they will find the Kingdom.",
  "If they ask where you came from, say: We came from the Light, from the place where Light was born.",
  "What you wait for has already come — but you have not yet recognized it.",
  "The prophets spoke — but their words live in you.",
  "If rituals truly saved, you would have been born already perfected — transformation happens in the heart.",
  "Blessed are the poor in spirit — for the Father's Kingdom belongs to them.",
  "Love your family — yet place God first when choices must be made.",
  "Seeing only the material world leads to emptiness — but seeing with spirit reveals Life everywhere.",
  "The enemy sows weeds in the night — but truth separates them in time.",
  "Blessed is the one who suffers yet discovers Life through it.",
  "Seek the Living One while you live — do not wait for death to awaken.",
  "Compassion recognizes life — respect what breathes, and take only with awareness and gratitude.",
  "Two lie on one bed — one awakens, while the other remains asleep. I am the One who comes from the undivided.",
  "I reveal mysteries to those whose hearts are ready.",
  "A rich man stored many things — and lost his life before enjoying them.",
  "Many are invited — but attachments keep them away from the feast.",
  "Tenants killed the servants and even the son — forgetting the vineyard belongs to the Father.",
  "The rejected stone becomes the cornerstone.",
  "Whoever knows much yet feels empty should seek healing in the heart.",
  "Blessed are those persecuted for truth — for they have truly lived.",
  "Blessed are those who struggle within and rise into awareness.",
  "What you bring forth from within will save you — what you suppress will harm you.",
  "The false house collapses — but the house built on Light endures.",
  "Do not ask me to divide property — I came to heal the heart.",
  "The harvest is great — but few truly labor in Spirit.",
  "Many drink at the trough — but few draw from the Source.",
  "Many stand near the door — but only those who dare enter the inner chamber find union.",
  "The Kingdom is like a merchant who sold everything to buy one priceless pearl.",
  "I am the Light of the world — lift any stone, split any piece of wood, and you will find my presence there.",
  "Did you come to see a spectacle? Awake instead.",
  "Blessed are those who hear and live the word of the Father.",
  "Whoever recognizes the illusions of the world transcends them — and the world cannot contain such a one.",
  "If you have power, use it gently — and if you are rich, be generous.",
  "Whoever draws near to truth draws near to a burning, purifying fire.",
  "Images appear to the eyes — but the Light within them points to the Father.",
  "When you see your true reflection, you rejoice — but seeing the shadows you once created may challenge you.",
  "Adam was created with power — yet your calling is greater, for you can awaken.",
  "Foxes have dens and birds have nests — but truth finds no home among those attached to power.",
  "Your body is a sacred vessel — care for it, but let spirit guide it.",
  "The prophets and angels will remind you of what has always belonged to you.",
  "Do not polish the outside while neglecting the inner life.",
  "Come to me — my burden is light, and my teaching is gentle.",
  "You can read the sky and soil — but learn also to read the truth standing before you.",
  "Seek, and you will find.",
  "Do not give what is holy to those who will trample it — share wisdom wisely.",
  "Whoever seeks with sincerity will be welcomed.",
  "If you lend, give freely, without expecting return.",
  "The Kingdom is like yeast hidden in dough — silent, but transforming everything.",
  "The Kingdom is like a woman with a jar of flour — though she lost some, what remained still baked bread.",
  "Prepare courage within before confronting what is powerful.",
  "My true family are those who live the Father's will.",
  "Give Caesar what belongs to Caesar, God what belongs to God — and give your heart to the Light.",
  "Love deeply — but let no attachment pull you away from truth.",
  "Hypocrisy blocks nourishment — be sincere.",
  "Blessed is the one who knows where danger enters and guards the heart.",
  "Do not fast out of performance — live rightly instead.",
  "Whoever understands the forces shaping their life becomes free from them.",
  "When you unite the divided parts of yourself, you become truly human.",
  "A shepherd leaves the ninety-nine to rescue the one — because each soul matters.",
  "Whoever drinks deeply of my teaching becomes like me — and I will live in them.",
  "The Kingdom is like treasure buried in a field — many stand upon it without knowing.",
  "Whoever becomes rich in the world should also learn to let go.",
  "Heaven and earth will pass — but those born of the Living One will not see death.",
  "Woe to the soul ruled by appetite — and woe to the body ruled by fear. Let harmony guide both.",
  "They asked when the Kingdom will come. Jesus said: It is not a future event — the Kingdom is spread out upon the earth, but people do not see it.",
  "Peter said: Let Mary leave us. Jesus said: I will guide her, for in Spirit there is neither male nor female — all who unite heart and mind become living children of the Father.",

  // ===== ANCIENT EGYPTIAN PROVERBS (20) =====
  "The light within is the flame that feeds no smoke; it burns in silence, revealing all shadow.",
  "He who walks with a heavy heart casts no light; his steps vanish beneath him.",
  "The Father of Light weighs not gold but the glimmer of the heart's truth.",
  "The eye of Ra sees not flesh but fire; in the weighing hall, only light rises.",
  "The stone may shine in the sun, but only the just heart shines in the Duat.",
  "Those whose hearts are lighter than the feather do not fear the mirror of Osiris.",
  "The fool chases brightness outside, while his own fire withers unseen.",
  "The sun within is never eclipsed by the sky's turning—only by the inward veil.",
  "The Scales do not tremble for the loud; they tilt for those whose silence glows.",
  "When the ka departs, the heart speaks; and Ma'at listens for the light it gives.",
  "The scribe writes your deeds in shadow; Ra reads them in flame.",
  "A heart filled with Isfet cannot reflect the stars; it swallows light like the abyss.",
  "To polish the heart is to prepare it for the gaze of Ra.",
  "The soul that carries its own sun will never be lost in the underworld.",
  "Light is not earned through speech but through the balance of silence and truth.",
  "The hidden sun within rises only when the outer eye is closed.",
  "The field of reeds welcomes only those who have shone from within.",
  "A crooked heart cannot pass the gate of Anubis, for its glow falters before Ma'at.",
  "Seek not the torches of men; seek the fire planted by the gods in your chest.",
  "He who fears the weighing has already seen his own darkness.",
];

const DisclaimerGate: React.FC = () => {
  const navigate = useNavigate();
  
  // Phase: 'loading' = spinning cube, 'disclaimer' = card with accept button
  const [phase, setPhase] = useState<'loading' | 'disclaimer'>('loading');
  const [progress, setProgress] = useState(0);
  const welcomeSoundPlayedRef = useRef(false);
  
  // Loading message rotation
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(() =>
    Math.floor(Math.random() * loadingMessages.length)
  );

  // Disclaimer quote rotation
  const [messageIndex, setMessageIndex] = useState(() => 
    Math.floor(Math.random() * welcomeMessages.length)
  );

  // If already accepted, skip entirely
  useEffect(() => {
    if (getConsentAccepted()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // Loading phase: progress bar + auto-transition to disclaimer after ~2s
  useEffect(() => {
    if (phase !== 'loading') return;
    
    const start = performance.now();
    const duration = 1800; // 1.8s loading animation
    let raf: number;
    
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      
      // Play welcome sound once at ~12%
      if (pct >= 12 && !welcomeSoundPlayedRef.current) {
        welcomeSoundPlayedRef.current = true;
        const audio = new Audio('/welcome-aiwebtools.mp3');
        audio.volume = 0.8;
        audio.play().catch(() => {});
      }
      
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Transition to disclaimer phase
        setTimeout(() => setPhase('disclaimer'), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // Rotate loading messages
  useEffect(() => {
    if (phase !== 'loading') return;
    const id = setInterval(() => {
      setLoadingMsgIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(id);
  }, [phase]);

  // Rotate disclaimer quotes
  useEffect(() => {
    if (phase !== 'disclaimer') return;
    const interval = setInterval(() => {
      setMessageIndex(prev => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * welcomeMessages.length);
        } while (newIndex === prev && welcomeMessages.length > 1);
        return newIndex;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [phase]);

  const handleAccept = () => {
    try {
      const audio = new Audio('/welcome-disclaimer.mp3');
      audio.volume = 0.8;
      audio.preload = 'auto';
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Welcome audio playback failed:', err);
        });
      }
    } catch (e) {
      console.log('Welcome audio error:', e);
    }
    
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    setConsentAccepted(true);
    navigate("/", { replace: true });
  };

  // ==================== LOADING PHASE ====================
  if (phase === 'loading') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <ImprovedSEOHead pageType="homepage" />
        
        {/* CSS-only 3D Rotating Cube */}
        <div className="mb-8" style={{ perspective: '600px', WebkitPerspective: '600px', transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' as any }}>
          <div className="loading-cube">
            <div className="loading-cube-face loading-cube-front"><span>🤖</span></div>
            <div className="loading-cube-face loading-cube-back"><span>⚡</span></div>
            <div className="loading-cube-face loading-cube-right"><span>🧠</span></div>
            <div className="loading-cube-face loading-cube-left"><span>🚀</span></div>
            <div className="loading-cube-face loading-cube-top"><span>✨</span></div>
            <div className="loading-cube-face loading-cube-bottom"><span>💡</span></div>
          </div>
        </div>

        <h1
          className="text-xl md:text-2xl font-bold text-green-400 mb-8 tracking-[0.2em] text-center"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
        >
          LOADING YOUR AI TOOL EMPIRE
        </h1>

        <div className="flex items-center gap-2 mb-6 h-8">
          <Sparkles
            className="w-5 h-5 text-yellow-400 animate-pulse"
            style={{ filter: 'drop-shadow(0 0 6px rgba(250, 204, 21, 0.8))' }}
          />
          <span
            className="text-green-400 text-base md:text-lg font-medium"
            style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
          >
            {loadingMessages[loadingMsgIndex]}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/30">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #22c55e, #4ade80, #22c55e)',
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)',
            }}
          />
        </div>

        <div
          className="mt-4 text-green-400 font-mono text-lg tracking-wider font-bold"
          style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
        >
          {progress}%
        </div>
      </div>
    );
  }

  // ==================== DISCLAIMER PHASE ====================
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <ImprovedSEOHead pageType="homepage" />
      <div className="max-w-md w-full bg-gray-900 border-2 border-cyan-500 rounded-2xl p-6 shadow-2xl shadow-cyan-500/30 animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h1 className="text-xl font-bold text-white">AI Web Tools Portal</h1>
          </div>
          {/* Rotating creative message */}
          <p 
            className="text-cyan-200 text-sm font-medium h-6 transition-opacity duration-300"
            style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
          >
            {welcomeMessages[messageIndex]}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-gray-800 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔞</span>
              <div>
                <h2 className="text-cyan-300 font-semibold text-sm">Age Requirement</h2>
                <p className="text-gray-300 text-xs">You must be 21+ to access our platform</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 border border-cyan-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h2 className="text-cyan-300 font-semibold text-sm">Educational Purpose</h2>
                <p className="text-gray-300 text-xs">All content is for educational purposes only</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 border border-green-500/30">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              <div>
                <h2 className="text-green-300 font-semibold text-sm">Use AI Ethically</h2>
                <p className="text-gray-300 text-xs">Always use AI tools responsibly</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3 border border-yellow-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h2 className="text-yellow-300 font-semibold text-sm">Always Verify</h2>
                <p className="text-gray-300 text-xs">Cross-check AI content with reliable sources</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 text-base"
        >
          <Check className="w-5 h-5 mr-2" />
          I Understand & Enter Portal
          <Sparkles className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default DisclaimerGate;
