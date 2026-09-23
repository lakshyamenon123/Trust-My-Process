import {
  Cpu, Code2, Sigma, Music, Trophy,
  Calculator, Brain, BookOpen, PenTool,
  Puzzle, Mic, BarChart3, Users2,
  Cog, Palette, FlaskConical,
  Zap, Award, Rocket, Star, Lightbulb, GraduationCap,
  Music2, Camera, PlayCircle, MessageSquare,
  Timer, Gauge, ShieldAlert, EyeOff, Moon,
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
    relatedCareers: ['software-engineer', 'research-scientist'],
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
    relatedCareers: ['software-engineer', 'data-scientist'],
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
    relatedCareers: ['product-designer'],
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
    relatedCareers: ['software-engineer', 'data-scientist'],
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
    relatedCareers: ['software-engineer', 'research-scientist'],
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
    relatedCareers: ['product-designer'],
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
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: Code2,
    color: INDIGO,
    category: 'Technology',
    matchPct: 88,
    avgSalary: '$110k avg',
    description:
      'Designs and builds software applications. High demand, strong career growth, and endless room to specialize.',
    dayInLife: [
      'Writing and testing code to build new features',
      'Debugging issues reported by users or teammates',
      'Collaborating with designers and other engineers on planning',
    ],
    suggestedPath: [
      'Take an intro programming elective next semester',
      'Join or continue with a coding club',
      'Build a small personal coding project over the summer',
      'Look into AP Computer Science for 11th grade',
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
