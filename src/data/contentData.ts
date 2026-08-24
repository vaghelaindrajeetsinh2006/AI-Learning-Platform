import { Benefit, Category, FAQItem, LearnerProfile, ResponsiblePrinciple, Step } from '../types';

export const QUICK_BENEFITS: Benefit[] = [
  {
    id: 'beginner-friendly',
    title: 'Beginner Friendly',
    description: 'Clear, step-by-step tracks designed specifically for beginners without confusing technical barriers.',
    iconName: 'Smile'
  },
  {
    id: 'ai-assisted',
    title: 'AI-Assisted Learning',
    description: 'Explore intelligent study aids that clarify concepts, break down complex topics, and guide practice.',
    iconName: 'Sparkles'
  },
  {
    id: 'practice-focused',
    title: 'Practice Focused',
    description: 'Learn by actively coding, solving structured quizzes, and completing practical learning milestones.',
    iconName: 'Target'
  },
  {
    id: 'learn-at-pace',
    title: 'Learn at Your Pace',
    description: 'Study on your own schedule with modular units, clear checkpoints, and flexible self-paced review.',
    iconName: 'Clock'
  }
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    stepNumber: '01',
    title: 'Choose Your Goal',
    description: 'Select your learning path from web development, Python, algorithms, AI foundations, or design.',
    detail: 'Identify your target skill area and review course prerequisites to start from the right level.',
    iconName: 'Compass'
  },
  {
    stepNumber: '02',
    title: 'Explore Courses',
    description: 'Browse structured modules created with clear learning outcomes, syllabus topics, and practical checkpoints.',
    detail: 'Dive into concise modular units broken down into bite-sized, digestible lessons.',
    iconName: 'BookOpen'
  },
  {
    stepNumber: '03',
    title: 'Learn & Practice',
    description: 'Work through interactive exercises, code examples, and structured hands-on challenges.',
    detail: 'Reinforce theoretical knowledge through immediate practical application and problem-solving.',
    iconName: 'Laptop'
  },
  {
    stepNumber: '04',
    title: 'Improve With AI',
    description: 'Use AI-assisted study tools for concept explanations, smart quizzes, and personalized review.',
    detail: 'Deepen understanding, verify knowledge retention, and receive guided learning hints responsibly.',
    iconName: 'Bot'
  }
];

export const WHY_CHOOSE_BENEFITS: Benefit[] = [
  {
    id: 'simple-exp',
    title: 'Simple Learning Experience',
    description: 'A distraction-free, intuitive interface built to keep your focus entirely on absorbing new knowledge.',
    iconName: 'Layout'
  },
  {
    id: 'ai-study',
    title: 'AI-Assisted Study',
    description: 'Smart conceptual tools designed to explain difficult topics in accessible, relatable analogies.',
    iconName: 'Sparkles'
  },
  {
    id: 'practical-learning',
    title: 'Practical Learning',
    description: 'Action-oriented modules emphasizing building real projects and solving meaningful challenges.',
    iconName: 'Layers'
  },
  {
    id: 'beginner-first',
    title: 'Beginner Friendly',
    description: 'Gentle on-ramps without assuming prior background, supported by thorough introductory primers.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'flexible-learning',
    title: 'Flexible Learning',
    description: 'Structured self-paced units that seamlessly adapt around school, university, or work commitments.',
    iconName: 'Calendar'
  },
  {
    id: 'skill-focused',
    title: 'Skill Focused',
    description: 'Curriculum structured around practical industry competencies and fundamental problem-solving.',
    iconName: 'Award'
  },
  {
    id: 'clean-interface',
    title: 'Clean Interface',
    description: 'Modern, high-contrast, accessible typography and layout crafted with care for extended study comfort.',
    iconName: 'ShieldCheck'
  }
];

export const LEARNING_CATEGORIES: Category[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Core logic, syntax, object-oriented concepts, and algorithmic problem-solving across modern languages.',
    iconName: 'Code',
    sampleTopics: ['Python', 'JavaScript', 'Logic Building', 'Git & Version Control'],
    coursesCount: '3 Courses Available'
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    description: 'Foundations of machine learning, neural networks, natural language processing, and ethical AI stewardship.',
    iconName: 'Cpu',
    sampleTopics: ['Machine Learning', 'Neural Networks', 'AI Ethics', 'Prompt Design'],
    coursesCount: '2 Courses Available'
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Data analysis, statistics, data visualization, and turning raw data into meaningful insights.',
    iconName: 'BarChart3',
    sampleTopics: ['Data Analysis', 'Pandas & NumPy', 'Data Visualization', 'SQL Basics'],
    coursesCount: '2 Courses Available'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Building modern, accessible, responsive websites and interactive web applications.',
    iconName: 'Globe',
    sampleTopics: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Layouts', 'Web Accessibility'],
    coursesCount: '3 Courses Available'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'User-centered interface design, typography, wireframing, color theory, and prototyping.',
    iconName: 'Palette',
    sampleTopics: ['UI Principles', 'UX Research', 'Figma Basics', 'Design Systems'],
    coursesCount: '2 Courses Available'
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Clear written communication, technical presentations, active listening, and team collaboration.',
    iconName: 'MessageSquare',
    sampleTopics: ['Technical Writing', 'Public Speaking', 'Active Listening', 'Peer Reviews'],
    coursesCount: '1 Course Available'
  },
  {
    id: 'career-skills',
    name: 'Career Skills',
    description: 'Problem-solving strategies, interview preparedness, resume framing, and continuous learning habits.',
    iconName: 'Briefcase',
    sampleTopics: ['Problem Solving', 'Interview Readiness', 'Project Portfolios', 'Self-Directed Learning'],
    coursesCount: '2 Courses Available'
  }
];

