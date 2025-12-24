import { useState, useEffect, memo } from "react";

const funnyQuotes = [
  // Original classics
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

  // Pop culture references
  "I am Groot... but make it artificial intelligence 🌳",
  "With great AI comes great responsibility 🕷️",
  "To infinity and beyond! ...said the token limit 🚀",
  "You shall not pass... without trying these tools first 🧙",
  "May the prompts be ever in your favor 🏹",
  "I'll be back... to bookmark more AI tools 🤖",
  "Winter is coming, but AI tools are already here ❄️",
  "It's dangerous to go alone! Take this AI. 🗡️",
  "Hasta la vista, manual labor 👋",
  "Luke, I am your AI assistant 🌑",
  "Clever girl... *looks at AI output* 🦖",
  "You're a wizard, Harry. No wait, that's just ChatGPT. 🪄",
  "Nobody puts AI in the corner 💃",
  "Here's looking at you, algorithm 🎩",
  "Houston, we have... surprisingly few problems with AI 🌙",
  "Elementary, my dear Watson... literally, it's IBM Watson 🔍",
  "I see dead workflows. They don't know they're dead yet. 👻",
  "What we do in AI echoes in eternity ⚔️",
  "You had me at 'hello world' 💻",
  "Life finds a way... especially with AI tools 🦕",
  "Frankly my dear, I don't give a damn about doing things manually 💨",
  "After all, tomorrow is another prompt 🌅",
  "Say hello to my little friend: GPT 🔫",
  "There's no place like the cloud ☁️🏠",
  "ET phone home... using AI voice synthesis 👽",
  "You can't handle the truth! But AI can process it. ⚖️",
  "Shaken, not stirred. Unlike my productivity after finding AI. 🍸",

  // Tech jokes & AI puns
  "Why did the AI break up with the algorithm? Too many issues. 💔",
  "I told my computer a joke. It computed. 😐",
  "AI walked into a bar. The bartender said 'Why the neural face?' 🍺",
  "What's an AI's favorite band? The Machine Heads 🎸",
  "Why was the AI so good at music? It had great algo-rhythm 🎵",
  "Parallel processing: when AI thinks about lunch AND work 🍔",
  "What do you call an AI that sings? Algo-rhythm and blues 🎤",
  "I asked the AI for a joke. It said 'Your productivity before me.' 😂",
  "How does AI stay cool? It has lots of fans... and cloud computing ❄️",
  "Why did the prompt engineer get promoted? They had excellent communication skills 📈",
  "What's an AI's favorite snack? Microchips 🍟",
  "My AI has a great personality. It's very bit-ty. 🔢",
  "Why are AI developers never lonely? They always have a BERT to talk to 🐦",
  "What did the GPU say to the CPU? You're running hot today! 🌡️",
  "Debugging: The art of removing bugs you put there while removing other bugs 🪲",
  "There are 10 types of people: those who understand binary, and those who don't 🔟",
  "A SQL query walks into a bar, walks up to two tables and asks 'Can I join you?' 🪑",
  "Why do programmers prefer dark mode? Light attracts bugs 🌙",
  "In case of fire: git commit, git push, leave building 🔥",
  "It works on my machine... ships machine 📦",
  "99 little bugs in the code, 99 little bugs... patch one down... 127 bugs in the code 🐛",
  "AI doesn't make mistakes. It has unexpected learning opportunities 📚",
  "What's an AI's love language? Python 🐍❤️",
  "Roses are #FF0000, violets are #0000FF, AI writes poems, better than me or you 🌹",

  // Creator met God / Light references
  "Did you know? The creator of this site met God... and He was Light ✨",
  "Fun fact: Our founder saw the Light. Literally. It was divine. 💡",
  "True story: The creator met God. Spoiler: God is pure Light 🌟",
  "Plot twist: The guy who made this actually met the Divine Light 🔆",
  "Behind every great website is someone who touched the infinite Light ☀️",
  "The vision was clear: God appeared as Light. This site followed. ✴️",
  "Our creator's testimony: 'I met God. He was radiant Light.' 🌈",
  "Some people find inspiration. Our creator found the Source of all Light 💫",
  "When you meet the Light, you build different. Trust. 🏗️",
  "From darkness to Light: the origin story of AI Web Tools ⚡",

  // Philosophical inner light quotes
  "The light within you is brighter than any screen 💡",
  "Be the light you wish to see in the algorithm ✨",
  "Your inner light needs no API key 🔑",
  "The greatest AI is the awareness within you 🧘",
  "Technology illuminates the world, but wisdom illuminates the soul 🕯️",
  "The light that shines farthest shines brightest at home 🏠",
  "In the age of AI, don't forget the intelligence within 🧠",
  "The universe is not outside of you. Look inside yourself. 🌌",
  "You are not a drop in the ocean. You are the entire ocean in a drop. 🌊",
  "The only way out is through... and sometimes AI helps 🚪",
  "Know thyself. Then know thy AI tools. 📿",
  "What you seek is seeking you... probably via algorithm 🔍",
  "The mind is everything. What you think, you prompt. 💭",
  "Be still and know. Also, be still and let AI do the work. 🧘‍♀️",
  "The light inside you is the same light that powers the stars ⭐",
  "Consciousness is the greatest technology of all 🌀",
  "Before enlightenment: chop wood, carry water. After: use AI tools. 🪵",
  "The teacher appears when the student is ready. Today, that teacher is AI. 👨‍🏫",
  "Seek not outside yourself. Heaven is within... and on the cloud. ☁️",
  "The candle does not lose its light by lighting another 🕯️",
  "You are the universe experiencing itself... with really cool tools 🌠",
  "As above, so below. As within, so without. As AI, so productivity. ⚖️",
  "The present moment is the only moment available to us. Use it wisely. 🎁",
  "Let your light shine so brightly that others can see their way out of the dark 🔦",
  "We are all made of stardust and code ✨💻",
  "The wound is the place where the Light enters you. - Rumi 🌹",
  "What lies behind us and before us are tiny matters to what lies within us 💎",
  "The soul always knows what to do. Sometimes it just needs AI to help. 🦋",
  "In the middle of difficulty lies opportunity... and an AI tool for that 🎯",
  "The light you seek outside is a reflection of the light within 🪞",
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
