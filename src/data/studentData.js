import {
  Cpu, PenTool, Trophy, Video, Telescope,
  Calculator, FlaskConical, BookOpen,
  Lightbulb, Code2, MessageCircle, Users2, Palette,
  Gamepad2, LineChart, Brain,
} from 'lucide-react'

// single source of truth for every page — swap this module for real API
// calls later without touching any component
export const studentProfile = {
  name: 'Alex Johnson',
  initials: 'AJ',
  grade: '10th Grade',
  streak: 12,
  level: 5,
  xp: 2450,
  xpToNext: 3000,
}

export const interests = [
  {
    id: 'robotics',
    title: 'Robotics',
    icon: Cpu,
    category: 'STEM',
    level: 88,
    summary: 'Building and programming machines that move and think.',
    description:
      'Alex has spent the semester building autonomous robots for the school STEM club, combining a love of hands-on engineering with programming logic.',
    evidence: [
      'Led the sensor-wiring team for the club\'s line-following robot',
      'Completed an 8-week intro to Arduino course, final project scored 95%',
      'Volunteers weekly at the robotics lab after school',
    ],
    projects: [
      { title: 'Line-Following Robot', note: 'Built with the STEM club, placed 2nd at regional showcase' },
      { title: 'Smart Plant Waterer', note: 'Personal project using a moisture sensor and Arduino' },
    ],
    relatedCareers: ['software-engineer', 'game-designer'],
  },
  {
    id: 'creative-writing',
    title: 'Creative Writing',
    icon: PenTool,
    category: 'Arts',
    level: 74,
    summary: 'Short stories, worldbuilding, and a growing habit of journaling.',
    description:
      'Alex writes short fiction outside of class and has started submitting to the school literary magazine.',
    evidence: [
      'Two short stories published in the school literary magazine',
      'Keeps a daily journal, over 200 entries this year',
      'Won honorable mention in a regional young-writers contest',
    ],
    projects: [
      { title: '"The Last Signal"', note: 'Sci-fi short story, published in the spring literary magazine' },
    ],
    relatedCareers: ['data-scientist'],
  },
  {
    id: 'basketball',
    title: 'Basketball',
    icon: Trophy,
    category: 'Activities',
    level: 66,
    summary: 'Point guard on the JV team, consistent at practice.',
    description: 'Plays point guard on the junior varsity team and rarely misses a practice.',
    evidence: ['Started 9 of 14 games this season', 'Named "Most Improved" at the end-of-season banquet'],
    projects: [],
    relatedCareers: [],
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    icon: Video,
    category: 'Arts',
    level: 70,
    summary: 'Edits highlight reels and short films for fun and for friends.',
    description: 'Self-taught in video editing software, regularly edits clips for the basketball team and friends\' projects.',
    evidence: ['Edited the JV basketball team\'s season highlight reel', 'Self-taught in two editing tools this year'],
    projects: [{ title: 'Season Highlight Reel', note: 'Edited for the JV basketball team, shared at the banquet' }],
    relatedCareers: ['game-designer'],
  },
  {
    id: 'astronomy',
    title: 'Astronomy',
    icon: Telescope,
    category: 'STEM',
    level: 60,
    summary: 'Backyard stargazing that turned into a real curiosity about space.',
    description: 'Got a telescope last year and has kept a log of observations since — now reads about astrophysics for fun.',
    evidence: ['Keeps an observation log with 40+ entries', 'Attended two planetarium events this year'],
    projects: [],
    relatedCareers: ['data-scientist'],
  },
]

export const strengths = [
  {
    id: 'mathematics',
    subject: 'Mathematics',
    icon: Calculator,
    level: 88,
    delta: 8,
    trend: 'up',
    description: 'Consistently strong across algebra and early geometry, with especially fast progress this term.',
    evidence: ['Top decile on the fall district math assessment', 'A average across the semester', 'Tutors a younger student in algebra'],
    relatedCareers: ['software-engineer', 'data-scientist'],
  },
  {
    id: 'science',
    subject: 'Science',
    icon: FlaskConical,
    level: 82,
    delta: 5,
    trend: 'up',
    description: 'Strong grasp of physical science concepts, especially in lab settings where Alex takes initiative.',
    evidence: ['Science fair project scored in the top 3 of the grade', 'Frequently leads lab groups'],
    relatedCareers: ['data-scientist', 'software-engineer'],
  },
  {
    id: 'english',
    subject: 'English',
    icon: BookOpen,
    level: 74,
    delta: 3,
    trend: 'steady',
    description: 'Solid writer with a strong voice; reading comprehension is a growth area for next term.',
    evidence: ['Two pieces published in the literary magazine', 'B+ average, improving steadily'],
    relatedCareers: [],
  },
]

