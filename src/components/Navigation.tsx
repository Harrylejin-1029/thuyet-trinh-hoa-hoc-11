import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  BookOpen, 
  ListTree, 
  Clock, 
  ScrollText, 
  MonitorPlay,
  HelpCircle
} from 'lucide-react';
import { SLIDES_META } from '../data/presentationData';
import { ViewMode } from '../types';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (slideId: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleNotes: () => void;
  onToggleSlideIndex: () => void;
  onToggleHelp: () => void;
  viewMode: ViewMode;
  onToggleViewMode: () => void;
  elapsedSeconds: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide: _onSelectSlide,
  isFullscreen,
  onToggleFullscreen,
  onToggleNotes,
  onToggleSlideIndex,
  onToggleHelp,
  viewMode,
  onToggleViewMode,
  elapsedSeconds,
}) => {
  const currentMeta = SLIDES_META.find(s => s.id === currentSlide) || SLIDES_META[0];
  const progressPercent = Math.round((currentSlide / totalSlides) * 100);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-forest-800/95 backdrop-blur-md border-b border-sage/20 text-cream transition-all duration-300">
      {/* Top progress indicator bar */}
      <div className="w-full bg-forest-900 h-1 relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sage via-limeAccent to-accentLime transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Branding & Section Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-limeAccent animate-pulse" />
            <span className="hidden sm:inline-block text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-forest-700 text-limeAccent border border-limeAccent/30">
              Hóa Học 11
            </span>
          </div>

          <div className="h-4 w-px bg-sage/30 hidden sm:block" />

          <button 
            onClick={onToggleSlideIndex}
            className="flex items-center gap-2 text-left hover:text-limeAccent transition-colors group cursor-pointer"
            title="Nhấn để mở danh sách slide"
          >
            <span className="text-xs font-mono font-bold text-limeAccent bg-forest-900/80 px-2 py-0.5 rounded border border-sage/30 group-hover:border-limeAccent/50">
              {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            <span className="text-sm font-semibold truncate max-w-[150px] sm:max-w-[280px] md:max-w-xs text-cream/95 group-hover:text-cream">
              {currentMeta.title}
            </span>
          </button>
        </div>

        {/* Center: Presentation Timer */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/70 border border-sage/20 text-xs text-cream/80 font-mono">
          <Clock className="w-3.5 h-3.5 text-limeAccent" />
          <span>{formatTime(elapsedSeconds)}</span>
        </div>

        {/* Right: Actions & Slide Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Menu / Slide Index */}
          <button
            onClick={onToggleSlideIndex}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-forest-700/60 hover:bg-forest-700 text-cream/90 hover:text-limeAccent border border-sage/20 transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Mục lục các slide (M)"
          >
            <ListTree className="w-4 h-4" />
            <span className="hidden lg:inline">Mục lục</span>
          </button>

          {/* Speaker Notes button */}
          <button
            onClick={onToggleNotes}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-deepGreen hover:bg-deepGreen-600 text-cream border border-limeAccent/30 transition-colors flex items-center gap-1.5 text-xs font-medium shadow-sm hover:shadow-glow-green"
            title="Gợi ý thuyết trình cho học sinh (N)"
          >
            <BookOpen className="w-4 h-4 text-limeAccent" />
            <span className="hidden sm:inline">Gợi ý thuyết trình</span>
          </button>

          {/* View Mode Toggle: Slide vs Scroll */}
          <button
            onClick={onToggleViewMode}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-forest-700/60 hover:bg-forest-700 text-cream/90 hover:text-cream border border-sage/20 transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Đổi chế độ xem: Từng Slide / Cuộn trang (S)"
          >
            {viewMode === 'presentation' ? (
              <>
                <ScrollText className="w-4 h-4 text-amber-300" />
                <span className="hidden xl:inline">Chế độ Cuộn</span>
              </>
            ) : (
              <>
                <MonitorPlay className="w-4 h-4 text-limeAccent" />
                <span className="hidden xl:inline">Chế độ Slide</span>
              </>
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg bg-forest-700/60 hover:bg-forest-700 text-cream/90 hover:text-cream border border-sage/20 transition-colors"
            title="Toàn màn hình máy chiếu (F)"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-limeAccent" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </button>

          {/* Help keyboard shortcut */}
          <button
            onClick={onToggleHelp}
            className="p-1.5 rounded-lg bg-forest-700/60 hover:bg-forest-700 text-cream/80 hover:text-cream border border-sage/20 transition-colors hidden sm:block"
            title="Phím tắt điều khiển (?)"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Slide navigation buttons (only active in presentation mode) */}
          {viewMode === 'presentation' && (
            <div className="flex items-center gap-1 ml-1 sm:ml-2 pl-1 sm:pl-2 border-l border-sage/30">
              <button
                onClick={onPrev}
                disabled={currentSlide <= 1}
                className="p-1.5 rounded-lg bg-forest-900 hover:bg-forest-700 disabled:opacity-30 disabled:cursor-not-allowed text-cream hover:text-limeAccent border border-sage/30 transition-all"
                title="Slide trước (← hoặc Phím lên)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                disabled={currentSlide >= totalSlides}
                className="p-1.5 rounded-lg bg-forest-900 hover:bg-forest-700 disabled:opacity-30 disabled:cursor-not-allowed text-cream hover:text-limeAccent border border-sage/30 transition-all"
                title="Slide tiếp theo (→ hoặc Phím cách)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
