import React, { useState } from 'react';
import { 
  Sparkles, 
  Dna, 
  Droplets, 
  Microscope, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';

export const Section02Concept: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'chemistry'>('overview');

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 02
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                CƠ SỞ KHOA HỌC & HÓA HỌC 11
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              Khái Niệm & Bản Chất Hóa Sinh
            </h2>
            <p className="text-sm sm:text-base text-forest-800/80 mt-1 max-w-2xl">
              Hiểu rõ cấu trúc phân tử mùn hữu cơ và 2 chu trình chuyển hóa năng lượng nuôi dưỡng đất trồng.
            </p>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center bg-white/90 p-1 rounded-xl border border-sage/40 shadow-xs shrink-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Khái Niệm & 4 Cột Trụ
            </button>
            <button
              onClick={() => setActiveTab('chemistry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'chemistry'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              Sơ Đồ Khoáng Hóa vs Mùn Hóa
            </button>
          </div>
        </div>

        {/* Tab 1: Khái niệm & 4 Cột Trụ Cấu Thành */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Definition Banner */}
            <div className="p-5 rounded-2xl bg-white/90 border border-sage/40 shadow-soft grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-8 space-y-2">
                <span className="text-xs font-bold text-deepGreen uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-limeAccent-dark" />
                  Định nghĩa khoa học chính xác
                </span>
                <p className="text-base sm:text-lg font-semibold text-forest-900 leading-snug">
                  Phân hữu cơ là những hợp chất dinh dưỡng chứa các nguyên tố khoáng thiết yếu (đa, trung, vi lượng) ở dạng liên kết hữu cơ sinh học, có nguồn gốc từ chất thải sinh hoạt, phụ phẩm nông nghiệp, tàn dư thực vật hoặc than bùn.
                </p>
                <p className="text-xs text-forest-800/70">
                  Khác với phân hóa học (vốn là muối vô cơ hòa tan nhanh), phân hữu cơ cung cấp chất mùn để cải tạo tính chất lý - hóa - sinh học của đất theo cơ chế nhả chậm tự nhiên.
                </p>
              </div>

              <div className="md:col-span-4 bg-cream p-4 rounded-xl border border-sage/30 flex flex-col justify-center items-center text-center">
                <span className="text-2xl font-black text-deepGreen font-mono">&gt; 20%</span>
                <span className="text-xs font-bold text-forest-900 uppercase tracking-wide mt-1">Hàm lượng hữu cơ tổng số</span>
                <span className="text-[11px] text-forest-800/60 mt-0.5">Tiêu chuẩn quốc gia TCVN về phân hữu cơ</span>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pillar 1 */}
              <div className="p-4 rounded-2xl bg-white border border-sage/30 shadow-xs hover:border-deepGreen transition-all group">
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-limeAccent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Dna className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-forest-900 mb-1">1. Hợp chất Mùn (Humus)</h3>
                <p className="text-xs text-forest-800/75 leading-relaxed">
                  Gồm <strong>Axit Humic</strong>, <strong>Axit Fulvic</strong> và <strong>Humin</strong>. Đại phân tử có nhiều nhóm -COOH, -OH tích điện âm tạo dung tích hấp thu (CEC).
                </p>
                <div className="mt-3 pt-2 border-t border-sage/20 text-[11px] text-deepGreen font-semibold">
                  Tăng giữ ẩm & Đệm pH
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-2xl bg-white border border-sage/30 shadow-xs hover:border-deepGreen transition-all group">
                <div className="w-10 h-10 rounded-xl bg-deepGreen text-cream flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-forest-900 mb-1">2. Khoáng Đa Lượng (N-P-K)</h3>
                <p className="text-xs text-forest-800/75 leading-relaxed">
                  Nitơ dạng protein/axit amin, Photpho hữu cơ (phytin, axit nucleic), Kali trong tế bào thực vật nhả từ từ cho rễ cây hấp thụ liên tục.
                </p>
                <div className="mt-3 pt-2 border-t border-sage/20 text-[11px] text-deepGreen font-semibold">
                  Dinh dưỡng nhả chậm (Slow-release)
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-2xl bg-white border border-sage/30 shadow-xs hover:border-deepGreen transition-all group">
                <div className="w-10 h-10 rounded-xl bg-earth text-cream flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-forest-900 mb-1">3. Trung & Vi Lượng Phức</h3>
                <p className="text-xs text-forest-800/75 leading-relaxed">
                  Chứa Canxi, Magie, Lưu huỳnh cùng các ion vi lượng (Fe, Zn, Cu, Mn, B) tồn tại dưới dạng phức chất <strong>Chelate sinh học</strong> cây dễ hấp thu.
                </p>
                <div className="mt-3 pt-2 border-t border-sage/20 text-[11px] text-deepGreen font-semibold">
                  Ngăn kết tủa khó tan
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-4 rounded-2xl bg-white border border-sage/30 shadow-xs hover:border-deepGreen transition-all group">
                <div className="w-10 h-10 rounded-xl bg-forest-700 text-limeAccent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-forest-900 mb-1">4. Hệ Vi Sinh Đất</h3>
                <p className="text-xs text-forest-800/75 leading-relaxed">
                  Cung cấp nguồn thức ăn dồi dào kích thích vi khuẩn có ích, xạ khuẩn và trùn đất phát triển, tạo nên một hệ sinh thái đất năng động và khỏe mạnh.
                </p>
                <div className="mt-3 pt-2 border-t border-sage/20 text-[11px] text-deepGreen font-semibold">
                  Đất sống – Đất thở
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sơ đồ Hóa học Khoáng hóa vs Mùn hóa */}
        {activeTab === 'chemistry' && (
          <div className="p-6 rounded-2xl bg-white border border-sage/40 shadow-soft space-y-6 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-bold text-deepGreen uppercase tracking-wider font-mono">
                CƠ CHẾ PHẢN ỨNG HÓA SINH TRONG ĐẤT
              </span>
              <h3 className="text-xl font-bold text-forest-900">
                Hai Quá Trình Song Song: Khoáng Hóa vs Mùn Hóa
              </h3>
              <p className="text-xs text-forest-800/70">
                Khi bón vào đất, chất hữu cơ được phân giải theo 2 hướng đối ngẫu nhưng bổ trợ chặt chẽ cho nhau:
              </p>
            </div>

            {/* Visual Dual Pathway Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Pathway 1: Mineralisation */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-700 text-white font-mono">
                      HƯỚNG 1
                    </span>
                    <span className="text-xs text-emerald-800 font-semibold">Cung cấp dinh dưỡng ngay</span>
                  </div>

                  <h4 className="text-lg font-bold text-emerald-950">
                    Quá Trình Khoáng Hóa (Mineralisation)
                  </h4>

                  <p className="text-xs text-emerald-900/80 leading-relaxed">
                    Dưới tác dụng của enzyme vi sinh vật hiếu khí, các hợp chất hữu cơ phức tạp (protein, lipit, gluxit) bị thủy phân và oxy hóa hoàn toàn thành các ion vô cơ hòa tan.
                  </p>

                  {/* Chemical flowchart */}
                  <div className="space-y-2 py-2">
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-200 text-xs font-mono space-y-1">
                      <div className="text-emerald-900 font-bold flex items-center justify-between">
                        <span>Protein hữu cơ chứa [N]</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Axit amin</span>
                      </div>
                      <div className="text-emerald-900 font-bold flex items-center justify-between pt-1">
                        <span>Axit amin</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="bg-emerald-100 px-1 rounded text-emerald-900 font-black">NH4+ (Amoni)</span>
                      </div>
                      <div className="text-emerald-900 font-bold flex items-center justify-between pt-1">
                        <span>NH4+ (Vi khuẩn Nitrat hóa)</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="bg-emerald-100 px-1 rounded text-emerald-900 font-black">NO3- (Nitrat)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-emerald-200 text-xs text-emerald-900 font-medium">
                  → Rễ cây hấp thụ trực tiếp các ion vô cơ: <strong>NH4+, NO3-, H2PO4-, K+, SO4(2-)</strong>
                </div>
              </div>

              {/* Pathway 2: Humification */}
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-earth text-white font-mono">
                      HƯỚNG 2
                    </span>
                    <span className="text-xs text-amber-900 font-semibold">Tích lũy độ phì lâu dài</span>
                  </div>

                  <h4 className="text-lg font-bold text-amber-950">
                    Quá Trình Mùn Hóa (Humification)
                  </h4>

                  <p className="text-xs text-amber-900/80 leading-relaxed">
                    Các sản phẩm trung gian của quá trình phân giải hữu cơ (như polyphenol, lignin, axit amin) trải qua phản ứng trùng ngưng sinh hóa phức tạp tạo thành chất Mùn (Humus).
                  </p>

                  {/* Humus characteristics */}
                  <div className="space-y-2 py-2">
                    <div className="p-2.5 rounded-lg bg-white border border-amber-200 text-xs space-y-1.5">
                      <div className="flex items-center justify-between text-amber-900">
                        <span className="font-bold">Axit Humic:</span>
                        <span className="text-[11px] text-amber-800">Khối lượng mol lớn, tan trong kiềm</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-900">
                        <span className="font-bold">Axit Fulvic:</span>
                        <span className="text-[11px] text-amber-800">Khối lượng mol nhỏ, tan trong cả axit & kiềm</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-900">
                        <span className="font-bold">Phức hệ Mùn - Sét:</span>
                        <span className="text-[11px] text-amber-800">Tích điện âm (-), giữ cation dinh dưỡng</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-amber-200 text-xs text-amber-900 font-medium">
                  → Giữ đất tơi xốp, giữ nước, chống rửa trôi phân bón, nuôi dưỡng hệ sinh thái hàng chục năm.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
