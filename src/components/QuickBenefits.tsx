import React from 'react';
import { Smile, Sparkles, Target, Clock } from 'lucide-react';
import { QUICK_BENEFITS } from '../data/contentData';

export const QuickBenefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile':
        return <Smile className="w-6 h-6 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-indigo-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-indigo-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="quick-benefits" className="py-12 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              id={`quick-benefit-${benefit.id}`}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 group-hover:border-indigo-200 transition-all">
                {getIcon(benefit.iconName)}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5 font-sans">
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
