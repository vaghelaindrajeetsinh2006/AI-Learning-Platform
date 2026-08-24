export interface Course {
  id: string;
  title: string;
  category: string;
  subjectKey: 'web-dev' | 'python' | 'dsa' | 'ai' | 'design' | 'communication';
  symbol: string;
  symbolColor: string;
  description: string;
  detailedDescription: string;
  level: 'Beginner' | 'Intermediate' | 'All Levels';
  duration: string;
  lessonsCount: number;
  iconName: string;
  color: string;
  tags: string[];
  syllabus: { title: string; topics: string[] }[];
  learningOutcomes: string[];
}

export interface AIFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  demoType: 'assistant' | 'quiz' | 'summarizer' | 'path' | 'practice' | 'planner';
}

export interface QuizQuestion {
  id: string;
  subject: string;
  subjectKey: 'web-dev' | 'python' | 'dsa' | 'ai' | 'design' | 'communication';
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  conceptDetail?: string;
  difficulty: 'Beginner' | 'Intermediate';
}

export interface AssistantExplanation {
  id: string;
  topic: string;
  category: string;
  subjectKey: 'web-dev' | 'python' | 'dsa' | 'ai' | 'design' | 'communication';
  definition: string;
  detailedExplanation: string;
  analogy: string;
  codeSnippet?: string;
  codeExplanation?: string;
  commonMistakes: string;
  keyTakeaway: string;
}

export interface Step {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  sampleTopics: string[];
  coursesCount: string;
}

export interface ResponsiblePrinciple {
  title: string;
  description: string;
  recommendation: string;
  iconName: string;
}

export interface LearnerProfile {
  type: string;
  role: string;
  description: string;
  howLearnAIHelps: string[];
  iconName: string;
  color: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
