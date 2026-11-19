import { SlideData, FertilizerCategory, CompostStep } from '../types';

export const SLIDES_META: SlideData[] = [
  {
    id: 1,
    sectionNumber: "01",
    title: "PHÂN HỮU CƠ",
    subtitle: "Nguồn dinh dưỡng tự nhiên – Nền tảng cho nền nông nghiệp bền vững",
    tag: "HÓA HỌC 11",
    category: "Mở đầu",
    speakerNotes: {
      overview: "Kính chào thầy cô và các bạn! Hôm nay nhóm xin đại diện trình bày chuyên đề Hóa học 11: 'Phân Hữu Cơ - Nền tảng cho nền nông nghiệp xanh bền vững'.",
      talkingPoints: [
        "Giới thiệu bối cảnh: Nông nghiệp hiện đại đang chuyển dịch mạnh mẽ từ lạm dụng phân vô cơ sang sử dụng phân hữu cơ để bảo vệ đất.",
        "Mục tiêu bài báo cáo: Hiểu rõ bản chất hóa sinh, phân loại, quy trình ủ compost và giải pháp cân bằng dinh dưỡng đất.",
        "Thông điệp mở đầu: Đất sống thì cây mới khỏe, nông sản mới an lành."
      ],
      chemistryDeepDive: "Phân hữu cơ đóng vai trò là kho chứa nguyên tố C, N, P, K và vi lượng dưới dạng phức chất sinh học, liên quan chặt chẽ đến các chu trình sinh địa hóa tự nhiên.",
      durationMinutes: 1.5
    }
  },
  {
    id: 2,
    sectionNumber: "02",
    title: "KHÁI NIỆM & BẢN CHẤT HÓA HỌC",
    subtitle: "Định nghĩa, nguồn gốc và hai quá trình hóa sinh cốt lõi trong đất",
    tag: "CƠ SỞ KHOA HỌC",
    category: "Khái niệm",
    speakerNotes: {
      overview: "Ở slide này, chúng ta làm rõ định nghĩa chính xác theo Hóa học 11 và khám phá 2 phản ứng sinh hóa song song: Khoáng hóa và Mùn hóa.",
      talkingPoints: [
        "Định nghĩa: Phân hữu cơ là hợp chất chứa các chất dinh dưỡng khoáng gắn liền với vật chất hữu cơ có nguồn gốc sinh học.",
        "Thành phần chính: Chất hữu cơ tổng số (>20%), Axit Humic, Axit Fulvic, các ion khoáng đa - trung - vi lượng.",
        "Nhấn mạnh 2 quá trình: Khoáng hóa (giải phóng ion tức thời cho rễ hút) và Mùn hóa (tích lũy mùn keo làm giàu đất lâu dài)."
      ],
      chemistryDeepDive: "Phương trình khoáng hóa đạm: Protein/Hợp chất chứa N -> Peptit -> Axit amin -> NH4+ (Amoni) -> NO3- (Nitrat nhờ vi khuẩn Nitrosomonas & Nitrobacter). Rễ cây chỉ hấp thụ được dưới dạng ion vô cơ này!",
      durationMinutes: 2.5
    }
  },
  {
    id: 3,
    sectionNumber: "03",
    title: "PHÂN LOẠI PHÂN HỮU CƠ",
    subtitle: "5 nhóm phân hữu cơ chủ lực trong sản xuất nông nghiệp",
    tag: "PHÂN LOẠI & ĐẶC TÍNH",
    category: "Phân loại",
    speakerNotes: {
      overview: "Trình bày 5 loại phân hữu cơ tiêu biểu nhất hiện nay. Phân tích rõ nguồn gốc và cách sử dụng của từng loại.",
      talkingPoints: [
        "1. Phân chuồng: Giàu dinh dưỡng nhưng bắt buộc phải ủ hoai mục để diệt vi khuẩn gây hại (Salmonella, E. coli) và hạt cỏ.",
        "2. Phân Compost: Tái chế phế phụ phẩm thực vật, rác thải nhà bếp, tạo nguồn mùn quý giá.",
        "3. Phân xanh: Cây họ Đậu và bèo hoa dâu cộng sinh vi khuẩn lam cố định đạm tự do từ khí quyển.",
        "4. Phân hữu cơ vi sinh: Công nghệ cao, cấy các chủng nấm Trichoderma, vi khuẩn cố định đạm mật độ cao.",
        "5. Phân trùn quế: 'Vàng đen' của nông nghiệp, giàu kén trùn, enzyme amylase, protease và axit humic tự nhiên."
      ],
      chemistryDeepDive: "Bèo hoa dâu chứa vi khuẩn lam Anabaena azollae có enzyme Nitrogenase bẻ gãy liên kết ba N≡N siêu bền trong khí quyển để biến thành đạm hữu cơ cây lúa dễ hấp thụ.",
      durationMinutes: 3
    }
  },
  {
    id: 4,
    sectionNumber: "04",
    title: "QUÁ TRÌNH SẢN XUẤT COMPOST",
    subtitle: "Sơ đồ 7 giai đoạn chuyển hóa hiếu khí từ phế phẩm thành vàng đen",
    tag: "CÔNG NGHỆ Ủ SINH HỌC",
    category: "Quy trình",
    speakerNotes: {
      overview: "Phần này là trọng tâm hóa sinh: Làm thế nào vi sinh vật phân giải cellulose và lignin thành mùn tơi xốp.",
      talkingPoints: [
        "Tỉ lệ vàng C/N = 25:1 đến 30:1 (Nguyên liệu Nâu giàu Carbon + Nguyên liệu Xanh giàu Nitơ).",
        "Độ ẩm lý tưởng 50-60%: Đủ nước cho vi sinh vật nhưng không ứ đọng làm yếm khí thối rữa.",
        "Giai đoạn Thermophilic 55-65°C: Nhiệt tự sinh do hô hấp tế bào của vi sinh vật, tiêu diệt triệt để mầm bệnh.",
        "Đảo trộn thông khí định kỳ: Cung cấp O2 cho quá trình oxy hóa hiếu khí, tránh tạo khí metan (CH4) hay H2S mùi trứng thối."
      ],
      chemistryDeepDive: "Phản ứng tổng quát ủ hiếu khí: (Chất hữu cơ) + O2 -> Mùn (Humus) + CO2 + H2O + Nhiệt lượng (Q). Nhiệt độ tăng vọt là minh chứng của phản ứng tỏa nhiệt mạnh!",
      durationMinutes: 3
    }
  },
  {
    id: 5,
    sectionNumber: "05",
    title: "TÁC DỤNG CỦA PHÂN HỮU CƠ",
    subtitle: "Giải pháp 3 trong 1: Nuôi Đất – Nuôi Cây – Bảo vệ Môi trường",
    tag: "LỢI ÍCH ĐA CHIỀU",
    category: "Tác dụng",
    speakerNotes: {
      overview: "Soi chiếu tác động toàn diện của phân hữu cơ ở 3 góc độ: Thổ nhưỡng học, Sinh lý thực vật và Sinh thái học.",
      talkingPoints: [
        "Đối với Đất: Tăng dung tích hấp thu cation (CEC), kết dính hạt đất rời rạc thành kết cấu viên hạt tơi xốp, giữ ẩm cực tốt.",
        "Đối với Cây: Cung cấp dinh dưỡng nhả chậm (Slow-release), không gây sốc phân, kích thích lông hút của rễ.",
        "Đối với Môi trường: Tận dụng phụ phẩm, giảm phát thải khí nhà kính, chống rửa trôi nitrat gây ô nhiễm nước ngầm."
      ],
      chemistryDeepDive: "Keo mùn mang điện tích âm (-), có khả năng hấp phụ trao đổi các cation dinh dưỡng như K+, Ca2+, Mg2+, NH4+, ngăn chặn chúng bị nước mưa rửa trôi xuống tầng nước ngầm.",
      durationMinutes: 2.5
    }
  },
  {
    id: 6,
    sectionNumber: "06",
    title: "SO SÁNH: ƯU ĐIỂM & HẠN CHẾ",
    subtitle: "Đối chiếu khoa học giữa Phân Hữu Cơ và Phân Vô Cơ (Hóa học)",
    tag: "PHÂN TÍCH ĐỐI CHIẾU",
    category: "So sánh",
    speakerNotes: {
      overview: "Đánh giá khách quan, không cực đoan: Hiểu rõ thế mạnh và giới hạn để ứng dụng thông minh trong canh tác thực tế.",
      talkingPoints: [
        "Ưu điểm phân hữu cơ: Bền vững, cải tạo đất, an toàn sinh thái, nông sản ngon ngọt.",
        "Hạn chế: Tỉ lệ N-P-K nguyên chất thấp hơn phân hóa học, tác dụng chậm, khối lượng sử dụng lớn.",
        "Giải pháp kỹ thuật: 'Bón phân cân đối' - Dùng phân hữu cơ làm nền nuôi đất, bổ sung phân vô cơ đúng lúc cây nuôi hoa, kết trái."
      ],
      chemistryDeepDive: "Phân urê CO(NH2)2 có hàm lượng N tới 46% (rất cao), nhưng dễ bay hơi NH3 và rửa trôi NO3-. Phân hữu cơ có N chỉ 1-4% nhưng tồn tại dưới dạng liên kết hữu cơ nhả từ từ.",
      durationMinutes: 2
    }
  },
  {
    id: 7,
    sectionNumber: "07",
    title: "ỨNG DỤNG THỰC TIỄN",
    subtitle: "Mô hình nông nghiệp tuần hoàn và ứng dụng đời sống tại Việt Nam",
    tag: "THỰC TIỄN VIỆT NAM",
    category: "Ứng dụng",
    speakerNotes: {
      overview: "Liên hệ kiến thức sách vở vào thực tiễn canh tác tại Việt Nam từ nông hộ đến trang trại công nghệ cao.",
      talkingPoints: [
        "Trồng rau sạch đô thị: Sử dụng phân trùn quế và đất sạch hữu cơ cho ban công, sân thượng.",
        "Cải tạo đất Tây Nguyên: Phân ủ từ vỏ cà phê giải quyết đất bạc màu do độc canh hồ tiêu, cà phê.",
        "Tuần hoàn rơm rạ ĐBSCL: Chấm dứt đốt đồng khói bụi bằng cách dùng men vi sinh ủ rơm rạ thành phân hữu cơ ngay trên ruộng.",
        "Mô hình VAC truyền thống: Vườn - Ao - Chuồng khép kín dòng vật chất và năng lượng sinh học."
      ],
      chemistryDeepDive: "Vỏ cà phê chứa nhiều Kali hữu cơ và chất xơ. Khi ủ với nấm Trichoderma, Kali hữu cơ chuyển thành K+ tự do bón ngược lại cho vườn tiêu cực kỳ năng suất.",
      durationMinutes: 2
    }
  },
  {
    id: 8,
    sectionNumber: "08",
    title: "TỔNG KẾT & THÔNG ĐIỆP",
    subtitle: "Đất sống – Cây khỏe – Tương lai nông nghiệp sinh thái",
    tag: "THÔNG ĐIỆP CỐT LÕI",
    category: "Tổng kết",
    speakerNotes: {
      overview: "Đúc kết bài thuyết trình bằng thông điệp sâu sắc và gợi mở câu hỏi tranh luận hào hứng cho cả lớp.",
      talkingPoints: [
        "Nhắc lại câu thông điệp: 'Phân hữu cơ không chỉ cung cấp dinh dưỡng cho cây trồng mà còn nuôi dưỡng đất và bảo tồn hệ sinh thái.'",
        "3 trụ cột: Nông nghiệp tuần hoàn, Bảo vệ đa dạng sinh học đất, Nâng tầm nông sản Việt.",
        "Mở lời chuyển tiếp sang phần mini-game kiểm tra kiến thức nhanh của cả lớp."
      ],
      chemistryDeepDive: "Mỗi 1% chất mùn tăng thêm trong đất có khả năng giữ thêm khoảng 150.000 lít nước trên mỗi hecta đất canh tác!",
      durationMinutes: 1.5
    }
  },
  {
    id: 9,
    sectionNumber: "09",
    title: "CÂU HỎI TƯƠNG TÁC",
    subtitle: "Thử thách trắc nghiệm nhanh 5 câu hỏi Hóa học 11",
    tag: "MINI QUIZ",
    category: "Tương tác",
    speakerNotes: {
      overview: "Mời các bạn trong lớp xung phong trả lời từng câu hỏi. Hãy cùng giải thích cơ chế hóa học đằng sau mỗi đáp án nhé!",
      talkingPoints: [
        "Khích lệ bạn bè tham gia chọn đáp án A, B, C hoặc D.",
        "Nhấn vào đáp án được chọn để hiển thị ngay kết quả và giải thích cơ chế.",
        "Xem tổng điểm cuối bài để đánh giá mức độ hiểu bài của cả lớp."
      ],
      chemistryDeepDive: "Các câu hỏi kiểm tra khả năng vận dụng kiến thức về tỉ lệ C/N, quá trình khoáng hóa, đặc tính của keo mùn và ứng dụng vi sinh.",
      durationMinutes: 3
    }
  }
];

