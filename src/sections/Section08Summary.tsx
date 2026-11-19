import React from 'react';
import { 
  Quote, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Globe2, 
  ArrowRight,
  MessageCircleQuestion
} from 'lucide-react';

interface Section08SummaryProps {
  onGoToQuiz: () => void;
}

export const Section08Summary: React.FC<Section08SummaryProps> = ({
  onGoToQuiz,
}) => {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900 text-cream flex flex-col justify-center overflow-hidden">
      {/* Decorative organic glow accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-deepGreen/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-limeAccent/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl w-full mx-auto space-y-8 text-center animate-fade-in">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-forest-700/80 text-limeAccent border border-limeAccent/30">
          <Sparkles className="w-3.5 h-3.5" />
          TỔNG KẾT BÀI HỌC • HÓA HỌC 11
        </div>

        {/* Central Quote Callout */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-forest-950/60 backdrop-blur-md border border-limeAccent/30 shadow-2xl max-w-4xl mx-auto space-y-4">
          <Quote className="w-12 h-12 text-limeAccent/40 mx-auto rotate-180 mb-2" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cream leading-snug font-serif">
            "Phân hữu cơ không chỉ cung cấp dinh dưỡng cho cây trồng mà còn góp phần nuôi dưỡng đất và duy trì hệ sinh thái nông nghiệp bền vững."
          </h2>

          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="h-0.5 w-12 bg-limeAccent/40" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-limeAccent font-bold">
              Triết lý Canh tác Sinh thái
            </span>
            <span className="h-0.5 w-12 bg-limeAccent/40" />
          </div>
        </div>

        {/* 3 Pillars Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="p-5 rounded-2xl bg-forest-800/80 border border-forest-700 hover:border-limeAccent/40 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-deepGreen text-limeAccent flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-cream">1. Đất Sống (Living Soil)</h3>
            <p className="text-xs text-cream/75 leading-relaxed">
              Mùn hữu cơ là mạch máu nuôi dưỡng vi sinh vật và giun đất, tạo kết cấu tơi xốp và dung tích hấp thu ion (CEC) bền vững.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-800/80 border border-forest-700 hover:border-limeAccent/40 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-deepGreen text-limeAccent flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-cream">2. Cây Khỏe (Resilient Crops)</h3>
            <p className="text-xs text-cream/75 leading-relaxed">
              Dinh dưỡng giải phóng theo cơ chế nhả chậm, không gây sốc phân, kích thích hệ lông hút phát triển và tăng sức đề kháng tự nhiên.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-800/80 border border-forest-700 hover:border-limeAccent/40 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-deepGreen text-limeAccent flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-cream">3. Nông Nghiệp Tuần Hoàn</h3>
            <p className="text-xs text-cream/75 leading-relaxed">
              Khép kín chu trình sinh địa hóa Carbon - Nitơ - Photpho, biến phế phụ phẩm thành tài nguyên vàng đen, hướng đến Net-Zero.
            </p>
          </div>
        </div>

        {/* Classroom Question & Next Step Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto p-4 rounded-2xl bg-forest-700/50 border border-sage/20">
          <div className="flex items-center gap-3 text-left">
            <MessageCircleQuestion className="w-6 h-6 text-limeAccent shrink-0" />
            <div className="text-xs">
              <strong className="text-limeAccent block">Câu hỏi gợi mở thảo luận cho cả lớp:</strong>
              <span className="text-cream/80">Là học sinh THPT, chúng ta có thể làm gì để phân loại và tái chế rác hữu cơ tại gia đình và trường học?</span>
            </div>
          </div>

          <button
            onClick={onGoToQuiz}
            className="px-5 py-2.5 rounded-xl bg-limeAccent hover:bg-limeAccent-light text-forest-900 font-bold text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-lg hover:shadow-glow-lime transition-all cursor-pointer"
          >
            <span>Thử thách Mini-Quiz</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};