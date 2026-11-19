import React from 'react';
import { 
  Sprout, 
  ArrowRight, 
  Leaf, 
  Dna, 
  Globe2, 
  BookOpen, 
  Presentation,
  CheckCircle
} from 'lucide-react';

interface Section01HeroProps {
  onStartPresentation: () => void;
  onOpenNotes: () => void;
}

export const Section01Hero: React.FC<Section01HeroProps> = ({
  onStartPresentation,
  onOpenNotes,
}) => {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream via-cream-light to-cream overflow-hidden">
      {/* Subtle organic background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#183D2B_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Decorative leaf blur accents */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sage/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-limeAccent/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Headline & Meta */}
        <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-forest-800 text-limeAccent border border-forest-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-limeAccent animate-ping" />
              HÓA HỌC 11
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sage/25 text-forest-800 border border-sage/40">
              <Leaf className="w-3.5 h-3.5 text-deepGreen" />
              Chuyên đề Nông nghiệp Bền vững
            </span>
            <span className="text-xs text-forest-800/60 font-mono">
              GDPT 2018
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-forest-900 leading-[1.1]">
              PHÂN HỮU CƠ
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-deepGreen mt-2 font-display">
                ORGANIC FERTILIZER
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-forest-800/85 font-medium leading-relaxed max-w-2xl border-l-4 border-limeAccent-dark pl-4 py-1">
              Nguồn dinh dưỡng tự nhiên – Nền tảng cho nền nông nghiệp bền vững và tương lai đất sống.
            </p>
          </div>

          {/* Key pillars quick preview */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/80 border border-sage/30 shadow-xs">
              <div className="flex items-center gap-2 text-deepGreen font-bold text-xs uppercase tracking-wider mb-1">
                <Sprout className="w-4 h-4 text-limeAccent-dark" />
                100% Tự nhiên
              </div>
              <p className="text-xs text-forest-800/70">Tái chế từ chất thải sinh học, phụ phẩm cây trồng</p>
            </div>

            <div className="p-3 rounded-xl bg-white/80 border border-sage/30 shadow-xs">
              <div className="flex items-center gap-2 text-deepGreen font-bold text-xs uppercase tracking-wider mb-1">
                <Dna className="w-4 h-4 text-limeAccent-dark" />
                Keo Mùn Đất
              </div>
              <p className="text-xs text-forest-800/70">Chứa Axit Humic & Fulvic nuôi dưỡng hệ vi sinh vật</p>
            </div>

            <div className="p-3 rounded-xl bg-white/80 border border-sage/30 shadow-xs">
              <div className="flex items-center gap-2 text-deepGreen font-bold text-xs uppercase tracking-wider mb-1">
                <Globe2 className="w-4 h-4 text-limeAccent-dark" />
                Kinh tế tuần hoàn
              </div>
              <p className="text-xs text-forest-800/70">Không tồn dư hóa chất độc hại, bảo vệ nguồn nước ngầm</p>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={onStartPresentation}
              className="px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-cream font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-forest-800/20 hover:shadow-forest-800/40 hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <Presentation className="w-4 h-4 text-limeAccent group-hover:rotate-6 transition-transform" />
              <span>Bắt đầu bài thuyết trình</span>
              <ArrowRight className="w-4 h-4 text-limeAccent group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenNotes}
              className="px-5 py-3.5 rounded-xl bg-white/90 hover:bg-white text-forest-800 border border-sage/50 font-semibold text-sm flex items-center gap-2 hover:border-forest-700 transition-colors shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-deepGreen" />
              <span>Xem kịch bản thuyết trình</span>
            </button>
          </div>

          {/* Student metadata */}
          <div className="pt-2 text-xs text-forest-800/60 flex items-center gap-4">
            <span>Báo cáo viên: <strong>Tổ Hóa Học 11</strong></span>
            <span>•</span>
            <span>Môn học: <strong>Hóa học 11 (KNTT / CD / CTST)</strong></span>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-soft-lg border-2 border-sage/30 bg-white group">
            {/* Main high quality image of rich soil & young plant */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80"
                alt="Đất mùn hữu cơ màu mỡ và mầm cây xanh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
              
              {/* Floating Highlight Chip */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-sage/30 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-forest-900">Sinh thái & Hóa học</span>
              </div>

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <p className="text-xs font-mono uppercase tracking-wider text-limeAccent font-bold mb-1">
                  Triết lý nông nghiệp tự nhiên
                </p>
                <p className="text-sm font-medium leading-snug">
                  "Không bón phân trực tiếp để ép cây lớn nhanh, mà nuôi dưỡng đất để đất nuôi cây khỏe mạnh."
                </p>
              </div>
            </div>

            {/* Quick Fact bar below image */}
            <div className="p-4 bg-forest-800 text-cream flex items-center justify-between text-xs border-t border-forest-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-limeAccent shrink-0" />
                <span>Tiết kiệm 30-50% phân bón khoáng</span>
              </div>
              <div className="font-mono text-limeAccent/80">
                #OrganicSoil
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