export const FERTILIZER_CATEGORIES: FertilizerCategory[] = [
  {
    id: 'manure',
    name: 'Phân chuồng',
    vietnameseName: 'Phân chuồng (Farmyard Manure)',
    tagline: 'Nguồn phân bón truyền thống giàu chất hữu cơ và khoáng đa lượng',
    source: 'Chất thải (phân, nước tiểu) của gia súc, gia cầm trộn lẫn với chất độn chuồng (rơm rạ, trấu, mùn cưa).',
    characteristics: [
      'Chứa đầy đủ các nguyên tố N, P, K, Ca, Mg và vi lượng phong phú.',
      'Độ ẩm cao (60-70%), chứa nhiều chất xơ hữu cơ chưa phân hủy.',
      'Bắt buộc phải qua ủ hoai mục (3 - 6 tháng) trước khi bón.'
    ],
    usage: 'Bón lót cho cây trồng trước khi gieo hạt, cải tạo tầng đất mặt hàng năm.',
    advantages: [
      'Cung cấp lượng lớn mùn thô nuôi dưỡng giun và vi sinh vật đất.',
      'Tận dụng nguồn chất thải chăn nuôi tại chỗ, chi phí rẻ.'
    ],
    c_n_ratio: '20:1 – 25:1 (khi ủ chín)',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    chemicalAspect: 'Nếu bón tươi, quá trình lên men yếm khí trong đất sẽ sinh ra khí H2S, CH4 và axit hữu cơ làm nghẹt rễ, đồng thời vi khuẩn phân giải đạm lấy oxy làm đất bị khử mạnh.'
  },
  {
    id: 'compost',
    name: 'Phân Compost',
    vietnameseName: 'Phân Compost (Phân ủ rác hữu cơ)',
    tagline: 'Sản phẩm mùn hóa hiếu khí hoàn hảo từ phế phẩm nông nghiệp & rác sinh hoạt',
    source: 'Rơm rạ, bã mía, vỏ cà phê, cành lá tỉa, rau củ quả thải, rác nhà bếp hữu cơ.',
    characteristics: [
      'Màu nâu sẫm đến đen bóng, cấu trúc xốp nhẹ, tơi mịn như đất mùn rừng.',
      'Mùi thơm dễ chịu của đất tự nhiên (geosmin), không có mùi hôi thối.',
      'Tỉ lệ mùn hóa cao, sạch hoàn toàn hạt cỏ và mầm bệnh hại.'
    ],
    usage: 'Bón lót hoặc bón thúc quanh gốc cây ăn trái, trộn giá thể trồng rau sạch công nghệ cao.',
    advantages: [
      'Giải quyết triệt để bài toán rác thải hữu cơ đô thị & phế phẩm đồng ruộng.',
      'Cải thiện cấu trúc đất thoái hóa, tăng khả năng lưu giữ nước và phân bón.'
    ],
    c_n_ratio: '12:1 – 15:1',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    chemicalAspect: 'Quá trình oxy hóa sinh học giải phóng năng lượng nhiệt (55-65°C), biến hợp chất cao phân tử khó tiêu cellulose, hemixenluloza thành phức hợp axit humic bền vững.'
  },
  {
    id: 'green_manure',
    name: 'Phân xanh',
    vietnameseName: 'Phân xanh (Green Manure)',
    tagline: 'Sinh khối thực vật tươi giàu đạm sinh học tự nhiên cày vùi trực tiếp',
    source: 'Các loài cây họ Đậu (điền thanh, muồng lá tròn, đậu triều), bèo hoa dâu, lục bình.',
    characteristics: [
      'Được cày vùi vào đất ở thời kỳ cây ra hoa rộ (lúc sinh khối và lượng đạm cao nhất).',
      'Thân lá mềm, mọng nước, tốc độ phân hủy và giải phóng dinh dưỡng rất nhanh.',
      'Bèo hoa dâu cộng sinh vi khuẩn lam Anabaena azollae có khả năng tự cố định N2 khí quyển.'
    ],
    usage: 'Cày dập vùi vào ruộng trước khi cấy lúa hoặc trồng màu 2 - 3 tuần.',
    advantages: [
      'Bổ sung lượng đạm hữu cơ cực lớn không tốn chi phí mua phân hóa học.',
      'Che phủ chống xói mòn rửa trôi đất đồi dốc trong mùa mưa bão.'
    ],
    c_n_ratio: '10:1 – 15:1 (rất giàu Nitơ)',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-lime-100 text-lime-900 border-lime-300',
    chemicalAspect: 'Nốt sần rễ cây họ Đậu chứa vi khuẩn Rhizobium mang enzyme nitrogenase: N2 + 8H+ + 8e- + 16 ATP -> 2NH3 + H2 + 16 ADP + 16 Pi. Nguồn đạm tự nhiên miễn phí vô tận!'
  },
  {
    id: 'bio_organic',
    name: 'Phân hữu cơ vi sinh',
    vietnameseName: 'Phân hữu cơ vi sinh (Bio-organic Fertilizer)',
    tagline: 'Sự kết hợp hoàn hảo giữa chất nền hữu cơ và các chủng vi sinh vật tuyển chọn',
    source: 'Chất nền hữu cơ (than bùn, phân hoai mục) được cấy các chủng vi sinh vật có ích đã được thuần hóa.',
    characteristics: [
      'Mật độ vi sinh vật sống hữu ích đạt chuẩn quốc gia ≥ 1 × 10^6 CFU/g.',
      'Gồm các nhóm: Cố định nitơ (Azotobacter), phân giải lân khó tan (Bacillus megaterium), phân giải cellulose (Trichoderma).',
      'Có khả năng ức chế nấm bệnh truyền qua đất như Fusarium, Rhizoctonia.'
    ],
    usage: 'Bón lót, bón thúc cho cây trồng có giá trị kinh tế cao (tiêu, cà phê, sầu riêng, cây ăn quả).',
    advantages: [
      'Kích hoạt hệ vi sinh vật bản địa trong đất hoạt động mạnh mẽ.',
      'Biến các dạng photphat khó tan trong đất thành ion H2PO4- cây dễ hấp thu.'
    ],
    c_n_ratio: '15:1 – 18:1',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
    chemicalAspect: 'Vi sinh vật phân giải lân tiết ra các axit hữu cơ (axit citric, axit oxalic, axit malic) tạo phức chelate với ion Fe3+, Al3+, Ca2+, giải phóng gốc photphat hòa tan cho rễ.'
  },
  {
    id: 'vermicompost',
    name: 'Phân trùn quế',
    vietnameseName: 'Phân trùn quế (Vermicompost)',
    tagline: 'Vàng đen thượng hạng của nông nghiệp hữu cơ – Siêu giàu axit humic & enzyme',
    source: 'Chất thải bài tiết của trùn quế (Perionyx excavatus hoặc Eisenia fetida) sau khi tiêu hóa phân bò, phân lợn.',
    characteristics: [
      'Dạng hạt nhỏ mịn, đồng đều, không mùi, độ xốp đặc biệt cao.',
      'Chứa đầy đủ enzyme tiêu hóa (protease, amylase, lipase, cellulase).',
      'Độ pH trung tính tự nhiên (6.8 – 7.2) cực kỳ thân thiện với bộ rễ non.',
      'Chứa kén trùn quế, khi bón vào đất sẽ nở ra trùn con tiếp tục cải tạo đất.'
    ],
    usage: 'Bón trực tiếp cho rau mầm, cây cảnh, hoa lan, ươm cây giống nhà kính.',
    advantages: [
      'Không bao giờ gây hiện tượng sốc phân hay cháy rễ ngay cả khi bón 100% phân trùn quế.',
      'Chứa chất điều hòa sinh trưởng tự nhiên (axit indol-3-axetic - IAA) giúp rễ bung đọt mạnh.'
    ],
    c_n_ratio: '10:1 – 12:1',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    chemicalAspect: 'Đường ruột của giun đất là lò phản ứng sinh hóa đặc biệt, biến đổi các liên kết khoáng thành dạng phức chelate hữu cơ cực kỳ ổn định, làm tăng dung tích CEC của đất.'
  }
];

