import {
  Cpu, Code2, Music,
  Calculator, Brain, BookOpen, PenTool,
  Puzzle, Mic, BarChart3, Users2,
  Cog, Palette, FlaskConical,
  Zap, Award, Rocket, Star, Lightbulb, GraduationCap,
  Music2, Camera, PlayCircle, MessageSquare,
  Timer, Gauge, ShieldAlert, EyeOff, Moon,
  Paintbrush2, Gamepad2, Box, Boxes, Search, FileText, Image, Wand2,
  Clapperboard, Pencil, Aperture,
} from 'lucide-react'

// single source of truth for every page — swap this module for real API
// calls later without touching any component
const INDIGO = '#5145cd'
const GREEN = '#0fb67d'
const ORANGE = '#ff8a5b'
const VIOLET = '#8b5cf6'
const BLUE = '#3b82f6'
const RED = '#ef4444'
const PINK = '#ec4899'

export const studentProfile = {
  name: 'Sarah Chen',
  initials: 'S',
  grade: 'Grade 9',
  streak: 12,
  level: 4,
  xp: 1240,
  xpToNext: 1500,
}

export const interests = [
  {
    id: 'digital-art',
    title: 'Digital Art',
    icon: Paintbrush2,
    category: 'Arts',
    color: PINK,
    level: 88,
    summary: 'Spends hours creating digital illustrations and experimenting with new styles.',
    description:
      'Sarah taught herself digital painting over the past year and now creates original illustrations almost daily, constantly refining her style.',
    evidence: [
      'Completed over 50 digital illustrations this year',
      'Self-taught using online tutorials and art communities',
      'Posts original artwork to a personal portfolio site',
    ],
    projects: [{ title: 'Fantasy Character Series', note: 'A set of 12 original character illustrations built as a personal portfolio project' }],
    relatedCareers: ['artist', 'game-designer'],
  },
  {
    id: 'animation',
    title: 'Animation',
    icon: Clapperboard,
    category: 'Arts',
    color: VIOLET,
    level: 74,
    summary: 'Experiments with short animated clips, bringing her own artwork to life.',
    description:
      'Sarah brings her illustrations to life through short animations, teaching herself the basics of frame-by-frame and digital animation.',
    evidence: [
      'Made three short animated clips using her own character designs',
      'Learned keyframe animation through free online courses',
      'Shares animation practice clips with an online art community',
    ],
    projects: [{ title: '"Wander" — 30-second short', note: 'A hand-animated short film built frame-by-frame over several weeks' }],
    relatedCareers: ['artist', 'game-designer'],
  },
  {
    id: 'game-design',
    title: 'Game Design',
    icon: Gamepad2,
    category: 'Arts',
    color: INDIGO,
    level: 80,
    summary: 'Designs simple games and levels, blending art with interactive storytelling.',
    description:
      'What began as playing games turned into building them — Sarah designs levels and characters for small game projects in her free time.',
    evidence: [
      'Built two playable levels in Roblox Studio',
      'Designed original characters for a personal game project',
      'Participated in a weekend game jam with a small team',
    ],
    projects: [{ title: 'Pixel Quest', note: 'A short platformer built in Roblox Studio with original character art' }],
    relatedCareers: ['game-designer', 'artist'],
  },
  {
    id: 'music',
    title: 'Music',
    icon: Music,
    category: 'Arts',
    color: BLUE,
    level: 60,
    summary: 'Plays piano and enjoys music theory. A creative outlet that also supports focus.',
    description:
      "Music is Sarah's outlet outside of academics — she practices piano regularly and has started experimenting with writing her own short pieces.",
    evidence: [
      'Practices piano most evenings',
      'Performed in the winter school recital',
      'Started composing short original pieces',
    ],
    projects: [],
    relatedCareers: ['artist', 'game-designer'],
  },
  {
    id: 'sketching-illustration',
    title: 'Sketching & Illustration',
    icon: Pencil,
    category: 'Arts',
    color: ORANGE,
    level: 85,
    summary: 'Rarely without a sketchbook — draws constantly, from quick studies to finished pieces.',
    description:
      "Traditional sketching is where Sarah's art practice started, and she still fills sketchbooks regularly, using it to study anatomy, perspective, and composition.",
    evidence: [
      'Fills a full sketchbook roughly every month',
      'Studies anatomy and perspective independently',
      'Entered a regional student art competition',
    ],
    projects: [],
    relatedCareers: ['artist', 'product-designer'],
  },
]

