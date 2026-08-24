import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'Web Development',
    subjectKey: 'web-dev',
    symbol: '</>',
    symbolColor: 'text-orange-600 bg-orange-50 border-orange-200',
    description: 'HTML5, CSS3, JavaScript and modern responsive web fundamentals.',
    detailedDescription: 'A complete foundational track designed for beginners to build responsive websites, understand DOM manipulation, structure interactive user interfaces, and learn modern frontend development practices.',
    level: 'Beginner',
    duration: '6 Modules • 24 Topics',
    lessonsCount: 24,
    iconName: 'Globe',
    color: 'from-orange-500 to-indigo-600',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    syllabus: [
      {
        title: 'Module 1: Foundations of HTML5 Markup',
        topics: ['How the web works & HTTP basics', 'Semantic HTML5 structure (<nav>, <main>, <article>)', 'Forms, accessible inputs & metadata']
      },
      {
        title: 'Module 2: Styling with Modern CSS3',
        topics: ['CSS Box Model (margin, border, padding, content)', 'Flexbox & CSS Grid multi-column systems', 'Responsive media queries & mobile styling']
      },
      {
        title: 'Module 3: JavaScript Programming & DOM',
        topics: ['Variables (let, const), types & operators', 'Functions, scopes, closures & arrow syntax', 'DOM tree querying & event listeners']
      },
      {
        title: 'Module 4: Practical Web Projects & DevTools',
        topics: ['Building interactive web applications', 'Debugging in browser DevTools & console', 'Modern semantic best practices & deployment']
      }
    ],
    learningOutcomes: [
      'Write clean, accessible semantic HTML5 markup',
      'Create fluid, responsive multi-column layouts with CSS Grid & Flexbox',
      'Add interactivity and dynamic DOM handling using modern JavaScript',
      'Build practical frontend web projects from scratch'
    ]
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    category: 'Programming',
    subjectKey: 'python',
    symbol: 'Py',
    symbolColor: 'text-emerald-700 bg-emerald-50 border-emerald-300',
    description: 'Learn Python syntax, data structures, loops, and logic through practical examples.',
    detailedDescription: 'Master the core syntax, logical reasoning, and programming structures of Python. Learn how to write clean, readable code and solve practical computational problems.',
    level: 'Beginner',
    duration: '5 Modules • 20 Topics',
    lessonsCount: 20,
    iconName: 'Code2',
    color: 'from-emerald-500 to-teal-600',
    tags: ['Python', 'Problem Solving', 'Data Types', 'Functions', 'OOP Basics'],
    syllabus: [
      {
        title: 'Module 1: Introduction to Python Syntax',
        topics: ['Installing Python & editor setup', 'Variables, numbers, strings & f-strings', 'Basic input/output & type casting']
      },
      {
        title: 'Module 2: Control Flow & Logical Operators',
        topics: ['Conditional statements (if, elif, else)', 'For and while loops with range()', 'Logical operators (and, or, not) & booleans']
      },
      {
        title: 'Module 3: Python Data Structures',
        topics: ['Lists vs Tuples vs Sets vs Dictionaries', 'List comprehensions & slice notation', 'Iterating over structured data collections']
      },
      {
        title: 'Module 4: Functions & Modularity',
        topics: ['Defining custom functions & default arguments', '*args, **kwargs & return values', 'Importing built-in math, random & datetime modules']
      }
    ],
    learningOutcomes: [
      'Understand core programming logic and computational thinking',
      'Manipulate structured data with Python lists, tuples, and dictionaries',
      'Write reusable functions, clean loops, and modular scripts',
      'Debug runtime errors and exception handling systematically'
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    category: 'Computer Science',
    subjectKey: 'dsa',
    symbol: '01/{}',
    symbolColor: 'text-purple-700 bg-purple-50 border-purple-200',
    description: 'Build Big-O complexity intuition, linear/tree structures, and problem-solving skills.',
    detailedDescription: 'Strengthen your conceptual foundation in key data structures such as arrays, stacks, queues, linked lists, and trees, along with foundational sorting, searching, and recursion techniques.',
    level: 'Intermediate',
    duration: '6 Modules • 26 Topics',
    lessonsCount: 26,
    iconName: 'Binary',
    color: 'from-violet-500 to-purple-600',
    tags: ['Algorithms', 'Big-O', 'Arrays', 'Stacks & Queues', 'Recursion', 'Trees'],
    syllabus: [
      {
        title: 'Module 1: Algorithm Analysis & Big-O Notation',
        topics: ['Big-O Notation overview (O(1), O(log n), O(n), O(n²))', 'Time & space complexity fundamentals', 'Best, worst & average case scenarios']
      },
      {
        title: 'Module 2: Linear Data Structures',
        topics: ['Arrays & dynamic sizing allocation', 'Linked lists (singly & doubly linked)', 'Stacks (LIFO) and Queues (FIFO) mechanics']
      },
      {
        title: 'Module 3: Searching & Sorting Foundations',
        topics: ['Linear Search vs. Binary Search on sorted data', 'Bubble, Insertion & Selection sorts', 'Merge Sort & Quick Sort divide-and-conquer principles']
      },
      {
        title: 'Module 4: Trees, Graphs & Recursion',
        topics: ['Recursion mechanics and base case conditions', 'Binary trees & tree traversals (Inorder, Preorder, Postorder)', 'Binary Search Tree (BST) insertion and search rules']
      }
    ],
    learningOutcomes: [
      'Analyze the computational efficiency of code using Big-O notation',
      'Select the optimal data structure for given computational tasks',
      'Implement standard searching, sorting, and recursive algorithms',
      'Develop systematic step-by-step logic to tackle coding challenges'
    ]
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'Artificial Intelligence',
    subjectKey: 'ai',
    symbol: 'AI✦',
    symbolColor: 'text-amber-700 bg-amber-50 border-amber-300',
    description: 'Understand machine learning, neural networks, LLM basics, and responsible AI ethics.',
    detailedDescription: 'An accessible, responsible exploration of artificial intelligence concepts, machine learning paradigms, neural networks, natural language processing, and the ethical considerations surrounding AI technology.',
    level: 'Beginner',
    duration: '5 Modules • 18 Topics',
    lessonsCount: 18,
    iconName: 'Cpu',
    color: 'from-amber-500 to-orange-600',
    tags: ['Machine Learning', 'Neural Networks', 'AI Ethics', 'LLM Concepts', 'NLP Basics'],
    syllabus: [
      {
        title: 'Module 1: What is AI & Machine Learning?',
        topics: ['Definition & history of Artificial Intelligence', 'Rule-based systems vs. Data-driven learning systems', 'Real-world applications of AI across everyday tools']
      },
      {
        title: 'Module 2: Supervised vs. Unsupervised Learning',
        topics: ['Supervised learning with labeled datasets (Classification & Regression)', 'Unsupervised learning (Clustering & Pattern Discovery)', 'Training vs. Validation vs. Test split evaluation']
      },
      {
        title: 'Module 3: Neural Networks & Deep Learning',
        topics: ['Artificial neurons, weights, biases & activation functions', 'Multi-layer Perceptrons & feedforward networks', 'Introduction to Computer Vision & Natural Language Processing']
      },
      {
        title: 'Module 4: Generative AI & Responsible Ethics',
        topics: ['Large Language Models (LLMs) & token probability predictions', 'Algorithmic bias, fairness & data privacy', 'Academic integrity & responsible AI usage guidelines']
      }
    ],
    learningOutcomes: [
      'Explain core AI and machine learning concepts in plain language',
      'Differentiate between supervised, unsupervised, and reinforcement learning',
      'Understand how artificial neural networks and language models operate',
      'Apply ethical guidelines and best practices in modern AI adoption'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design',
    subjectKey: 'design',
    symbol: 'UI/UX',
    symbolColor: 'text-rose-600 bg-rose-50 border-rose-200',
    description: 'Learn user empathy, wireframing, color theory, typography, and design systems.',
    detailedDescription: 'Learn how to design intuitive, beautiful, and accessible digital products. Explore user research, wireframing, color theory, typography, design systems, and prototyping principles.',
    level: 'All Levels',
    duration: '4 Modules • 16 Topics',
    lessonsCount: 16,
    iconName: 'Palette',
    color: 'from-pink-500 to-rose-600',
    tags: ['Wireframing', 'Color Theory', 'Typography', 'WCAG Accessibility', 'Design Systems'],
    syllabus: [
      {
        title: 'Module 1: User Experience (UX) Foundations',
        topics: ['User personas, empathy mapping & problem framing', 'User journey mapping & task flows', 'Information architecture & navigation hierarchies']
      },
      {
        title: 'Module 2: Visual & Interface (UI) Principles',
        topics: ['Typography pairing, line-height & modular scale', 'Color theory & the 60-30-10 dominant color rule', 'Spacing, 8pt grid systems & negative whitespace balance']
      },
      {
        title: 'Module 3: Wireframing & Prototyping Workflows',
        topics: ['Low-fidelity wireframing & structural sketches', 'High-fidelity UI mockups & component libraries', 'Clickable interactive prototype transitions']
      },
      {
        title: 'Module 4: Accessibility (a11y) & Usability Testing',
        topics: ['WCAG AA color contrast ratio standards (4.5:1 for body)', 'Conducting usability testing sessions & observing friction', 'Iterating layouts based on direct user feedback']
      }
    ],
    learningOutcomes: [
      'Conduct user research and construct intuitive user flows',
      'Design clean interface layouts adhering to typography & color balance rules',
      'Build functional clickable wireframes and prototypes',
      'Apply WCAG accessibility guidelines to ensure inclusive digital designs'
    ]
  },
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    category: 'Career Skills',
    subjectKey: 'communication',
    symbol: 'TALK',
    symbolColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    description: 'Master technical writing, project presentations, active listening, and interview readiness.',
    detailedDescription: 'Enhance your verbal, written, and collaborative communication. Learn how to present technical concepts simply, participate effectively in team discussions, and communicate with clarity and confidence.',
    level: 'All Levels',
    duration: '4 Modules • 15 Topics',
    lessonsCount: 15,
    iconName: 'MessageSquare',
    color: 'from-cyan-500 to-blue-600',
    tags: ['Technical Writing', 'Presentations', 'Active Listening', 'STAR Method', 'Teamwork'],
    syllabus: [
      {
        title: 'Module 1: Clear Technical Written Communication',
        topics: ['Structuring clear technical emails, pull requests & bug reports', 'Summarizing complex technical architectures concisely', 'Proofreading, tone calibration & eliminating ambiguity']
      },
      {
        title: 'Module 2: Presentation & Public Speaking',
        topics: ['Structuring a persuasive 5-minute project demo presentation', 'Designing clean visual slides without text clutter', 'Handling technical Q&A sessions with poise and confidence']
      },
      {
        title: 'Module 3: Active Listening & Collaborative Feedback',
        topics: ['Principles of active listening in team syncs', 'Giving and receiving constructive code review feedback', 'Bridging the communication gap between engineers and non-technical stakeholders']
      },
      {
        title: 'Module 4: Technical Interview & Professional Readiness',
        topics: ['Articulating problem-solving thought processes out loud', 'The STAR method (Situation, Task, Action, Result) for behavioral questions', 'Professional workplace etiquette and continuous learning mindset']
      }
    ],
    learningOutcomes: [
      'Present complex technical ideas concisely to non-technical stakeholders',
      'Write professional documentation, briefs, and team communications',
      'Practice active listening and provide actionable constructive critique',
      'Articulate problem-solving logic confidently during interviews'
    ]
  }
];
