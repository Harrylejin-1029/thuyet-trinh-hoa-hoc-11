import React, { useState } from 'react';
import { FERTILIZER_CATEGORIES } from '../data/presentationData';
import { 
  Check, 
  FlaskConical, 
  Layers, 
  Sparkles, 
  Clock, 
  Info,
  ChevronRight
} from 'lucide-react';

export const Section03Classification: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(FERTILIZER_CATEGORIES[0].id);

  const activeCategory = FERTILIZER_CATEGORIES.find(c => c.id === selectedId) || FERTILIZER_CATEGORIES[0];

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 03
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                PHÂN LOẠI & ĐẶC TÍNH NÔNG HỌC
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              5 Nhóm Phân Hữu Cơ Phổ Biến
            </h2>
            <p className="text-sm text-forest-800/80 mt-1">
              Khám phá nguồn gốc, đặc tính sinh hóa và phương pháp sử dụng tối ưu trong sản xuất.
            </p>
          </div>

          <div className="text-xs text-forest-800/60 font-mono flex items-center gap-1.5 shrink-0 bg-white/80 px-3 py-1.5 rounded-lg border border-sage/30">
            <Layers className="w-4 h-4 text-deepGreen" />
            <span>Chọn từng loại để xem chi tiết</span>
          </div>
        </div>

        {/* Category Tab Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FERTILIZER_CATEGORIES.map((item, index) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-deepGreen text-cream border-limeAccent shadow-md scale-102'
                    : 'bg-white hover:bg-sage/10 text-forest-800 border-sage/30 hover:border-sage'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-xs font-mono flex items-center justify-center font-bold ${
                  isSelected ? 'bg-limeAccent text-forest-900' : 'bg-sage/20 text-deepGreen'
                }`}>
                  {index + 1}
                </span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Display (Split layout: Left image & specs, Right deep dive) */}
        <div className="bg-white rounded-3xl border border-sage/40 shadow-soft overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 animate-fade-in">
          {/* Left: Image & Quick Meta */}
          <div className="lg:col-span-5 relative flex flex-col justify-between bg-forest-900 text-cream overflow-hidden">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-72 w-full overflow-hidden">
              <img
                src={activeCategory.image}
                alt={activeCategory.vietnameseName}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-limeAccent text-forest-900 shadow-sm">
                  {activeCategory.name}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-mono text-limeAccent font-semibold">Tỉ lệ C/N: {activeCategory.c_n_ratio}</p>
                <h3 className="text-xl font-extrabold text-cream leading-tight mt-0.5">
                  {activeCategory.vietnameseName}
                </h3>
              </div>
            </div>

            {/* Source box */}
            <div className="p-5 bg-forest-800 border-t border-forest-700/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-limeAccent">
                <Info className="w-3.5 h-3.5" />
                Nguồn gốc hình thành
              </div>
              <p className="text-xs text-cream/85 leading-relaxed">
                {activeCategory.source}
              </p>
            </div>
          </div>

          {/* Right: Detailed Characteristics, Usage & Chemistry */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              {/* Tagline */}
              <div className="border-l-4 border-deepGreen pl-3">
                <p className="text-sm font-semibold text-deepGreen italic">
                  "{activeCategory.tagline}"
                </p>
              </div>

              {/* Characteristics bullets */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest-800 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-limeAccent-dark" />
                  Đặc điểm lý - hóa nổi bật
                </h4>
                <ul className="space-y-2">
                  {activeCategory.characteristics.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-800/85">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage & Advantages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-cream/70 border border-sage/30">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-earth-dark flex items-center gap-1 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    Cách sử dụng cơ bản
                  </span>
                  <p className="text-xs text-forest-900 font-medium leading-relaxed">
                    {activeCategory.usage}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-cream/70 border border-sage/30">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-deepGreen flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Ưu thế vượt trội
                  </span>
                  <ul className="text-xs text-forest-900 space-y-1">
                    {activeCategory.advantages.map((adv, j) => (
                      <li key={j} className="flex items-start gap-1">
                        <span className="text-deepGreen font-bold">•</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Chemistry Aspect Callout */}
            <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                <FlaskConical className="w-4 h-4 text-amber-700" />
                Lưu ý Hóa học & Vi sinh quan trọng
              </div>
              <p className="text-xs text-amber-950 font-mono leading-relaxed">
                {activeCategory.chemicalAspect}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom quick tip */}
        <div className="text-center text-xs text-forest-800/60 flex items-center justify-center gap-2">
          <span>Nhấn vào các thẻ phía trên hoặc dùng phím tắt mũi tên để khám phá cả 5 loại</span>
          <ChevronRight className="w-3.5 h-3.5 text-deepGreen" />
        </div>
      </div>
    </div>
  );
};