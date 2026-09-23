import {
  Cpu, Code2, Sigma, Music, Trophy,
  Calculator, Brain, BookOpen, PenTool,
  Puzzle, Mic, BarChart3, Users2,
  Cog, Palette, FlaskConical,
  Zap, Award, Rocket, Star, Lightbulb, GraduationCap,
} from 'lucide-react'

// single source of truth for every page — swap this module for real API
// calls later without touching any component
const INDIGO = '#5145cd'
const GREEN = '#0fb67d'
const ORANGE = '#ff8a5b'
const VIOLET = '#8b5cf6'
const BLUE = '#3b82f6'

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
    level: 85,
    summary: 'Always curious about how gadgets and software actually work.',
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
    level: 80,
    summary: 'Drawn to machine learning projects and writing her own code.',
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
    level: 90,
    summary: 'Consistently the subject she reaches for first.',
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
    level: 65,
    summary: 'Practices piano most evenings, mostly for herself.',
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
    level: 60,
    summary: 'Plays on the school basketball team, big on teamwork.',
    description:
      'Sarah plays guard on the junior varsity basketball team and is known more for her teamwork and effort than for standing out individually.',
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
    color: INDIGO,
    level: 92,
    delta: 8,
    trend: 'up',
    description: 'Consistently strong across algebra and early geometry, with especially fast progress this term.',
    evidence: ['Top of her math class this term', 'A average across the semester', 'Tutors a classmate in algebra'],
    relatedCareers: ['software-engineer', 'data-scientist'],
  },
  {
    id: 'logical-thinking',
    subject: 'Logical Thinking',
    icon: Brain,
    color: GREEN,
    level: 88,
    delta: 5,
    trend: 'up',
    description: 'Breaks down complex problems methodically and reasons through them step by step.',
    evidence: ['Strong performance on logic-based puzzle challenges', 'Debugs her own code independently'],
    relatedCareers: ['software-engineer', 'research-scientist'],
  },
  {
    id: 'reading-comprehension',
    subject: 'Reading Comprehension',
    icon: BookOpen,
    color: ORANGE,
    level: 85,
    delta: 3,
    trend: 'steady',
    description: 'Reads closely and picks up on nuance and subtext other students often miss.',
    evidence: ['Consistently strong reading-assessment scores', 'Leads discussion in English class'],
    relatedCareers: [],
  },
  {
    id: 'creative-writing',
    subject: 'Creative Writing',
    icon: PenTool,
    color: VIOLET,
    level: 79,
    delta: 6,
    trend: 'up',
    description: 'Has a distinct voice and is growing more confident sharing her writing.',
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
    description: 'Comfortable writing and debugging basic Python scripts and small programs.',
    evidence: ['Completed an intro Python course independently', 'Built a simple chatbot for a class project'],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    icon: Puzzle,
    color: GREEN,
    level: 80,
    category: 'Cognitive',
    description: 'Approaches unfamiliar problems methodically and rarely gives up on a tricky bug or puzzle.',
    evidence: ['Debugged her own code independently', 'Strong performance on logic-puzzle challenges'],
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking',
    icon: Mic,
    color: ORANGE,
    level: 64,
    category: 'Interpersonal',
    description: "Growing more comfortable presenting to a group, though it's still a stretch outside small settings.",
    evidence: ['Gave a class presentation on a science project', 'Working on presentations this term'],
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    icon: BarChart3,
    color: BLUE,
    level: 70,
    category: 'Technical',
    description: 'Picking up the basics of working with data and spotting patterns in numbers.',
    evidence: ['Analyzed survey data for a class project', 'Comfortable reading charts and graphs'],
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    icon: Users2,
    color: VIOLET,
    level: 85,
    category: 'Interpersonal',
    description: 'Works well in group settings and is often the one keeping a team on track.',
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

export function findById(list, id) {
  return list.find((item) => item.id === id)
}
