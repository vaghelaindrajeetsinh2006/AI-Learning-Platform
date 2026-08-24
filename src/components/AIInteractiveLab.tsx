import React, { useState, useEffect } from 'react';
import { 
  Bot, HelpCircle, FileText, Compass, Sparkles, CalendarCheck, 
  ArrowRight, Check, RefreshCw, Lightbulb, CheckCircle2, AlertCircle, 
  Send, Layers, BookOpen, Clock, X, Code, Terminal, Filter, Flame, ChevronRight
} from 'lucide-react';
import { ASSISTANT_EXPLANATIONS, QUIZ_QUESTIONS, DEMO_PRESETS } from '../data/aiFeaturesData';
import { TechSymbol } from './TechSymbol';
import { AssistantExplanation, QuizQuestion } from '../types';

interface AIInteractiveLabProps {
  initialTab?: string;
  initialSubject?: string;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const AIInteractiveLab: React.FC<AIInteractiveLabProps> = ({ 
  initialTab = 'assistant', 
  initialSubject = 'all',
  onClose,
  isEmbedded = false
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // 1. Study Assistant State
  const [assistantIndex, setAssistantIndex] = useState(0);
  const [customQueryInput, setCustomQueryInput] = useState('');
  const [customExplanation, setCustomExplanation] = useState<AssistantExplanation | null>(null);
  const [isGeneratingCustom, setIsGeneratingCustom] = useState(false);

  // 2. Quiz Generator State
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>(initialSubject || 'all');
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // 3. Summarizer State
  const [summarizerIndex, setSummarizerIndex] = useState(0);

  // 4. Learning Path State
  const [selectedGoal, setSelectedGoal] = useState<'frontend' | 'python' | 'dsa' | 'ai'>('frontend');

  // 5. Practice Assistant State
  const [practiceStep, setPracticeStep] = useState(1);

  // 6. Planner State
  const [studyHoursPerWeek, setStudyHoursPerWeek] = useState(6);
  const [focusArea, setFocusArea] = useState('Web Development');

  // Listen to prop changes for tab or subject triggers from courses
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (initialSubject && initialSubject !== 'all') {
      setSelectedSubjectFilter(initialSubject);
      setQuizQuestionIndex(0);
      setSelectedOption(null);
      setQuizScore(0);
      setQuizFinished(false);
    }
  }, [initialSubject]);

  const tabs = [
    { id: 'assistant', label: 'Study Assistant', icon: Bot },
    { id: 'quiz', label: 'Smart Quiz', icon: HelpCircle },
    { id: 'summarizer', label: 'Summarizer', icon: FileText },
    { id: 'path', label: 'Learning Path', icon: Compass },
    { id: 'practice', label: 'Practice Assistant', icon: Sparkles },
    { id: 'planner', label: 'Study Planner', icon: CalendarCheck },
  ];

  const subjectOptions = [
    { key: 'all', label: 'All Subjects', count: QUIZ_QUESTIONS.length },
    { key: 'web-dev', label: 'Web Development', count: QUIZ_QUESTIONS.filter(q => q.subjectKey === 'web-dev').length },
    { key: 'python', label: 'Python Programming', count: QUIZ_QUESTIONS.filter(q => q.subjectKey === 'python').length },
    { key: 'dsa', label: 'DSA & Algorithms', count: QUIZ_QUESTIONS.filter(q => q.subjectKey === 'dsa').length },
    { key: 'ai', label: 'Artificial Intelligence', count: QUIZ_QUESTIONS.filter(q => q.subjectKey === 'ai').length },
    { key: 'design', label: 'UI/UX Design', count: QUIZ_QUESTIONS.filter(q => q.subjectKey === 'design').length },
    { key: 'communication', label: 'Communication Skills', count: QUIZ_QUESTIONS.filter(q => q.subjectKey === 'communication').length },
  ];

  // Filtered Quiz Questions
  const filteredQuestions: QuizQuestion[] = selectedSubjectFilter === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(q => q.subjectKey === selectedSubjectFilter);

  const currentQuestion: QuizQuestion | undefined = filteredQuestions[quizQuestionIndex];

