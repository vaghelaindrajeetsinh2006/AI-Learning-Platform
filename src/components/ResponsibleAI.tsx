import React from 'react';
import { 
  ShieldCheck, Brain, CheckCheck, ShieldAlert, Lightbulb, Users, 
  CheckCircle2, AlertTriangle, Sparkles 
} from 'lucide-react';
import { RESPONSIBLE_AI_PRINCIPLES } from '../data/contentData';

export const ResponsibleAI: React.FC = () => {
  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-indigo-600" />;
      case 'CheckCheck': return <CheckCheck className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-600" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-blue-600" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="responsible-ai" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ethical Learning Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Responsible AI in Education
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            AI is a powerful cognitive tool when used with intentionality, verification, and ethical integrity. Here are our core pedagogical principles.
          </p>
        </div>

        {/* 5 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {RESPONSIBLE_AI_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              id={`responsible-principle-${index}`}
              className={`rounded-2xl p-7 bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/80 hover:bg-slate-800 transition-all flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                  {getPrincipleIcon(principle.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-300">
                    "{principle.description}"
                  </p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {principle.recommendation}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: Academic Integrity Pledge */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-indigo-950/90 to-slate-900 border border-indigo-700/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/60 border border-indigo-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Our Student Pledge
              </h3>
              <p className="text-xs text-indigo-200 leading-relaxed">
                "I use AI to deepen my understanding, practice problem solving, and verify my logic. I take pride in doing my own thinking."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-700 text-[11px] text-slate-400">
              Upholding authentic mastery & academic honesty.
            </div>
          </div>
        </div>

        {/* Responsible Checklist Banner */}
        <div className="rounded-2xl bg-slate-800/50 border border-slate-700 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Encouraged Habits</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Asking for analogies & mental models</li>
              <li>Generating randomized practice quizzes</li>
              <li>Requesting hints on logic errors</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Discouraged Practices</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Copy-pasting direct homework answers</li>
              <li>Skipping core foundational theory</li>
              <li>Submitting confidential personal data</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Verification Standard</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Always double-check complex equations, syntax variations, and theoretical claims against verified primary textbooks and educator notes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
