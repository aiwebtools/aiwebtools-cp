import { useState, useEffect, memo } from "react";

const funnyQuotes = [
  "Wow, so AI tools just do that now, huh? 🤯",
  "Holy cow, things just got a bit weird... groovy 🐄",
  "Wake up, Neo... the AI has you 🐇",
  "I, for one, welcome our new AI overlords 🤖",
  "Plot twist: the AI wrote this quote too 📝",
  "Skynet called, they want their tech back ☎️",
  "My brain just blue-screened looking at these tools 💻",
  "404: Human productivity not found 🔍",
  "Ctrl+Z won't save you from this rabbit hole 🕳️",
  "Warning: May cause excessive 'whoa' moments ⚠️",
  "This is fine. Everything is fine. 🔥🐕",
  "Your future self will thank you... or fear you 🔮",
  "Resistance is futile. Embrace the AI. 🖖",
  "I used to have hobbies. Then I found AI tools. 🎮",
  "My therapist says I have too many browser tabs open 📑",
  "Error 418: I'm a teapot, but AI isn't ☕",
  "Did I just spend 4 hours 'testing' AI tools? Yes. Yes I did. ⏰",
  "My productivity went up, then sideways, then into orbit 🚀",
  "Alexa, show me the future... wait, wrong AI 🗣️",
  "In a world of AI, be a human who uses AI 🌍",
  "They said robots would take our jobs. They didn't say they'd be this cool 😎",
  "I'm not procrastinating, I'm researching AI tools 📚",
  "My computer is now smarter than me. That's fine. Totally fine. 🙃",
  "AI: Making the impossible slightly less impossible since 2023 ✨",
  "Beep boop, your productivity just went zoom 🏎️",
  "Caution: AI tools may cause sudden bursts of creativity 💡",
  "Have you tried turning it off and asking ChatGPT? 🔌",
  "I came for one tool. I stayed for 47. Send help. 🆘",
  "My workflow before AI vs after: ⬇️ chaos ➡️ organized chaos 📊",
  "Is this magic? No, it's technology. Same thing, basically. 🪄",
  "Instructions unclear, accidentally built a startup 🏢",
  "When life gives you bugs, find an AI to squash them 🐛",
  "These tools are so good, even my imposter syndrome is impressed 🎭",
  "I asked AI for help, now I question reality 🤔",
  "Friendly reminder: AI can't make your coffee... yet ☕",
  "My brain: 'Just one more AI tool.' Narrator: It was not just one. 📖",
  "Plot twist: You're the AI all along... just kidding. Or am I? 👀",
  "AI tools: Because sleep is overrated anyway 😴",
  "Spicy take: The future is now, and it's weirdly accessible 🌶️",
  "Hold onto your neural networks, things are about to get interesting 🧠",
  "Warning: Side effects include productivity and existential questions ⚡",
  "The robots are friendly! ...for now 🤝",
  "Achievement unlocked: Discovered the AI rabbit hole 🏆",
  "Press F to pay respects to your old workflow ⌨️",
  "I'm not addicted to AI tools. I can stop anytime. *bookmarks 5 more* 📌",
  "Meanwhile, in the multiverse of AI tools... 🌌",
  "Your grandkids will never believe how we used to work 👴",
  "Loading creativity... please wait... or use AI 🔄",
  "Breaking news: Human discovers tools, productivity ensues 📰",
  "This is either the best idea or the weirdest. Possibly both. 🎲",
  "May your prompts be clear and your outputs be fire 🔥",
  "AI tools: Because 'figure it out yourself' is so 2019 📅",
  "Not all heroes wear capes. Some are literally algorithms. 🦸",
  "Spoiler alert: You're going to love this 🎬",
  "Current mood: Robot appreciator 🤗",
  "If AI can dream, I hope it dreams of electric sheep 🐑",
  "Fun fact: This tool probably has more skills than my resume 📋",
  "You didn't choose the AI life. The AI life chose you. 😤",
  "Pro tip: Don't fight the future. High-five it instead 🙌",
  "Welcome to the party, pal. We have cookies and AI. 🍪",
  "My spirit animal is now an AI assistant 🦄",
  "When in doubt, automate it out 🔧",
  "Abandon all productivity guilt, ye who enter here ⛪",
  "AI is not the answer. Wait, actually sometimes it is. 💬",
  "Roses are red, violets are blue, AI wrote this poem, and the next one too 🌹",
  "This is your brain. This is your brain on AI tools. Any questions? 🍳",
  "Coming soon to a workflow near you: actual free time ⏳",
  "Less typing, more vibing 🎵",
  "Did someone order a paradigm shift? 📦",
  "Making science fiction look adorably optimistic since 2024 🛸",
  "Trust the process. The process is now automated. 🔄",
  "Your keyboard called. It misses you. (Just kidding, AI's got this) ⌨️",
  "Live. Laugh. Let AI handle the boring stuff. 😂",
  "Expectation: Robot butler. Reality: Still cool. 🧹",
  "Warning: Objects in AI are more capable than they appear 🪞",
  "The cake is a lie, but these AI tools are real 🍰",
  "Current status: Vibing with the singularity 🌈",
  "Remember when we thought flying cars would be the future? This is better. 🚗",
  "Somewhere, a sci-fi writer is muttering 'I told you so' 📖",
  "One does not simply explore AI tools... one falls in love 💕",
  "Keep calm and let the AI do its thing 👑",
  "We're not in Kansas anymore, Toto. We're in the cloud. ☁️",
  "I was today years old when I realized AI is wild 🎂",
  "AI: The cheat code nobody told you about 🎮",
  "Fact: 99% of people who try AI tools don't go back 📈",
  "My to-do list just got a lot shorter. Thank you, robots. 📝",
  "Imagine explaining this to someone from 1990 🕰️",
  "The future called. It said 'You're welcome.' 📞",
  "Brain.exe has been upgraded 🧠",
  "They laughed when I said AI would help. They're not laughing now. 😏",
  "This must be what discovering fire felt like 🔥",
  "PSA: It's not cheating if it's publicly available AI 🤫",
  "Today's forecast: 100% chance of mind-blowing tools 🌤️",
  "Insert clever AI joke here. Actually, AI already did. 🃏",
  "Mom: What did you do today? Me: ...things. AI things. 👩",
  "Once you go AI, you never go... back to doing things manually 🔙",
  "Therapy is expensive. AI tools are free to explore. 💆",
  "Plot armor activated: You found the good tools 🛡️",
  "Ancient proverb: Give a man a fish... or just show him Fish GPT 🐟",
  "Conclusion: Humans + AI = Unstoppable 💪",
];

const FunnyQuotesRotator = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(() => 
    Math.floor(Math.random() * funnyQuotes.length)
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % funnyQuotes.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 flex items-center justify-center overflow-hidden">
      <p
        className={`text-sm text-muted-foreground/70 italic text-center transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {funnyQuotes[currentIndex]}
      </p>
    </div>
  );
});

FunnyQuotesRotator.displayName = "FunnyQuotesRotator";

export default FunnyQuotesRotator;
