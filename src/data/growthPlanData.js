// 10-week daily-quiz growth plan — separate from the main student data
// model above. All content here is static demo data; question banks are
// small on purpose and cycled across the 70 days so the feature stays
// easy to extend with real content later.

export const TOTAL_WEEKS = 10
export const DAYS_PER_WEEK = 7
export const TOTAL_DAYS = TOTAL_WEEKS * DAYS_PER_WEEK
export const QUESTIONS_PER_DAY = 3

export const WEEK_THEMES = [
  'Getting Started',
  'Building the Basics',
  'Finding Your Rhythm',
  'Growing Your Skills',
  'Leveling Up',
  'Deeper Practice',
  'Creative Challenges',
  'Advanced Techniques',
  'Putting It All Together',
  'Mastery Week',
]

// day thresholds (inclusive) where a milestone is unlocked
export const MILESTONES = [
  { day: 1, title: 'First Step', description: "You completed your very first day. That's how every big skill starts." },
  { day: 7, title: 'Week One Done', description: 'A full week of consistency — that’s a real habit forming.' },
  { day: 21, title: 'Three Weeks Strong', description: 'Three weeks in — this is becoming part of who you are.' },
  { day: 35, title: 'Halfway There', description: "35 days down, 35 to go. You're officially halfway to something big." },
  { day: 49, title: 'Seven Weeks In', description: 'Look how far you’ve come since day one.' },
  { day: 63, title: 'Almost There', description: "Just one more week — you're so close to the finish line." },
  { day: 70, title: 'Growth Complete', description: '10 weeks of small steps just added up to something huge.' },
]

function tierForDay(day) {
  if (day <= 14) return 'easy'
  if (day <= 35) return 'medium'
  if (day <= 56) return 'hard'
  return 'expert'
}

export function getWeekForDay(day) {
  return Math.min(TOTAL_WEEKS, Math.ceil(day / DAYS_PER_WEEK))
}

// tiny deterministic PRNG so the same day always renders the same
// shuffled options, without needing to persist the shuffle anywhere
function seededRandom(seed) {
  let t = seed + 0x6d2b79f5
  return function next() {
    t += 0x6d2b79f5
    let x = t
    x = Math.imul(x ^ (x >>> 15), x | 1)
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0
  }
  return h
}

function shuffleQuestion(question, seed) {
  const rand = seededRandom(seed)
  const indices = question.options.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return {
    prompt: question.prompt,
    explain: question.explain,
    options: indices.map((i) => question.options[i]),
    correctIndex: indices.indexOf(question.correctIndex),
  }
}

export function getDayQuestions(skillId, day) {
  const bank = QUESTION_BANKS[skillId]
  if (!bank) return []
  const tier = tierForDay(day)
  const pool = bank[tier]
  const picks = []
  for (let i = 0; i < QUESTIONS_PER_DAY; i++) {
    const poolIndex = (day - 1 + i) % pool.length
    const seed = hashString(`${skillId}-${day}-${i}`)
    picks.push(shuffleQuestion(pool[poolIndex], seed))
  }
  return picks
}

function q(prompt, options, correctIndex, explain) {
  return { prompt, options, correctIndex, explain }
}