export const skills = [
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    icon: Lightbulb,
    level: 90,
    category: 'Cognitive',
    description: 'Approaches unfamiliar problems methodically and rarely gives up on a tricky bug or puzzle.',
    evidence: ['Debugged the robotics team\'s sensor issue independently', 'Top scorer on the school math-puzzle challenge'],
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: Code2,
    level: 92,
    category: 'Technical',
    description: 'Picks up new tools quickly — from Arduino to video editing software to basic Python.',
    evidence: ['Completed an intro Python course independently', 'Comfortable with Arduino, Scratch, and two video editors'],
  },
  {
    id: 'creativity',
    name: 'Creativity',
    icon: Palette,
    level: 85,
    category: 'Cognitive',
    description: 'Generates original ideas readily, whether in a story, a robot design, or an edited video.',
    evidence: ['Original story concepts in every writing assignment', 'Designed a unique chassis for the robotics project'],
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: MessageCircle,
    level: 70,
    category: 'Interpersonal',
    description: 'Comfortable explaining ideas one-on-one; presenting to larger groups is still developing.',
    evidence: ['Tutors a peer in algebra weekly', 'Working on class presentations this term'],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    icon: Users2,
    level: 65,
    category: 'Interpersonal',
    description: 'Takes charge in small-group settings and is starting to step into more visible leadership roles.',
    evidence: ['Led the sensor team on the robotics project', 'Nominated as JV team co-captain next season'],
  },
]

export const careers = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: Code2,
    category: 'Technology',
    matchPct: 91,
    salaryRange: '$85k – $160k',
    description:
      'Designs and builds the software behind apps, websites, and systems. A strong fit for Alex\'s problem-solving instincts and comfort with new tools.',
    dayInLife: [
      'Writing and testing code to build new features',
      'Debugging issues reported by users or teammates',
      'Collaborating with designers and other engineers on planning',
    ],
    suggestedPath: [
      'Take an intro programming elective next semester',
      'Join or continue with the robotics/coding club',
      'Build a small personal coding project over the summer',
      'Look into AP Computer Science for 11th grade',
    ],
    relatedSkills: ['problem-solving', 'technology'],
  },
  {
    id: 'game-designer',
    title: 'Game Designer',
    icon: Gamepad2,
    category: 'Design',
    matchPct: 78,
    salaryRange: '$65k – $120k',
    description:
      'Combines creativity and technical skill to design game mechanics, levels, and stories — a natural extension of Alex\'s interest in creative projects and editing.',
    dayInLife: [
      'Prototyping game mechanics and levels',
      'Playtesting and iterating based on feedback',
      'Working with artists and programmers to bring a vision to life',
    ],
    suggestedPath: [
      'Try a beginner game-design tool like Scratch or Unity',
      'Keep building video-editing and storytelling skills',
      'Enter a school or online game jam',
    ],
    relatedSkills: ['creativity', 'technology'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: LineChart,
    category: 'Science',
    matchPct: 72,
    salaryRange: '$90k – $165k',
    description:
      'Finds patterns and insights in data to help organizations make decisions — a strong match for Alex\'s math and science strengths.',
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
    relatedSkills: ['problem-solving', 'communication'],
  },
]

export const progress = {
  overall: 74,
  subjects: [
    { name: 'Mathematics', level: 88, delta: 8 },
    { name: 'Science', level: 82, delta: 5 },
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
  ],
  achievements: [
    { title: 'Science Fair — Top 3', icon: FlaskConical, date: 'Nov 2026' },
    { title: 'Math Assessment — Top 10%', icon: Calculator, date: 'Oct 2026' },
    { title: 'Literary Magazine Feature', icon: BookOpen, date: 'Oct 2026' },
    { title: 'Robotics Showcase — 2nd Place', icon: Cpu, date: 'Nov 2026' },
  ],
  recommendations: [
    {
      title: 'Try an intro programming elective',
      description: 'Builds directly on strong problem-solving and technology skills.',
      icon: Code2,
    },
    {
      title: 'Practice presenting to a group',
      description: 'Communication is growing but presentations are still a stretch — small opportunities help.',
      icon: MessageCircle,
    },
    {
      title: 'Explore a data-analysis tutorial',
      description: 'A natural next step given strong math and science performance.',
      icon: Brain,
    },
  ],
}

export function findById(list, id) {
  return list.find((item) => item.id === id)
}
