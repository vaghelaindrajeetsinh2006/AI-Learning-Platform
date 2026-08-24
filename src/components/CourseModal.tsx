import React, { useState } from 'react';
import { 
  X, BookOpen, Clock, Layers, CheckCircle2, Globe, Code2, Binary, 
  Cpu, Palette, MessageSquare, ArrowRight, Sparkles, Check, HelpCircle, Flame
} from 'lucide-react';
import { Course } from '../types';
import { TechSymbol } from './TechSymbol';
import { QUIZ_QUESTIONS } from '../data/aiFeaturesData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenSmartQuizForSubject?: (subjectKey: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ 
  course, 
  onClose,
  onOpenSmartQuizForSubject 
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'outcomes' | 'practice'>('syllabus');
  const [practiceAnswered, setPracticeAnswered] = useState<number | null>(null);
  const [showPracticeFeedback, setShowPracticeFeedback] = useState(false);

  if (!course) return null;

  const subjectQuestionCount = QUIZ_QUESTIONS.filter(q => q.subjectKey === course.subjectKey).length;

  const handleLaunchDirectQuiz = () => {
    if (onOpenSmartQuizForSubject) {
      onOpenSmartQuizForSubject(course.subjectKey);
      onClose();
    }
  };

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Binary': return <Binary className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div 
      id="course-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 md:p-10 bg-slate-900 text-white relative">
          <button
            id="close-course-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700 shadow-sm"
            aria-label="Close Course Details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 mb-4 pr-12">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shrink-0">
              {getCourseIcon(course.iconName)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <TechSymbol name={course.subjectKey} size="md" variant="badge" />
                <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/60">
                  {course.category} Track
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                  Level: {course.level}
                </span>
              </div>
              <h2 id="course-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {course.title}
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mt-2 font-normal">
            {course.detailedDescription}
          </p>

          {/* 3 Main Highlights in Header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Total Duration</span>
                <span className="text-sm font-bold text-white">{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Curriculum Depth</span>
                <span className="text-sm font-bold text-white">{course.lessonsCount} Core Modules</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium block">Practice Bank</span>
                <span className="text-sm font-bold text-emerald-300">{subjectQuestionCount} Smart Quiz Questions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation - 3 Clear High-Visibility Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-100/90 px-4 sm:px-8 gap-2 overflow-x-auto scrollbar-none pt-2">
          <button
            id="tab-syllabus-overview"
            onClick={() => setActiveTab('syllabus')}
            className={`py-3.5 px-5 rounded-t-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer border-t-2 border-x-2 -mb-px ${
              activeTab === 'syllabus'
                ? 'bg-white border-t-indigo-600 border-x-slate-200 border-b-transparent text-indigo-700 shadow-xs'
                : 'bg-transparent border-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeTab === 'syllabus' ? 'text-indigo-600' : 'text-slate-500'}`} />
            <span>1. Syllabus Overview</span>
          </button>

          <button
            id="tab-learning-outcomes"
            onClick={() => setActiveTab('outcomes')}
            className={`py-3.5 px-5 rounded-t-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer border-t-2 border-x-2 -mb-px ${
              activeTab === 'outcomes'
                ? 'bg-white border-t-indigo-600 border-x-slate-200 border-b-transparent text-indigo-700 shadow-xs'
                : 'bg-transparent border-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${activeTab === 'outcomes' ? 'text-indigo-600' : 'text-slate-500'}`} />
            <span>2. Learning Outcomes</span>
          </button>

          <button
            id="tab-practice-quiz"
            onClick={() => setActiveTab('practice')}
            className={`py-3.5 px-5 rounded-t-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer border-t-2 border-x-2 -mb-px ${
              activeTab === 'practice'
                ? 'bg-white border-t-indigo-600 border-x-slate-200 border-b-transparent text-indigo-700 shadow-xs'
                : 'bg-transparent border-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${activeTab === 'practice' ? 'text-indigo-600' : 'text-slate-500'}`} />
            <span>3. Practice & Smart Quiz</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Course Module Structure
                </h3>
                <span className="text-xs text-indigo-600 font-semibold">
                  Step-by-step milestones
                </span>
              </div>
              <div className="space-y-3">
                {course.syllabus.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 text-xs font-extrabold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{mod.title}</span>
                    </h4>
                    <ul className="space-y-1.5 text-sm text-slate-600 pl-8">
                      {mod.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                What You Will Be Able to Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/40 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 font-medium leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="space-y-5">
              {/* Direct Jump to Smart Quiz Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <TechSymbol name={course.subjectKey} size="sm" />
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                      Targeted Quiz Practice
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    Open Smart Quiz for {course.title}
                  </h4>
                  <p className="text-xs text-slate-300">
                    Jump straight to the AI Smart Quiz generator filtered specifically for <strong>{course.title}</strong> questions.
                  </p>
                </div>

                <button
                  id="direct-open-smart-quiz-btn"
                  onClick={handleLaunchDirectQuiz}
                  className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 shrink-0 active:scale-95 cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Start {course.title} Quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick in-modal Checkpoint */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    Quick Checkpoint Question:
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    Self-Check
                  </span>
                </div>

                <p className="text-sm font-bold text-slate-900">
                  What is the primary instructional goal of the {course.title} track?
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() => { setPracticeAnswered(0); setShowPracticeFeedback(true); }}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                      practiceAnswered === 0 
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>A. {course.description}</span>
                    {practiceAnswered === 0 && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>
                  <button
                    onClick={() => { setPracticeAnswered(1); setShowPracticeFeedback(true); }}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      practiceAnswered === 1 
                        ? 'border-slate-300 bg-slate-100 text-slate-800' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>B. Passive memorization without active code practice</span>
                  </button>
                </div>

                {showPracticeFeedback && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs leading-relaxed space-y-1 animate-in fade-in">
                    <p className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <Check className="w-4 h-4" />
                      Concept Verified!
                    </p>
                    <p>
                      LearnAI tracks emphasize structured, hands-on understanding. In a live system, AI practice assistants provide adaptive feedback tailored to your code and responses.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-2">
            <TechSymbol name={course.subjectKey} size="sm" variant="icon" />
            <span>Interactive Educational Track • No subscription required</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              id="modal-launch-quiz-footer-btn"
              onClick={handleLaunchDirectQuiz}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Launch Smart Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
