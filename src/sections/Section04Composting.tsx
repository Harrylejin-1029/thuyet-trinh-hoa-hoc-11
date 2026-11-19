import React, { useState } from 'react';
import { COMPOST_STEPS } from '../data/presentationData';
import { 
  Thermometer, 
  Clock, 
  FlaskConical, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  GitCommit,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export const Section04Composting: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'stepByStep' | 'flowchart'>('stepByStep');

  const step = COMPOST_STEPS[currentStepIndex];

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 04
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                QUY TRÌNH KỸ THUẬT & SINH HỌC
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              Quy Trình Sản Xuất Phân Compost
            </h2>
            <p className="text-sm text-forest-800/80 mt-1">
              Sơ đồ 7 giai đoạn chuyển hóa hiếu khí từ phế phẩm nông nghiệp thành phân bón hữu cơ cao cấp.
            </p>
          </div>

          {/* Toggle Flowchart vs Step-by-Step */}
          <div className="flex items-center bg-white/90 p-1 rounded-xl border border-sage/40 shadow-xs shrink-0">
            <button
              onClick={() => setViewMode('stepByStep')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'stepByStep'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              <GitCommit className="w-3.5 h-3.5" />
              Chi tiết từng bước
            </button>
            <button
              onClick={() => setViewMode('flowchart')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'flowchart'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              Sơ đồ tổng thể 7 bước
            </button>
          </div>
        </div>

        {/* View Mode 1: Step-by-Step Interactive Stepper */}
        {viewMode === 'stepByStep' && (
          <div className="space-y-6 animate-fade-in">
            {/* Timeline Stepper Navigation */}
            <div className="relative">
              <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-none">
                {COMPOST_STEPS.map((s, idx) => {
                  const isActive = idx === currentStepIndex;
                  const isPast = idx < currentStepIndex;
                  return (
                    <button
                      key={s.step}
                      onClick={() => setCurrentStepIndex(idx)}
                      className={`flex-1 min-w-[110px] p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-deepGreen text-cream border-limeAccent shadow-md scale-102'
                          : isPast
                          ? 'bg-white text-forest-900 border-sage/40 hover:border-deepGreen'
                          : 'bg-white/60 text-forest-800/60 border-sage/20 hover:border-sage'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                          isActive ? 'bg-limeAccent text-forest-900' : 'bg-sage/20 text-deepGreen'
                        }`}>
                          Bước {s.step}
                        </span>
                        {isPast && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      </div>
                      <div className="text-xs font-bold truncate">
                        {s.title.split('&')[0]}
                      </div>
                      <div className={`text-[10px] truncate ${isActive ? 'text-cream/80' : 'text-forest-800/50'}`}>
                        {s.phaseName}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Detailed Card */}
            <div className="bg-white rounded-3xl border border-sage/40 shadow-soft overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Visual, Temperature Gauge & Metrics */}
              <div className="lg:col-span-5 relative flex flex-col justify-between bg-forest-900 text-cream overflow-hidden">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-64 w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-limeAccent text-forest-900 shadow-sm">
                      GIAI ĐOẠN {step.step} / 7
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-limeAccent font-bold uppercase tracking-wider">
                      {step.phaseName}
                    </span>
                    <h3 className="text-xl font-extrabold text-cream leading-tight mt-0.5">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Temperature & Duration Meter */}
                <div className="p-5 bg-forest-800 border-t border-forest-700 space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-forest-900/80 border border-forest-700">
                      <span className="text-cream/60 flex items-center gap-1 mb-0.5">
                        <Thermometer className="w-3.5 h-3.5 text-limeAccent" /> Nhiệt độ
                      </span>
                      <span className="font-mono font-bold text-cream text-xs sm:text-sm">
                        {step.temperature}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-forest-900/80 border border-forest-700">
                      <span className="text-cream/60 flex items-center gap-1 mb-0.5">
                        <Clock className="w-3.5 h-3.5 text-limeAccent" /> Thời gian
                      </span>
                      <span className="font-mono font-bold text-cream text-xs sm:text-sm">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <div className="text-center bg-forest-700/60 py-1.5 px-3 rounded-lg border border-limeAccent/20">
                    <span className="text-xs font-bold text-limeAccent font-mono">
                      {step.keyMetric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Step Description, Microbiology & Chemistry */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Narrative description */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-deepGreen mb-1.5">
                      Mô tả thao tác kỹ thuật
                    </h4>
                    <p className="text-sm text-forest-900 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Microbiology Role */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Vai trò của vi sinh vật trong giai đoạn này
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      {step.microbiology}
                    </p>
                  </div>

                  {/* Chemical Process */}
                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                      <FlaskConical className="w-4 h-4 text-amber-700" />
                      Cơ chế Hóa học & Chuyển hóa năng lượng
                    </div>
                    <p className="text-xs text-amber-950 font-mono leading-relaxed">
                      {step.chemicalProcess}
                    </p>
                  </div>

                  {/* Pro Tip */}
                  <div className="text-xs text-forest-800/70 italic border-l-2 border-sage-dark pl-2.5">
                    <strong>Lưu ý kỹ thuật:</strong> {step.tips}
                  </div>
                </div>

                {/* Step Switcher Buttons */}
                <div className="pt-3 border-t border-sage/30 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentStepIndex === 0}
                    className="px-4 py-2 rounded-xl bg-cream hover:bg-sage/20 disabled:opacity-40 text-xs font-bold text-forest-800 border border-sage/40 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Bước trước
                  </button>

                  <span className="text-xs font-mono font-bold text-deepGreen">
                    {currentStepIndex + 1} / {COMPOST_STEPS.length}
                  </span>

                  <button
                    onClick={() => setCurrentStepIndex(prev => Math.min(COMPOST_STEPS.length - 1, prev + 1))}
                    disabled={currentStepIndex === COMPOST_STEPS.length - 1}
                    className="px-4 py-2 rounded-xl bg-deepGreen hover:bg-deepGreen-600 disabled:opacity-40 text-xs font-bold text-cream flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    Bước tiếp theo <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Full 7-Step Flowchart Overview */}
        {viewMode === 'flowchart' && (
          <div className="p-6 bg-white rounded-3xl border border-sage/40 shadow-soft space-y-5 animate-fade-in">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-xs font-bold text-deepGreen uppercase tracking-wider font-mono">
                SƠ ĐỒ DÒNG NGUYÊN LIỆU & NĂNG LƯỢNG
              </span>
              <h3 className="text-xl font-bold text-forest-900">
                Toàn Cảnh Chu Trình Ủ Phân Compost Hiếu Khí
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 py-4">
              {COMPOST_STEPS.map((s, idx) => (
                <div 
                  key={s.step}
                  onClick={() => {
                    setCurrentStepIndex(idx);
                    setViewMode('stepByStep');
                  }}
                  className="p-3 rounded-2xl bg-cream/70 border border-sage/40 hover:border-deepGreen hover:bg-white transition-all cursor-pointer flex flex-col justify-between group shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-deepGreen text-cream font-mono font-bold text-xs flex items-center justify-center group-hover:bg-limeAccent group-hover:text-forest-900 transition-colors">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-mono text-forest-800/60 font-semibold">
                        {s.duration}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-forest-900 group-hover:text-deepGreen line-clamp-2 mb-1">
                      {s.title}
                    </h5>
                    <p className="text-[11px] text-forest-800/70 line-clamp-2">
                      {s.phaseName}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-sage/20 text-[10px] font-mono font-bold text-deepGreen">
                    {s.temperature}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-forest-800 text-cream text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-limeAccent shrink-0" />
                <span>
                  <strong>Phương trình tổng quát:</strong> Chất hữu cơ + O2 → Mùn (Humus) + CO2 + H2O + Nhiệt lượng (Q)
                </span>
              </div>
              <button
                onClick={() => setViewMode('stepByStep')}
                className="px-3 py-1 rounded-lg bg-deepGreen text-limeAccent hover:bg-deepGreen-600 font-bold shrink-0 text-xs border border-limeAccent/30"
              >
                Xem chi tiết từng bước
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};