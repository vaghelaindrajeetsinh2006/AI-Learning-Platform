import React, { useState, useEffect } from 'react';
import { 
  Bot, HelpCircle, FileText, Compass, Sparkles, CalendarCheck, 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Play
} from 'lucide-react';
import { AI_FEATURES } from '../data/aiFeaturesData';
import { AIInteractiveLab } from './AIInteractiveLab';

interface AIFeaturesProps {
  onOpenLab: (demoType?: string, subject?: string) => void;
  activeLabTab?: string;
  activeLabSubject?: string;
}

export const AIFeatures: React.FC<AIFeaturesProps> = ({ 
  onOpenLab,
  activeLabTab = 'assistant',
  activeLabSubject = 'all'
}) => {
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState<string>(activeLabTab);
  const [activeSubject, setActiveSubject] = useState<string>(activeLabSubject);

  useEffect(() => {
    if (activeLabTab) {
      setActiveInteractiveDemo(activeLabTab);
    }
  }, [activeLabTab]);

  useEffect(() => {
    if (activeLabSubject) {
      setActiveSubject(activeLabSubject);
    }
  }, [activeLabSubject]);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-indigo-600" />;
      case 'HelpCircle':
        return <HelpCircle className="w-6 h-6 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-rose-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="ai-features" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Intelligent Study Aids</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            AI-Assisted Learning Features
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover conceptual study tools engineered to demystify complex subjects, support deliberate practice, and help you master skills step by step.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AI_FEATURES.map((feature) => (
            <div
              key={feature.id}
              id={`ai-feature-card-${feature.id}`}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-50 transition-all">
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {feature.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 mt-0.5">
                    "{feature.tagline}"
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`try-feature-btn-${feature.id}`}
                  onClick={() => {
                    setActiveInteractiveDemo(feature.demoType);
                    const el = document.getElementById('embedded-lab-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 group/btn"
                >
                  <span>Try Interactive Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive AI Lab Showcase */}
        <div id="embedded-lab-section" className="scroll-mt-24 space-y-4">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-xl font-bold text-slate-900">
              Interactive Feature Playground
            </h3>
            <p className="text-xs text-slate-500">
              Experience the frontend concept tools in action. Switch between tabs below to test each study capability.
            </p>
          </div>

          <AIInteractiveLab 
            key={`${activeInteractiveDemo}-${activeSubject}`}
            initialTab={activeInteractiveDemo || 'assistant'} 
            initialSubject={activeSubject || 'all'}
            isEmbedded={true}
          />
        </div>

        {/* Responsible Concept Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-center">
          <p className="text-xs text-slate-600">
            <strong className="text-slate-800">Concept Verification Notice:</strong> LearnAI showcases how generative tools can responsibly assist student learning. All demos run client-side to illustrate interaction workflows without requiring third-party API subscriptions.
          </p>
        </div>

      </div>
    </section>
  );
};
