import React, { useState } from 'react';
import { BookOpen, Globe, Code2, Binary, Cpu, Palette, MessageSquare, ArrowRight, Tag, Sparkles, HelpCircle } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { Course } from '../types';
import { TechSymbol } from './TechSymbol';

interface PopularCoursesProps {
  onSelectCourse: (course: Course) => void;
  onOpenQuizForSubject?: (subjectKey: string) => void;
}

export const PopularCourses: React.FC<PopularCoursesProps> = ({ 
  onSelectCourse,
  onOpenQuizForSubject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Programming', 'Computer Science', 'Artificial Intelligence', 'Design', 'Career Skills'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(course => course.category === selectedCategory);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-600" />;
      case 'Binary':
        return <Binary className="w-6 h-6 text-purple-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-rose-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-cyan-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-indigo-600" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <section id="courses" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Popular Learning Courses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore curated foundational tracks with authentic language symbols, hands-on syllabus milestones, and direct AI practice quizzes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`course-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="bg-slate-50/50 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Card Top */}
              <div className="p-6 sm:p-7 flex-1 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {getCourseIcon(course.iconName)}
                    </div>
                    {/* Primary Tech Language Symbol */}
                    <TechSymbol name={course.subjectKey} size="md" variant="badge" />
                  </div>

                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getLevelBadgeClass(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-medium text-slate-500 block mb-1">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                {/* Tags with tech symbols */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.tags.map((tag) => (
                    <TechSymbol 
                      key={tag} 
                      name={tag} 
                      size="sm" 
                      variant="pill" 
                      showLabel={true} 
                    />
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-4 sm:px-7 sm:py-4 bg-white border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  id={`course-quiz-btn-${course.id}`}
                  onClick={() => onOpenQuizForSubject && onOpenQuizForSubject(course.subjectKey)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition-colors"
                  title="Practice AI Smart Quiz for this subject"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Take Quiz</span>
                </button>

                <button
                  id={`explore-course-btn-${course.id}`}
                  onClick={() => onSelectCourse(course)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 group/btn"
                >
                  <span>Explore Course</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Note: All courses on LearnAI are structured educational track concepts with interactive practice modules. No paid subscriptions or real enrollments required.
          </p>
        </div>

      </div>
    </section>
  );
};