export const strengths = [
  {
    id: 'visual-arts',
    subject: 'Visual Arts',
    icon: Palette,
    category: 'Arts',
    color: PINK,
    level: 91,
    delta: 9,
    trend: 'up',
    description: 'Technically strong and consistently improving — clean linework, confident color choices, and a developing personal style.',
    evidence: ['Portfolio piece selected for the school art show', 'Consistently strong marks in art class', 'Mentors younger students in the after-school art club'],
    relatedCareers: ['artist', 'game-designer'],
  },
  {
    id: 'creative-writing',
    subject: 'Creative Writing',
    icon: PenTool,
    category: 'Languages',
    color: VIOLET,
    level: 79,
    delta: 6,
    trend: 'up',
    description: 'Expressive and imaginative. A growing storytelling skill with a distinctive voice.',
    evidence: ['Piece featured in the school literary magazine', 'Keeps a regular writing journal'],
    relatedCareers: ['artist', 'game-designer'],
  },
  {
    id: 'design-thinking',
    subject: 'Design Thinking',
    icon: Lightbulb,
    category: 'Cognitive',
    color: GREEN,
    level: 84,
    delta: 5,
    trend: 'up',
    description: 'Approaches creative problems methodically — sketches multiple concepts before committing and iterates based on feedback.',
    evidence: ['Iterates through multiple concept sketches before finalizing a piece', 'Incorporates feedback from art club critiques readily'],
    relatedCareers: ['game-designer', 'product-designer'],
  },
  {
    id: 'color-composition',
    subject: 'Color & Composition',
    icon: Aperture,
    category: 'Arts',
    color: ORANGE,
    level: 82,
    delta: 4,
    trend: 'steady',
    description: 'A strong eye for color harmony and balanced composition, making her pieces feel polished and intentional.',
    evidence: ['Consistently praised for color choices in art class critiques', 'Studies composition techniques independently'],
    relatedCareers: ['artist', 'product-designer'],
  },
]

export const skills = [
  {
    id: 'digital-illustration',
    name: 'Digital Illustration',
    icon: Paintbrush2,
    color: PINK,
    level: 88,
    category: 'Creative',
    description: 'Confidently creates polished digital illustrations from sketch to final render.',
    evidence: ['Completed over 50 digital illustrations this year', 'Comfortable with layering, shading, and digital color'],
  },
  {
    id: 'character-design',
    name: 'Character Design',
    icon: Wand2,
    color: VIOLET,
    level: 78,
    category: 'Creative',
    description: 'Designs original, memorable characters with a consistent style and personality.',
    evidence: ['Designed a full cast of characters for a personal game project', 'Studies character design from professional artists online'],
  },
  {
    id: 'animation-basics',
    name: 'Animation Basics',
    icon: PlayCircle,
    color: ORANGE,
    level: 68,
    category: 'Creative',
    description: 'Learning frame-by-frame and keyframe animation to bring illustrations to life.',
    evidence: ['Made three short animated clips using her own character designs', 'Completed a free introductory animation course'],
  },
  {
    id: 'game-design',
    name: 'Game Design',
    icon: Gamepad2,
    color: INDIGO,
    level: 76,
    category: 'Technical',
    description: 'Designs playable levels and game mechanics, blending creativity with basic scripting.',
    evidence: ['Built two playable levels in Roblox Studio', 'Participated in a weekend game jam with a small team'],
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    icon: Users2,
    color: BLUE,
    level: 85,
    category: 'Soft',
    description: 'A natural collaborator who works well with others on shared creative projects.',
    evidence: ['Partnered with a small team on a weekend game jam', 'Regularly gives and receives feedback in art club critiques'],
  },
]