const QUESTION_BANKS = {
  'digital-illustration': {
    easy: [
      q(
        'Which of these is the most important first step before adding color to a digital illustration?',
        ['Sketching the basic shapes and proportions', 'Picking your final color palette', 'Adding fine details and texture', 'Exporting the file'],
        0,
        'A solid base sketch makes everything after it — color, shading, detail — easier to get right.'
      ),
      q(
        "What's a \"layer\" used for in digital art software?",
        ['Keeping different parts of a drawing separate and editable', 'Making the file size smaller', 'Changing the canvas size', 'Undoing your last action'],
        0,
        'Layers let you edit one part of your artwork without disturbing everything else.'
      ),
      q(
        'If a drawing looks "flat," what\'s usually missing?',
        ['Shading and highlights that show light and shadow', 'More outlines', 'A bigger canvas', 'More layers'],
        0,
        'Shading and highlights are what make a flat shape look three-dimensional.'
      ),
    ],
    medium: [
      q(
        "You're shading a sphere lit from the top-left. Where should the darkest shadow usually fall?",
        ['Bottom-right of the sphere', 'Top-left of the sphere', 'Directly in the center', "There shouldn't be a shadow"],
        0,
        'Shadows fall on the side of an object facing away from the light source.'
      ),
      q(
        'What does "color temperature" refer to in a painting?',
        ['Whether colors feel warm (reds/oranges) or cool (blues/greens)', 'How bright a color is', 'How saturated a color is', 'The brand of paint used'],
        0,
        'Warm and cool colors affect the mood and depth of a piece.'
      ),
      q(
        'Why might an artist use a limited color palette instead of every color available?',
        ['It creates a more unified, intentional mood', "It's faster to load the file", 'It uses less memory', "It's required by most software"],
        0,
        'Limiting your palette forces intentional choices and often looks more cohesive.'
      ),
    ],
    hard: [
      q(
        'What\'s the purpose of "rendering" in digital painting?',
        ['Refining forms with detailed light, shadow, and texture', 'Converting a file to a different format', 'Resizing the canvas', 'Adding a signature'],
        0,
        'Rendering is the polishing stage where forms feel solid and real.'
      ),
      q(
        'Why do experienced illustrators often paint in grayscale before adding color?',
        ["It's easier to judge values (light vs. dark) without color distracting you", 'Color makes files too large', 'Grayscale is required for printing', 'It\'s a rule in every art program'],
        0,
        'Getting values right first makes the final colored piece read clearly.'
      ),
      q(
        'What\'s "edge control" in an illustration?',
        ['Deciding which edges are sharp and which are soft to guide the eye', "Cropping the canvas correctly", "Making sure lines don't cross", 'Choosing a brush size'],
        0,
        "Soft and sharp edges direct the viewer's attention around a piece."
      ),
    ],
    expert: [
      q(
        'In color theory, what does it mean for two colors to be "complementary"?',
        ['They sit opposite each other on the color wheel and create strong contrast', 'They\'re the exact same color', 'They\'re both cool colors', "They can't be used together"],
        0,
        'Complementary colors create vibrant contrast when placed near each other.'
      ),
      q(
        '"Atmospheric perspective" is used for what?',
        ['Making distant objects appear lighter, softer, and less saturated to show depth', 'Adding fog as a special effect', 'Making a piece look older', 'Increasing canvas resolution'],
        0,
        'It mimics how the atmosphere fades distant objects, creating a sense of depth.'
      ),
      q(
        'Why might a professional illustrator do multiple "value studies" before a final piece?',
        ['To solve composition and lighting problems early, when changes are cheap', 'Because clients require it', 'To fill up a portfolio', 'To test different file formats'],
        0,
        'Small studies let you experiment quickly before committing to a final piece.'
      ),
    ],
  },
  'character-design': {
    easy: [
      q(
        'What\'s a "silhouette" test used for in character design?',
        ['Checking if a character is recognizable from its outline alone', 'Testing file compression', 'Choosing a background color', 'Measuring character height'],
        0,
        'A strong silhouette means your character reads clearly even in shadow.'
      ),
      q(
        'Why do character designers often start with simple shapes (circles, squares, triangles)?',
        ['Different shapes suggest different personalities to viewers', 'Shapes are required by design software', "It's faster to erase", 'Shapes use less ink when printed'],
        0,
        'Round shapes feel friendly, sharp shapes feel intense — shape is a storytelling tool.'
      ),
      q(
        "What does a character's color palette often communicate?",
        ['Mood, personality, or role in the story', 'Their exact age', "The artist's favorite colors only", "Nothing — color is purely decorative"],
        0,
        'Color choices give viewers instant clues about who a character is.'
      ),
    ],
    medium: [
      q(
        'A "hero" character in a story is often designed with which kind of shapes?',
        ['Strong, upright shapes like triangles or rectangles', 'Only soft circles', 'Random, inconsistent shapes', 'No shapes — just color'],
        0,
        'Upright, stable shapes tend to read as confident and heroic.'
      ),
      q(
        'Why is "exaggeration" a useful tool in character design?',
        ['It emphasizes personality traits and makes characters more memorable', 'It makes characters harder to animate', "It's only used for villains", 'It reduces file size'],
        0,
        'Pushing traits further makes a character instantly recognizable.'
      ),
      q(
        'What\'s the benefit of designing a character turnaround (front, side, back views)?',
        ['It keeps the design consistent from every angle', 'It\'s required for all digital files', 'It makes the character taller', 'It\'s only for 3D characters'],
        0,
        'Turnarounds help you (and anyone else) draw the character consistently.'
      ),
    ],
    hard: [
      q(
        "How can costume and props reinforce a character's backstory?",
        ['Details like wear, patches, or accessories hint at their history and role', 'They\'re purely decorative and carry no meaning', 'Costumes should always be plain to avoid distraction', 'Props are only used in animation, not illustration'],
        0,
        'Small details let viewers infer a whole history without a single word.'
      ),
      q(
        'Why might a designer give a villain asymmetrical features?',
        ['Asymmetry can create a sense of unease or unpredictability', "It's easier to draw", 'It saves color', 'Symmetry is a rule that must never be broken'],
        0,
        'Asymmetry subtly signals that something is "off" about a character.'
      ),
      q(
        "What's the risk of designing a character that's visually similar to an existing famous character?",
        ['Audiences may not see it as original, weakening the design', 'There\'s no risk at all', 'It always improves recognition', 'It\'s required in game design'],
        0,
        'Originality helps a character stand on its own rather than borrowing recognition.'
      ),
    ],
    expert: [
      q(
        'How does "shape language" work across an entire cast of characters?',
        ['Contrasting shapes between characters help audiences instantly tell them apart', 'All characters should share the same shape for consistency', 'Shape language only matters for the main character', 'It has no effect on audience perception'],
        0,
        'Varying shapes across a cast keeps every character visually distinct.'
      ),
      q(
        "Why do some professional designers design a character's silhouette before any details?",
        ['A strong silhouette guarantees readability before details are added', 'Details are more important than silhouette', 'It\'s a shortcut that skips necessary steps', 'Silhouettes are only used in shadow puppetry'],
        0,
        'If the silhouette fails, no amount of detail will fix readability.'
      ),
      q(
        "What's a common pitfall when adding too many small details to a character design?",
        ["The design can become visually \"busy\" and less readable at a distance", 'It always makes the character look more professional', 'There\'s no downside to more detail', 'It automatically improves animation quality'],
        0,
        'Too much detail can compete for attention and muddy the read.'
      ),
    ],
  },
  'animation-basics': {
    easy: [
      q(
        'What does "timing" refer to in animation?',
        ['How many frames an action takes, affecting its speed', "The software's file-save schedule", 'The color of each frame', 'The length of the whole video only'],
        0,
        'More frames for an action means it plays slower; fewer means faster.'
      ),
      q(
        'What\'s a "keyframe"?',
        ['A frame that marks an important position in a movement', 'Any random frame in the sequence', 'The final frame only', 'A frame with a key drawn in it'],
        0,
        'Keyframes define the important poses; the frames between fill in the motion.'
      ),
      q(
        "Why do animated objects usually not move at a constant speed?",
        ['Real movement speeds up and slows down (easing), which looks more natural', 'Constant speed is faster to animate', "Software doesn't allow constant speed", "It's only a rule for 3D animation"],
        0,
        'Easing in and out mimics how things actually move in the real world.'
      ),
    ],
    medium: [
      q(
        'What\'s "squash and stretch" used for?',
        ['Giving objects a sense of weight and flexibility', 'Reducing file size', 'Making animations shorter', 'Fixing broken frames'],
        0,
        "It's one of the most classic ways to add life and physicality to motion."
      ),
      q(
        'What does "anticipation" mean in animation?',
        ['A small movement before the main action that prepares the viewer for it', 'Guessing what the client wants', 'Rendering frames in advance', 'Predicting software crashes'],
        0,
        'A wind-up before the punch makes the punch read more clearly.'
      ),
      q(
        'Why is "spacing" between frames important?',
        ['It controls how movement accelerates or decelerates', 'It only affects file size', 'Spacing is irrelevant to the final look', "It's just about layer order"],
        0,
        'Tighter spacing near a stop, wider spacing mid-motion, creates natural easing.'
      ),
    ],
    hard: [
      q(
        'What\'s the difference between "straight-ahead" and "pose-to-pose" animation?',
        ['Straight-ahead draws frame by frame in order; pose-to-pose plans key poses first', 'They\'re two names for the exact same technique', 'Straight-ahead is only for 3D, pose-to-pose only for 2D', "Pose-to-pose doesn't use keyframes"],
        0,
        'Both are valid — pose-to-pose gives more control, straight-ahead can feel more spontaneous.'
      ),
      q(
        'Why do animators use "overlapping action"?',
        ['Different parts of a body move at slightly different times, looking more natural', "It's a shortcut to skip drawing frames", 'It only applies to sound design', 'It\'s required by every animation software'],
        0,
        'Hair, clothes, and loose parts trailing behind the main motion sells realism.'
      ),
      q(
        'What\'s a "walk cycle" used for in animation?',
        ['A reusable, looping sequence of a character walking', 'A one-time-only special effect', "A way to test a computer's speed", 'A method for coloring backgrounds'],
        0,
        'Walk cycles are a classic animation exercise because walking is deceptively complex.'
      ),
    ],
    expert: [
      q(
        'How does "follow-through" differ from "overlapping action"?',
        ['Follow-through is parts continuing to move after the main action stops; overlapping is different parts moving at different times', 'They are identical concepts with different names', 'Follow-through only applies to sound', 'Overlapping action was replaced by follow-through in modern animation'],
        0,
        'They\'re related but distinct principles that often work together.'
      ),
      q(
        'Why might an animator break the 12 principles of animation intentionally?',
        ['To create a specific stylized effect that serves the story', 'Because the principles are outdated and never apply', 'It\'s a mistake that should always be avoided', 'Only beginners are allowed to break them'],
        0,
        'The principles are guidelines, not laws — breaking them on purpose is a valid style choice.'
      ),
      q(
        'What role does "staging" play in a complex animated scene?',
        ["It directs the viewer's attention to the most important action clearly", 'It only refers to the background music', 'It\'s a technical export setting', 'It has no impact on how a scene reads'],
        0,
        'Good staging makes sure the audience always knows where to look.'
      ),
    ],
  },
  'game-design': {
    easy: [
      q(
        'What\'s a "game loop"?',
        ['The repeating cycle of input, update, and rendering that keeps a game running', 'A looping background song', 'A bug that repeats an action forever', 'A level that never ends'],
        0,
        'Every real-time game runs on a loop that keeps checking input and updating the world.'
      ),
      q(
        'Why do games usually start with an easy tutorial level?',
        ['To teach core mechanics gradually before increasing challenge', 'Tutorials are only there to pad game length', "Players never read tutorials, so they don't matter", 'Easy levels are cheaper to make'],
        0,
        'A good tutorial teaches through play, not just text.'
      ),
      q(
        '"Player feedback" in a game refers to what?',
        ['Visual, audio, or haptic responses that tell the player their action worked', 'Reviews players leave after finishing a game', 'A survey sent to testers', 'Bug reports from the community'],
        0,
        'Feedback (a sound, a flash, a rumble) confirms an action landed.'
      ),
    ],
    medium: [
      q(
        'Why is "pacing" important in level design?',
        ["It balances tension and rest so players don't get overwhelmed or bored", 'It only affects loading times', 'Pacing refers to character walking speed only', 'It has no effect on player experience'],
        0,
        'Good pacing alternates intensity with breathing room.'
      ),
      q(
        'What does "risk vs. reward" mean in game design?',
        ['Giving players a meaningful choice between a safer path and a riskier, more rewarding one', 'Randomly rewarding players regardless of choices', 'A setting that only appears in gambling games', "A way to balance a game's difficulty automatically"],
        0,
        'Meaningful choices make players feel ownership over their strategy.'
      ),
      q(
        'Why might a designer add a "skip" option for repeated cutscenes?',
        ["To respect returning players' time without removing the story for new players", 'Cutscenes should never be skippable', "It's required by all platforms", "It reduces the game's file size"],
        0,
        'Good UX respects both first-time and repeat players.'
      ),
    ],
    hard: [
      q(
        'What\'s a "game economy" in design terms?',
        ['The system of resources, currency, and rewards that balances player progress', 'The real-world cost of making the game', 'A game genre about running a business', 'The marketing budget for the game'],
        0,
        "It's the invisible math that keeps a game's rewards feeling fair."
      ),
      q(
        'Why do designers use "playtesting" before finalizing a level?',
        ["To see how real players experience it and catch problems the designer can't see themselves", 'Playtesting is only done after release', "It's optional and rarely useful", 'It replaces the need for level design entirely'],
        0,
        "You're too close to your own design to see it the way a new player will."
      ),
      q(
        'What\'s the purpose of a "difficulty curve"?',
        ["Gradually increasing challenge to match a player's growing skill", 'Making every level equally difficult', 'A graph used only by marketing teams', 'A setting that only affects visuals'],
        0,
        'A well-tuned curve keeps players challenged without frustrating them.'
      ),
    ],
    expert: [
      q(
        'How does "emergent gameplay" differ from scripted gameplay?',
        ['Emergent gameplay arises from systems interacting in unplanned ways, rather than being directly authored', 'Emergent gameplay is always a bug', 'Scripted gameplay only exists in mobile games', "There's no meaningful difference"],
        0,
        'Some of the best game moments come from systems the designer didn\'t explicitly script.'
      ),
      q(
        'Why might a designer intentionally limit player choices at a key moment?',
        ['To focus attention and create a specific emotional or narrative beat', 'Limiting choice is always bad design', "It's required by every game engine", 'It only matters in multiplayer games'],
        0,
        'Sometimes less choice creates a stronger, more focused moment.'
      ),
      q(
        'What\'s the value of a "minimum viable level" in the design process?',
        ['It tests core mechanics quickly before investing in art and polish', 'It\'s the final, polished version of a level', 'It skips the need for playtesting', 'It only applies to mobile games'],
        0,
        'Testing the fun factor early saves wasted work later.'
      ),
    ],
  },
  'team-collaboration': {
    easy: [
      q(
        "What's an example of constructive feedback?",
        ['Specific, kind suggestions on how something could be improved', "Simply saying 'this is bad'", 'Ignoring the work entirely', 'Only pointing out mistakes with no suggestions'],
        0,
        'Constructive feedback is specific and points toward improvement.'
      ),
      q(
        'Why is it helpful to ask clarifying questions in a group project?',
        ['It prevents misunderstandings before they cause wasted work', 'Questions always slow the team down', "It's a sign you didn't do your research", 'Questions are only for beginners'],
        0,
        'A quick question early can save hours of rework later.'
      ),
      q(
        'What\'s a good way to respond when a teammate disagrees with your idea?',
        ['Listen to their reasoning and consider it openly', "Insist you're right without listening", 'Stop contributing to the project', 'Ignore them and do it your way anyway'],
        0,
        'Staying open to other ideas usually leads to a stronger final result.'
      ),
    ],
    medium: [
      q(
        'Why is it useful to divide tasks clearly at the start of a group project?',
        ["It avoids duplicated work and confusion about who's responsible for what", 'Clear roles make a project less creative', 'Tasks should always be assigned randomly', 'Dividing tasks is only useful for large teams'],
        0,
        'Clarity up front prevents confusion (and conflict) later.'
      ),
      q(
        "What's an effective way to give feedback on a teammate's creative work?",
        ['Point out specific strengths and specific areas to improve', "Only mention what you don't like", 'Compare it directly to your own work', 'Avoid giving any opinion at all'],
        0,
        'Balanced, specific feedback is far more useful than vague praise or criticism.'
      ),
      q(
        'How should a team usually handle a missed deadline?',
        ['Communicate early and adjust the plan together', 'Blame whoever missed it without discussion', 'Ignore it and hope it resolves itself', 'Restart the whole project'],
        0,
        'Early, honest communication keeps a team functional under pressure.'
      ),
    ],
    hard: [
      q(
        'What\'s the benefit of a regular check-in during a longer team project?',
        ['It catches problems early and keeps everyone aligned on progress', 'Check-ins always waste time better spent working', 'Only managers should attend check-ins', "Check-ins are unnecessary if everyone is 'busy'"],
        0,
        'Small, regular check-ins prevent big surprises near a deadline.'
      ),
      q(
        'How can a team resolve a creative disagreement fairly?',
        ['Discuss the reasoning behind each idea and find common ground or test both', 'Whoever is loudest should decide', 'Avoid the disagreement entirely', 'Flip a coin without discussion'],
        0,
        'Understanding the "why" behind an idea often reveals a better combined solution.'
      ),
      q(
        "Why might a team benefit from assigning a single 'decision-maker' for tie-breaks?",
        ["It keeps the project moving when the team can't reach full agreement", 'Decisions should never be made quickly', "It removes everyone else's input entirely", 'It\'s only needed in large companies'],
        0,
        'A tie-breaker prevents a team from getting stuck in endless debate.'
      ),
    ],
    expert: [
      q(
        "What's a healthy way to handle a teammate who isn't contributing equally?",
        ['Have a direct, respectful conversation about expectations', 'Publicly call them out to the whole group', 'Silently do their work for them', 'Exclude them from future projects without discussion'],
        0,
        'A direct, private conversation is usually more effective and kinder.'
      ),
      q(
        'Why is psychological safety important in a creative team?',
        ["People share bolder ideas and admit mistakes when they don't fear harsh judgment", 'It has no real effect on creative output', 'It only matters in large companies', 'Safety and creativity are unrelated'],
        0,
        'Teams do their best creative work when people feel safe to take risks.'
      ),
      q(
        'How does giving credit generously affect long-term collaboration?',
        ['It builds trust and makes teammates want to keep working together', 'It makes you look less capable', 'Credit should always go to the loudest voice', 'It has no effect on future teamwork'],
        0,
        'Generosity with credit is one of the strongest trust-builders on a team.'
      ),
    ],
  },
}
