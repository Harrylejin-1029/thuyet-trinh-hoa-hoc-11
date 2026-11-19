import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ViewMode } from './types';
import { SLIDES_META } from './data/presentationData';
import { Navigation } from './components/Navigation';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { SlideIndexModal } from './components/SlideIndexModal';
import { KeyboardShortcutsHelp } from './components/KeyboardShortcutsHelp';

// Import all 9 sections
import { Section01Hero } from './sections/Section01Hero';
import { Section02Concept } from './sections/Section02Concept';
import { Section03Classification } from './sections/Section03Classification';
import { Section04Composting } from './sections/Section04Composting';
import { Section05Benefits } from './sections/Section05Benefits';
import { Section06ProsCons } from './sections/Section06ProsCons';
import { Section07Applications } from './sections/Section07Applications';
import { Section08Summary } from './sections/Section08Summary';
import { Section09Quiz } from './sections/Section09Quiz';

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>('presentation');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isIndexOpen, setIsIndexOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  const totalSlides = SLIDES_META.length;
  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Timer effect for tracking presentation duration
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(1, prev - 1));
  }, []);

  const handleSelectSlide = useCallback((slideId: number) => {
    setCurrentSlide(slideId);
    if (viewMode === 'scroll') {
      const el = document.getElementById(`section-${slideId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [viewMode]);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.warn(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  const handleToggleViewMode = () => {
    setViewMode(prev => prev === 'presentation' ? 'scroll' : 'presentation');
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        if (viewMode === 'presentation' && !isNotesOpen && !isIndexOpen && !isHelpOpen) {
          e.preventDefault();
          handleNextSlide();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        if (viewMode === 'presentation' && !isNotesOpen && !isIndexOpen && !isHelpOpen) {
          e.preventDefault();
          handlePrevSlide();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotesOpen(prev => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setIsIndexOpen(prev => !prev);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        handleToggleViewMode();
      } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setIsHelpOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsNotesOpen(false);
        setIsIndexOpen(false);
        setIsHelpOpen(false);
      } else if (e.key >= '1' && e.key <= '9') {
        const slideNum = parseInt(e.key, 10);
        if (slideNum <= totalSlides) {
          handleSelectSlide(slideNum);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, handleSelectSlide, isNotesOpen, isIndexOpen, isHelpOpen, totalSlides, viewMode]);

  // Scroll to current slide top whenever slide changes in presentation mode
  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.scrollTop = 0;
    }
  }, [currentSlide]);

  // Render active section component
  const renderSlide = (id: number) => {
    switch (id) {
      case 1:
        return (
          <Section01Hero 
            onStartPresentation={() => setCurrentSlide(2)} 
            onOpenNotes={() => setIsNotesOpen(true)}
          />
        );
      case 2:
        return <Section02Concept />;
      case 3:
        return <Section03Classification />;
      case 4:
        return <Section04Composting />;
      case 5:
        return <Section05Benefits />;
      case 6:
        return <Section06ProsCons />;
      case 7:
        return <Section07Applications />;
      case 8:
        return <Section08Summary onGoToQuiz={() => setCurrentSlide(9)} />;
      case 9:
        return <Section09Quiz />;
      default:
        return <Section01Hero onStartPresentation={() => setCurrentSlide(2)} onOpenNotes={() => setIsNotesOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2E8] text-[#183D2B] flex flex-col font-sans selection:bg-[#C6DB82] selection:text-[#183D2B]">
      {/* Presentation Navigation Header */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        onSelectSlide={handleSelectSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onToggleNotes={() => setIsNotesOpen(true)}
        onToggleSlideIndex={() => setIsIndexOpen(true)}
        onToggleHelp={() => setIsHelpOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        elapsedSeconds={elapsedSeconds}
      />

      {/* Main Slide / Content Area */}
      {viewMode === 'presentation' ? (
        <main 
          ref={slideContainerRef} 
          className="flex-1 overflow-y-auto relative flex flex-col justify-start"
        >
          {renderSlide(currentSlide)}
        </main>
      ) : (
        /* Editorial Continuous Scroll Mode */
        <main className="flex-1 space-y-16 py-8">
          {SLIDES_META.map(slide => (
            <section 
              key={slide.id} 
              id={`section-${slide.id}`}
              className="border-b border-sage/30 last:border-b-0 pb-12"
            >
              {renderSlide(slide.id)}
            </section>
          ))}
        </main>
      )}

      {/* Floating Prev/Next Controller in Presentation Mode */}
      {viewMode === 'presentation' && (
        <div className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-2xl bg-forest-900/80 backdrop-blur-md border border-sage/30 shadow-lg">
          <button
            onClick={handlePrevSlide}
            disabled={currentSlide <= 1}
            className="px-3 py-1.5 rounded-xl bg-forest-800 hover:bg-forest-700 disabled:opacity-30 disabled:cursor-not-allowed text-cream hover:text-limeAccent text-xs font-bold transition-all"
            title="Quay lại slide trước (←)"
          >
            ← Trước
          </button>
          
          <button
            onClick={() => setIsIndexOpen(true)}
            className="px-2.5 py-1.5 rounded-xl bg-forest-700/60 hover:bg-forest-700 text-limeAccent font-mono text-xs font-bold transition-colors"
            title="Danh sách slide"
          >
            {currentSlide} / {totalSlides}
          </button>

          <button
            onClick={handleNextSlide}
            disabled={currentSlide >= totalSlides}
            className="px-3 py-1.5 rounded-xl bg-deepGreen hover:bg-deepGreen-600 disabled:opacity-30 disabled:cursor-not-allowed text-cream font-bold text-xs transition-all shadow-xs"
            title="Slide kế tiếp (→)"
          >
            Sau →
          </button>
        </div>
      )}

      {/* Speaker Notes Modal */}
      <SpeakerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        totalSlides={totalSlides}
      />

      {/* Slide Index Modal */}
      <SlideIndexModal
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleSelectSlide}
      />

      {/* Keyboard Shortcuts Help Modal */}
      <KeyboardShortcutsHelp
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
};
