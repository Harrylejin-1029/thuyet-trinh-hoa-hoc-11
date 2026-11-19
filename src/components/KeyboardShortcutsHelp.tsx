import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface KeyboardShortcutsHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsHelp: React.FC<KeyboardShortcutsHelpProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space', desc: 'Chuyển sang Slide tiếp theo' },
    { key: '← / Backspace', desc: 'Quay lại Slide trước' },
    { key: 'F', desc: 'Bật / Tắt chế độ Toàn màn hình máy chiếu' },
    { key: 'N', desc: 'Mở / Đóng Gợi ý thuyết trình cho học sinh' },
    { key: 'M', desc: 'Mở danh sách Mục lục 9 slide' },
    { key: 'S', desc: 'Chuyển đổi Chế độ Slide ↔ Chế độ Cuộn trang' },
    { key: '1 - 9', desc: 'Nhảy nhanh đến Slide số 1 đến 9' },
    { key: 'Esc', desc: 'Đóng các cửa sổ Popup hoặc thoát Toàn màn hình' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-cream-light rounded-2xl shadow-2xl border border-sage/40 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-forest-800 text-cream px-6 py-4 flex items-center justify-between border-b border-sage/30">
          <div className="flex items-center gap-2.5">
            <Keyboard className="w-5 h-5 text-limeAccent" />
            <h3 className="text-base font-bold text-cream">Phím tắt trình chiếu</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-forest-700/80 hover:bg-forest-700 text-cream/70 hover:text-cream transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-2.5">
          {shortcuts.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-sage/20 last:border-b-0 text-sm">
              <span className="text-forest-800/80">{item.desc}</span>
              <kbd className="px-2 py-1 bg-white border border-sage/40 rounded shadow-xs font-mono font-bold text-xs text-deepGreen">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="bg-cream px-5 py-3 border-t border-sage/30 text-center text-xs text-forest-800/60">
          Thiết kế tối ưu cho máy chiếu và bút bấm laser trình chiếu
        </div>
      </div>
    </div>
  );
};
