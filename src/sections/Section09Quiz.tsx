import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  Award, 
  HelpCircle, 
  ChevronRight,
  Flame,
  FlaskConical
} from 'lucide-react';

export const Section09Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const userAnswer = selectedAnswers[currentQ.id];
  const isAnswered = userAnswer !== undefined;
  const isCorrect = userAnswer === currentQ.correctAnswer;

  // Calculate score
  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ans]) => {
    const q = QUIZ_QUESTIONS.find(item => item.id === Number(qId));
    return q && q.correctAnswer === ans ? acc + 20 : acc;
  }, 0);

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return; // Prevent changing after answer is confirmed

    const newAnswers = { ...selectedAnswers, [currentQ.id]: key };
    setSelectedAnswers(newAnswers);

    // If answer is correct, throw a mini confetti
    if (key === currentQ.correctAnswer) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    // Check if this was the last question answered
    if (Object.keys(newAnswers).length === totalQuestions) {
      setTimeout(() => {
        setIsCompleted(true);
        // Big celebratory confetti
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }, 1500);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F2E8] flex flex-col justify-center">
      <div className="max-w-4xl w-full mx-auto space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-sage/40 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-deepGreen bg-sage/20 px-2 py-0.5 rounded border border-sage/30">
                PHẦN 09
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest-800/70">
                THỬ THÁCH TƯƠNG TÁC
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              Câu Hỏi Kiểm Tra Kiến Thức
            </h2>
            <p className="text-sm text-forest-800/80 mt-1">
              5 câu hỏi trắc nghiệm củng cố kiến thức Hóa học 11 về Phân hữu cơ.
            </p>
          </div>

          {/* Current Score Badge */}
          <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-2xl border border-sage/40 shadow-xs shrink-0">
            <Flame className="w-5 h-5 text-amber-500" />
            <div>
              <span className="text-[10px] uppercase font-bold text-forest-800/60 block">Điểm hiện tại</span>
              <span className="text-lg font-mono font-black text-deepGreen leading-none">
                {score} <span className="text-xs text-forest-800/50">/ 100</span>
              </span>
            </div>
          </div>
        </div>

        {/* Not Completed Screen: Quiz Form */}
        {!isCompleted ? (
          <div className="space-y-5 animate-fade-in">
            {/* Progress Bar & Question Counter */}
            <div className="flex items-center justify-between text-xs text-forest-800/70 font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-deepGreen">
                  Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}
                </span>
                <span className="text-sage-dark">•</span>
                <span>Chuyên đề Hóa học 11</span>
              </div>
              <span>{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
            </div>

            <div className="w-full bg-sage/20 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-deepGreen h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl border border-sage/40 shadow-soft p-6 sm:p-8 space-y-6">
              {/* Question Text */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-sage/20 text-deepGreen">
                  <FlaskConical className="w-3.5 h-3.5" />
                  {currentQ.chemistryConcept}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-forest-900 leading-snug">
                  {currentQ.question}
                </h3>
                {currentQ.context && (
                  <p className="text-xs text-forest-800/70 italic border-l-2 border-sage-dark pl-2.5">
                    Gợi ý: {currentQ.context}
                  </p>
                )}
              </div>

              {/* Options A, B, C, D */}
              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map(opt => {
                  let buttonStyle = "bg-white hover:bg-cream border-sage/30 text-forest-900 hover:border-deepGreen";
                  let keyBadgeStyle = "bg-sage/20 text-forest-900";

                  if (isAnswered) {
                    if (opt.key === currentQ.correctAnswer) {
                      buttonStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 shadow-xs";
                      keyBadgeStyle = "bg-emerald-600 text-white font-bold";
                    } else if (opt.key === userAnswer) {
                      buttonStyle = "bg-rose-50 border-rose-400 text-rose-950";
                      keyBadgeStyle = "bg-rose-500 text-white font-bold";
                    } else {
                      buttonStyle = "opacity-50 border-sage/20 bg-cream/40";
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(opt.key)}
                      disabled={isAnswered}
                      className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${buttonStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-xl text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 transition-colors ${keyBadgeStyle}`}>
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed flex-1">
                        {opt.text}
                      </span>
                      {isAnswered && opt.key === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && opt.key === userAnswer && opt.key !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback & Scientific Explanation */}
              {isAnswered && (
                <div className={`p-4 rounded-2xl border animate-fade-in ${
                  isCorrect 
                    ? 'bg-emerald-50/90 border-emerald-300' 
                    : 'bg-rose-50/90 border-rose-300'
                }`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                          CHÍNH XÁC! (+20 ĐIỂM)
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-900 font-mono">
                          CHƯA CHÍNH XÁC! Đáp án đúng là {currentQ.correctAnswer}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-forest-900/90 leading-relaxed">
                    <strong>Giải thích khoa học:</strong> {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation button */}
              <div className="pt-2 flex items-center justify-between border-t border-sage/30">
                <span className="text-xs text-forest-800/60">
                  {isAnswered ? "Nhấn 'Câu tiếp theo' để tiếp tục" : "Hãy chọn 1 phương án để kiểm tra ngay"}
                </span>

                {isAnswered && (
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl bg-deepGreen hover:bg-deepGreen-600 text-cream font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <span>{currentQuestionIndex < totalQuestions - 1 ? 'Câu tiếp theo' : 'Xem kết quả tổng kết'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Completed Scoreboard Screen */
          <div className="bg-white rounded-3xl border border-sage/40 shadow-soft p-8 text-center space-y-6 animate-fade-in max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-limeAccent/30 text-deepGreen flex items-center justify-center mx-auto border border-limeAccent/50 shadow-inner">
              <Award className="w-10 h-10 text-deepGreen" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-deepGreen">
                KẾT QUẢ KIỂM TRA KIẾN THỨC
              </span>
              <h3 className="text-3xl font-black text-forest-900">
                {score === 100 
                  ? "Xuất Sắc! Bạn Đạt Điểm Tuyệt Đối!" 
                  : score >= 80 
                  ? "Rất Tốt! Bạn Nắm Rất Vững Kiến Thức!" 
                  : "Hoàn Thành Bài Kiểm Tra!"}
              </h3>
              <p className="text-sm text-forest-800/80 max-w-md mx-auto">
                {score >= 80 
                  ? "Bạn đã hiểu rõ bản chất hóa sinh của phân hữu cơ, quy trình ủ compost và giải pháp dinh dưỡng đất bền vững."
                  : "Hãy xem lại các slide trước để củng cố thêm các khái niệm về khoáng hóa và mùn hóa nhé!"}
              </p>
            </div>

            {/* Score Display */}
            <div className="p-6 rounded-2xl bg-cream/70 border border-sage/30 max-w-xs mx-auto">
              <div className="text-5xl font-black font-mono text-deepGreen">
                {score}
                <span className="text-xl text-forest-800/50 font-normal"> / 100</span>
              </div>
              <div className="text-xs text-forest-800/70 mt-1">
                Đúng {score / 20} trên tổng số {totalQuestions} câu hỏi
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-5 py-3 rounded-xl bg-deepGreen hover:bg-deepGreen-600 text-cream font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại bài kiểm tra</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};