export const RESPONSIBLE_AI_PRINCIPLES: ResponsiblePrinciple[] = [
  {
    title: 'Learn Responsibly',
    description: 'AI should support learning, not replace independent thinking.',
    recommendation: 'Use AI tools as a cognitive scaffold to brainstorm, clarify confusing passages, and test your understanding — not as a replacement for mental effort.',
    iconName: 'Brain'
  },
  {
    title: 'Verify Important Information',
    description: 'Learners should verify important academic information using trusted sources.',
    recommendation: 'Cross-reference AI-generated explanations and summaries against authoritative textbooks, academic publications, official documentation, and educator guidance.',
    iconName: 'CheckCheck'
  },
  {
    title: 'Protect Privacy',
    description: 'Do not share sensitive personal information with AI tools.',
    recommendation: 'Never input passwords, private contact information, academic identification numbers, or confidential documents into automated AI systems.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Use AI as a Learning Assistant',
    description: 'Use AI to understand, practice and improve instead of simply copying answers.',
    recommendation: 'Engage with AI to generate practice questions, identify flaws in your reasoning, and explore multiple approaches rather than copying solutions.',
    iconName: 'Lightbulb'
  },
  {
    title: 'AI Does Not Replace Teachers',
    description: 'AI should complement teachers, trusted resources and independent learning.',
    recommendation: 'Technology works best as an accessible supplementary assistant. Instructors, mentors, and collaborative peers provide vital context, critique, and human guidance.',
    iconName: 'Users'
  }
];

export const LEARNER_PROFILES: LearnerProfile[] = [
  {
    type: 'Students',
    role: 'School & College Learners',
    description: 'Reinforce coursework, prepare for exams, and break down dense textbook theories into intuitive, memorable analogies.',
    howLearnAIHelps: [
      'Interactive quiz generation for active recall study sessions',
      'Step-by-step analogies for complex STEM topics',
      'Study planning tools to balance coursework deadlines'
    ],
    iconName: 'GraduationCap',
    color: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    type: 'Beginners',
    role: 'First-Time Tech Explorers',
    description: 'Start coding and technical concepts with zero intimidation, guided by structured tracks and friendly language.',
    howLearnAIHelps: [
      'Jargon-free explanations of core coding syntax',
      'Guided practice hints that nurture confidence',
      'Paced learning without overwhelming technical jargon'
    ],
    iconName: 'Compass',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    type: 'Skill Builders',
    role: 'Curious & Continuous Learners',
    description: 'Broaden your digital skillset across web development, design, algorithmic logic, and artificial intelligence.',
    howLearnAIHelps: [
      'Structured learning roadmaps tailored to personal goals',
      'Hands-on project checkpoints to build practical muscle memory',
      'Quick topic summarizers for rapid skill refreshers'
    ],
    iconName: 'Layers',
    color: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    type: 'Career Explorers',
    role: 'Professional & Tech Transitioners',
    description: 'Discover new fields, sharpen foundational technical communication, and prepare for industry opportunities.',
    howLearnAIHelps: [
      'Exploration of high-demand digital skills (UI/UX, Python, Web)',
      'Communication and technical presentation practice concepts',
      'Self-paced learning that fits around professional schedules'
    ],
    iconName: 'Briefcase',
    color: 'bg-amber-50 text-amber-700 border-amber-200'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is LearnAI?',
    answer: 'LearnAI is an educational platform concept that combines structured course tracks with responsible, AI-assisted learning tools. It is designed to help students and beginners understand complex concepts, practice skills, and organize their learning paths in an engaging and accessible environment.'
  },
  {
    id: 'faq-2',
    category: 'Audience',
    question: 'Who can use LearnAI?',
    answer: 'LearnAI is designed for school students, college learners, programming beginners, exam preparation candidates, and curious lifelong learners looking for friendly, accessible, and structured educational content.'
  },
  {
    id: 'faq-3',
    category: 'Curriculum',
    question: 'What can I learn?',
    answer: 'You can explore foundational subjects including Web Development (HTML, CSS, JavaScript), Python Programming, Data Structures & Algorithms, Artificial Intelligence Foundations, UI/UX Design, and Professional Communication Skills.'
  },
  {
    id: 'faq-4',
    category: 'AI Technology',
    question: 'How does AI support learning on LearnAI?',
    answer: 'AI tools act as study companions. They help break down challenging topics into simple analogies, generate custom review quizzes, summarize long reading materials, and suggest structured study schedules. In this concept platform, these tools are demonstrated as interactive frontend prototypes.'
  },
  {
    id: 'faq-5',
    category: 'Accessibility',
    question: 'Is LearnAI beginner friendly?',
    answer: 'Yes! LearnAI is built from the ground up for beginners. Every topic is introduced with clear, step-by-step explanations, relatable real-world analogies, and guided practice checkpoints to prevent feelings of overwhelm.'
  },
  {
    id: 'faq-6',
    category: 'Ethics & Pedagogy',
    question: 'Does AI replace teachers?',
    answer: 'No, absolutely not. We firmly believe that AI should complement—never replace—educators, mentors, and independent critical thinking. LearnAI emphasizes responsible AI usage: using technology to assist practice and deepen understanding, while relying on teachers and verified academic sources for guidance.'
  }
];
