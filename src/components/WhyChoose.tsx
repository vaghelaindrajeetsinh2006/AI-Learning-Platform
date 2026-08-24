import React from 'react';
import { 
  Layout, Sparkles, Layers, HeartHandshake, Calendar, Award, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { WHY_CHOOSE_BENEFITS } from '../data/contentData';

export const WhyChoose: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-indigo-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-indigo-600" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-indigo-600" />;
      case 'Award': return <Award className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-indigo-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Platform Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose LearnAI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Constructed with a student-first philosophy, emphasizing conceptual depth, practical hands-on building, and zero distractions.
          </p>
        </div>

        {/* 7 Benefit Cards Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              id={`why-choose-${benefit.id}`}
              className={`bg-white rounded-2xl p-7 border border-slate-200 shadow-2xs hover:border-indigo-300 hover:shadow-md transition-all ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-indigo-50/20 to-white' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                {getBenefitIcon(benefit.iconName)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
