import React from 'react';
import { 
  Code, Cpu, BarChart3, Globe, Palette, MessageSquare, Briefcase, 
  Grid, ArrowRight, Layers 
} from 'lucide-react';
import { LEARNING_CATEGORIES } from '../data/contentData';
import { TechSymbol } from './TechSymbol';

interface LearningCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const LearningCategories: React.FC<LearningCategoriesProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-indigo-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-indigo-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-indigo-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-indigo-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-indigo-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-indigo-600" />;
      default: return <Layers className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="categories" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <Grid className="w-3.5 h-3.5" />
            <span>Subject Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Learning Categories & Tech Languages
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Browse through core domains covering modern software engineering, web languages, artificial intelligence, product design, and communication.
          </p>
        </div>

        {/* 7 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {LEARNING_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-indigo-50 transition-all">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    {cat.coursesCount}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Sample topics pill list with tech symbols */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.sampleTopics.map((topic, tIdx) => (
                    <TechSymbol 
                      key={tIdx} 
                      name={topic} 
                      size="sm" 
                      variant="pill" 
                      showLabel={true} 
                    />
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  id={`browse-category-btn-${cat.id}`}
                  onClick={() => onSelectCategory(cat.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 group/btn"
                >
                  <span>Explore Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
