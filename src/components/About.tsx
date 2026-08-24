import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ShieldCheck, Heart, Lightbulb, Users } from 'lucide-react';

interface AboutProps {
  onExploreCourses: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreCourses }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About LearnAI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A Thoughtful Approach to Learning with AI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            LearnAI is an educational learning platform concept built to demonstrate how structured curriculum and responsible AI assistance can work hand-in-hand to empower learners.
          </p>
        </div>

        {/* 4 Core Dimensions: What, Why, Who, How */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: What LearnAI is */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">What is LearnAI?</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              LearnAI is a modern learning platform concept that bridges foundational curriculum in programming, computer science, artificial intelligence, and design with intuitive AI study aids. We focus on clarity, step-by-step progress, and active practice.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Structured Tracks</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Practice Checkpoints</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Open Access Concept</span>
            </div>
          </div>

          {/* Card 2: Why it exists */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Why Does It Exist?</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Traditional technical education can often feel overwhelming, dry, or bogged down by impenetrable terminology. LearnAI exists to prove that complex topics become approachable when explained through relatable analogies and reinforced with prompt feedback.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Zero Intimidation</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Intuitive Mental Models</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Active Recall</span>
            </div>
          </div>

          {/* Card 3: Who it is for */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Who is it For?</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Designed specifically for school students, college undergraduates, self-taught coding enthusiasts, exam preparers, and anyone seeking a supportive, beginner-friendly foundation in digital skills.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="px-2.5 py-1 rounded-md bg-slate-100">School & College</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Self-Directed Coders</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Curious Beginners</span>
            </div>
          </div>

          {/* Card 4: How AI supports learning */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">How AI Supports Learning</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Instead of generating shortcuts, AI on LearnAI acts as an interactive study partner: clarifying confusing definitions, testing your memory with generated practice quizzes, and breaking down multi-step problem solving.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Study Companion</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Guided Hints</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100">Ethical Integrity</span>
            </div>
          </div>

        </div>

        {/* Responsible Foundation Banner */}
        <div className="rounded-2xl bg-indigo-900 text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Responsible AI Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Designed to Complement Human Teachers, Never Replace Them
              </h3>
              <p className="text-indigo-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                We believe true mastery comes from genuine understanding, hands-on building, and critical thinking. LearnAI promotes healthy learning habits, data privacy, and academic honesty.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                id="about-explore-btn"
                onClick={onExploreCourses}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-indigo-50 text-indigo-900 font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                Browse Curriculum
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
