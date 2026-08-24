import React from 'react';
import { BookOpen, Sparkles, ArrowRight, GraduationCap } from 'lucide-react';

interface CTAProps {
  onExploreCourses: () => void;
  onGetStarted: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onExploreCourses, onGetStarted }) => {
  return (
    <section id="cta-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden shadow-xl border border-indigo-800/40">
          {/* Subtle decorative circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-800/80 border border-indigo-700/80 text-indigo-200 text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Start Your Learning Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Learn Smarter?
            </h2>

            <p className="text-base sm:text-lg text-indigo-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
              Explore new skills and discover a better way to learn with AI-assisted tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                id="cta-explore-courses-btn"
                onClick={onExploreCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-indigo-50 text-indigo-950 font-bold text-base shadow-md transition-all active:scale-[0.98]"
              >
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>Explore Courses</span>
              </button>

              <button
                id="cta-get-started-btn"
                onClick={onGetStarted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-md transition-all active:scale-[0.98] border border-indigo-500"
              >
                <Sparkles className="w-5 h-5" />
                <span>Get Started (Concept)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-indigo-300/80 pt-2 font-medium">
              Free open educational concept • No account or credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
