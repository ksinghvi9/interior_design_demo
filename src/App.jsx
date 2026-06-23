import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ProjectDetailPage from './components/ProjectDetailPage';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

// Data
import { projects } from './data/projects';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('home'); // 'home' | 'project-details'
  const [activeProject, setActiveProject] = useState(null);

  // Auto scroll to top when toggling home view
  useEffect(() => {
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [view]);

  const handleSelectProject = (project) => {
    setActiveProject(project);
    setView('project-details');
  };

  const handleNavigate = (id) => {
    if (view !== 'home') {
      setView('home');
      // Delay slightly to let the home view mount before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Loading Monogram Screen */}
      <AnimatePresence>
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Contents */}
      {!isLoading && (
        <div className="relative min-h-screen bg-brand-bg text-brand-textPrimary transition-colors duration-500 font-sans selection:bg-brand-accent selection:text-white">
          
          {/* Minimal sticky navigation */}
          <Navbar currentView={view} onBackToHome={() => setView('home')} onNavigate={handleNavigate} />

          {/* Conditional View Rendering */}
          <AnimatePresence mode="wait">
            {view === 'home' ? (
              <div key="home-view">
                {/* Hero Banner */}
                <Hero onNavigate={handleNavigate} />

                {/* About Founder & Philosophy */}
                <About />

                {/* Stats Metric Panel */}
                <Stats />

                {/* Before / After Interactive Slider Section */}
                <section className="section-spacer bg-brand-bg border-t border-brand-border">
                  <div className="layout-container max-w-[960px]">
                    <div className="text-center max-w-xl mx-auto mb-12">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-semibold">The Transformation</span>
                      <h2 className="font-sans font-semibold text-[26px] lg:text-[42px] leading-[1.3] text-brand-textPrimary tracking-normal mt-3">
                        Refined Spatial Transformations
                      </h2>
                      <p className="mt-3 text-xs font-sans font-light text-brand-textSecondary leading-relaxed">
                        Witness the transition from outdated, cluttered spaces to curated architectural sanctuaries. Slide the handle left and right to inspect the details.
                      </p>
                      <div className="w-12 h-[1px] bg-brand-accent mx-auto mt-6" />
                    </div>

                    <BeforeAfterSlider 
                      beforeImage="/assets/before_living_room.png" 
                      afterImage="/assets/after_living_room.png" 
                    />
                  </div>
                </section>

                {/* Projects Section */}
                <Portfolio onSelectProject={handleSelectProject} />

                {/* Service Offerings */}
                <Services />

                {/* Methodical Timeline Process */}
                <Process />

                {/* Testimonial slider */}
                <Testimonials />

                {/* Gallery Wall */}
                <Gallery />

                {/* FAQ Block */}
                <FAQ />

                {/* Studio Info & Consultation Booking */}
                <Contact />
              </div>
            ) : (
              <ProjectDetailPage 
                key="project-details-view"
                project={activeProject}
                projects={projects}
                onNavigateToProject={(p) => setActiveProject(p)}
                onBack={() => setView('home')}
              />
            )}
          </AnimatePresence>

          {/* Premium Footer */}
          <Footer onNavigate={handleNavigate} />
        </div>
      )}
    </>
  );
}
