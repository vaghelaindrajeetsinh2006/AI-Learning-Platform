import React, { useState } from 'react';
import { BookOpen, Sparkles, ArrowRight, Play, CheckCircle2, Bot, BrainCircuit, Code, HelpCircle } from 'lucide-react';
import { TechSymbol } from './TechSymbol';

interface HeroProps {
  onExploreCourses: () => void;
  onExploreAIFeatures: () => void;
  onOpenPlayground: (type?: string, subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onExploreAIFeatures,
  onOpenPlayground,
}) => {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'explanation' | 'quiz' | 'planner'>('explanation');

  const languageBadges = [
    { name: 'HTML5', key: 'web-dev' },
    { name: 'CSS3', key: 'css' },
    { name: 'JavaScript', key: 'js' },
    { name: 'Python', key: 'python' },
    { name: 'DSA & Logic', key: 'dsa' },
    { name: 'AI / ML', key: 'ai' },
    { name: 'UI/UX', key: 'design' },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-200/60"
    >
      {/* Background Decorative subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span>LearnAI • Educational Learning Platform Concept</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Learn Smarter.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600">
                Learn Better with AI.
              </span>
            </h1>

            {/* Supporting Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore courses, practice with subject-filtered smart quizzes, and discover AI-assisted study tools designed to make learning simpler and more engaging.
            </p>

            {/* Language & Subject Symbols Strip */}
            <div className="pt-1">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 flex-wrap">
                <span className="text-xs font-bold text-slate-400 mr-1 uppercase">Tech Tracks:</span>
                {languageBadges.map((badge) => (
                  <button
                    key={badge.name}
                    onClick={() => onOpenPlayground('quiz', badge.key)}
                    className="hover:scale-105 transition-transform"
                    title={`Practice ${badge.name} Quiz`}
                  >
                    <TechSymbol name={badge.name} size="sm" variant="pill" showLabel={true} />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-courses-btn"
                onClick={onExploreCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-ai-btn"
                onClick={onExploreAIFeatures}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-sm hover:border-slate-400 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>Explore AI Features</span>
              </button>
            </div>

            {/* Trust & Focus Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Beginner-friendly tracks</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subject-filtered Smart Quizzes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Responsible AI guidance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Educational Preview Terminal */}
          <div className="lg:col-span-5">
            <div 
              id="hero-preview-card"
              className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
            >
              {/* Header Bar */}
              <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">LearnAI Assistant Preview</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-300 font-mono border border-indigo-700">
                  Concept Demo
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex border-b border-slate-100 bg-slate-50/80 p-1.5 gap-1 text-xs font-medium">
                <button
                  onClick={() => setActiveInteractiveTab('explanation')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all ${
                    activeInteractiveTab === 'explanation'
                      ? 'bg-white text-indigo-700 shadow-xs font-semibold border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Concept Explainer
                </button>
                <button
                  onClick={() => setActiveInteractiveTab('quiz')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all ${
                    activeInteractiveTab === 'quiz'
                      ? 'bg-white text-indigo-700 shadow-xs font-semibold border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Quick Quiz
                </button>
                <button
                  onClick={() => setActiveInteractiveTab('planner')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all ${
                    activeInteractiveTab === 'planner'
                      ? 'bg-white text-indigo-700 shadow-xs font-semibold border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Study Plan
                </button>
              </div>

              {/* Interactive Demo Content */}
              <div className="p-5 space-y-4">
                {activeInteractiveTab === 'explanation' && (
                  <div className="space-y-3.5">
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                        Student Question:
                      </div>
                      <p className="text-sm font-semibold text-slate-800">
                        "What is the difference between a function parameter and an argument?"
                      </p>
                    </div>

                    <div className="bg-indigo-50/80 rounded-xl p-3.5 border border-indigo-100 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-indigo-900">
                        <span className="flex items-center gap-1.5">
                          <Bot className="w-4 h-4 text-indigo-600" />
                          AI Study Assistant:
                        </span>
                        <span className="text-[10px] text-indigo-600 uppercase font-mono">Analogy</span>
                      </div>
                      <p className="text-xs text-indigo-950 leading-relaxed">
                        A <strong>parameter</strong> is like a placeholder slot on a form (e.g. "Full Name: ____"). An <strong>argument</strong> is the actual value you fill into that slot when submitting (e.g. "Alex").
                      </p>
                      <div className="text-[11px] bg-white/90 p-2 rounded border border-indigo-100 font-mono text-slate-700">
                        function greet(<span className="text-indigo-600 font-bold">name</span>) &#123; ... &#125; <br/>
                        greet(<span className="text-emerald-600 font-bold">"Alex"</span>);
                      </div>
                    </div>
                  </div>
                )}

                {activeInteractiveTab === 'quiz' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                        Practice Question
                      </span>
                      <TechSymbol name="web-dev" size="sm" />
                    </div>
                    <p className="text-xs font-medium text-slate-800">
                      Which HTML tag represents the top-level navigation container for a web page?
                    </p>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-between">
                        <span>A. &lt;menu-bar&gt;</span>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-medium flex items-center justify-between">
                        <span>B. &lt;nav&gt;</span>
                        <span className="text-[10px] text-emerald-700 font-bold">✓ Correct</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-between">
                        <span>C. &lt;links&gt;</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeInteractiveTab === 'planner' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between text-slate-600 pb-1 border-b border-slate-100">
                      <span className="font-semibold text-slate-800">Weekly Python Milestone</span>
                      <span className="text-[10px] text-indigo-600 font-medium">3 of 4 Complete</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                        <span>Mon: Variables & Input logic</span>
                        <span className="text-[10px] font-semibold text-emerald-700">Done ✓</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                        <span>Wed: For & While Loops</span>
                        <span className="text-[10px] font-semibold text-emerald-700">Done ✓</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 font-medium">
                        <span>Today: Functions & Arguments</span>
                        <span className="text-[10px] font-semibold text-indigo-700">Next Up ➔</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Action Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Explore all 6 AI study feature concepts
                  </span>
                  <button
                    onClick={() => onOpenPlayground(activeInteractiveTab === 'quiz' ? 'quiz' : activeInteractiveTab === 'planner' ? 'planner' : 'assistant')}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group cursor-pointer"
                  >
                    <span>Launch Lab</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
