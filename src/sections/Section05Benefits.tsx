import React, { useState } from 'react';
import { 
  Sprout, 
  Layers, 
  Globe2, 
  CheckCircle2, 
  Droplet, 
  HeartHandshake, 
  Trees,
  HelpCircle
} from 'lucide-react';

export const Section05Benefits: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<'all' | 'soil' | 'plants' | 'environment'>('all');

  const benefitsData = [
    {
      id: 'soil',
      title: 'Đối Với Đất Đai',
      vietnameseSubtitle: 'Cải tạo lý - hóa - sinh học toàn diện',
      icon: Layers,
      color: 'forest',
      accentColor: 'text-deepGreen bg-emerald-100',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
      keyMetrics: 'Tăng 3 - 5 lần khả năng giữ nước',
      points: [
        {
          head: 'Cải thiện kết cấu viên hạt (Soil Aggregates)',
          desc: 'Chất mùn đóng vai trò như chất keo sinh học liên kết các hạt cát, limon và sét rời rạc thành các đoàn lạp tơi xốp, giúp đất thoáng khí và thoát nước tốt.'
        },
        {
          head: 'Tăng dung tích hấp thu cation (CEC)',
          desc: 'Keo mùn mang điện tích âm cao hấp phụ các ion K+, Ca2+, Mg2+, NH4+, ngăn ngừa rửa trôi xuống tầng nước ngầm khi mưa to.'
        },
        {
          head: 'Hệ đệm ổn định pH & Nuôi vi sinh vật',
          desc: 'Axit humic và fulvic tạo hệ đệm tự nhiên, giải độc đất chua phèn và cung cấp nguồn carbon nuôi giun đất cùng hệ vi sinh có ích.'
        }
      ]
    },
    {
      id: 'plants',
      title: 'Đối Với Cây Trồng',
      vietnameseSubtitle: 'Dinh dưỡng cân đối & Kích thích sinh trưởng',
      icon: Sprout,
      color: 'lime',
      accentColor: 'text-forest-900 bg-limeAccent',
      image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
      keyMetrics: 'Giảm 70% nguy cơ sốc phân bón',
      points: [
        {
          head: 'Dinh dưỡng nhả chậm (Slow-release)',
          desc: 'Khoáng chất giải phóng từ từ theo tốc độ hoạt động của vi sinh vật, cung cấp thức ăn đều đặn suốt chu kỳ sinh trưởng của cây.'
        },
        {
          head: 'Kích thích bộ rễ lông hút phát triển mạnh',
          desc: 'Axit humic đóng vai trò như chất kích kháng tự nhiên (Auxin hữu cơ), kích thích rễ cây đâm sâu, hút nước và dinh dưỡng khỏe hơn.'
        },
        {
          head: 'Nâng cao chất lượng & Sức đề kháng',
          desc: 'Cây có vách tế bào dày, ít tích lũy nitrat (NO3-), quả ngọt đậm đà, kéo dài thời gian bảo quản sau thu hoạch.'
        }
      ]
    },
    {
      id: 'environment',
      title: 'Đối Với Môi Trường',
      vietnameseSubtitle: 'Kinh tế tuần hoàn & Chống biến đổi khí hậu',
      icon: Globe2,
      color: 'earth',
      accentColor: 'text-white bg-earth',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
      keyMetrics: 'Cắt giảm khí nhà kính & Khói đốt rơm',
      points: [
        {
          head: 'Tận dụng triệt để phụ phẩm hữu cơ',
          desc: 'Chuyển hóa rơm rạ lúa nước, vỏ cà phê, bã mía, bùn thải và rác nhà bếp thành nguồn tài nguyên phân bón quý giá (Zero-Waste).'
        },
        {
          head: 'Bảo vệ nguồn nước ngầm khỏi rửa trôi',
          desc: 'Hạn chế hiện tượng phú dưỡng (Eutrophication) tại các sông hồ do dư thừa phân bón hóa học chảy tràn.'
        },
        {
          head: 'Cô lập Carbon trong đất (Soil Sequestration)',
          desc: 'Đưa carbon hữu cơ lưu giữ bền vững trong đất hàng chục năm, góp phần thực hiện cam kết Net Zero phát thải khí nhà kính.'
        }
      ]
    }
  ];

  const filteredData = activeGroup === 'all' 
    ? benefitsData 
    : benefitsData.filter(b => b.id === activeGroup);

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 05
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                LỢI ÍCH ĐA CHIỀU & BỀN VỮNG
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              Tác Dụng Toàn Diện Của Phân Hữu Cơ
            </h2>
            <p className="text-sm text-forest-800/80 mt-1">
              Hệ thống hóa 3 nhóm tác động cốt lõi: Nuôi dưỡng Đất – Chăm sóc Cây – Bảo vệ Môi trường.
            </p>
          </div>

          {/* Group Filter Tabs */}
          <div className="flex items-center bg-white/90 p-1 rounded-xl border border-sage/40 shadow-xs shrink-0">
            <button
              onClick={() => setActiveGroup('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeGroup === 'all'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              Cả 3 nhóm
            </button>
            <button
              onClick={() => setActiveGroup('soil')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeGroup === 'soil'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              1. Cho Đất
            </button>
            <button
              onClick={() => setActiveGroup('plants')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeGroup === 'plants'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              2. Cho Cây
            </button>
            <button
              onClick={() => setActiveGroup('environment')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeGroup === 'environment'
                  ? 'bg-deepGreen text-cream shadow-xs'
                  : 'text-forest-800 hover:text-deepGreen'
              }`}
            >
              3. Môi Trường
            </button>
          </div>
        </div>

        {/* 3 Pillars Infographic Cards */}
        <div className={`grid gap-5 ${
          filteredData.length === 1 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {filteredData.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.id}
                className="bg-white rounded-3xl border border-sage/40 shadow-soft overflow-hidden flex flex-col justify-between group hover:border-deepGreen transition-all duration-300"
              >
                {/* Image Banner & Header */}
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm ${benefit.accentColor}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                        {benefit.title}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-cream">
                      <p className="text-xs text-limeAccent font-mono font-semibold">
                        {benefit.keyMetrics}
                      </p>
                      <h4 className="text-base font-bold leading-tight">
                        {benefit.vietnameseSubtitle}
                      </h4>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="p-5 space-y-3.5">
                    {benefit.points.map((pt, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-deepGreen shrink-0 mt-0.5" />
                          <h5 className="text-xs font-bold text-forest-900 leading-snug">
                            {pt.head}
                          </h5>
                        </div>
                        <p className="text-xs text-forest-800/75 pl-6 leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer badge */}
                <div className="p-3 bg-cream/70 border-t border-sage/20 text-center">
                  <span className="text-[11px] font-mono font-bold text-deepGreen uppercase tracking-wider">
                    {benefit.id === 'soil' ? 'Nền tảng sinh thái' : benefit.id === 'plants' ? 'Năng suất sạch' : 'Tuần hoàn bền vững'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Chemistry Insight Bar */}
        <div className="p-3.5 rounded-2xl bg-forest-800 text-cream flex items-center justify-between text-xs border border-sage/30">
          <div className="flex items-center gap-2">
            <Droplet className="w-4 h-4 text-limeAccent shrink-0" />
            <span>
              <strong>Dung tích hấp thu cation (CEC):</strong> Mỗi gram Axit Humic có thể lưu giữ lượng ion dinh dưỡng gấp 5 đến 10 lần so với khoáng sét thông thường.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-limeAccent/80 text-[11px]">
            Hóa học Thổ nhưỡng
          </span>
        </div>
      </div>
    </div>
  );
};