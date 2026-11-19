import React from 'react';
import { X, Mic, Sparkles, FlaskConical, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES_META } from '../data/presentationData';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  totalSlides: number;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  totalSlides,
}) => {
  if (!isOpen) return null;

  const meta = SLIDES_META.find(s => s.id === currentSlide) || SLIDES_META[0];
  const { speakerNotes } = meta;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-cream-light rounded-2xl shadow-2xl border border-sage/40 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-800 text-cream px-6 py-4 flex items-center justify-between border-b border-sage/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-deepGreen text-limeAccent">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-limeAccent uppercase font-bold tracking-wider">
                  Slide {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-forest-700 text-cream/80 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-limeAccent" /> ~{speakerNotes.durationMinutes} phút
                </span>
              </div>
              <h3 className="text-lg font-bold text-cream truncate max-w-md">
                {meta.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-forest-700/80 hover:bg-forest-700 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#183D2B]">
          {/* Opening speech recommendation */}
          <div className="p-4 rounded-xl bg-forest-800/5 border border-forest-800/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-deepGreen flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-limeAccent-dark" />
              Gợi ý lời dẫn thuyết trình
            </h4>
            <p className="text-sm italic leading-relaxed text-[#183D2B]/90 font-serif">
              "{speakerNotes.overview}"
            </p>
          </div>

          {/* Key talking points */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-deepGreen mb-2.5">
              Các ý trọng tâm cần nhấn mạnh:
            </h4>
            <ul className="space-y-2">
              {speakerNotes.talkingPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#183D2B]/85">
                  <span className="w-5 h-5 rounded-full bg-sage/30 text-deepGreen font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chemistry Deep Dive */}
          {speakerNotes.chemistryDeepDive && (
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2 mb-1.5">
                <FlaskConical className="w-4 h-4 text-amber-700" />
                Kiến thức Hóa học 11 chuyên sâu (Mở rộng trả lời câu hỏi phụ)
              </h4>
              <p className="text-xs text-amber-950 font-mono leading-relaxed">
                {speakerNotes.chemistryDeepDive}
              </p>
            </div>
          )}
        </div>

        {/* Footer with Prev / Next */}
        <div className="bg-cream px-6 py-3 border-t border-sage/30 flex items-center justify-between">
          <div className="text-xs text-[#183D2B]/60">
            Phím tắt: <kbd className="px-1.5 py-0.5 rounded bg-white border border-sage/40 font-mono text-[11px]">N</kbd> để đóng mở
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevSlide}
              disabled={currentSlide <= 1}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-sage/20 disabled:opacity-40 text-xs font-medium text-deepGreen border border-sage/40 flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Slide trước
            </button>
            <button
              onClick={onNextSlide}
              disabled={currentSlide >= totalSlides}
              className="px-3 py-1.5 rounded-lg bg-deepGreen hover:bg-deepGreen-600 disabled:opacity-40 text-xs font-medium text-cream flex items-center gap-1 shadow-sm"
            >
              Slide sau <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
