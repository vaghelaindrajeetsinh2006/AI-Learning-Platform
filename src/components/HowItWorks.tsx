import React from 'react';
import { Compass, BookOpen, Laptop, Bot, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/contentData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-indigo-600" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-indigo-600" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-indigo-600" />;
      case 'Bot': return <Bot className="w-6 h-6 text-indigo-600" />;
      default: return <Compass className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How LearnAI Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A four-step framework built to guide learners from initial exploration to deliberate practice and conceptual mastery.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              id={`how-it-works-step-${step.stepNumber}`}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-600">
                    {step.stepNumber}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-indigo-50 transition-all">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {step.description}
                </p>
              </div>

              {/* Step Detail Footer */}
              <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-500">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