export const COMPOST_STEPS: CompostStep[] = [
  {
    step: 1,
    title: "Thu gom & Chuẩn bị nguyên liệu",
    phaseName: "Cân bằng C/N (Carbon : Nitơ)",
    temperature: "Nhiệt độ phòng (25 - 30°C)",
    duration: "Ngày 1 - 2",
    description: "Tập kết 2 nhóm nguyên liệu cốt lõi: Nhóm Nâu giàu Carbon (rơm rạ, trấu, mùn cưa, lá khô) và Nhóm Xanh giàu Nitơ (phân tươi, rau thừa, cỏ tươi). Tỉ lệ phối trộn lý tưởng đạt C/N = 25:1 đến 30:1.",
    microbiology: "Bào tử vi khuẩn hiếu khí và nấm hoại sinh bắt đầu thức tỉnh từ trạng thái tiềm sinh khi gặp môi trường dinh dưỡng và ẩm độ phù hợp.",
    chemicalProcess: "Carbon đóng vai trò là nguồn cung cấp năng lượng và cấu tạo khung xương tế bào; Nitơ là nguyên tố thiết yếu để vi sinh vật tổng hợp protein và enzyme.",
    tips: "Nếu quá nhiều Carbon (C/N > 40:1) đống ủ sẽ phân giải rất chậm; nếu quá nhiều Nitơ (C/N < 20:1) sẽ thất thoát đạm dưới dạng khí NH3 mùi khai khó chịu.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    keyMetric: "Tỉ lệ vàng C/N: 25:1 – 30:1"
  },
  {
    step: 2,
    title: "Phân loại & Băm nhỏ cơ học",
    phaseName: "Tăng diện tích tiếp xúc",
    temperature: "28 - 32°C",
    duration: "Ngày 2",
    description: "Loại bỏ hoàn toàn rác vô cơ (túi nilon, chai nhựa, kim loại, mảnh thủy tinh). Băm nhỏ thân cây ngô, rơm rạ, vỏ dừa thành các đoạn kích thước tối ưu từ 3 đến 5 cm.",
    microbiology: "Băm nhỏ phá vỡ lớp biểu bì cutin bảo vệ của thực vật, tạo điều kiện cho các sợi nấm (hyphae) dễ dàng đâm sâu vào các bó mạch gỗ.",
    chemicalProcess: "Tăng diện tích bề mặt riêng (Specific Surface Area) lên hàng chục lần, làm tăng xác suất va chạm và phản ứng thủy phân enzyme giữa vi sinh vật và cơ chất hữu cơ.",
    tips: "Không nên băm quá vụn dạng bột mịn vì sẽ làm bết dính đống ủ, cản trở sự lưu thông của oxy.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
    keyMetric: "Kích thước hạt: 3 – 5 cm"
  },
  {
    step: 3,
    title: "Phối trộn & Điều chỉnh độ ẩm",
    phaseName: "Kích hoạt dung môi phản ứng",
    temperature: "35 - 40°C (bắt đầu ấm lên)",
    duration: "Ngày 3 - 4",
    description: "Xếp các lớp nguyên liệu xen kẽ nhau kết hợp tưới nước đều. Độ ẩm tối ưu phải đạt từ 50% đến 60%. Bổ sung chế phẩm vi sinh hữu hiệu (Trichoderma, EM1) để tăng tốc độ phân hủy.",
    microbiology: "Nước là môi trường phân tán enzyme ngoại bào. Men Trichoderma tiết cellulase phá vỡ màng tế bào thực vật.",
    chemicalProcess: "Kiểm tra độ ẩm bằng phương pháp 'nắm tay': Nắm chặt một nắm nguyên liệu, nước chỉ rịn ướt qua kẽ ngón tay mà không nhỏ giọt là đạt chuẩn 55-60%.",
    tips: "Độ ẩm < 40% vi sinh vật bị ức chế; độ ẩm > 70% nước bít kín các khe hở làm đống ủ chuyển sang phân giải yếm khí hôi thối.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    keyMetric: "Độ ẩm mục tiêu: 50% – 60%"
  },
  {
    step: 4,
    title: "Ủ nóng & Diệt khuẩn (Thermophilic)",
    phaseName: "Giai đoạn nhiệt cao cực đại",
    temperature: "55°C – 65°C (Nóng rực)",
    duration: "Ngày 5 - 25",
    description: "Hô hấp hiếu khí bùng nổ, đống ủ tự sinh nhiệt cực mạnh. Nhiệt độ ruột đống ủ nhanh chóng đạt 55 - 65°C và duy trì liên tục trong nhiều ngày. Khói hơi nước bốc lên nghi ngút.",
    microbiology: "Vi khuẩn ưa nhiệt (Thermophilic bacteria như Bacillus stearothermophilus, Actinomyces) chiếm ưu thế tuyệt đối.",
    chemicalProcess: "Phản ứng tỏa nhiệt phân giải đường đơn, tinh bột, protein: C6H12O6 + 6O2 -> 6CO2 + 6H2O + 2870 kJ. Nhiệt độ cao > 55°C tiêu diệt 100% ấu trùng ruồi nhặng, vi khuẩn E.coli và hạt cỏ dại.",
    tips: "Nếu nhiệt độ vượt quá 70°C, các vi sinh vật có ích sẽ bị chết và đạm bị phân hủy thành khí NH3, cần phải đảo trộn ngay để hạ nhiệt.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    keyMetric: "Nhiệt độ đỉnh: 55°C – 65°C"
  },
  {
    step: 5,
    title: "Đảo trộn & Cung cấp dưỡng khí O2",
    phaseName: "Thông khí hiếu khí",
    temperature: "45°C – 55°C",
    duration: "Mỗi 7 – 10 ngày / lần",
    description: "Dùng máy đảo hoặc cào thủ công lật từ trong ra ngoài, từ trên xuống dưới nhằm giải phóng khí CO2 tích tụ và bổ sung oxy tươi vào tận đáy đống ủ.",
    microbiology: "Duy trì điều kiện hiếu khí bắt buộc (Aerobic). Khi nồng độ O2 giảm dưới 5%, vi khuẩn kỵ khí bắt đầu sinh sôi tạo mùi xú uế.",
    chemicalProcess: "Ngăn chặn phản ứng khử kỵ khí sinh khí metan (CH4), hydro sunfua (H2S), mecaptan gây ô nhiễm không khí và thất thoát năng lượng.",
    tips: "Kết hợp kiểm tra độ ẩm khi đảo trộn, nếu thấy khô thì phun bổ sung thêm nước sạch có pha rỉ mật đường.",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80",
    keyMetric: "Nồng độ Oxy O2: > 10%"
  },
  {
    step: 6,
    title: "Ủ chín & Mùn hóa (Curing / Maturation)",
    phaseName: "Quá trình Mùn hóa (Humification)",
    temperature: "Hạ dần về 30°C – 35°C",
    duration: "Ngày 30 - 60",
    description: "Hoạt tính vi sinh vật chậm lại, nhiệt độ đống ủ giảm đều về nhiệt độ môi trường. Các hợp chất trung gian ngưng tụ thành các đại phân tử Axit Humic và Axit Fulvic bền vững.",
    microbiology: "Xạ khuẩn (Actinobacteria) và nấm sợi phát triển bao phủ bề mặt lớp màng trắng mỏng, tổng hợp nên các chất kháng sinh tự nhiên ức chế vi nấm gây hại.",
    chemicalProcess: "Phản ứng trùng ngưng polyphenol và axit amin tạo phức hệ Humus (mùn hữu cơ). Các ion khoáng được giải phóng cố định vào keo mùn.",
    tips: "Giai đoạn này không nên đảo trộn quá nhiều để giữ ổn định cấu trúc mạng lưới mùn mới hình thành.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
    keyMetric: "Nhiệt độ ổn định: ~30°C"
  },
  {
    step: 7,
    title: "Thành phẩm phân hữu cơ hoàn hảo",
    phaseName: "Kiểm tra chất lượng & Đóng gói",
    temperature: "Nhiệt độ phòng (25 - 28°C)",
    duration: "Hoàn tất (Ngày 60+)",
    description: "Phân chín hoàn toàn: Thể tích đống ủ ngót đi 40 - 50%, màu nâu đen sẫm đồng nhất, tơi xốp, ngửi có mùi đất rừng trong lành (Geosmin), không bám dính tay.",
    microbiology: "Hệ vi sinh vật cân bằng sinh thái, mật độ vi sinh có ích rất cao, sạch tuyệt đối mầm bệnh.",
    chemicalProcess: "Tỉ lệ C/N thành phẩm đạt chuẩn < 15:1; hàm lượng chất hữu cơ tổng số OM > 25%; pH trung tính 6.5 - 7.5; bón vào đất là cây hấp thụ êm dịu ngay lập tức.",
    tips: "Sàng qua lưới sàng 5mm để loại bỏ các mẩu xương hoặc mẩu gỗ chưa phân hủy hết trước khi đóng bao bảo quản nơi khô ráo.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    keyMetric: "C/N chuẩn: < 15:1 | OM > 25%"
  }
];

