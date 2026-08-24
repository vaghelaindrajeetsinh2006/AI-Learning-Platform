/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { About } from './components/About';
import { PopularCourses } from './components/PopularCourses';
import { CourseModal } from './components/CourseModal';
import { AIFeatures } from './components/AIFeatures';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoose } from './components/WhyChoose';
import { LearningCategories } from './components/LearningCategories';
import { ResponsibleAI } from './components/ResponsibleAI';
import { LearnerExperience } from './components/LearnerExperience';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Course } from './types';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [labActiveTab, setLabActiveTab] = useState<string>('assistant');
  const [labActiveSubject, setLabActiveSubject] = useState<string>('all');

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartLearning = () => {
    scrollToElement('courses');
  };

  const handleExploreCourses = () => {
    scrollToElement('courses');
  };

  const handleExploreAIFeatures = () => {
    scrollToElement('ai-features');
  };

  const handleOpenPlayground = (demoType: string = 'assistant', subject: string = 'all') => {
    setLabActiveTab(demoType);
    setLabActiveSubject(subject);
    scrollToElement('embedded-lab-section');
  };

  const handleOpenQuizForSubject = (subjectKey: string) => {
    setLabActiveTab('quiz');
    setLabActiveSubject(subjectKey);
    setSelectedCourse(null);
    setTimeout(() => {
      scrollToElement('embedded-lab-section');
    }, 100);
  };

  const handleSelectCategory = (categoryName: string) => {
    scrollToElement('courses');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onStartLearning={handleStartLearning} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreCourses={handleExploreCourses}
          onExploreAIFeatures={handleExploreAIFeatures}
          onOpenPlayground={handleOpenPlayground}
        />

        {/* 3. Quick Benefits */}
        <QuickBenefits />

        {/* 4. About LearnAI */}
        <About onExploreCourses={handleExploreCourses} />

        {/* 5. Popular Courses */}
        <PopularCourses 
          onSelectCourse={(course) => setSelectedCourse(course)} 
          onOpenQuizForSubject={handleOpenQuizForSubject}
        />

        {/* 6. AI Learning Features */}
        <AIFeatures 
          onOpenLab={handleOpenPlayground} 
          activeLabTab={labActiveTab}
          activeLabSubject={labActiveSubject}
        />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Why Choose LearnAI */}
        <WhyChoose />

        {/* 9. Learning Categories */}
        <LearningCategories onSelectCategory={handleSelectCategory} />

        {/* 10. Responsible AI Learning */}
        <ResponsibleAI />

        {/* 11. Learner Experience */}
        <LearnerExperience />

        {/* 12. FAQ Section */}
        <FAQ />

        {/* 13. Call To Action */}
        <CTA 
          onExploreCourses={handleExploreCourses} 
          onGetStarted={handleStartLearning} 
        />

        {/* 14. Contact & Feedback */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Interactive Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenSmartQuizForSubject={handleOpenQuizForSubject}
      />
    </div>
  );
}