  const handleSubjectChange = (subjectKey: string) => {
    setSelectedSubjectFilter(subjectKey);
    setQuizQuestionIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleQuizAnswer = (optionIdx: number) => {
    if (!currentQuestion || selectedOption !== null) return;
    setSelectedOption(optionIdx);
    if (optionIdx === currentQuestion.correctIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizQuestionIndex < filteredQuestions.length - 1) {
      setQuizQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizQuestionIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // Dynamic In-Depth Custom Question Explainer
  const handleCustomTopicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customQueryInput.trim();
    if (!query) return;

    setIsGeneratingCustom(true);
    setTimeout(() => {
      setIsGeneratingCustom(false);
      const lower = query.toLowerCase();

      let detectedCategory = 'Programming & Web';
      let detectedSubjectKey: any = 'web-dev';
      let codeSnippetExample = `// Practical Code Example for ${query}\nfunction demonstrateConcept(inputData) {\n  // 1. Initialize safe state\n  const result = [];\n  \n  // 2. Execute structured operation\n  if (inputData && inputData.length > 0) {\n    result.push(inputData.map(item => item.toUpperCase()));\n  }\n  \n  // 3. Return verified outcome\n  return result;\n}\nconsole.log(demonstrateConcept(["learn", "ai", "study"]));`;
      let codeExplain = 'This structure initializes a predictable memory scope, validates boundary conditions, and yields an immutable return.';

      if (lower.includes('python') || lower.includes('list') || lower.includes('tuple') || lower.includes('dict') || lower.includes('loop')) {
        detectedCategory = 'Python Programming';
        detectedSubjectKey = 'python';
        codeSnippetExample = `# Python Implementation for "${query}"\ndef process_elements(items: list) -> dict:\n    """Demonstrates clean Pythonic logic with type safety."""\n    summary = {\n        "total_count": len(items),\n        "processed": [x.strip() for x in items if x]\n    }\n    return summary\n\nprint(process_elements([" python ", " logic ", ""]))`;
        codeExplain = 'Python functions utilize clean indentation, explicit parameter typing, and list comprehensions to prevent boilerplate.';
      } else if (lower.includes('dsa') || lower.includes('tree') || lower.includes('search') || lower.includes('sort') || lower.includes('stack') || lower.includes('complexity') || lower.includes('big o')) {
        detectedCategory = 'Data Structures & Algorithms';
        detectedSubjectKey = 'dsa';
        codeSnippetExample = `// Algorithmic Structure for "${query}"\nfunction solveProblemEfficiently(arr: number[]): number {\n  // Time Complexity: O(log N) or O(N) depending on structure\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    // Halve the search space systematically\n  }\n  return -1;\n}`;
        codeExplain = 'Dividing the input dataset iteratively reduces time complexity from linear O(N) to logarithmic O(log N).';
      } else if (lower.includes('ai') || lower.includes('model') || lower.includes('machine learning') || lower.includes('neural') || lower.includes('prompt')) {
        detectedCategory = 'Artificial Intelligence';
        detectedSubjectKey = 'ai';
        codeSnippetExample = `# Conceptual AI Pipeline for "${query}"\n# 1. Feature Extraction -> 2. Model Inference -> 3. Output Thresholding\nimport numpy as np\n\ndef predict_class(features: np.ndarray, weights: np.ndarray) -> float:\n    # Dot product computes activation score\n    z = np.dot(features, weights)\n    # Sigmoid non-linear activation\n    return 1.0 / (1.0 + np.exp(-z))`;
        codeExplain = 'Features are multiplied by learned weights and transformed via activation functions to calculate classification probabilities.';
      }

      setCustomExplanation({
        id: 'custom-query-res',
        topic: query,
        category: detectedCategory,
        subjectKey: detectedSubjectKey,
        definition: `"${query}" represents a fundamental concept centered on structuring inputs, applying clear rules, and yielding deterministic, reliable outputs in modern computing.`,
        detailedExplanation: `When mastering "${query}", it is vital to understand the underlying mechanics:\n1. Architectural Purpose: Solves specific computing bottlenecks by enforcing clear state boundaries.\n2. Runtime Execution: The engine processes commands in sequential or event-driven phases, maintaining variable lexical scope.\n3. Efficiency & Reliability: Minimizes memory overhead and eliminates race conditions when handled with proper error boundaries.`,
        analogy: `Think of "${query}" like an automated railway switching station: Tracks are laid down with specific rules so trains (data payloads) travel directly to their designated destination without collisions or delays.`,
        codeSnippet: codeSnippetExample,
        codeExplanation: codeExplain,
        commonMistakes: `A frequent pitfall when working with "${query}" is ignoring edge cases (like null inputs, empty arrays, or asynchronous timing), which leads to unhandled runtime exceptions.`,
        keyTakeaway: `Master the foundational definition and data flow of "${query}" before attempting complex optimisations.`
      });
    }, 400);
  };

  const activeAssistantData = customExplanation || ASSISTANT_EXPLANATIONS[assistantIndex];

  return (
    <div id="ai-interactive-lab-container" className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner with Disclaimers */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                LearnAI Study Lab & Smart Quiz
              </h3>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 font-bold uppercase tracking-wider">
                Interactive Practice Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Deep conceptual breakdowns, subject-specific quiz banks, and guided practice tools.
            </p>
          </div>
        </div>

        {onClose && !isEmbedded && (
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
            aria-label="Close Interactive Lab"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto p-2 bg-slate-100/90 border-b border-slate-200 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`lab-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
              {tab.id === 'quiz' && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-100 text-indigo-700 font-bold">
                  {QUIZ_QUESTIONS.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Lab Screen Area */}
      <div className="p-5 sm:p-7 min-h-[440px]">
        
        {/* ========================================================================= */}
        {/* 1. DEEP AI STUDY ASSISTANT */}
        {/* ========================================================================= */}
        {activeTab === 'assistant' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Top Selector & Meta */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  Detailed AI Study Assistant
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Deep, structured explanations with definitions, inner workings, mental analogies, syntax breakdowns, and common mistakes.
                </p>
              </div>

              {/* Sample Topic Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase">Topics:</span>
                {ASSISTANT_EXPLANATIONS.map((preset, idx) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setAssistantIndex(idx);
                      setCustomExplanation(null);
                    }}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg border whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      assistantIndex === idx && !customExplanation
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <TechSymbol name={preset.subjectKey} size="sm" variant="badge" showLabel={false} />
                    <span>{preset.category.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Structured Detailed Explanation Card */}
            <div className="space-y-5">
              
              {/* Header Topic Banner with Symbol */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <TechSymbol name={activeAssistantData.subjectKey} size="sm" />
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                      {activeAssistantData.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    {activeAssistantData.topic}
                  </h3>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 font-semibold">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    In-Depth Breakdown
                  </span>
                </div>
              </div>

              {/* 1. Core Definition */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  1. Core Definition
                </span>
                <p className="text-sm text-slate-800 font-medium leading-relaxed">
                  {activeAssistantData.definition}
                </p>
              </div>

              {/* 2. Detailed Explanation & Analogy Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                {/* Detailed Mechanics (7 cols) */}
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    2. In-Depth Technical Mechanics
                  </span>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {activeAssistantData.detailedExplanation}
                  </div>
                </div>

                {/* Mental Model Analogy (5 cols) */}
                <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-indigo-50/70 border border-indigo-100 shadow-2xs space-y-2.5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <Lightbulb className="w-4 h-4 text-indigo-600" />
                      3. Intuitive Real-World Analogy
                    </span>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-white/80 p-3.5 rounded-lg border border-indigo-100 font-normal">
                      {activeAssistantData.analogy}
                    </div>
                  </div>
                  <div className="text-[11px] text-indigo-700 font-semibold pt-2 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Anchors abstract logic to physical mental models</span>
                  </div>
                </div>

              </div>

              {/* 3. Code Syntax & Practical Breakdown (if available) */}
              {activeAssistantData.codeSnippet && (
                <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-md">
                  <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="font-mono font-bold">Code Syntax & Practical Implementation</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">Clean Pattern</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{activeAssistantData.codeSnippet}</code>
                  </pre>
                  {activeAssistantData.codeExplanation && (
                    <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Syntax Breakdown:</strong> {activeAssistantData.codeExplanation}</span>
                    </div>
                  )}
                </div>
              )}

              {/* 4. Common Mistakes & Key Takeaway */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    Common Beginner Pitfall to Avoid:
                  </span>
                  <p className="leading-relaxed pl-5">{activeAssistantData.commonMistakes}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Key Takeaway:
                  </span>
                  <p className="leading-relaxed pl-5 font-semibold">{activeAssistantData.keyTakeaway}</p>
                </div>
              </div>

            </div>

            {/* Custom Interactive Question Input */}
            <div className="pt-4 border-t border-slate-200">
              <form onSubmit={handleCustomTopicSubmit} className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Ask AI Study Assistant to Explain Any Concept in Depth:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={customQueryInput}
                    onChange={(e) => setCustomQueryInput(e.target.value)}
                    placeholder="e.g. 'How does Binary Search work?', 'What is CSS Flexbox?', 'Explain Closures in JavaScript'..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-2xs"
                  />
                  <button
                    type="submit"
                    disabled={isGeneratingCustom || !customQueryInput.trim()}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50"
                  >
                    {isGeneratingCustom ? (
                      <span>Generating Breakdown...</span>
                    ) : (
                      <>
                        <span>Explain in Detail</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. SMART QUIZ GENERATOR (BY SUBJECT & EXPANDED QUESTIONS) */}
        {/* ========================================================================= */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Header & Filter Bar */}
            <div className="space-y-3 pb-4 border-b border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    Smart Quiz Generator & Active Recall
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Subject-specific question bank. Select your desired subject below to practice ONLY questions from that domain.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-indigo-600" />
                    Score: {quizScore} / {filteredQuestions.length}
                  </span>
                </div>
              </div>

              {/* Subject Selection Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1 scrollbar-none">
                <span className="text-[11px] font-bold text-slate-400 uppercase mr-1 flex items-center gap-1 shrink-0">
                  <Filter className="w-3 h-3" />
                  Subject:
                </span>
                {subjectOptions.map((subj) => {
                  const isSelected = selectedSubjectFilter === subj.key;
                  return (
                    <button
                      key={subj.key}
                      onClick={() => handleSubjectChange(subj.key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {subj.key !== 'all' && (
                        <TechSymbol name={subj.key} size="sm" variant="badge" showLabel={false} />
                      )}
                      <span>{subj.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                        {subj.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Subject Banner */}
            {selectedSubjectFilter !== 'all' && (
              <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between text-xs text-indigo-900">
                <div className="flex items-center gap-2">
                  <TechSymbol name={selectedSubjectFilter} size="sm" />
                  <span className="font-bold">
                    Active Focus: {subjectOptions.find(s => s.key === selectedSubjectFilter)?.label}
                  </span>
                  <span className="text-indigo-600">({filteredQuestions.length} questions available)</span>
                </div>
                <button
                  onClick={() => handleSubjectChange('all')}
                  className="text-xs text-indigo-700 hover:text-indigo-900 font-bold underline cursor-pointer"
                >
                  View All Subjects
                </button>
              </div>
            )}

            {/* Quiz Body */}
            {!quizFinished && currentQuestion ? (
              <div className="space-y-4">
                
                {/* Progress bar and metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">
                      Question {quizQuestionIndex + 1} of {filteredQuestions.length}
                    </span>
                    <span className="text-slate-300">•</span>
                    <TechSymbol name={currentQuestion.subjectKey} size="sm" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-semibold">
                    Level: {currentQuestion.difficulty}
                  </span>
                </div>

                {/* Question text */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQuestion.question}
                </h3>

                {/* Optional code snippet in question */}
                {currentQuestion.codeSnippet && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 overflow-x-auto text-xs font-mono text-emerald-400">
                    <code>{currentQuestion.codeSnippet}</code>
                  </div>
                )}

                {/* Options List */}
                <div className="space-y-2.5 pt-1">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;
                    let optionClass = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-300';

                    if (selectedOption !== null) {
                      if (isCorrect) {
                        optionClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500';
                      } else if (isSelected) {
                        optionClass = 'border-rose-400 bg-rose-50 text-rose-950';
                      } else {
                        optionClass = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        disabled={selectedOption !== null}
                        className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${optionClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0 text-slate-600">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>

                        {selectedOption !== null && isCorrect && (
                          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 shrink-0 bg-white px-2 py-0.5 rounded border border-emerald-300">
                            <Check className="w-3.5 h-3.5" /> Correct
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Explanatory Feedback */}
                {selectedOption !== null && (
                  <div className="p-4 rounded-xl bg-indigo-50/90 border border-indigo-200 text-xs sm:text-sm text-indigo-950 space-y-2 animate-in fade-in">
                    <div className="flex items-center gap-2 font-bold text-indigo-900">
                      <Lightbulb className="w-4 h-4 text-indigo-600" />
                      <span>Explanatory Feedback & Core Principle:</span>
                    </div>
                    <p className="leading-relaxed text-slate-800">{currentQuestion.explanation}</p>
                    {currentQuestion.conceptDetail && (
                      <p className="text-xs text-indigo-800 pt-1 border-t border-indigo-100 font-medium">
                        💡 <strong>Concept Tip:</strong> {currentQuestion.conceptDetail}
                      </p>
                    )}
                  </div>
                )}

                {/* Bottom Navigation */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {selectedOption === null ? 'Select an answer to reveal explanation' : 'Feedback verified'}
                  </span>

                  <button
                    onClick={handleNextQuizQuestion}
                    disabled={selectedOption === null}
                    className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      selectedOption !== null
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md active:scale-95'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>{quizQuestionIndex < filteredQuestions.length - 1 ? 'Next Question' : 'Complete Quiz'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              /* Quiz Finished Screen */
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h5 className="text-xl font-extrabold text-slate-900">Quiz Completed!</h5>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  You scored <strong>{quizScore}</strong> out of <strong>{filteredQuestions.length}</strong> questions correct in{' '}
                  <strong>{subjectOptions.find(s => s.key === selectedSubjectFilter)?.label}</strong>.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={resetQuiz}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Retake Subject Quiz</span>
                  </button>
                  <button
                    onClick={() => handleSubjectChange('all')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                  >
                    <span>Try All Subjects</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. AI SUMMARIZER */}
        {/* ========================================================================= */}
        {activeTab === 'summarizer' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  AI Study Material Summarizer
                </h4>
                <p className="text-xs text-slate-500">
                  Condenses complex paragraphs into clean, actionable study takeaways.
                </p>
              </div>
              <div className="flex gap-1.5">
                {DEMO_PRESETS.summarizer.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSummarizerIndex(idx)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border transition-colors ${
                      summarizerIndex === idx
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Sample {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Original text */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Original Source Passage ({DEMO_PRESETS.summarizer[summarizerIndex].title})
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {DEMO_PRESETS.summarizer[summarizerIndex].originalText}
                </p>
              </div>

              {/* Bullet summaries */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-2">
                <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider block">
                  AI Summarized Key Notes (Concept)
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  {DEMO_PRESETS.summarizer[summarizerIndex].keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. PERSONALIZED LEARNING PATH */}
        {/* ========================================================================= */}
        {activeTab === 'path' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="pb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-600" />
                Personalized Learning Roadmap
              </h4>
              <p className="text-xs text-slate-500">
                Select your target career or academic objective to generate a structured progression.
              </p>
            </div>

            {/* Goal selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'frontend', label: 'Frontend Web', symbol: 'web-dev' },
                { id: 'python', label: 'Python & Logic', symbol: 'python' },
                { id: 'dsa', label: 'DSA & Complexity', symbol: 'dsa' },
                { id: 'ai', label: 'AI Foundations', symbol: 'ai' },
              ].map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id as any)}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all flex flex-col items-center gap-1.5 ${
                    selectedGoal === goal.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <TechSymbol name={goal.symbol} size="sm" variant="badge" showLabel={false} />
                  <span>{goal.label}</span>
                </button>
              ))}
            </div>

            {/* Timeline progression */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
              <span className="text-xs font-bold text-slate-800">
                Recommended 4-Stage Pathway:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-indigo-200 shadow-2xs">
                  <span className="text-[10px] font-bold text-indigo-600 block">STAGE 1</span>
                  <p className="font-bold text-slate-900 mt-0.5">Core Syntax & Rules</p>
                  <p className="text-[11px] text-slate-500 mt-1">Foundational concepts & mental models</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-indigo-200 shadow-2xs">
                  <span className="text-[10px] font-bold text-indigo-600 block">STAGE 2</span>
                  <p className="font-bold text-slate-900 mt-0.5">Interactive Practice</p>
                  <p className="text-[11px] text-slate-500 mt-1">Quiz checks & guided exercises</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-indigo-200 shadow-2xs">
                  <span className="text-[10px] font-bold text-indigo-600 block">STAGE 3</span>
                  <p className="font-bold text-slate-900 mt-0.5">Mini-Projects</p>
                  <p className="text-[11px] text-slate-500 mt-1">Build practical, working demos</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-indigo-200 shadow-2xs">
                  <span className="text-[10px] font-bold text-indigo-600 block">STAGE 4</span>
                  <p className="font-bold text-slate-900 mt-0.5">Synthesis & Review</p>
                  <p className="text-[11px] text-slate-500 mt-1">Self-test & peer readiness</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. PRACTICE ASSISTANT */}
        {/* ========================================================================= */}
        {activeTab === 'practice' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="pb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Practice Assistant (Progressive Guided Hints)
              </h4>
              <p className="text-xs text-slate-500">
                Provides progressive debugging hints rather than giving away code answers directly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
              <div className="text-slate-400">// Challenge: Fix this JavaScript function to return the square of a number</div>
              <div className="text-emerald-400">function calculateSquare(num) &#123;</div>
              <div className="pl-4 text-rose-300">return num + num; <span className="text-slate-500">// Hint: addition is not multiplication!</span></div>
              <div className="text-emerald-400">&#125;</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPracticeStep(1)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg ${practiceStep >= 1 ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}
                >
                  Hint 1 (High-Level)
                </button>
                <button
                  onClick={() => setPracticeStep(2)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg ${practiceStep >= 2 ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}
                >
                  Hint 2 (Mathematical)
                </button>
                <button
                  onClick={() => setPracticeStep(3)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg ${practiceStep >= 3 ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}
                >
                  Hint 3 (Code Structure)
                </button>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-xs sm:text-sm text-indigo-950 leading-relaxed">
                {practiceStep === 1 && "Hint 1: Squaring a number means multiplying the number by itself, not adding it to itself."}
                {practiceStep === 2 && "Hint 2: For example, 4 squared is 4 × 4 = 16. With addition, 4 + 4 gives 8, which is double, not square."}
                {practiceStep === 3 && "Hint 3: In JavaScript, use the asterisk operator `*` for multiplication: `return num * num;`"}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. LEARNING PLANNER */}
        {/* ========================================================================= */}
        {activeTab === 'planner' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="pb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-indigo-600" />
                Adaptive Study Planner
              </h4>
              <p className="text-xs text-slate-500">
                Generates a realistic weekly study routine calibrated to your available time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex-1 w-full space-y-1">
                <label className="text-xs font-bold text-slate-700 flex justify-between">
                  <span>Target Hours / Week</span>
                  <span className="text-indigo-600 font-bold">{studyHoursPerWeek} Hours</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="2"
                  value={studyHoursPerWeek}
                  onChange={(e) => setStudyHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="flex-1 w-full space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  Focus Subject
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Web Development</option>
                  <option>Python Programming</option>
                  <option>Data Structures & Algorithms</option>
                  <option>Artificial Intelligence</option>
                  <option>UI/UX Design</option>
                  <option>Communication Skills</option>
                </select>
              </div>
            </div>

            {/* Generated schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">Session 1 (Concept Study)</span>
                <p className="text-slate-600">{Math.round(studyHoursPerWeek * 0.4)} hrs • {focusArea} Core Lesson & Notes</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-indigo-200 bg-indigo-50/20 shadow-2xs">
                <span className="font-bold text-indigo-900 block mb-1">Session 2 (Hands-On Lab)</span>
                <p className="text-slate-600">{Math.round(studyHoursPerWeek * 0.4)} hrs • Code Exercises & Practice</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">Session 3 (Review & Quiz)</span>
                <p className="text-slate-600">{Math.max(1, Math.round(studyHoursPerWeek * 0.2))} hr • Quiz & Weekly Reflection</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