export const APPLICATION_CASES = [
  {
    title: "Trồng rau sạch & Đô thị thông minh",
    category: "Nông nghiệp đô thị",
    description: "Sử dụng phân trùn quế và phân compost phối trộn giá thể xơ dừa, tro trấu trồng rau sạch tại ban công, sân thượng và các trang trại hữu cơ ngoại thành Hà Nội, TP.HCM.",
    impact: "100% không dư lượng nitrat (NO3-), rau có vị ngọt đậm tự nhiên, an toàn tuyệt đối cho người tiêu dùng.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
    tag: "Urban Farming"
  },
  {
    title: "Cải tạo đất cằn cỗi Tây Nguyên",
    category: "Cây công nghiệp dài ngày",
    description: "Tận dụng hàng triệu tấn vỏ quả cà phê mỗi năm ủ với chế phẩm nấm Trichoderma để bón hoàn thổ cho vùng chuyên canh cà phê, hồ tiêu, sầu riêng ở Đắk Lắk, Gia Lai, Lâm Đồng.",
    impact: "Tăng độ phì nhiêu đất bazan thoái hóa, giảm 40% chi phí phân bón vô cơ, kiểm soát triệt để bệnh chết nhanh chết chậm trên cây tiêu.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80",
    tag: "Tây Nguyên Green"
  },
  {
    title: "Nông nghiệp tuần hoàn lúa nước ĐBSCL",
    category: "Lúa gạo & Nông nghiệp tuần hoàn",
    description: "Chấm dứt hoàn toàn hủ tục đốt rơm rạ gây ô nhiễm khói mù bằng công nghệ phun men vi sinh phân giải rơm rạ tại ruộng và trồng nấm rơm trước khi ủ làm phân bón hữu cơ.",
    impact: "Giảm phát thải khí nhà kính (CH4, CO2), tái tạo chu trình dinh dưỡng Silic và Kali cho vụ mùa tiếp theo.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
    tag: "Mekong Delta Circular"
  },
  {
    title: "Mô hình VAC & Nuôi trùn quế",
    category: "Kinh tế tuần hoàn nông hộ",
    description: "Mô hình sinh thái Vườn - Ao - Chuồng truyền thống kết hợp trại nuôi trùn quế: Phân bò nuôi trùn quế -> Thịt trùn làm thức ăn giàu đạm cho cá, gà -> Phân trùn bón cho cây ăn trái.",
    impact: "Mô hình không rác thải (Zero-waste), tối đa hóa lợi nhuận kinh tế trên cùng một đơn vị diện tích canh tác.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    tag: "Zero-Waste Farm"
  }
];
