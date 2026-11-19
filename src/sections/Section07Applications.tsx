import React, { useState } from 'react';
import { APPLICATION_CASES } from '../data/presentationData';
import { 
  Building2, 
  Mountain, 
  Wheat, 
  Fish, 
  MapPin, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export const Section07Applications: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const currentCase = APPLICATION_CASES[selectedCaseIndex];

  const icons = [Building2, Mountain, Wheat, Fish];

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 07
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                NÔNG NGHIỆP THỰC TIỄN VIỆT NAM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              Ứng Dụng Trong Đời Sống & Sản Xuất
            </h2>
            <p className="text-sm text-forest-800/80 mt-1">
              Hiện thực hóa kiến thức Hóa học 11 qua 4 mô hình nông nghiệp sinh thái tiêu biểu tại Việt Nam.
            </p>
          </div>

          <div className="text-xs text-forest-800/60 font-mono flex items-center gap-1.5 shrink-0 bg-white/80 px-3 py-1.5 rounded-lg border border-sage/30">
            <MapPin className="w-4 h-4 text-deepGreen" />
            <span>Thực tế từ Bắc chí Nam</span>
          </div>
        </div>

        {/* 4 Case Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {APPLICATION_CASES.map((c, idx) => {
            const Icon = icons[idx] || Sparkles;
            const isSelected = idx === selectedCaseIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCaseIndex(idx)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-deepGreen text-cream border-limeAccent shadow-md scale-102'
                    : 'bg-white hover:bg-sage/10 text-forest-800 border-sage/30 hover:border-sage'
                }`}
              >
                <div className={`p-2 rounded-xl shrink-0 ${
                  isSelected ? 'bg-limeAccent text-forest-900' : 'bg-sage/20 text-deepGreen'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className={`text-[10px] font-mono font-bold block truncate uppercase ${
                    isSelected ? 'text-limeAccent' : 'text-deepGreen'
                  }`}>
                    {c.tag}
                  </span>
                  <span className="text-xs font-bold block truncate">
                    {c.title.split('&')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Application Feature Spotlight */}
        <div className="bg-white rounded-3xl border border-sage/40 shadow-soft overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 animate-fade-in">
          {/* Left: Real-world image */}
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
            <img
              src={currentCase.image}
              alt={currentCase.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-limeAccent text-forest-900 shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {currentCase.category}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-cream">
              <span className="text-xs font-mono text-limeAccent font-bold">
                Mô hình #0{selectedCaseIndex + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-tight mt-0.5">
                {currentCase.title}
              </h3>
            </div>
          </div>

          {/* Right: Narrative & Direct Impact */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-deepGreen">
                  Bối cảnh & Phương thức thực hiện
                </span>
                <p className="text-sm sm:text-base text-forest-900 leading-relaxed font-medium mt-1">
                  {currentCase.description}
                </p>
              </div>

              {/* Impact Callout */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                  <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                  Hiệu quả kinh tế – sinh thái đo lường được
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-semibold">
                  {currentCase.impact}
                </p>
              </div>
            </div>

            {/* Quick footer with classroom discussion hint */}
            <div className="pt-3 border-t border-sage/20 text-xs text-forest-800/70 flex items-center justify-between">
              <span>Được áp dụng rộng rãi tại các hợp tác xã nông nghiệp sạch</span>
              <span className="font-mono text-deepGreen font-bold">Mô hình tuần hoàn</span>
            </div>
          </div>
        </div>

        {/* 5-Bullet Life Applications Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-white/70 border border-sage/30 font-medium text-forest-900">
            🌱 Rau mầm sân thượng
          </div>
          <div className="p-2.5 rounded-xl bg-white/70 border border-sage/30 font-medium text-forest-900">
            ☕ Ủ vỏ cà phê Tây Nguyên
          </div>
          <div className="p-2.5 rounded-xl bg-white/70 border border-sage/30 font-medium text-forest-900">
            🌾 Men vi sinh xử lý rơm
          </div>
          <div className="p-2.5 rounded-xl bg-white/70 border border-sage/30 font-medium text-forest-900">
            🪱 Nuôi trùn quế khép kín
          </div>
          <div className="p-2.5 rounded-xl bg-white/70 border border-sage/30 font-medium text-forest-900 col-span-2 sm:col-span-1">
            🌺 Hoa lan, cây cảnh đô thị
          </div>
        </div>
      </div>
    </div>
  );
};