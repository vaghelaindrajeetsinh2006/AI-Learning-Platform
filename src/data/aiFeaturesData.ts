import { AIFeature, AssistantExplanation, QuizQuestion } from '../types';

export const AI_FEATURES: AIFeature[] = [
  {
    id: 'study-assistant',
    title: 'AI Study Assistant',
    tagline: 'Understand difficult concepts with deep, structured AI explanations.',
    description: 'Breaks down complex technical topics into step-by-step analogies, intuitive mental models, code syntax breakdowns, and common pitfalls to help you grasp core ideas thoroughly.',
    iconName: 'Bot',
    badge: 'Concept Demo',
    demoType: 'assistant'
  },
  {
    id: 'quiz-generator',
    title: 'Smart Quiz Generator',
    tagline: 'Practice subject-specific questions with immediate detailed feedback.',
    description: 'Generates targeted practice quizzes by subject (Web Dev, Python, DSA, AI, UI/UX, Communication) to test retention, identify knowledge gaps, and reinforce active recall.',
    iconName: 'HelpCircle',
    badge: 'Concept Demo',
    demoType: 'quiz'
  },
  {
    id: 'summarizer',
    title: 'AI Summarizer',
    tagline: 'Turn lengthy learning material into concise study notes.',
    description: 'Extracts key takeaways, core definitions, and bullet-point summaries from lengthy articles, lecture transcripts, and documentation to speed up your review sessions.',
    iconName: 'FileText',
    badge: 'Concept Demo',
    demoType: 'summarizer'
  },
  {
    id: 'personalized-learning',
    title: 'Personalized Learning',
    tagline: 'Explore learning paths based on your goals and interests.',
    description: 'Maps out a tailored sequence of topics and project milestones matched to your current experience level, available study hours, and career aspirations.',
    iconName: 'Compass',
    badge: 'Concept Demo',
    demoType: 'path'
  },
  {
    id: 'practice-assistant',
    title: 'Practice Assistant',
    tagline: 'Strengthen your understanding through progressive guided hints.',
    description: 'Provides progressive hints, code inspection questions, and step-by-step logic breakdown without giving away direct answers, fostering independent problem-solving skills.',
    iconName: 'Sparkles',
    badge: 'Concept Demo',
    demoType: 'practice'
  },
  {
    id: 'learning-planner',
    title: 'Learning Planner',
    tagline: 'Organize learning goals and study activities.',
    description: 'Structures realistic weekly schedules, balances revision sessions with active coding practice, and tracks milestone checkpoints to keep your momentum steady.',
    iconName: 'CalendarCheck',
    badge: 'Concept Demo',
    demoType: 'planner'
  }
];