export const careers = [
  {
    id: 'artist',
    title: 'Artist',
    icon: Paintbrush2,
    color: PINK,
    category: 'Arts',
    matchPct: 90,
    avgSalary: '$55k avg',
    description:
      'Creates original illustrations, paintings, and digital art. A path built on a strong portfolio more than any single degree.',
    dayInLife: [
      'Sketching and refining original artwork',
      'Taking client or personal commissions',
      'Building and updating an online portfolio',
    ],
    suggestedPath: [
      'Practice daily with a sketchbook or a digital art app',
      'Enter a school or online art competition',
      'Start building a portfolio of your best pieces',
    ],
    afterTenth: 'Any stream works — art college admission is based mainly on a strong portfolio and (for some colleges) a design aptitude exam, not on stream.',
    educationPath: [
      'Any stream in 11th–12th, plus consistent portfolio-building',
      'Bachelor of Fine Arts (BFA) or a design foundation course',
      'Build a strong, focused portfolio in a specific style',
      'Freelance commissions or an entry-level studio/agency role',
      'Grow a following and reputation in a chosen niche',
    ],
    topUniversities: [
      { name: 'Rhode Island School of Design', program: 'BFA in Illustration or Painting' },
      { name: 'National Institute of Design (NID)', program: 'B.Des in Animation Film Design' },
      { name: 'Srishti Manipal Institute of Art, Design and Technology', program: 'BFA in Visual Arts' },
      { name: 'Yale School of Art', program: 'BFA in Painting/Printmaking' },
      { name: 'Slade School of Fine Art (UCL)', program: 'BFA Fine Art' },
    ],
    usefulApps: [
      { name: 'Procreate', description: 'Professional digital painting and illustration app for iPad.', icon: Paintbrush2 },
      { name: 'Adobe Fresco', description: 'Drawing and painting app with realistic brushes and live watercolors.', icon: Wand2 },
      { name: 'ArtStation', description: 'Portfolio platform to showcase work and discover other artists.', icon: Image },
    ],
    relatedSkills: ['digital-illustration', 'character-design', 'team-collaboration'],
  },
  {
    id: 'game-designer',
    title: 'Game Designer',
    icon: Gamepad2,
    color: INDIGO,
    category: 'Design',
    matchPct: 85,
    avgSalary: '$85k avg',
    description:
      'Designs the mechanics, levels, and stories behind games. Blends creativity with technical and programming skill.',
    dayInLife: [
      'Prototyping game mechanics and levels',
      'Playtesting and iterating based on feedback',
      'Working with artists and programmers to bring a vision to life',
    ],
    suggestedPath: [
      'Build a simple game in Roblox Studio or Scratch',
      'Enter a school or online game jam',
      'Keep building both art and coding skills',
    ],
    afterTenth: 'Any stream works, but Science or Commerce with strong computer literacy helps most game-design programs — a portfolio of game projects matters more than the stream itself.',
    educationPath: [
      'Any stream in 11th–12th, plus self-taught game projects',
      "Bachelor's in Game Design, Computer Science, or a related field",
      'Build a portfolio of playable game prototypes',
      'Internship at a game studio',
      'Entry-level Game Designer role',
    ],
    topUniversities: [
      { name: 'DigiPen Institute of Technology', program: 'BA in Game Design' },
      { name: 'University of Southern California', program: 'BA in Interactive Entertainment (Games)' },
      { name: 'SRM Institute of Science and Technology', program: 'B.Tech in Computer Science (Game Design specialization)' },
      { name: 'Full Sail University', program: 'BS in Game Design' },
      { name: 'National Institute of Design (NID)', program: 'B.Des in Game Design' },
    ],
    usefulApps: [
      { name: 'Roblox Studio', description: 'Free, beginner-friendly platform for building and publishing games.', icon: Gamepad2 },
      { name: 'Unity', description: 'Industry-standard game engine used by professional studios.', icon: Cpu },
      { name: 'Scratch', description: 'Visual, block-based programming that teaches core game-design logic.', icon: Puzzle },
    ],
    relatedSkills: ['game-design', 'character-design', 'animation-basics'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: Brain,
    color: GREEN,
    category: 'Technology',
    matchPct: 82,
    avgSalary: '$120k avg',
    description: 'Turns data into insights using statistics and machine learning to drive smarter decisions.',
    dayInLife: [
      'Cleaning and exploring large datasets',
      'Building models to find patterns and predictions',
      'Presenting findings clearly to non-technical audiences',
    ],
    suggestedPath: [
      'Strengthen statistics fundamentals in math class',
      'Try a beginner data-analysis tutorial online',
      'Keep up strong performance in science labs',
    ],
    afterTenth: 'Choose Science with Mathematics (PCM) for 11th–12th — strong statistics and math fundamentals are essential before a Data Science degree.',
    educationPath: [
      'Science (PCM) in 11th–12th',
      "Bachelor's in Computer Science, Statistics, or Mathematics",
      "Master's in Data Science or Statistics (common, not always required)",
      'Build a portfolio of data projects and competitions',
      'Entry-level Data Analyst or Data Scientist role',
    ],
    topUniversities: [
      { name: 'IIT Madras', program: 'BS in Data Science and Applications' },
      { name: 'ISI Kolkata', program: 'B.Stat (Bachelor of Statistics)' },
      { name: 'Stanford University', program: 'BS in Statistics (Data Science track)' },
      { name: 'MIT', program: 'BS in Statistics and Data Science' },
      { name: 'Carnegie Mellon University', program: 'BS in Statistics & Machine Learning' },
    ],
    usefulApps: [
      { name: 'Google Colab', description: 'Free cloud notebooks for practicing Python and data science.', icon: Code2 },
      { name: 'Kaggle', description: 'Real datasets, beginner tutorials, and data-science competitions.', icon: BarChart3 },
      { name: 'Google Sheets', description: 'Foundational spreadsheet skills for organizing and analyzing data.', icon: FileText },
    ],
    relatedSkills: [],
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    icon: Cog,
    color: ORANGE,
    category: 'Engineering',
    matchPct: 74,
    avgSalary: '$95k avg',
    description: 'Designs machines and mechanical systems. A hands-on blend of physics, math, and creativity.',
    dayInLife: [
      'Sketching and modeling mechanical parts and systems',
      'Testing prototypes for durability and performance',
      'Working with a team to refine a design',
    ],
    suggestedPath: [
      'Take a physics elective focused on mechanics',
      'Join a robotics or engineering club',
      'Try a beginner CAD tutorial online',
    ],
    afterTenth: 'Choose Science with Mathematics (PCM) for 11th–12th — it\'s the standard prerequisite for engineering entrance exams and degrees.',
    educationPath: [
      'Science (PCM) in 11th–12th',
      "Bachelor's in Mechanical Engineering (B.Tech/B.E.)",
      'Internships in manufacturing or product design',
      'Entry-level Mechanical Engineer role',
      'Professional certification (e.g., PE) for career advancement',
    ],
    topUniversities: [
      { name: 'IIT Bombay', program: 'B.Tech in Mechanical Engineering' },
      { name: 'IIT Madras', program: 'B.Tech in Mechanical Engineering' },
      { name: 'MIT', program: 'BS in Mechanical Engineering' },
      { name: 'Georgia Institute of Technology', program: 'BS in Mechanical Engineering' },
      { name: 'Delft University of Technology', program: 'BSc in Mechanical Engineering' },
    ],
    usefulApps: [
      { name: 'Tinkercad', description: 'Free, browser-based 3D design — a friendly first step into CAD.', icon: Box },
      { name: 'Fusion 360', description: 'Professional-grade CAD software used by real engineers, free for students.', icon: Boxes },
      { name: 'Khan Academy', description: 'Physics and math fundamentals that underpin mechanical design.', icon: BookOpen },
    ],
    relatedSkills: [],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    icon: Palette,
    color: VIOLET,
    category: 'Design',
    matchPct: 68,
    avgSalary: '$90k avg',
    description: 'Creates intuitive, beautiful product experiences by blending art and technology.',
    dayInLife: [
      'Sketching and prototyping product ideas',
      'Testing designs with real users for feedback',
      'Working closely with engineers to refine a product',
    ],
    suggestedPath: [
      'Try a beginner design tool like Figma',
      'Keep building creative and visual skills',
      'Enter a school or online design challenge',
    ],
    afterTenth: 'Any stream works (Science, Commerce, or Arts) — most design colleges admit based on a separate design aptitude exam (like UCEED or the NID DAT) after 12th, not on stream.',
    educationPath: [
      'Any stream in 11th–12th, plus a design portfolio on the side',
      'Clear a design aptitude exam (UCEED, NID DAT, or similar)',
      "Bachelor's in Design (B.Des) or a related field",
      'Internships and a strong personal portfolio',
      'Entry-level Product/UX Designer role',
    ],
    topUniversities: [
      { name: 'National Institute of Design (NID)', program: 'Bachelor of Design (B.Des) in Industrial Design' },
      { name: 'IIT Bombay (IDC School of Design)', program: 'B.Des in Industrial Design' },
      { name: 'Rhode Island School of Design', program: 'BFA in Industrial Design' },
      { name: 'Parsons School of Design', program: 'BFA in Product Design' },
      { name: 'Stanford University', program: 'BS in Product Design (Joint ME/Art Program)' },
    ],
    usefulApps: [
      { name: 'Figma', description: 'Industry-standard interface and product design tool.', icon: Palette },
      { name: 'Canva', description: 'Quick, approachable visual design practice for beginners.', icon: Image },
      { name: 'Procreate', description: 'Digital sketching and prototyping on iPad.', icon: Paintbrush2 },
    ],
    relatedSkills: ['team-collaboration', 'digital-illustration'],
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist',
    icon: FlaskConical,
    color: BLUE,
    category: 'Science',
    matchPct: 71,
    avgSalary: '$100k avg',
    description: 'Discovers new knowledge through experiments, analysis, and rigorous scientific method.',
    dayInLife: [
      'Designing and running experiments',
      'Analyzing results and drawing conclusions',
      'Writing up findings for others to review',
    ],
    suggestedPath: [
      'Take on an independent science-fair project',
      'Strengthen statistics fundamentals in math class',
      'Volunteer in a school or community science lab',
    ],
    afterTenth: 'Choose Science (PCM or PCB, depending on the field) for 11th–12th — a strong foundation in the sciences is essential before a research-focused degree.',
    educationPath: [
      'Science (PCM or PCB) in 11th–12th',
      "Bachelor's in a science field (Physics, Chemistry, or Biology)",
      "Master's degree, then a PhD in a specialization",
      'Postdoctoral research experience',
      'Research Scientist position at a university, lab, or company',
    ],
    topUniversities: [
      { name: 'Indian Institute of Science (IISc)', program: 'BS (Research) in Physical or Chemical Sciences' },
      { name: 'IIT Kanpur', program: 'BS in Physics or Chemistry' },
      { name: 'MIT', program: 'BS in Physics, Chemistry, or Biology' },
      { name: 'Caltech', program: 'BS in Physics or Chemistry' },
      { name: 'University of Cambridge', program: 'BA in Natural Sciences' },
    ],
    usefulApps: [
      { name: 'Google Scholar', description: 'Search and read real scientific papers for free.', icon: Search },
      { name: 'Wolfram Alpha', description: 'Computational tool for working through math and science problems.', icon: Calculator },
      { name: 'Notion', description: 'Organize research notes, reading lists, and lab logs in one place.', icon: FileText },
    ],
    relatedSkills: [],
  },
]

export const progress = {
  overall: 76,
  subjects: [
    { name: 'Mathematics', level: 92, delta: 8 },
    { name: 'Science', level: 84, delta: 5 },
    { name: 'English', level: 74, delta: 3 },
    { name: 'Technology', level: 92, delta: 6 },
    { name: 'Communication', level: 70, delta: 4 },
  ],
  weeklyTrend: [
    { week: 'W1', score: 62 },
    { week: 'W2', score: 65 },
    { week: 'W3', score: 68 },
    { week: 'W4', score: 70 },
    { week: 'W5', score: 71 },
    { week: 'W6', score: 74 },
    { week: 'W7', score: 76 },
  ],
  achievements: [
    { title: '30-day streak', icon: Zap, color: ORANGE, date: 'This week' },
    { title: 'Top of math class', icon: Award, color: INDIGO, date: 'Last month' },
    { title: 'Hackathon finalist', icon: Rocket, color: GREEN, date: 'Jul 2026' },
    { title: 'Science fair winner', icon: Star, color: VIOLET, date: 'May 2026' },
  ],
  recommendations: [
    { icon: Lightbulb, text: 'Try a beginner machine learning project to channel your AI interest.' },
    { icon: GraduationCap, text: 'Consider an advanced math course to stretch your strongest subject.' },
    { icon: Mic, text: 'Join a debate club to build public speaking confidence.' },
  ],
}

// mock data for the live device-monitoring view — separate from the
// interests/strengths/skills/careers model above, all values are static demo data
export const monitoring = {
  device: { name: "Sarah's iPhone", status: 'online', lastSync: 'Just now' },
  currentActivity: {
    appName: 'TikTok',
    icon: Music2,
    color: RED,
    timeThisSession: '45 min',
    openedAt: '2:15 PM',
    category: 'Social Media · Video',
    contentStatus: 'Appropriate',
  },
  todayUsage: {
    usedMinutes: 285,
    limitMinutes: 480,
    projectedLimitTime: '8:30 PM',
  },
  appsToday: [
    { name: 'TikTok', icon: Music2, color: RED, minutes: 140, pct: 49, sessions: 3 },
    { name: 'Instagram', icon: Camera, color: PINK, minutes: 90, pct: 32, sessions: 2 },
    { name: 'YouTube', icon: PlayCircle, color: RED, minutes: 45, pct: 16, sessions: 1 },
    { name: 'Other', icon: MessageSquare, color: BLUE, minutes: 10, pct: 3, sessions: 1 },
  ],
  hourlyBreakdown: [
    { hour: '8am', minutes: 15 },
    { hour: '9am', minutes: 0 },
    { hour: '10am', minutes: 30 },
    { hour: '11am', minutes: 0 },
    { hour: '12pm', minutes: 0 },
    { hour: '1pm', minutes: 75 },
    { hour: '2pm', minutes: 45 },
  ],
  alerts: [
    { level: 'active', title: 'Usage warning', detail: '4h 45m of the 8h daily limit used', time: 'Now' },
    { level: 'recent', title: 'App limit reached — Instagram', detail: 'Reached its 1.5-hour limit and was removed from the home screen', time: '2:45 PM' },
    { level: 'recent', title: 'Extended session — TikTok', detail: 'Used for 75 minutes straight; a break notification was sent', time: '1:30 PM' },
    { level: 'cleared', title: 'Private browsing attempt', detail: 'Blocked automatically', time: '10:30 AM' },
  ],
  deviceStatus: {
    connection: 'Online',
    battery: 87,
    charging: false,
    location: 'Home',
    wifi: 'Strong',
    appVersion: '2.1.0',
  },
}

// instant-alert trigger scenarios for the parent-side device simulator —
// each maps to a distinct mock "phone screen" state
export const alertTriggers = [
  {
    id: 'app-usage',
    label: 'App Usage Exceeds 30 Minutes',
    detail: 'Alert sent when child uses one app for 30+ minutes.',
    icon: Timer,
    color: '#ef4444',
  },
  {
    id: 'daily-limit',
    label: 'Daily Limit Reaches 80%',
    detail: 'Alert sent when child hits 80% of their daily limit (6.4 of 8 hours).',
    icon: Gauge,
    color: '#ff8a5b',
  },
  {
    id: 'blocked-content',
    label: 'Inappropriate Content Blocked',
    detail: 'Alert sent instantly when child tries to access blocked content.',
    icon: ShieldAlert,
    color: '#ef4444',
  },
  {
    id: 'private-browsing',
    label: 'Private Browsing Attempted',
    detail: 'Alert sent instantly when child tries to enable private/incognito mode.',
    icon: EyeOff,
    color: '#8b5cf6',
  },
  {
    id: 'late-night',
    label: 'Late-Night Usage (After 10 PM)',
    detail: 'Alert sent instantly when child uses the device after bedtime.',
    icon: Moon,
    color: '#3b82f6',
  },
]

export function findById(list, id) {
  return list.find((item) => item.id === id)
}
