import React from 'react';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';
import { SLIDES_META } from '../data/presentationData';

interface SlideIndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideId: number) => void;
}

export const SlideIndexModal: React.FC<SlideIndexModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-cream-light rounded-2xl shadow-2xl border border-sage/40 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-800 text-cream px-6 py-4 flex items-center justify-between border-b border-sage/30">
          <div>
            <span className="text-xs font-mono text-limeAccent uppercase font-bold tracking-wider">
              Mục lục bài thuyết trình
            </span>
            <h3 className="text-lg font-bold text-cream">
              Danh sách 9 chuyên đề bài học
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-forest-700/80 hover:bg-forest-700 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Grid / List */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {SLIDES_META.map(slide => {
            const isActive = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex items-start gap-3 group relative cursor-pointer ${
                  isActive 
                    ? 'bg-deepGreen text-cream border-limeAccent shadow-md' 
                    : 'bg-white hover:bg-sage/10 text-forest-800 border-sage/30 hover:border-sage'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                  isActive ? 'bg-limeAccent text-forest-900' : 'bg-sage/20 text-deepGreen group-hover:bg-deepGreen group-hover:text-cream'
                }`}>
                  {slide.sectionNumber}
                </div>

                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-forest-700 text-limeAccent' : 'bg-sage/20 text-deepGreen'
                    }`}>
                      {slide.tag}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold truncate ${isActive ? 'text-cream' : 'text-forest-800 group-hover:text-deepGreen'}`}>
                    {slide.title}
                  </h4>
                  <p className={`text-xs truncate ${isActive ? 'text-cream/80' : 'text-forest-800/60'}`}>
                    {slide.subtitle}
                  </p>
                </div>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {isActive ? (
                    <CheckCircle2 className="w-5 h-5 text-limeAccent" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-sage-dark" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-cream px-6 py-3 border-t border-sage/30 text-xs text-[#183D2B]/60 flex justify-between items-center">
          <span>Nhấn vào ô để chuyển ngay đến slide tương ứng</span>
          <span className="font-mono">Phím tắt: [M]</span>
        </div>
      </div>
    </div>
  );
};