export const ASSISTANT_EXPLANATIONS: AssistantExplanation[] = [
  {
    id: 'asst-web-boxmodel',
    topic: 'What is the CSS Box Model and how does box-sizing work?',
    category: 'Web Development',
    subjectKey: 'web-dev',
    definition: 'The CSS Box Model is the foundational layout calculation algorithm that browsers use to render every HTML element on a webpage as a rectangular box.',
    detailedExplanation: 'Every HTML element is structured as four concentric rectangular layers from the inside out:\n1. Content: The text, image, or child element rendered on screen.\n2. Padding: The transparent breathing room between the content and the border.\n3. Border: The perimeter line wrapping the padding and content.\n4. Margin: The transparent buffer space outside the border separating this element from its neighbors.\n\nBy default in standard CSS (`box-sizing: content-box`), setting `width: 200px` applies only to the Content layer. Adding 20px of padding and a 2px border expands the rendered width to 244px (200 + 20*2 + 2*2), which often breaks grids. Setting `box-sizing: border-box` forces the browser to absorb padding and border inside the declared width, making layout math predictable.',
    analogy: 'Think of a framed painting hanging on an art gallery wall:\n• Content = The painted canvas image itself.\n• Padding = The white matting paper board surrounding the canvas.\n• Border = The wooden picture frame holding everything.\n• Margin = The empty wall space between this frame and adjacent picture frames.',
    codeSnippet: `/* Recommended modern universal box-sizing reset */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 300px;        /* Total rendered box width is strictly 300px */
  padding: 24px;       /* 24px inside buffer */
  border: 2px solid #6366f1; /* 2px frame */
  margin: 16px auto;   /* 16px outer spacing to neighboring cards */
}`,
    codeExplanation: 'With `box-sizing: border-box`, the total card width remains strictly 300px on screen. The internal content area automatically adjusts to 248px (300 - 48px padding - 4px border).',
    commonMistakes: 'Beginner mistake: Trying to calculate fractional widths in percentages without resetting `box-sizing`, causing multi-column layouts to wrap onto new lines unexpectedly.',
    keyTakeaway: 'Always apply `box-sizing: border-box` so that padding and border never unintentionally enlarge an element beyond its defined width.'
  },
  {
    id: 'asst-py-mutability',
    topic: 'Lists vs. Tuples vs. Dictionaries in Python: When to use which?',
    category: 'Python Programming',
    subjectKey: 'python',
    definition: 'Python data structures differ fundamentally in their mutability (whether they can be modified in-place after creation), ordering, and lookup mechanisms.',
    detailedExplanation: '• Lists `[a, b, c]`: Ordered, mutable (changeable) sequences. Ideal when you need an elastic collection of items where you will append, remove, sort, or modify values.\n• Tuples `(a, b, c)`: Ordered, immutable (read-only) collections. Once instantiated in memory, their elements cannot be added, modified, or removed. They are faster, memory-efficient, and can be used as dictionary keys.\n• Dictionaries `{"key": "value"}`: Unordered/insertion-ordered collections of key-value pairs utilizing an internal hash table. Provides average O(1) instantaneous lookup time by key.',
    analogy: '• List = A reusable whiteboard shopping list where you can write, erase, and reorder items.\n• Tuple = A printed permanent passport document; the details are locked and cannot be altered.\n• Dictionary = A physical telephone directory; you search directly by a person\'s name (key) to instantly find their number (value).',
    codeSnippet: `# 1. Mutable List (can be updated)
grades = [85, 92, 78]
grades.append(95)  # Now [85, 92, 78, 95]

# 2. Immutable Tuple (protected fixed coordinates)
gps_coordinate = (37.7749, -122.4194)
# gps_coordinate[0] = 40.0  # Raises TypeError: 'tuple' object does not support item assignment!

# 3. Hash-mapped Dictionary (O(1) fast key lookups)
student_record = {
    "name": "Alex",
    "course": "Python",
    "score": 95
}
print(student_record.get("course"))  # Outputs: Python`,
    codeExplanation: 'Lists support methods like `.append()` and `.sort()`. Tuples safeguard integrity for coordinate pairs or fixed constants. Dictionaries enable direct semantic key access without needing to loop through items.',
    commonMistakes: 'Using a mutable list as a dictionary key or default function argument (e.g., `def fn(items=[])`), which creates shared memory bugs across invocations.',
    keyTakeaway: 'Use Lists when collections need to change, Tuples when data integrity is constant, and Dictionaries when you need fast key-value lookups.'
  },
  {
    id: 'asst-dsa-recursion',
    topic: 'How recursion works in memory and why the base case is essential',
    category: 'Data Structures & Algorithms',
    subjectKey: 'dsa',
    definition: 'Recursion is a problem-solving technique where a function solves a complex problem by breaking it down into smaller sub-problems of the exact same type and calling itself.',
    detailedExplanation: 'Every time a function calls itself, the computer allocates a new "Stack Frame" onto the Call Stack in memory. This frame preserves local variables, arguments, and the exact return address.\n\nRecursion operates in two distinct phases:\n1. The Winding Phase (Descent): Successive function calls are stacked on top of one another until the stopping condition (Base Case) is evaluated to true.\n2. The Unwinding Phase (Ascent): The base case returns a concrete value, allowing each paused stacked function below it to compute its result, pop off the call stack, and return up to the original caller.',
    analogy: 'Imagine Russian nesting dolls (Matryoshka): to find the gold coin inside the smallest doll, you open doll after doll (recursive calls) until you reach the solid center (base case). Once reached, you close them back up one by one with the answer.',
    codeSnippet: `function factorial(n: number): number {
  // 1. BASE CASE: Crucial stopping condition
  if (n <= 1) {
    return 1;
  }
  
  // 2. RECURSIVE STEP: Function calls itself with smaller input
  return n * factorial(n - 1);
}

console.log(factorial(4)); // 4 * (3 * (2 * (1))) = 24`,
    codeExplanation: 'When computing `factorial(4)`, stack frames for 4, 3, 2, 1 are created. At n=1, the base case triggers and returns 1. Then `2 * 1 = 2`, `3 * 2 = 6`, and finally `4 * 6 = 24`.',
    commonMistakes: 'Omitting or improperly formulating the base case, which triggers an infinite loop and crashes the program with a `Maximum call stack size exceeded` (Stack Overflow) error.',
    keyTakeaway: 'Always design and verify your base case first before writing the recursive step.'
  },
  {
    id: 'asst-ai-supervised',
    topic: 'Supervised vs. Unsupervised Learning: Core mechanics and real-world uses',
    category: 'Artificial Intelligence',
    subjectKey: 'ai',
    definition: 'Supervised and Unsupervised Learning are the two fundamental paradigms of machine learning, categorized by whether the training dataset includes ground-truth target labels.',
    detailedExplanation: '• Supervised Learning: The algorithm is fed input features `X` alongside known ground-truth labels `y`. The model adjusts its internal mathematical weights via backpropagation or gradient descent to minimize error between its predictions and actual labels.\n  - Tasks: Classification (e.g., spam vs. not spam) and Regression (e.g., house price forecasting).\n\n• Unsupervised Learning: The algorithm is provided only input features `X` with zero labels or teacher guidance. It must mathematically uncover underlying geometry, groupings, or probability distributions.\n  - Tasks: Clustering (customer segmentation) and Dimensionality Reduction (PCA).',
    analogy: '• Supervised Learning = A student studying with a textbook that has an answer key at the back. Every time they answer a question, they check if they were right and adjust their thinking.\n• Unsupervised Learning = A botanist exploring an uncharted island, sorting 500 newly discovered seeds into groups purely based on their visual similarities, shapes, and weights without knowing their species names.',
    codeSnippet: `# Conceptual Machine Learning Comparison

# 1. Supervised Data (Inputs + Target Labels)
training_data = [
    {"size_sqft": 1200, "bedrooms": 2, "label_price": 250000},
    {"size_sqft": 2400, "bedrooms": 4, "label_price": 480000}
]

# 2. Unsupervised Data (Raw Features only, No Target)
user_browsing_features = [
    {"click_count": 42, "session_duration_min": 18.5},
    {"click_count": 3,  "session_duration_min": 0.8}
] # Model clusters these into "Engaged Explorers" vs "Bouncers"`,
    codeExplanation: 'Supervised models learn direct mathematical mappings from input features to output targets. Unsupervised algorithms cluster data by computing distance metrics (like Euclidean distance in K-Means).',
    commonMistakes: 'Confusing classification (predicting discrete categories) with regression (predicting continuous numerical quantities), or testing supervised models on the exact data they trained on (data leakage).',
    keyTakeaway: 'Supervised learning maps inputs to verified answers; unsupervised learning discovers latent patterns in raw unlabelled data.'
  },
  {
    id: 'asst-uiux-contrast',
    topic: 'Visual Hierarchy, Typographic Scale, and WCAG Accessibility',
    category: 'Design',
    subjectKey: 'design',
    definition: 'Visual hierarchy is the deliberate spatial and visual arrangement of elements on a screen that guides the human eye in the intended order of importance.',
    detailedExplanation: 'Visual hierarchy prevents cognitive overload by establishing an intuitive reading sequence. It is achieved through:\n1. Scale & Contrast: Larger and higher-contrast items are perceived first.\n2. Typographic Scale: Using a mathematical step ratio (e.g., 1.25 Major Third) rather than random font sizes.\n3. Negative Space (Whitespace): Breathing room around crucial elements elevates their perceived importance.\n4. WCAG Compliance: The Web Content Accessibility Guidelines require at least a 4.5:1 contrast ratio for normal body text and 3:1 for large display text against their background to ensure legibility for users with visual impairments.',
    analogy: 'Think of a well-designed newspaper front page: The main headline is massive and bold at the top (H1), section titles are medium (H2/H3), and body paragraphs are comfortable reading size. If every word were printed in the exact same size and boldness, you would have no idea where to look first.',
    codeSnippet: `/* Establishing crisp typographic hierarchy with Tailwind CSS */
/* 1. Primary Page Title */
<h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
  Popular Learning Courses
</h1>

/* 2. Descriptive Body Text (High Contrast & Comfortable Line Height) */
<p className="text-base text-slate-600 leading-relaxed max-w-2xl">
  Explore curated foundational tracks with clear step-by-step milestones.
</p>

/* 3. High-Contrast Accessible Button (WCAG AA Compliant > 4.5:1) */
<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl">
  Start Learning
</button>`,
    codeExplanation: 'Using `text-slate-900` (#0f172a) on white (#ffffff) delivers an exceptional contrast ratio of 16.5:1, vastly exceeding WCAG AA requirements and guaranteeing effortless readability.',
    commonMistakes: 'Placing low-contrast light gray text (#9ca3af) on white backgrounds or making all headings identical in weight and size, destroying visual flow.',
    keyTakeaway: 'Strong visual hierarchy uses clear contrast, mathematical type scales, and generous whitespace to guide the user naturally.'
  },
  {
    id: 'asst-comm-star',
    topic: 'How to use the STAR Method to communicate technical solutions',
    category: 'Career Skills',
    subjectKey: 'communication',
    definition: 'The STAR Method is a structured communication framework (Situation, Task, Action, Result) used to present complex technical achievements, problem-solving, and interview answers with clarity.',
    detailedExplanation: 'Engineers often struggle by either getting lost in irrelevant low-level code trivia or failing to explain the real impact of their work. The STAR framework solves this by enforcing a 4-part narrative:\n1. Situation: Set the scene briefly (1-2 sentences). What was the project or challenge?\n2. Task: What was your specific responsibility or the roadblock you had to solve?\n3. Action: What concrete steps, architecture choices, or debugging techniques did you personally execute?\n4. Result: What was the measurable outcome or learning? (e.g., reduced load time by 40%, zero crashes, passed all unit tests).',
    analogy: 'Like telling a compelling hero story: Introduce the kingdom\'s challenge (Situation), state the quest (Task), describe the battle tactics used (Action), and celebrate the peaceful outcome (Result).',
    codeSnippet: `// Example of applying the STAR method to a technical question:
// Question: "Tell me about a time you fixed a tricky bug."

[S] Situation: "In our student course registration portal, the site was crashing during peak enrollment hours."
[T] Task: "I was assigned to investigate the server slowdowns and eliminate the bottleneck."
[A] Action: "I profiled database queries and discovered an unindexed search running an O(N) full-table scan on 50,000 users. I added a composite B-Tree index and implemented client-side debouncing on search inputs."
[R] Result: "Query latency dropped from 1,800ms down to 24ms, and enrollment completed smoothly with zero server downtime."`,
    codeExplanation: 'Notice how the Action highlights personal technical insight and problem-solving, while the Result provides quantifiable validation.',
    commonMistakes: 'Focusing 90% of the time on describing the problem (Situation) and running out of time to explain what you actually built (Action) and what impact it made (Result).',
    keyTakeaway: 'Structure technical stories with STAR: 15% Situation/Task, 60% Action taken, and 25% Quantifiable Results.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ===================== 1. WEB DEVELOPMENT =====================
  {
    id: 'quiz-web-1',
    subject: 'Web Development',
    subjectKey: 'web-dev',
    difficulty: 'Beginner',
    question: 'Which CSS property defines the space between an element\'s content and its border?',
    codeSnippet: `.box {
  width: 200px;
  /* Which property adds space inside here? */
  border: 2px solid black;
}`,
    options: ['margin', 'padding', 'outline', 'gap'],
    correctIndex: 1,
    explanation: 'Padding creates transparent space inside the border, directly surrounding the content itself. Margin creates space outside the border.',
    conceptDetail: 'In the CSS Box Model, the hierarchy from inside to outside is: Content -> Padding -> Border -> Margin.'
  },
  {
    id: 'quiz-web-2',
    subject: 'Web Development',
    subjectKey: 'web-dev',
    difficulty: 'Beginner',
    question: 'Which HTML5 element should be used to wrap primary navigation links for optimal accessibility?',
    options: ['<div class="menu">', '<nav>', '<section id="links">', '<header-links>'],
    correctIndex: 1,
    explanation: 'The semantic `<nav>` element explicitly communicates to search engines and assistive screen readers that the enclosed links are primary navigation.',
    conceptDetail: 'Using semantic elements replaces generic <div> tags with meaningful architectural landmarks.'
  },
  {
    id: 'quiz-web-3',
    subject: 'Web Development',
    subjectKey: 'web-dev',
    difficulty: 'Intermediate',
    question: 'In CSS Flexbox, which property aligns items along the CROSS axis (perpendicular to flex-direction)?',
    options: ['justify-content', 'align-items', 'flex-wrap', 'place-content'],
    correctIndex: 1,
    explanation: '`justify-content` aligns items along the Main Axis (row or column), whereas `align-items` aligns children along the perpendicular Cross Axis.',
    conceptDetail: 'For a default `flex-direction: row`, `justify-content` manages horizontal positioning and `align-items` manages vertical positioning.'
  },
  {
    id: 'quiz-web-4',
    subject: 'Web Development',
    subjectKey: 'web-dev',
    difficulty: 'Intermediate',
    question: 'What will be logged to the browser console when the following JavaScript code executes?',
    codeSnippet: `function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}
const increment = outer();
increment();
console.log(increment());`,
    options: ['1', '2', 'undefined', 'ReferenceError: counter is not defined'],
    correctIndex: 1,
    explanation: 'This is a JavaScript Closure. The `inner` function retains a reference to its lexical environment (`counter`). The first call increments it to 1, and the second call increments it to 2.',
    conceptDetail: 'Closures allow functions to remember and access variables from their outer scope even after the outer function has finished executing.'
  },

  // ===================== 2. PYTHON PROGRAMMING =====================
  {
    id: 'quiz-py-1',
    subject: 'Python Programming',
    subjectKey: 'python',
    difficulty: 'Beginner',
    question: 'In Python, which built-in data structure is immutable (cannot be modified after creation)?',
    options: ['List: [1, 2, 3]', 'Dictionary: {"a": 1}', 'Tuple: (1, 2, 3)', 'Set: {1, 2, 3}'],
    correctIndex: 2,
    explanation: 'Tuples `(1, 2, 3)` are immutable. Once created, you cannot append, replace, or delete their items.',
    conceptDetail: 'Lists, Dictionaries, and Sets in Python are all mutable, meaning their contents can be modified in-place.'
  },
  {
    id: 'quiz-py-2',
    subject: 'Python Programming',
    subjectKey: 'python',
    difficulty: 'Beginner',
    question: 'What is the output of the following Python list comprehension?',
    codeSnippet: `numbers = [1, 2, 3, 4, 5]
evens_squared = [x**2 for x in numbers if x % 2 == 0]
print(evens_squared)`,
    options: ['[1, 4, 9, 16, 25]', '[4, 16]', '[2, 4]', '[4, 8]'],
    correctIndex: 1,
    explanation: 'The comprehension filters numbers where `x % 2 == 0` (which selects 2 and 4) and squares them: `2**2 = 4` and `4**2 = 16`, yielding `[4, 16]`.',
    conceptDetail: 'List comprehensions provide a concise syntax: `[expression for item in iterable if condition]`.'
  },
  {
    id: 'quiz-py-3',
    subject: 'Python Programming',
    subjectKey: 'python',
    difficulty: 'Intermediate',
    question: 'How do you safely access a dictionary key in Python without raising a KeyError if the key does not exist?',
    options: ['dict[key]', 'dict.get(key, default_value)', 'dict.find(key)', 'dict.search(key)'],
    correctIndex: 1,
    explanation: '`dict.get(key, default)` safely returns `None` (or your chosen default value) if the key is missing, preventing a program-crashing `KeyError`.',
    conceptDetail: 'Using `.get()` is a Pythonic defensive programming practice for dynamic dictionary access.'
  },
  {
    id: 'quiz-py-4',
    subject: 'Python Programming',
    subjectKey: 'python',
    difficulty: 'Intermediate',
    question: 'What is the purpose of `*args` and `**kwargs` in Python function definitions?',
    options: [
      'They define pointer references to memory locations',
      'They allow a function to accept variable numbers of positional and keyword arguments',
      'They force strict static typing on function parameters',
      'They automatically run the function in multiple parallel threads'
    ],
    correctIndex: 1,
    explanation: '`*args` collects extra positional arguments into a tuple, while `**kwargs` collects extra keyword arguments into a dictionary.',
    conceptDetail: 'This provides extreme flexibility when writing wrappers, decorators, or utility functions.'
  },

  // ===================== 3. DATA STRUCTURES & ALGORITHMS =====================
  {
    id: 'quiz-dsa-1',
    subject: 'Data Structures & Algorithms',
    subjectKey: 'dsa',
    difficulty: 'Beginner',
    question: 'What is the time complexity of Binary Search on a sorted array of N elements?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
    correctIndex: 1,
    explanation: 'Binary Search halves the search space in each iteration, resulting in a logarithmic time complexity of O(log N).',
    conceptDetail: 'For an array of 1,000,000 sorted elements, Binary Search takes at most ~20 comparisons.'
  },
  {
    id: 'quiz-dsa-2',
    subject: 'Data Structures & Algorithms',
    subjectKey: 'dsa',
    difficulty: 'Beginner',
    question: 'Which principle governs the behavior of a standard Stack data structure?',
    options: ['FIFO (First In, First Out)', 'LIFO (Last In, First Out)', 'Priority-based ordering', 'Random Access'],
    correctIndex: 1,
    explanation: 'A Stack operates on LIFO (Last In, First Out). The most recently pushed element is the first one removed with `.pop()`.',
    conceptDetail: 'Examples of Stacks in computing include browser back button history and function call stacks.'
  },
  {
    id: 'quiz-dsa-3',
    subject: 'Data Structures & Algorithms',
    subjectKey: 'dsa',
    difficulty: 'Intermediate',
    question: 'In a valid Binary Search Tree (BST), which invariant property must hold for all nodes?',
    options: [
      'Left child key < Node key < Right child key',
      'Left child key must equal Right child key',
      'All leaves must be at the exact same depth',
      'Nodes can have at most one child'
    ],
    correctIndex: 0,
    explanation: 'In a standard BST, all values in a node\'s left subtree are strictly smaller than the node, and all values in its right subtree are strictly greater.',
    conceptDetail: 'This property enables in-order tree traversal to retrieve all elements in sorted ascending order.'
  },
  {
    id: 'quiz-dsa-4',
    subject: 'Data Structures & Algorithms',
    subjectKey: 'dsa',
    difficulty: 'Intermediate',
    question: 'What happens if a recursive function does not have a properly defined Base Case?',
    options: [
      'The code executes faster due to continuous loops',
      'The call stack overflows, throwing a Maximum Call Stack Size Exceeded error',
      'The compiler automatically injects a return 0 statement',
      'The variables convert to global scope'
    ],
    correctIndex: 1,
    explanation: 'Without a base case, the function calls itself indefinitely until memory allocated for the Call Stack is exhausted, causing a Stack Overflow crash.',
    conceptDetail: 'Always identify the minimal terminating state before coding recursive logic.'
  },

  // ===================== 4. ARTIFICIAL INTELLIGENCE =====================
  {
    id: 'quiz-ai-1',
    subject: 'Artificial Intelligence',
    subjectKey: 'ai',
    difficulty: 'Beginner',
    question: 'What defines Supervised Learning in Machine Learning?',
    options: [
      'The model trains on raw data without any labels or human feedback',
      'The model trains on input data paired with known ground-truth output labels',
      'The model learns entirely through physical video game simulations',
      'The model only processes numerical matrices with zero text'
    ],
    correctIndex: 1,
    explanation: 'Supervised Learning uses pairs of input features and expected target labels so the algorithm can calculate its error and adjust parameters.',
    conceptDetail: 'Examples include spam email filters trained on thousands of pre-labeled "spam" and "inbox" emails.'
  },
  {
    id: 'quiz-ai-2',
    subject: 'Artificial Intelligence',
    subjectKey: 'ai',
    difficulty: 'Beginner',
    question: 'What is the role of an Activation Function (like ReLU or Sigmoid) in an artificial neural network?',
    options: [
      'To introduce non-linearity, allowing the network to learn complex patterns',
      'To compress the model files onto hard drive disks',
      'To format dataset strings into lowercase characters',
      'To speed up CPU clock speed'
    ],
    correctIndex: 0,
    explanation: 'Without non-linear activation functions, a multi-layer neural network would collapse into a simple linear transformation, unable to learn complex curves.',
    conceptDetail: 'Popular activation functions include ReLU (Rectified Linear Unit), Sigmoid, and GELU.'
  },
  {
    id: 'quiz-ai-3',
    subject: 'Artificial Intelligence',
    subjectKey: 'ai',
    difficulty: 'Intermediate',
    question: 'What is "Overfitting" in machine learning and how is it recognized?',
    options: [
      'The model performs perfectly on training data but fails to generalize to unseen test data',
      'The model is too simple to capture even basic trends in training data',
      'The computer memory runs out during data loading',
      'The dataset has too few input columns'
    ],
    correctIndex: 0,
    explanation: 'Overfitting occurs when a model memorizes noise and specific quirks in the training dataset rather than true underlying concepts, degrading test accuracy.',
    conceptDetail: 'Regularization, dropout, and cross-validation are standard techniques used to prevent overfitting.'
  },
  {
    id: 'quiz-ai-4',
    subject: 'Artificial Intelligence',
    subjectKey: 'ai',
    difficulty: 'Intermediate',
    question: 'In modern generative AI and Large Language Models (LLMs), what is a "token"?',
    options: [
      'A crypto payment method used to query the API',
      'A basic unit of text (word piece or character chunk) processed by the model',
      'A hardware GPU processor chip',
      'A security password stored in the database'
    ],
    correctIndex: 1,
    explanation: 'Tokens are numerical representations of word pieces or subwords that language models use to calculate probabilities for next-token generation.',
    conceptDetail: 'As a rule of thumb, 100 tokens roughly equate to ~75 English words.'
  },

  // ===================== 5. UI/UX DESIGN =====================
  {
    id: 'quiz-design-1',
    subject: 'UI/UX Design',
    subjectKey: 'design',
    difficulty: 'Beginner',
    question: 'According to WCAG AA guidelines, what is the minimum contrast ratio required for standard body text against its background?',
    options: ['2:1', '3:1', '4.5:1', '10:1'],
    correctIndex: 2,
    explanation: 'WCAG AA requires at least a 4.5:1 contrast ratio for normal body text and 3:1 for large display headings to ensure readable accessibility.',
    conceptDetail: 'High contrast guarantees that users with low vision or viewing in bright sunlight can comfortably read content.'
  },
  {
    id: 'quiz-design-2',
    subject: 'UI/UX Design',
    subjectKey: 'design',
    difficulty: 'Beginner',
    question: 'What is the classic "60-30-10 Rule" in visual interface design?',
    options: [
      '60% font size, 30% line height, 10% letter spacing',
      '60% dominant neutral background, 30% secondary structural color, 10% intentional accent/CTA color',
      '60% mobile users, 30% tablet users, 10% desktop users',
      '60px margin, 30px padding, 10px border radius'
    ],
    correctIndex: 1,
    explanation: 'The 60-30-10 color rule creates visual balance: 60% dominant neutral foundation, 30% supporting structure, and 10% focused accent color for buttons/actions.',
    conceptDetail: 'This prevents UI color clutter and naturally directs user attention to key action points.'
  },
  {
    id: 'quiz-design-3',
    subject: 'UI/UX Design',
    subjectKey: 'design',
    difficulty: 'Intermediate',
    question: 'What is the fundamental difference between a Low-Fidelity Wireframe and an Interactive High-Fidelity Prototype?',
    options: [
      'Wireframes focus on basic structure and layout; prototypes simulate actual visual polish and clickable user interaction flows',
      'Wireframes are only drawn in pencil; prototypes are only coded in HTML',
      'Wireframes are for mobile apps; prototypes are only for desktop websites',
      'There is no difference; they are exact synonyms'
    ],
    correctIndex: 0,
    explanation: 'Wireframes establish information architecture and layout hierarchy early on, while prototypes validate real user flows with realistic styling.',
    conceptDetail: 'Iterating on low-fidelity wireframes first saves tremendous time before building polished UI mockups.'
  },

  // ===================== 6. COMMUNICATION SKILLS =====================
  {
    id: 'quiz-comm-1',
    subject: 'Communication Skills',
    subjectKey: 'communication',
    difficulty: 'Beginner',
    question: 'What does each letter in the STAR interview technique stand for?',
    options: [
      'Strategy, Teamwork, Assessment, Review',
      'Situation, Task, Action, Result',
      'Speaking, Tone, Articulation, Resonance',
      'System, Testing, Architecture, Refactoring'
    ],
    correctIndex: 1,
    explanation: 'STAR stands for Situation, Task, Action, Result. It helps structure concise, high-impact stories during technical behavioral interviews.',
    conceptDetail: 'Focusing on the Action (what you did) and Result (the measurable outcome) creates compelling communication.'
  },
  {
    id: 'quiz-comm-2',
    subject: 'Communication Skills',
    subjectKey: 'communication',
    difficulty: 'Beginner',
    question: 'When presenting a complex technical project to non-technical stakeholders, what is the best practice?',
    options: [
      'Show 500 lines of source code and explain every compiler flag',
      'Use high-level real-world analogies, focus on user impact, and avoid unnecessary acronyms',
      'Speak as rapidly as possible to fit all technical details in',
      'Refuse to answer questions until the entire presentation is over'
    ],
    correctIndex: 1,
    explanation: 'Effective technical communicators tailor their vocabulary to their audience by focusing on business impact, clarity, and intuitive analogies.',
    conceptDetail: 'Bridging the gap between engineering details and stakeholder outcomes is a vital career superpower.'
  },
  {
    id: 'quiz-comm-3',
    subject: 'Communication Skills',
    subjectKey: 'communication',
    difficulty: 'Intermediate',
    question: 'What is the core principle of "Active Listening" during collaborative code reviews and team discussions?',
    options: [
      'Waiting quietly only for your turn to speak and defend your opinion',
      'Focusing fully on understanding the speaker\'s perspective, asking clarifying questions, and confirming comprehension before responding',
      'Silently agreeing with everything without sharing your thoughts',
      'Taking verbatim transcripts of every spoken word'
    ],
    correctIndex: 1,
    explanation: 'Active listening involves engaged concentration, non-defensive inquiry, and paraphrasing to verify mutual alignment before proposing solutions.',
    conceptDetail: 'Active listening builds psychological safety and leads to dramatically better architectural decisions in engineering teams.'
  }
];

export const DEMO_PRESETS = {
  assistant: ASSISTANT_EXPLANATIONS,
  quiz: QUIZ_QUESTIONS,
  summarizer: [
    {
      title: 'Introduction to Semantic HTML & Accessibility',
      originalText: 'Semantic HTML markup introduces elements that clearly describe their meaning to both the browser and the developer. Tags such as <header>, <nav>, <main>, <article>, and <footer> convey the structural purpose of content rather than just visual styling. This significantly improves web accessibility for screen readers and assists search engine indexers in understanding page architecture.',
      keyPoints: [
        'Semantic tags (<nav>, <main>, <article>, <footer>) communicate structural meaning to browsers.',
        'Improves web accessibility (a11y) for screen reader assistive technologies.',
        'Assists search engine crawlers in indexing document hierarchies accurately.',
        'Promotes maintainable, self-documenting frontend codebases without tag soup.'
      ]
    },
    {
      title: 'Principles of Responsible AI in Education',
      originalText: 'Artificial intelligence tools should serve as cognitive scaffolds and study assistants rather than substitutes for critical inquiry. Students should use AI to clarify difficult conceptual definitions, generate practice problems, and obtain targeted feedback, while always verifying academic facts through primary textbooks and maintaining ethical academic integrity.',
      keyPoints: [
        'AI serves as a study assistant and practice tutor, not a replacement for human critical thinking.',
        'Always verify factual outputs against trusted primary literature, textbooks, and teachers.',
        'Maintain academic integrity by using AI for conceptual mastery, not plagiarized answers.',
        'Protect personal data privacy by never submitting sensitive credentials or confidential information.'
      ]
    }
  ],
  planner: [
    {
      goal: 'Front-End Foundation (4-Week Blueprint)',
      days: [
        { day: 'Mon & Tue', task: 'Semantic HTML5 & Modern CSS3 Flexbox/Grid', time: '1.5 hrs/day' },
        { day: 'Wed & Thu', task: 'JavaScript Functions, Scope & DOM Event Handling', time: '1.5 hrs/day' },
        { day: 'Fri', task: 'Interactive Quiz Mini-Project Hands-On', time: '2 hrs' },
        { day: 'Sat', task: 'AI Study Assistant Review & Practice Quiz Checks', time: '1 hr' },
        { day: 'Sun', task: 'Rest, Reflection & Weekly Consolidation', time: 'Rest' }
      ]
    }
  ]
};
