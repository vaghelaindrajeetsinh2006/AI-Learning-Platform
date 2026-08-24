import React from 'react';
import { GraduationCap, Compass, Layers, Briefcase, CheckCircle2, Users } from 'lucide-react';
import { LEARNER_PROFILES } from '../data/contentData';

export const LearnerExperience: React.FC = () => {
  const getLearnerIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-600" />;
      default: return <Users className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="learner-experience" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Target Audiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Designed for Learners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored study workflows built to meet your specific stage of learning, whether preparing for exams or building practical coding projects.
          </p>
        </div>

        {/* 4 Learner Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNER_PROFILES.map((profile, idx) => (
            <div
              key={profile.type}
              id={`learner-profile-${idx}`}
              className="bg-slate-50/60 rounded-2xl p-7 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {getLearnerIcon(profile.iconName)}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">
                    {profile.role}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {profile.type}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {profile.description}
                </p>

                {/* How LearnAI Helps checklist */}
                <div className="pt-2 space-y-2 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-700 block">
                    How LearnAI Supports You:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {profile.howLearnAIHelps.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
