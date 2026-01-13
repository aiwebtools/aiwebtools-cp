import { useState, useEffect, memo, useRef } from "react";

const funnyQuotes = [
  // Original classics
  "Wow, so AI tools just do that now, huh? 🤯",
  "Holy cow, things just got a bit weird... groovy 🐄",
  "Wake up, Neo... the AI has you 🐇",
  "Plot twist: the AI wrote this quote too 📝",
  "My brain just blue-screened looking at these tools 💻",
  "404: Human productivity not found 🔍",
  "Ctrl+Z won't save you from this rabbit hole 🕳️",
  "Warning: May cause excessive 'whoa' moments ⚠️",
  "This is fine. Everything is fine. 🔥🐕",
  "Your future self will thank you... or fear you 🔮",
  "Curiosity led you here. Wisdom will keep you exploring. 🖖",
  "I used to have hobbies. Then I found AI tools. 🎮",
  "My therapist says I have too many browser tabs open 📑",
  "Error 418: I'm a teapot, but AI isn't ☕",
  "Did I just spend 4 hours 'testing' AI tools? Yes. Yes I did. ⏰",
  "My productivity went up, then sideways, then into orbit 🚀",
  "Alexa, show me the future... wait, wrong AI 🗣️",
  "In a world of AI, be a human who uses AI 🌍",
  "They said the future would be cool. They were right. 😎",
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
  "The tools are friendly! And incredibly helpful. 🤝",
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

  // Hell yeah human-AI collaboration vibes
  "You + AI = Absolutely unstoppable. Hell yeah. 🔥",
  "Creativity just got a co-pilot. Buckle up. 🛫",
  "Your ideas + AI execution = Pure magic happening 💥",
  "Not replacing humans. Amplifying legends. That's you. 👑",
  "Human creativity is infinite. Now it has infinite tools. 🌌",
  "You're not using AI. You're commanding an army of possibilities. ⚔️",
  "Imagination: unlimited. Tools: unlimited. Excuses: zero. 💪",
  "AI doesn't dream. You do. That's your superpower. 🦸",
  "The best ideas are still human. AI just helps them fly. 🦅",
  "Your vision. AI's horsepower. Unstoppable combo. 🏇",
  "Creativity unlocked. Limitations? Never heard of her. 🔓",
  "You're the artist. AI is the world's biggest paintbrush. 🎨",
  "Some people wait for inspiration. You create it. With AI. ⚡",
  "Human heart + AI brain = Things that shouldn't be possible 💜",
  "You didn't come this far to only come this far. Keep building. 🏗️",
  "Average was never in your vocabulary. Neither is impossible. 🚀",
  "While others sleep, you're creating empires. Respect. 👊",
  "Your potential just found its perfect dance partner 💃",
  "Every creator needs tools. Legends need legendary tools. ⚒️",
  "The universe conspires to help the bold. AI just speeds it up. 🌟",
  "Dream it. Prompt it. Ship it. Repeat. 📦",
  "You're not just using tools. You're wielding the future. 🗡️",
  "Born too late to explore Earth. Just in time to explore AI. Perfect. 🌍",
  "Your ancestors built pyramids with rocks. You build with intelligence. 🏛️",
  "Mediocrity is for people who haven't found these tools yet. 😏",
  "The gap between idea and reality just got a whole lot smaller 📏",
  "You're playing chess while others play checkers. AI is your queen. ♟️",
  "Hard work beats talent. Hard work with AI beats everything. 🏆",
  "Some call it cheating. We call it evolution. 🧬",
  "Your creativity deserves an amplifier. Here it is. 🔊",
  "The secret weapon everyone can have but few will master 🥷",
  "Ideas are free. Execution is everything. AI handles the heavy lifting. 🏋️",
  "You're not late to the party. You're right on time. Welcome. 🎉",
  "What took teams a year, you do in a weekend. Legend behavior. 🦁",
  "Doubt kills more dreams than failure ever will. Not today. 💀",
  "You're built different. Now you're equipped different too. 🛠️",
  "The playing field isn't level anymore. It's tilted in your favor. ⚖️",
  "Comfort zone? Don't know her. Only growth zone here. 🌱",
  "Today's side project is tomorrow's empire. Start now. 👑",
  "They said it couldn't be done. They didn't have these tools. 🤷",
  "Your competition is sleeping. You're here. Already winning. 🏁",
  "Talent is great. Talent with AI tools? Absolutely unfair. 😈",
  "The best time to start was yesterday. Second best is right now. ⏰",
  "You're not just ahead of the curve. You're drawing new curves. 📈",
  "Every expert was once a beginner. Every legend started here. 🌅",
  "Refuse to be ordinary. These tools won't let you anyway. ✨",
  "Your creative potential has entered beast mode 🦍",
  "AI doesn't replace the human touch. It frees your hands for more. 🙌",
  "The only limit now is how big you're willing to dream 🌠",
  "Less grinding, more creating. That's the vibe. 🎯",
  "You're not just building projects. You're building legacy. 🏰",

  // ===== GOSPEL OF THOMAS INSPIRED QUOTES (114) =====
  
  // Sayings on Seeking & Awakening
  "Whoever discovers the meaning of these sayings awakens to Life beyond death. 📜",
  "Let the one who seeks continue seeking until they find. When they find, they will be shaken, then amazed. 🔍",
  "The Kingdom is inside you and outside you. Know yourself, and you will realize you are children of the Living Father. 👁️",
  "The elder should not hesitate to learn truth, even from a child — for Life speaks through pure hearts. 👶",
  "Recognize what is right before your eyes, and what is hidden will be revealed to you. ✨",
  
  // Sayings on Truth & Conscience
  "Be truthful, and do not live in contradiction with your conscience. 🙏",
  "Blessed is the strength transformed into compassion. But cursed is the heart that devours others. 💔",
  "The Kingdom is like a fisherman who chose the fish that was alive and strong — and released what was not needed. 🐟",
  "Only the seed in good soil bore fruit. 🌱",
  "I have thrown fire upon the world, and I tend it until it becomes light. 🔥",
  
  // Sayings on Spirit & Life
  "What you see will pass — but those who live in the Spirit will not die. 🌟",
  "Follow the one who lives truthfully. ☀️",
  "Thomas knew the answer could not be spoken — so Jesus shared the deeper mystery privately. 🤫",
  "Heal, love, and receive what is given with gratitude — and your heart will know God. ❤️",
  "When you see one who walks fully in the Spirit, honor them — for they reveal the Father. 🕊️",
  
  // Sayings on Peace & Truth
  "Truth divides illusion from reality. ⚔️",
  "I will give you what no eye has seen, what no ear has heard, and what no heart has imagined. 💫",
  "Why seek the end before you understand the beginning? Everything unfolds from the Source. 🌀",
  "Blessed is the one who awakens to their origin before they leave this world. 🌅",
  "The Kingdom is like a tiny mustard seed — yet it becomes the greatest of plants. 🌳",
  
  // Sayings on Unity & Wholeness
  "My disciples are like children playing in a field not their own — learning who the true Owner is. 🌾",
  "When you unite the two — inner and outer, heart and mind, spirit and body — you will enter the Kingdom. 🔗",
  "Out of many, very few choose to walk in awakening. 🚶",
  "There is Light within every person — and when it is revealed, it illuminates the world. 💡",
  "Love your brother and sister as yourself — protect them as you would your own eyes. 👀",
  
  // Sayings on Self-Awareness
  "You notice the speck in another's eye, but ignore the beam in your own — remove yours first. 🪵",
  "If you fast, fast from cruelty, ego, and fear — and the Kingdom will appear. 🧘",
  "Many are intoxicated with illusion; few thirst for truth. 🍷",
  "If body comes from spirit, it is beautiful. If spirit could come from only body, that would be astonishing. ✨",
  "Where people gather in truth, I am present. 🤝",
  
  // Sayings on Recognition & Wisdom
  "No prophet is truly recognized by their own family or hometown. 🏠",
  "A city built upon rock cannot fall. 🏔️",
  "Speak openly what is revealed to you inwardly. 📣",
  "When the blind lead the blind, they fall together — awaken so you may guide. 👁️‍🗨️",
  "You cannot enter a strong man's house unless you first weaken fear — then truth prevails. 💪",
  
  // Sayings on Simplicity & Presence
  "Do not be consumed with worry about clothing and appearances. 👗",
  "You will know your true self when you remove your disguises without shame. 🎭",
  "Many long to hear this wisdom, yet few open themselves to receive it. 👂",
  "The scholars have hidden the keys of knowledge — but the keys live within you. 🔑",
  "Every plant not rooted in the Father will be uprooted. 🌿",
  
  // Sayings on Light & Receiving
  "Whoever has Light will receive more; whoever refuses Light loses even what they thought they had. ☀️",
  "Be travelers — attached to nothing that imprisons your heart. 🧳",
  "You hear me speak, but only those who listen with spirit truly know me. 🦻",
  "Blasphemies may be forgiven — but closing your heart to the Spirit blinds you to truth. 💔",
  "Do not expect goodness from hatred — fruits reveal the tree. 🍎",
  
  // Sayings on Childlike Spirit
  "Whoever becomes like a child of Light knows the Kingdom. 👶✨",
  "No one can serve two masters at once. ⚖️",
  "When two unite in peace within themselves, mountains of fear move. ⛰️",
  "Blessed are those who journey inward — they will find the Kingdom. 🧭",
  "If they ask where you came from, say: We came from the Light, from the place where Light was born. 🌟",
  
  // Sayings on Recognition & Presence
  "What you wait for has already come — but you have not yet recognized it. 👀",
  "The prophets spoke — but their words live in you. 📖",
  "Transformation happens in the heart. ❤️‍🔥",
  "Blessed are the poor in spirit — for the Father's Kingdom belongs to them. 🙏",
  "Love your family — yet place God first when choices must be made. 💕",
  
  // Sayings on Vision & Spirit
  "Seeing only the material world leads to emptiness — but seeing with spirit reveals Life everywhere. 🌍",
  "The enemy sows weeds in the night — but truth separates them in time. 🌾",
  "Blessed is the one who suffers yet discovers Life through it. 🌹",
  "Seek the Living One while you live — do not wait for death to awaken. ⏳",
  "Compassion recognizes life — respect what breathes, and take only with awareness and gratitude. 🙌",
  
  // Sayings on Awakening & Unity
  "Two lie on one bed — one awakens, while the other remains asleep. I am the One who comes from the undivided. 🛏️",
  "I reveal mysteries to those whose hearts are ready. 💜",
  "A rich man stored many things — and lost his life before enjoying them. 💰",
  "Many are invited — but attachments keep them away from the feast. 🎊",
  "Tenants killed the servants and even the son — forgetting the vineyard belongs to the Father. 🍇",
  
  // Sayings on Foundation & Truth
  "The rejected stone becomes the cornerstone. 🪨",
  "Whoever knows much yet feels empty should seek healing in the heart. 💔",
  "Blessed are those persecuted for truth — for they have truly lived. ⭐",
  "Blessed are those who struggle within and rise into awareness. 🦋",
  "What you bring forth from within will save you — what you suppress will harm you. 💎",
  
  // Sayings on Building & Purpose
  "The false house collapses — but the house built on Light endures. 🏛️",
  "Do not ask me to divide property — I came to heal the heart. ❤️",
  "The harvest is great — but few truly labor in Spirit. 🌾",
  "Many drink at the trough — but few draw from the Source. 💧",
  "Many stand near the door — but only those who dare enter the inner chamber find union. 🚪",
  
  // Sayings on Value & Presence
  "The Kingdom is like a merchant who sold everything to buy one priceless pearl. 📿",
  "I am the Light of the world — lift any stone, split any piece of wood, and you will find my presence there. 🪵",
  "Did you come to see a spectacle? Awake instead. 👁️",
  "Blessed are those who hear and live the word of the Father. 📜",
  "Whoever recognizes the illusions of the world transcends them. 🌌",
  
  // Sayings on Power & Fire
  "If you have power, use it gently — and if you are rich, be generous. 🤲",
  "Whoever draws near to truth draws near to a burning, purifying fire. 🔥",
  "Images appear to the eyes — but the Light within them points to the Father. 👁️‍🗨️",
  "When you see your true reflection, you rejoice — but seeing the shadows you once created may challenge you. 🪞",
  "Adam was created with power — yet your calling is greater, for you can awaken. ⚡",
  
  // Sayings on Detachment & Care
  "Foxes have dens and birds have nests — but truth finds no home among those attached to power. 🦊",
  "Your body is a sacred vessel — care for it, but let spirit guide it. 🏺",
  "The prophets and angels will remind you of what has always belonged to you. 👼",
  "Do not polish the outside while neglecting the inner life. 💫",
  "Come to me — my burden is light, and my teaching is gentle. 🕊️",
  
  // Sayings on Reading & Seeking
  "You can read the sky and soil — but learn also to read the truth standing before you. 🌤️",
  "Seek, and you will find. 🔍",
  "Do not give what is holy to those who will trample it — share wisdom wisely. 💎",
  "Whoever seeks with sincerity will be welcomed. 🤗",
  "If you lend, give freely, without expecting return. 🎁",
  
  // Sayings on Transformation
  "The Kingdom is like yeast hidden in dough — silent, but transforming everything. 🍞",
  "The Kingdom is like a woman with a jar of flour — though she lost some, what remained still baked bread. 🥖",
  "Prepare courage within before confronting what is powerful. 🛡️",
  "My true family are those who live the Father's will. 👨‍👩‍👧‍👦",
  "Give Caesar what belongs to Caesar, God what belongs to God — and give your heart to the Light. 💖",
  
  // Sayings on Love & Sincerity
  "Love deeply — but let no attachment pull you away from truth. 💕",
  "Hypocrisy blocks nourishment — be sincere. 🌿",
  "Blessed is the one who knows where danger enters and guards the heart. 🛡️",
  "Do not fast out of performance — live rightly instead. ✨",
  "Whoever understands the forces shaping their life becomes free from them. 🦅",
  
  // Sayings on Wholeness & Eternity
  "When you unite the divided parts of yourself, you become truly human. 🧩",
  "A shepherd leaves the ninety-nine to rescue the one — because each soul matters. 🐑",
  "Whoever drinks deeply of my teaching becomes like me — and I will live in them. 💧",
  "The Kingdom is like treasure buried in a field — many stand upon it without knowing. 💰",
  "Whoever becomes rich in the world should also learn to let go. 🎈",
  
  // Final Sayings
  "Heaven and earth will pass — but those born of the Living One will not see death. 🌌",
  "Woe to the soul ruled by appetite — and woe to the body ruled by fear. Let harmony guide both. ⚖️",
  "The Kingdom is spread out upon the earth, but people do not see it. 🌍",
  "In Spirit there is neither male nor female — all who unite heart and mind become living children of the Father. 💜",

  // ===== ANCIENT EGYPTIAN PROVERBS (Wisdom-Focused) =====
  
  // Proverbs of Light & Shadow
  "The light within is the flame that feeds no smoke; it burns in silence, revealing all shadow. 𓂀",
  "He who walks with a heavy heart casts no light; his steps vanish beneath him. 𓁹",
  "The Father of Light weighs not gold but the glimmer of the heart's truth. ⚖️",
  "The eye of Truth sees not flesh but fire; in the weighing hall, only light rises. 🌞",
  "The stone may shine in the sun, but only the just heart shines in eternity. 💎",
  
  // Proverbs of Ma'at & Justice
  "Those whose hearts are lighter than the feather do not fear the mirror of Truth. 🪶",
  "The fool chases brightness outside, while his own fire withers unseen. 🔥",
  "The sun within is never eclipsed by the sky's turning—only by the inward veil. 🌅",
  "The Scales do not tremble for the loud; they tilt for those whose silence glows. ⚖️",
  "When the ka departs, the heart speaks; and Ma'at listens for the light it gives. 👂",
  
  // Proverbs of Judgment & Truth
  "The scribe writes your deeds in shadow; the Light reads them in flame. 📜",
  "A heart filled with Isfet cannot reflect the stars; it swallows light like the abyss. 🌌",
  "To polish the heart is to prepare it for the gaze of Truth. ✨",
  "The soul that carries its own sun will never be lost in the underworld. ☀️",
  "Light is not earned through speech but through the balance of silence and truth. 🤫",
  
  // Proverbs of the Inner Sun
  "The hidden sun within rises only when the outer eye is closed. 👁️",
  "The field of reeds welcomes only those who have shone from within. 🌾",
  "A crooked heart cannot pass the gate of Truth, for its glow falters before Ma'at. 🚪",
  "Seek not the torches of men; seek the fire planted by the Divine in your chest. 🔥",
  "He who fears the weighing has already seen his own darkness. ⚫",
  
  // Pythagorean / Orphic wisdom
  "Each soul is a star fallen from its orbit, seeking again its harmony with the Source (The Light). ⭐",
  
  // Matrix wisdom
  "It's not about breaking out of the Matrix—it's about seeing through it, understanding its illusions, and choosing, with clarity, to walk in the light. 🔴🔵",
];

