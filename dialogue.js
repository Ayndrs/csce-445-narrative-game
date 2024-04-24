const CLAMPY = "./characters/image.png";
const DRAGONY = "./characters/dragoner.gif";
const NARRATOR = "./characters/empty.png";
// These arrays represent character sprites. The first item in the array is the url of the sprite sheet. 
// The second is the background-position-x used to show the specific sprite you want, and the third is the background-position-y. 
const CLAMPY_NORMAL = [CLAMPY, 0,0];
const DRAGON = [DRAGONY, 0,0];
const CLAMPY_HAPPY = [CLAMPY, 0, -300];
const CLAMPY_DOUBT = [CLAMPY, -300, 0];
const CLAMPY_SWEAT = [CLAMPY, -300, -300];

// This is just a constant that checks if the game is over. 
const FINISH = "FINISH";

const DIALOGUE_CONTENT = [
  {
    id: 1,
    text: "In the dim light of dawn, a lone adventurer sets foot upon the ancient path leading to a temple veiled in mystery. With whispers of a long-lost artifact beckoning them forward, they embark on a quest that will test their wit and courage to their very limits.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 2,
  },
  {
    id: 2,
    text: "As our intrepid explorer steps into the cavernous Entrance Hall, they are met with a towering door adorned with symbols of antiquity. Each glyph seems to pulse with a hidden energy, hinting at the secrets that lie beyond.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 3,
  },
  {
    id: 3,
    text: "In the language of ancients, where wisdom reigns supreme, seek the tablet marked with knowledge's gleam",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 4,
  },
  {
    id: 4,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Ancient Scroll",
        nextText: 5,
        decrement: true,
        
      },
      {
        text: "The Mystic Tome",
        nextText: 5,
        decrement: true,
      },
      {
        text: "The Sage's Tablet",
        nextText: 5,
      },
      {
        text: "The Elder's Codex",
        nextText: 5,
        decrement: true,
      },
    ],
  },
  {
    id: 5,
    text: "Venturing deeper into the temple's depths, our adventurer arrives at the Puzzle Chamber, a labyrinth of shifting tiles and cryptic engravings. In the center stands a grand puzzle, its missing piece beckoning to be found.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 6,
  },
  // {
  //   id: 52,
  //   text: "Venturing deeper into the temple's depths, our adventurer arrives at the Puzzle Chamber, a labyrinth of shifting tiles and cryptic engravings. In the center stands a grand puzzle, its missing piece beckoning to be found.",
  //   speakerName: "Narrator",
  //   characterImg: NARRATOR,
  //   decrement: true,
  //   next: 6,
  // },
  {
    id: 6,
    text: "Within this chamber of shifting tiles, seek the emblem that guards the ancient's trials.",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 7,
  },
  
  {
    id: 7,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Keystone of Ages",
        nextText: 8,
        decrement: true
      },
      {
        text: "The Guardian's Emblem ",
        nextText: 8,
      },
      {
        text: "The Elemental Shard",
        nextText: 8,
        decrement: true
      },
      {
        text: "The Timeless Medallion",
        nextText: 8,
        decrement: true
      },  
    ]
  },
  {
    id: 8,
    text: "As our adventurer presses onward, they find themselves standing on the precipice of the Guardian's Lair, a domain shrouded in shadows and guarded by an ancient sentinel. With steely resolve, they prepare to confront the looming figure, knowing that only by unraveling its mysteries can they hope to claim the prize that lies beyond.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 9,
  },
  // {
  //   id: 82,
  //   text: "As our adventurer presses onward, they find themselves standing on the precipice of the Guardian's Lair, a domain shrouded in shadows and guarded by an ancient sentinel. With steely resolve, they prepare to confront the looming figure, knowing that only by unraveling its mysteries can they hope to claim the prize that lies beyond.",
  //   speakerName: "Narrator",
  //   characterImg: NARRATOR,
  //   decrement: true,
  //   next: 9,
  // },
  {
    id: 9,
    text: "To pass safely, what is the guardian's weakness? Hint: 'In the shadow's embrace, where light dare not tread, lies the weakness of the guardian ahead.'",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 10,
  },
  {
    id: 10,
    characterImg: NARRATOR,
    options: [
      {
        text: "Fire",
        nextText: 11,
        decrement: true
      },
      {
        text: "Light",
        nextText: 11,
        decrement: true
      },
      {
        text: "Darkness",
        nextText: 11,
      },
      {
        text: "Water",
        nextText: 11,
        decrement: true
      },  
    ]
  },
  {
    id: 11,
    text: "At long last, our adventurer arrives at the hallowed Artifact Chamber, where the legendary relic awaits its rightful heir. With trembling hands, they approach the artifact, its ethereal glow casting an otherworldly luminescence upon the chamber's stone walls.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 12,
  },
  // {
  //   id: 112,
  //   text: "At long last, our adventurer arrives at the hallowed Artifact Chamber, where the legendary relic awaits its rightful heir. With trembling hands, they approach the artifact, its ethereal glow casting an otherworldly luminescence upon the chamber's stone walls.",
  //   speakerName: "Narrator",
  //   characterImg: NARRATOR,
  //   decrement: true,
  //   next: 12,
  // },
  {
    id: 12,
    text: "To claim the artifact, what is its true name? Hint: 'In the heart of time's embrace, where echoes of eternity grace, find the name of the relic that illuminates this sacred space.'",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 13,
  },
  {
    id: 13,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Eternal Radiance",
        nextText: 14,
      },
      {
        text: "The Endless Echo",
        nextText: 14,
        decrement: true
      },
      {
        text: "The Infinite Embrace",
        nextText: 14,
        decrement: true
      },
      {
        text: "The Boundless Beacon",
        nextText: 14,
        decrement: true
      },  
    ]
  },
  {
    id: 14,
    text: "As our adventurer progresses deeper into the temple's labyrinth, they come upon the Hall of Reflections, a chamber adorned with mirrors that seem to shimmer with an ethereal light. In the center of the room stands a pedestal, upon which rests a mirror with no reflection.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 15,
  },
  {
    id: 15,
    text: "In the realm of mirrors where truth lies veiled, seek the answer to the question that has been concealed.",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 16,
  },
  {
    id: 16,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Echo of Destiny",
        nextText: 17,
        decrement: true
      },
      {
        text: "The Reflection of Truth",
        nextText: 17,
      },
      {
        text: "The Mirage of Illusion",
        nextText: 17,
        decrement: true
      },
      {
        text: "The Shadow of Doubt",
        nextText: 17,
        decrement: true
      },  
    ]
  },
  {
    id: 17,
    text: "Entering the Fountain of Whispers, our adventurer encounters a tranquil pool surrounded by ancient carvings and adorned with glowing crystals. Above the pool hangs a silver chalice, suspended by invisible threads.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 18,
  },
  {
    id: 18,
    text: "In the whispers of the fountain where secrets flow, seek the name that unlocks the path to go.",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 19,
  },
  {
    id: 19,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Fountain of Dreams",
        nextText: 20,
        decrement: true
      },
      {
        text: "The Chalice of Destiny",
        nextText: 20,
        decrement: true
      },
      {
        text: "The Pool of Reflections",
        nextText: 20,
        decrement: true
      },
      {
        text: "The Well of Knowledge",
        nextText: 20,
      },  
    ]
  },
  {
    id: 20,
    text: "Lost within the Maze of Illusions, our adventurer encounters twisting passages lined with shimmering illusions that warp reality. At the heart of the maze lies a cryptic inscription etched into the stone walls.",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 21,
  },
  {
    id: 21,
    text: "In the maze of illusions where truth is concealed, which path leads to the path that the wise have revealed?",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 22,
  },
  {
    id: 22,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Path of Shadows",
        nextText: 23,
        decrement: true
      },
      {
        text: "The Veil of Dreams",
        nextText: 23,
        decrement: true
      },
      {
        text: "The Mirror of Destiny",
        nextText: 23,
        decrement: true
      },
      {
        text: "The Vein of Truth",
        nextText: 23,
      },  
    ]
  },
  {
    id: 23,
    text: "Finally, our adventurer reaches the Sanctuary of Destiny, a sacred chamber bathed in celestial light. At its center stands a pedestal upon which rests a glowing orb, pulsating with unknown power..",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: 24,
  },
  {
    id: 24,
    text: "In the sanctuary of destiny where fate is spun, what is the name of the relic that has begun?",
    speakerName: "Artifacty",
    characterImg: CLAMPY_NORMAL,
    decrement: false,
    next: 25,
  },
  {
    id: 25,
    characterImg: NARRATOR,
    options: [
      {
        text: "The Orb of Destiny",
        nextText: 26,
      },
      {
        text: "The Light of Hope",
        nextText: 26,
        decrement: true
      },
      {
        text: "The Heart of Creation",
        nextText: 26,
        decrement: true
      },
      {
        text: "The Essence of Time",
        nextText: 26,
        decrement: true
      },  
    ]
  },


  // {
  //   id: 15,
  //   characterImg: CLAMPY_NORMAL,
  //   options: [
  //     {
  //       text: "happy ending",
  //       nextText: 16,
  //       setState: { epilogue: 1 },
  //     },
  //     {
  //       text: "sad ending",
  //       nextText: 161,
  //       setState: { epilogue: 2 },
  //     },
  //   ],
  // },
  {
    id: 26,
    text: "OH NO! Every hero must conquer their final battle! Defeat the dragon and earn your place with the greats of the past! One wrong move and your life remains just a memory",
    speakerName: "DRAGON",
    characterImg: DRAGON,
    next: 27,
    audioSrc: "sounds/dragon-breathes-fire-3-191459.mp3"
  },
  {
    id: 27,
    characterImg: NARRATOR,
   
    options: [
      {
        text: "ATTACK",
        nextText: 28,
      },
      {
        text: "DEFEND",
        nextText: 28,
        decrement: true
      },
    ]
  },
  {
    id: 28,
    text: "He's hurt, but what's your next choice",
    audioSrc: "sounds/dragon-breathes-fire-3-191459.mp3",
    speakerName: "DRAGON",
    characterImg: DRAGON,
    next: 29
  },
  {
    id: 29,
    characterImg: NARRATOR,
   
    options: [
      {
        text: "Run for Cover!",
        nextText: 30,
      },
      {
        text: "Fight on!",
        nextText: 30,
        decrement: true
      },
    ]
  },
  {
    id: 30,
    text: "Final Hit, means the end for you or the dragon! Which will it be? The choice is yours!",
    speakerName: "DRAGON",
    audioSrc: "sounds/dragon-breathes-fire-3-191459.mp3",
    characterImg: DRAGON,
    next: 31
  },
  {
    id: 31,
    characterImg: NARRATOR,
   
    options: [
      {
        text: "Shoot with bow!",
        nextText: 32,
      },
      {
        text: "Attack with Sword!",
        nextText: 32,
        decrement: true
      },
    ]
  },
  {
    id: 32,
    text: "Thats it! Let's see your fate!",
    speakerName: "DRAGON",
    characterImg: DRAGON,
    next: 33
    
  },

  {
    id: 33,
    text: "As our adventurer ponders each question, their fate hangs in the balance, their choices shaping the course of their journey through the ancient temple's halls. Will they emerge triumphant, the artifact in hand, or will the secrets of the temple remain forever veiled in shadow? Only time will tell...",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: FINISH
  },
  // {
  //   id: 132,
  //   text: "As our adventurer ponders each question, their fate hangs in the balance, their choices shaping the course of their journey through the ancient temple's halls. Will they emerge triumphant, the artifact in hand, or will the secrets of the temple remain forever veiled in shadow? Only time will tell...",
  //   speakerName: "Narrator",
  //   characterImg: NARRATOR,
  //   decrement: true,
  //   next: FINISH,
  // },
  {
    id: -999,
    text: "you lose",
    speakerName: "Narrator",
    characterImg: NARRATOR,
    next: FINISH,
  },
];

const EPILOGUES = [
  {
    id: 1,
    text: "Wow. What an incredible accomplishment. What an incredible game. You are a wonderful person and a great success. I love you.",
  },
  {
    id: 2,
    text: "Uh. I didn't think anyone would actually want a sad ending. There wasn't much of a storyline to build on. That's ok though. Everyone feels sad sometimes. I still love you.",
  },
];
