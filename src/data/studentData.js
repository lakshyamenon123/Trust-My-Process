import {
  Cpu, Code2, Sigma, Music, Trophy,
  Calculator, Brain, BookOpen, PenTool,
  Puzzle, Mic, BarChart3, Users2,
  Cog, Palette, FlaskConical,
  Zap, Award, Rocket, Star, Lightbulb, GraduationCap,
  Music2, Camera, PlayCircle, MessageSquare,
  Timer, Gauge, ShieldAlert, EyeOff, Moon,
  Paintbrush2, Gamepad2, Box, Boxes, Search, FileText, Image, Wand2,
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
    id: 'technology',
    title: 'Technology',
    icon: Cpu,
    category: 'STEM',
    color: INDIGO,
    level: 78,
    summary: 'Fascinated by how devices and software work, from hardware to apps.',
    description:
      'Sarah gravitates toward technology in and out of the classroom — tinkering with hardware, exploring new apps, and asking how things are built.',
    evidence: [
      'Built a personal website from scratch',
      'Took apart and reassembled an old laptop for fun',
      'Regularly explores new apps and tools independently',
    ],
    projects: [{ title: 'Personal Website', note: 'Built and deployed a portfolio site using HTML and CSS' }],
    relatedCareers: ['game-designer', 'research-scientist'],
  },
  {
    id: 'ai-coding',
    title: 'AI & Coding',
    icon: Code2,
    category: 'STEM',
    color: GREEN,
    level: 65,
    summary: 'Builds small programs and experiments with AI tools. Strong curiosity for how they work.',
    description:
      'What started as curiosity about how AI assistants work turned into hands-on coding practice — Sarah now builds small Python projects on her own time.',
    evidence: [
      'Completed an intro Python course independently',
      'Built a simple chatbot for a class project',
      'Watches machine-learning tutorials outside of school',
    ],
    projects: [{ title: 'Class Chatbot', note: 'A rule-based chatbot built for a computer science elective' }],
    relatedCareers: ['game-designer', 'data-scientist'],
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    icon: Sigma,
    category: 'STEM',
    color: ORANGE,
    level: 82,
    summary: 'Loves solving complex problems and puzzles. Excels at algebra and beyond.',
    description:
      'Math comes naturally to Sarah — she works ahead in her textbook and helps classmates who are stuck on problem sets.',
    evidence: [
      'Top of her math class this term',
      'Completes extra practice problems for fun',
      'Tutors a classmate in algebra',
    ],
    projects: [],
    relatedCareers: ['data-scientist', 'research-scientist'],
  },
  {
    id: 'music',
    title: 'Music',
    icon: Music,
    category: 'Arts',
    color: VIOLET,
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
    relatedCareers: ['artist', 'product-designer'],
  },
  {
    id: 'sports',
    title: 'Sports',
    icon: Trophy,
    category: 'Activities',
    color: BLUE,
    level: 55,
    summary: 'Active in basketball and swimming. Values teamwork, discipline, and effort.',
    description:
      'Sarah plays guard on the junior varsity basketball team and swims recreationally, and is known more for her teamwork and effort than for standing out individually.',
    evidence: [
      'Regular starter on the JV basketball team',
      'Rarely misses a practice',
      'Encourages teammates during games',
    ],
    projects: [],
    relatedCareers: [],
  },
]

export const strengths = [
  {
    id: 'mathematics',
    subject: 'Mathematics',
    icon: Calculator,
    category: 'STEM',
    color: INDIGO,
    level: 92,
    delta: 8,
    trend: 'up',
    description: 'Consistently top of the class. Strong algebraic reasoning and impressive problem-solving speed.',
    evidence: ['Top of her math class this term', 'A average across the semester', 'Tutors a classmate in algebra'],
    relatedCareers: ['game-designer', 'data-scientist'],
  },
  {
    id: 'logical-thinking',
    subject: 'Logical Thinking',
    icon: Brain,
    category: 'Cognitive',
    color: GREEN,
    level: 88,
    delta: 5,
    trend: 'up',
    description: 'Excellent at breaking down complex problems and identifying patterns others miss.',
    evidence: ['Strong performance on logic-based puzzle challenges', 'Debugs her own code independently'],
    relatedCareers: ['game-designer', 'research-scientist'],
  },
  {
    id: 'reading-comprehension',
    subject: 'Reading Comprehension',
    icon: BookOpen,
    category: 'Languages',
    color: ORANGE,
    level: 85,
    delta: 3,
    trend: 'steady',
    description: 'Strong vocabulary and a clear understanding of complex texts across subjects.',
    evidence: ['Consistently strong reading-assessment scores', 'Leads discussion in English class'],
    relatedCareers: [],
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
    relatedCareers: ['artist', 'product-designer'],
  },
]

export const skills = [
  {
    id: 'python-programming',
    name: 'Python Programming',
    icon: Code2,
    color: INDIGO,
    level: 72,
    category: 'Technical',
    description: 'Can build scripts and simple apps. Currently learning data libraries like pandas.',
    evidence: ['Completed an intro Python course independently', 'Built a simple chatbot for a class project'],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    icon: Puzzle,
    color: GREEN,
    level: 80,
    category: 'Cognitive',
    description: 'Approaches challenges methodically and creatively, rarely giving up on hard problems.',
    evidence: ['Debugged her own code independently', 'Strong performance on logic-puzzle challenges'],
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking',
    icon: Mic,
    color: ORANGE,
    level: 64,
    category: 'Communication',
    description: 'Growing confidence. Presented at the school assembly and a science fair.',
    evidence: ['Gave a class presentation on a science project', 'Working on presentations this term'],
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    icon: BarChart3,
    color: BLUE,
    level: 70,
    category: 'Technical',
    description: 'Comfortable building charts and applying basic statistics to real datasets.',
    evidence: ['Analyzed survey data for a class project', 'Comfortable reading charts and graphs'],
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    icon: Users2,
    color: VIOLET,
    level: 85,
    category: 'Soft',
    description: 'A natural leader in group projects who supports and lifts up peers.',
    evidence: ['Co-captain candidate for the JV basketball team', 'Regularly partners well in group projects'],
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
    relatedSkills: ['team-collaboration'],
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
    relatedSkills: ['python-programming', 'problem-solving'],
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
    relatedSkills: ['data-analysis', 'problem-solving'],
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
    relatedSkills: ['problem-solving', 'data-analysis'],
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
    relatedSkills: ['team-collaboration', 'python-programming'],
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
    relatedSkills: ['data-analysis', 'problem-solving'],
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