// Fisher-Yates shuffle for truly random quote order
const shuffleArray = (array: string[]): string[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Completely isolated component - uses RAF and CSS for zero main thread impact
const FunnyQuotesRotator = memo(() => {
  // Initialize with a fully shuffled copy of quotes for true randomization
  const [shuffledQuotes, setShuffledQuotes] = useState<string[]>(() => 
    shuffleArray(funnyQuotes)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Use requestAnimationFrame for non-blocking updates
    const scheduleUpdate = () => {
      if (timeoutRef.current) cancelAnimationFrame(timeoutRef.current);
      
      timeoutRef.current = requestAnimationFrame(() => {
        setIsVisible(false);
        
        // Schedule index change with RAF for smooth updates
        setTimeout(() => {
          requestAnimationFrame(() => {
            setCurrentIndex((prev) => {
              const nextIndex = prev + 1;
              // When we've shown all quotes, reshuffle for fresh random order
              if (nextIndex >= shuffledQuotes.length) {
                setShuffledQuotes(shuffleArray(funnyQuotes));
                return 0;
              }
              return nextIndex;
            });
            setIsVisible(true);
          });
        }, 300);
      });
    };

    intervalRef.current = window.setInterval(scheduleUpdate, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) cancelAnimationFrame(timeoutRef.current);
    };
  }, [shuffledQuotes.length]);

  return (
    <div 
      className="mt-2 sm:mt-1 min-h-[28px] sm:min-h-[24px] flex items-center justify-center overflow-visible pointer-events-none select-none px-2"
      aria-hidden="true"
    >
      <p
        className={`text-xs sm:text-sm text-muted-foreground/70 italic text-center will-change-transform transition-all duration-300 leading-tight ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        style={{ contain: 'style paint' }}
      >
        {shuffledQuotes[currentIndex]}
      </p>
    </div>
  );
});

FunnyQuotesRotator.displayName = "FunnyQuotesRotator";

export default FunnyQuotesRotator;
