import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  Lightbulb, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const Section06ProsCons: React.FC = () => {
  const pros = [
    {
      title: "Cải thiện độ phì nhiêu & Cấu trúc đất",
      desc: "Tạo cấu trúc viên hạt bền vững, chống chai cứng đất, tăng khả năng giữ nước và dinh dưỡng lâu dài."
    },
    {
      title: "Tăng hàm lượng chất hữu cơ & Mùn",
      desc: "Bổ sung Axit Humic và Fulvic, nâng cao dung tích hấp thu trao đổi cation (CEC) của đất canh tác."
    },
    {
      title: "Tận dụng nguồn nguyên liệu tự nhiên",
      desc: "Tái chế rơm rạ, phân chuồng, rác thải nhà bếp thành tài nguyên phân bón, giảm chi phí đầu vào."
    },
    {
      title: "Hỗ trợ hệ sinh thái & Vi sinh vật đất",
      desc: "Tạo môi trường thuận lợi cho giun đất, xạ khuẩn và nấm rễ cộng sinh phát triển, bảo vệ đa dạng sinh học."
    },
    {
      title: "Nông sản an toàn, không tồn dư hóa chất",
      desc: "Nông sản có mùi vị thơm ngon tự nhiên, không tích lũy nitrat độc hại, đáp ứng tiêu chuẩn VietGAP/GlobalGAP."
    }
  ];

  const cons = [
    {
      title: "Hàm lượng N-P-K nguyên chất thấp hơn phân vô cơ",
      desc: "Hàm lượng đạm (N), lân (P2O5), kali (K2O) trong phân hữu cơ thường chỉ từ 1 - 4%, thấp hơn rất nhiều so với urê (46% N) hay DAP."
    },
    {
      title: "Tác dụng chậm hơn phân hóa học",
      desc: "Phải trải qua quá trình vi sinh vật khoáng hóa mới giải phóng ion cho rễ hút, không đáp ứng tức thì khi cây đói phân."
    },
    {
      title: "Thành phần dinh dưỡng không đồng đều",
      desc: "Tùy thuộc vào nguồn nguyên liệu thức ăn và cách ủ mà hàm lượng dinh dưỡng giữa các mẻ ủ có thể chênh lệch lớn."
    },
    {
      title: "Cần thời gian ủ hoai & Tốn công vận chuyển",
      desc: "Thời gian ủ mất 1 - 3 tháng, khối lượng sử dụng lớn (vài tấn đến chục tấn/ha) gây tốn kém công bốc xếp, vận chuyển."
    },
    {
      title: "Nguy cơ nếu phân chưa hoai mục",
      desc: "Phân tươi tỏa nhiệt cao làm cháy rễ, phát sinh khí độc H2S, CH4 và có thể phát tán mầm bệnh vi khuẩn, hạt cỏ dại."
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 06
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                ĐÁNH GIÁ ĐỐI CHIẾU KHOA HỌC
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              Ưu Điểm & Hạn Chế
            </h2>
            <p className="text-sm text-forest-800/80 mt-1">
              Nhìn nhận khách quan hai mặt của phân hữu cơ và giải pháp bón phân thông minh.
            </p>
          </div>

          <div className="text-xs text-forest-800/60 font-mono flex items-center gap-1.5 shrink-0 bg-white/80 px-3 py-1.5 rounded-lg border border-sage/30">
            <Scale className="w-4 h-4 text-deepGreen" />
            <span>So sánh 2 cột cân xứng</span>
          </div>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Column 1: ƯU ĐIỂM (Green tone) */}
          <div className="bg-white rounded-3xl border border-emerald-200/80 shadow-soft overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-950">
                      ƯU ĐIỂM NỔI BẬT
                    </h3>
                    <p className="text-xs text-emerald-700 font-medium">Giá trị sinh thái và độ phì lâu bền</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  5 Điểm cộng
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-emerald-950">
                        {p.title}
                      </h4>
                      <p className="text-xs text-forest-800/75 leading-relaxed mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/80 border-t border-emerald-100 text-xs text-emerald-900 font-semibold text-center">
              🌿 Nuôi dưỡng cội nguồn đất sống cho thế hệ tương lai
            </div>
          </div>

          {/* Column 2: HẠN CHẾ (Warm amber tone) */}
          <div className="bg-white rounded-3xl border border-amber-200/80 shadow-soft overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-900">
                    <AlertTriangle className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-950">
                      HẠN CHẾ & THÁCH THỨC
                    </h3>
                    <p className="text-xs text-amber-800 font-medium">Yêu cầu kỹ thuật và thời gian xử lý</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  5 Rào cản
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {cons.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      !
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-950">
                        {c.title}
                      </h4>
                      <p className="text-xs text-forest-800/75 leading-relaxed mt-0.5">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/80 border-t border-amber-100 text-xs text-amber-900 font-semibold text-center">
              ⚠️ Tuyệt đối không bón phân tươi chưa qua ủ hoai mục
            </div>
          </div>
        </div>

        {/* Conclusion Callout: "Bón phân cân đối" */}
        <div className="p-4 rounded-2xl bg-forest-800 text-cream border border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-deepGreen text-limeAccent shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-limeAccent uppercase tracking-wide">
                Giải Pháp Khoa Học: "Bón Phân Cân Đối & Hợp Lý"
              </h4>
              <p className="text-xs text-cream/85 leading-snug">
                Không bài trừ phân vô cơ mà kết hợp nhịp nhàng: Lấy <strong>Phân Hữu Cơ làm nền tảng</strong> nuôi đất, cải tạo rễ; bổ sung <strong>Phân Vô Cơ đúng liều lượng</strong> vào thời điểm cây bung hoa, nuôi quả.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-forest-900 text-limeAccent font-mono text-xs font-bold border border-limeAccent/30 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> Hiệu quả tối ưu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};