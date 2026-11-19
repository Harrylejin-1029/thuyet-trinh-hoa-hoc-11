import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Thành phần sinh học cao phân tử nào trong phân hữu cơ đóng vai trò cốt lõi tạo nên khả năng giữ ẩm, đệm pH và dung tích hấp thu cation (CEC) của đất?",
    context: "Trong đất, phức hệ này liên kết chặt chẽ với các hạt sét tạo thành cấu trúc viên hạt bền vững.",
    options: [
      { key: 'A', text: "Hợp chất Mùn (Humus) gồm Axit Humic, Axit Fulvic và Humin" },
      { key: 'B', text: "Đường glucose và tinh bột chưa phân hủy" },
      { key: 'C', text: "Tinh thể muối vô cơ amoni nitrat (NH4NO3)" },
      { key: 'D', text: "Các sợi cellulose tự nhiên chưa qua xử lý" }
    ],
    correctAnswer: 'A',
    explanation: "Chính xác! Mùn (Humus) – đặc biệt là Axit Humic và Axit Fulvic – là các đại phân tử hữu cơ phức tạp có nhiều nhóm chức carboxyl (-COOH) và phenolic (-OH) tích điện âm. Chúng đóng vai trò như 'nam châm' giữ chặt các cation dinh dưỡng (K+, Ca2+, Mg2+, NH4+), ngăn chặn sự rửa trôi và ổn định độ pH của đất.",
    chemistryConcept: "Hóa học keo đất & Dung tích hấp thu cation (CEC)"
  },
  {
    id: 2,
    question: "Tỉ lệ Carbon / Nitơ (C/N) tối ưu nhất của hỗn hợp nguyên liệu trong giai đoạn đầu khi phối trộn ủ phân Compost hiếu khí là bao nhiêu?",
    context: "Tỉ lệ này đảm bảo cân đối hoàn hảo giữa nguồn năng lượng và nguồn tổng hợp protein cho vi sinh vật.",
    options: [
      { key: 'A', text: "C/N = 5:1 đến 10:1" },
      { key: 'B', text: "C/N = 25:1 đến 30:1" },
      { key: 'C', text: "C/N = 60:1 đến 80:1" },
      { key: 'D', text: "C/N = 100:1 đến 150:1" }
    ],
    correctAnswer: 'B',
    explanation: "Đúng! Tỉ lệ vàng C/N cho ủ compost là 25:1 đến 30:1. Khi đó, cứ mỗi 30 phần Carbon dùng để cung cấp năng lượng và cấu tạo tế bào thì vi sinh vật cần 1 phần Nitơ để tổng hợp protein và enzyme. Nếu C/N quá cao đống ủ sẽ phân hủy rất lâu; nếu C/N quá thấp (< 20:1), lượng Nitơ dư thừa sẽ bốc hơi thành khí amoniac (NH3) gây mùi khai và thất thoát đạm.",
    chemistryConcept: "Động học phân hủy sinh học & Chu trình Carbon - Nitơ"
  },
  {
    id: 3,
    question: "Tại sao trong kỹ thuật nông nghiệp, người ta TUYỆT ĐỐI KHÔNG bón trực tiếp phân chuồng tươi (chưa ủ hoai mục) cho rễ cây trồng?",
    context: "Phân chuồng tươi chứa nhiều vi khuẩn đường ruột, hạt cỏ dại và trải qua phản ứng lên men mạnh.",
    options: [
      { key: 'A', text: "Vì phân tươi không chứa bất kỳ nguyên tố dinh dưỡng nào" },
      { key: 'B', text: "Vì phân tươi làm đất bị kiềm hóa quá mạnh (pH > 10)" },
      { key: 'C', text: "Vì phân tươi tỏa nhiệt cao, sinh khí độc (H2S, CH4), mang mầm bệnh và gây xót rễ làm cây chết" },
      { key: 'D', text: "Vì phân tươi làm đất mất hoàn toàn độ ẩm tự nhiên" }
    ],
    correctAnswer: 'C',
    explanation: "Chính xác! Phân tươi khi vào đất sẽ trải qua quá trình lên men yếm khí cục bộ: (1) Vi sinh vật cạnh tranh oxy làm đất bị ngạt khí, (2) Tỏa nhiệt độ cao gây 'cháy' rễ non, (3) Sinh ra các axit hữu cơ và khí độc H2S, CH4 gây ngộ độc rễ, (4) Mang theo các mầm bệnh nguy hiểm (E. coli, Salmonella) và hạt cỏ dại phát tán.",
    chemistryConcept: "Phản ứng yếm khí sinh khí độc & Sinh lý rễ cây"
  },
  {
    id: 4,
    question: "Quá trình vi sinh vật phân giải các hợp chất hữu cơ phức tạp trong phân bón thành các ion khoáng vô cơ tự do (như NH4+, NO3-, H2PO4-, K+) để rễ cây hấp thụ được gọi là quá trình gì?",
    context: "Đây là một trong hai quá trình sinh hóa cốt lõi diễn ra song song trong đất khi bón phân hữu cơ.",
    options: [
      { key: 'A', text: "Quá trình Khoáng hóa (Mineralisation)" },
      { key: 'B', text: "Quá trình Polyme hóa (Polymerisation)" },
      { key: 'C', text: "Quá trình Nhiệt phân (Pyrolysis)" },
      { key: 'D', text: "Quá trình Este hóa (Esterification)" }
    ],
    correctAnswer: 'A',
    explanation: "Tuyệt vời! Khoáng hóa (Mineralisation) là quá trình các enzyme vi sinh vật bẻ gãy các liên kết peptit, photpho hữu cơ... để giải phóng các ion dinh dưỡng khoáng đơn giản rễ cây hấp thụ được. Quá trình đối xứng song song với nó là quá trình Mùn hóa (Humification) tích lũy chất mùn lâu bền.",
    chemistryConcept: "Quá trình Khoáng hóa sinh học (Mineralisation)"
  },
  {
    id: 5,
    question: "Điểm khác biệt bản chất và ưu thế vượt trội của 'Phân hữu cơ vi sinh' so với các loại phân hữu cơ truyền thống là gì?",
    context: "Đây là sản phẩm kết hợp giữa công nghệ vi sinh hiện đại và nguyên liệu hữu cơ chọn lọc.",
    options: [
      { key: 'A', text: "Có pha thêm thuốc kích thích tăng trưởng hóa học tổng hợp" },
      { key: 'B', text: "Được cấy chủ đích các chủng vi sinh vật tuyển chọn có ích với mật độ đạt chuẩn (≥ 1 × 10^6 CFU/g)" },
      { key: 'C', text: "Hoàn toàn không chứa các nguyên tố đa lượng N, P, K" },
      { key: 'D', text: "Chỉ sử dụng được cho cây thủy sinh, không bón được vào đất" }
    ],
    correctAnswer: 'B',
    explanation: "Chính xác! Phân hữu cơ vi sinh là sản phẩm được cấy có chủ đích các chủng vi sinh vật có ích đã được thuần hóa (như vi khuẩn cố định đạm Azotobacter, vi khuẩn phân giải lân khó tan Bacillus megaterium, nấm đối kháng Trichoderma) với mật độ sống cao đạt chuẩn quốc gia. Chúng không chỉ cung cấp dinh dưỡng mà còn biến đất thành một 'nhà máy sinh học' liên tục hoạt động.",
    chemistryConcept: "Công nghệ sinh học trong phân bón & Vi sinh vật học đất"
  }
];
