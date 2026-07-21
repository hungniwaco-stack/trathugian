export type FAQ = { question: string; answer: string };
export type BodySection = { heading: string; paragraphs: string[] };
export type ComparisonTable = { headers: string[]; rows: string[][] };

export type Author = { name: string; url: string; bio: string; avatar: string };

export const author: Author = {
  name: "Minh Thư",
  url: "/tac-gia/minh-thu/",
  bio: "Nhân viên văn phòng từng mất ngủ 2 năm vì stress công việc, tự thử hàng chục loại trà thảo mộc để tìm ra thứ hợp với dân văn phòng, rồi chia sẻ lại trải nghiệm thật tại Trà Thư Giãn.",
  avatar: "/images/brand/logo.png"
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "tra-ngu-ngon" | "giam-stress" | "review-tra" | "healthy-lifestyle" | "kien-thuc-tra";
  productId?: string;
  relatedSlugs?: string[];
  intro: string;
  toc: string[];
  quickSummary?: string[];
  bestFor?: string[];
  notFor?: string[];
  body: BodySection[];
  comparisonTable?: ComparisonTable;
  rating?: number;
  pros?: string[];
  cons?: string[];
  priceNote?: string;
  datePublished: string;
  dateModified: string;
  faqs: FAQ[];
};

export type Product = {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
  benefits: string[];
  ingredients: string;
  whoFor: string;
  howToBrew: string;
  experience: string;
  caution: string;
  affiliateUrl: string;
};

export const categories = [
  { slug: "tra-ngu-ngon", name: "Trà ngủ ngon", desc: "Gợi ý trà thảo mộc hỗ trợ thư giãn buổi tối." },
  { slug: "giam-stress", name: "Giảm stress", desc: "Thói quen và đồ uống giúp đầu óc nhẹ nhàng hơn." },
  { slug: "review-tra", name: "Review trà", desc: "Đánh giá thực tế các sản phẩm trà phổ biến." },
  { slug: "healthy-lifestyle", name: "Healthy Lifestyle", desc: "Routine lành mạnh cho dân văn phòng bận rộn." },
  { slug: "kien-thuc-tra", name: "Kiến thức trà", desc: "Kiến thức nền tảng để chọn và pha trà đúng cách." }
] as const;

export const categoryLabelMap: Record<BlogPost["category"], string> = {
  "tra-ngu-ngon": "Trà ngủ ngon",
  "giam-stress": "Giảm stress",
  "review-tra": "Review trà",
  "healthy-lifestyle": "Healthy Lifestyle",
  "kien-thuc-tra": "Kiến thức trà"
};

export const products: Product[] = [
  {
    id: "tam-sen-say-kho",
    name: "Trà Tâm Sen Sấy Khô Giúp Ngủ Ngon Thanh Nhiệt",
    image: "/images/products/01.webp",
    shortDesc: "Vị thanh nhẹ, thường được dùng vào buổi tối để hỗ trợ thư giãn.",
    benefits: ["Hỗ trợ thư giãn sau giờ làm", "Có thể giúp cơ thể dễ vào giấc hơn", "Phù hợp routine tối nhẹ nhàng"],
    ingredients: "Tâm sen sấy khô, không tẩm hương liệu mạnh.",
    whoFor: "Dân văn phòng khó tắt nhịp suy nghĩ về đêm, người thích vị trà mộc.",
    howToBrew: "Dùng 2-3g cho 250ml nước nóng 85-90°C, ủ 5-7 phút.",
    experience: "Nước vàng nhạt, hậu hơi đắng nhẹ rồi dịu. Hợp uống sau bữa tối 1-2 giờ.",
    caution: "Người nhạy với vị đắng nên pha loãng trước. Không dùng thay cho tư vấn y tế.",
    affiliateUrl: "https://s.shopee.vn/5ApfBMndXs"
  },
  {
    id: "tra-hoa-cuc-mat-ong",
    name: "Trà Hoa Cúc Mật Ong Vạn An Thượng Hạng OCOP, Trà Hoa Cúc Đường Phèn Dưỡng Nhan Đẹp Da",
    image: "/images/products/02.webp",
    shortDesc: "Dễ pha, mùi thơm dịu, thích hợp cho người mới bắt đầu uống trà thảo mộc.",
    benefits: ["Giúp thư giãn tinh thần", "Dùng nhanh ở văn phòng", "Vị dịu, dễ uống"],
    ingredients: "Hoa cúc sấy, mật ong sấy, túi lọc giấy thực phẩm.",
    whoFor: "Người bận rộn, cần giải pháp nhanh 3-5 phút.",
    howToBrew: "1 túi lọc với 200ml nước nóng, ủ 3-4 phút.",
    experience: "Mùi dịu, vị ngọt nhẹ tự nhiên, hợp uống chiều muộn.",
    caution: "Kiểm tra thành phần nếu dị ứng với phấn hoa.",
    affiliateUrl: "https://s.shopee.vn/70HK7MPvCJ"
  },
  {
    id: "tra-lavender-ngu-ngon",
    name: "Nụ hoa oải hương, lavender sấy khô, thư giãn, thảo mộc thiên nhiên",
    image: "/images/products/03.webp",
    shortDesc: "Mùi hương thảo mộc nhẹ, thường dùng trong routine trước giờ ngủ.",
    benefits: ["Hỗ trợ thả lỏng", "Tạo cảm giác dễ chịu cuối ngày", "Kết hợp tốt với journaling"],
    ingredients: "Hoa lavender, cỏ ngọt tự nhiên.",
    whoFor: "Người làm việc trí óc căng thẳng cả ngày.",
    howToBrew: "2g trà với 220ml nước 90°C, ủ 5 phút.",
    experience: "Mùi floral rõ, nên uống ấm để cảm nhận tốt hơn.",
    caution: "Người không quen mùi hoa nên bắt đầu lượng ít.",
    affiliateUrl: "https://s.shopee.vn/8KmhiWBfIX"
  },
  {
    id: "tra-gao-lut-dau-do",
    name: "Trà Gạo Lứt Đậu Đỏ Rang",
    image: "/images/products/04.webp",
    shortDesc: "Vị bùi nhẹ, dễ uống ban ngày hoặc tối sớm.",
    benefits: ["Giúp thay đồ uống ngọt", "Cảm giác ấm bụng", "Hợp với chế độ ăn lành mạnh"],
    ingredients: "Gạo lứt rang, đậu đỏ rang.",
    whoFor: "Dân văn phòng muốn giảm thói quen uống nước ngọt.",
    howToBrew: "5g hỗn hợp với 300ml nước sôi, ủ 7 phút.",
    experience: "Mùi rang thơm, vị hậu bùi dịu.",
    caution: "Không thay thế bữa ăn hoặc điều trị dinh dưỡng.",
    affiliateUrl: "https://s.shopee.vn/5q5MkQnhX2"
  },
  {
    id: "tra-hoa-nhai-goji",
    name: "Trà Hoa Nhài Nở Sấy Khô Nguyên Bông",
    image: "/images/products/05.webp",
    shortDesc: "Hương hoa nhẹ, vị thanh, phù hợp dùng chiều tối để thư giãn sau giờ làm.",
    benefits: ["Hỗ trợ thư giãn tinh thần", "Dễ uống với người mới bắt đầu", "Phù hợp routine tối nhẹ nhàng"],
    ingredients: "Hoa nhài sấy, kỷ tử, cỏ ngọt tự nhiên.",
    whoFor: "Dân văn phòng cần đồ uống dịu nhẹ thay nước ngọt buổi chiều.",
    howToBrew: "Dùng 3-4g với 250ml nước nóng 85-90°C, ủ 4-6 phút.",
    experience: "Mùi hoa rõ nhưng không gắt, hậu thanh nhẹ và dễ uống hằng ngày.",
    caution: "Người nhạy với mùi hoa nên bắt đầu với lượng ít.",
    affiliateUrl: "https://s.shopee.vn/110704kJcg"
  },
  {
    id: "tra-cam-thao-tao-do",
    name: "Trà cam quế hoa hồng, táo đỏ, hoa nhài",
    image: "/images/products/06.jpg",
    shortDesc: "Vị ngọt thanh tự nhiên, phù hợp uống ấm vào tối sớm hoặc ngày mưa.",
    benefits: ["Giúp thay thế đồ uống nhiều đường", "Có thể hỗ trợ cảm giác ấm bụng", "Hợp với lối sống healthy nhẹ nhàng"],
    ingredients: "Cam thảo lát, táo đỏ sấy, hoa cúc trắng.",
    whoFor: "Người làm việc căng thẳng, muốn một lựa chọn trà thảo mộc dễ duy trì.",
    howToBrew: "Dùng 1 gói hoặc 5g trà cho 300ml nước sôi, ủ 6-8 phút.",
    experience: "Nước trà vàng nâu nhẹ, vị ngọt dịu, phù hợp uống chậm trước khi nghỉ ngơi.",
    caution: "Nên kiểm tra thành phần nếu đang theo chế độ ăn đặc thù.",
    affiliateUrl: "https://s.shopee.vn/2LVUgtdj5Y"
  }
];

export const posts: BlogPost[] = [
  {
    slug: "tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong",
    title: "Trà ngủ ngon cho dân văn phòng: nên chọn loại nào?",
    description: "Mình đã thử lần lượt các loại trà thảo mộc suốt 1 năm mất ngủ vì deadline. Đây là cách chọn trà ngủ ngon theo từng kiểu khó ngủ của dân văn phòng, kèm cách uống đúng.",
    category: "tra-ngu-ngon",
    relatedSlugs: ["5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay", "routine-buoi-toi-15-phut-giam-cang-thang", "review-tra-tam-sen-say-kho-cho-nguoi-kho-ngu"],
    intro: "Nếu bạn khó ngủ vì đầu óc nghĩ ngợi nhiều, hãy bắt đầu với trà tâm sen. Nếu bạn mới uống trà thảo mộc lần đầu, chọn trà hoa cúc mật ong cho dễ vào. Nếu vấn đề của bạn là căng thẳng, bồn chồn cuối ngày, nụ lavender đáng thử nhất. Uống trước giờ ngủ 60-90 phút, duy trì tối thiểu 2-3 tuần. Trà ngủ ngon là cách gọi chung cho các loại trà thảo mộc không chứa caffeine — như tâm sen, hoa cúc, lavender — được dùng vào buổi tối để hỗ trợ cơ thể thư giãn và dễ vào giấc hơn, không phải thuốc và không gây buồn ngủ tức thì.",
    toc: ["Vì sao dân văn phòng khó ngủ đến vậy", "Chọn trà theo kiểu khó ngủ của bạn", "Uống thế nào cho đúng"],
    quickSummary: ["Ưu tiên trà dịu, ít kích thích buổi tối.", "Uống trước ngủ 60-90 phút.", "Duy trì đều 2-3 tuần để quan sát mức phù hợp."],
    bestFor: ["Dân văn phòng khó ngủ do căng thẳng.", "Người muốn routine tối nhẹ nhàng."],
    notFor: ["Người nhạy vị đắng nhưng chưa thử pha loãng.", "Người kỳ vọng hiệu quả tức thì như thuốc."],
    body: [
      {
        heading: "Vì sao dân văn phòng khó ngủ đến vậy",
        paragraphs: [
          "Mình từng nghĩ mất ngủ là bệnh của người già, cho đến năm 26 tuổi ôm dự án đầu tiên. Nhìn lại thì thủ phạm rất quen thuộc với dân văn phòng: màn hình đến tận giường, làm việc xong 9-10 giờ tối rồi lướt điện thoại thêm một tiếng. Ánh sáng xanh trì hoãn cơn buồn ngủ, còn cái đầu thì vẫn ở chế độ xử lý thông báo.",
          "Caffeine muộn cũng là thủ phạm quen thuộc: ly cà phê 3 giờ chiều để chạy nốt việc — caffeine cần 5-6 tiếng mới đào thải một nửa, nên 9 giờ tối cơ thể vẫn còn nửa liều. Nhưng kiểu khó ngủ phổ biến nhất mình gặp là suy nghĩ không tắt được: nằm xuống là não tua lại cuộc họp, tin nhắn chưa trả lời, việc ngày mai.",
          "Trà không sửa được cả ba thứ trên. Nhưng nó tạo ra một tín hiệu nghỉ — thời điểm bạn rời màn hình, tay cầm cốc ấm, và cơ thể hiểu rằng ngày làm việc đã kết thúc."
        ]
      },
      {
        heading: "Chọn trà theo kiểu khó ngủ của bạn",
        paragraphs: [
          "Sau một năm thử gần chục loại, mình rút ra: không có loại trà tốt nhất, chỉ có loại hợp với kiểu khó ngủ của từng người.",
          "Khó ngủ vì nghĩ ngợi nhiều → trà tâm sen. Vị mộc, hơi đắng, hậu ngọt. Đây là loại cho cảm giác hạ nhiệt cái đầu rõ nhất với mình — từ tuần thứ hai, thời gian trằn trọc giảm hẳn. Điểm trừ: vị đắng kén người mới, và tâm sen tính hàn nên không hợp người lạnh bụng, huyết áp thấp. Mình viết riêng một bài rất chi tiết về loại này sau 3 tuần uống thật.",
          "Mới bắt đầu, sợ vị lạ → trà hoa cúc mật ong. Dễ uống nhất trong tất cả: thơm dịu, ngọt nhẹ, pha kiểu gì cũng khó hỏng. Hoa cúc chứa apigenin — hoạt chất được nghiên cứu về tác dụng thư giãn nhẹ. Hiệu quả êm hơn tâm sen, nhưng là cửa vào hoàn hảo cho người mới.",
          "Căng thẳng, bồn chồn cuối ngày → nụ lavender. Mạnh về hương hơn vị — mở túi ra là cả góc phòng thơm. Với mình, lavender hợp những hôm stress cao độ: vừa uống vừa hít hà, cảm giác được xả van. Ai nhạy mùi hoa đậm thì nên thử lượng nhỏ trước.",
          "Còn trà uống ban ngày thì sao? Gạo lứt đậu đỏ rang, hoa nhài, cam quế — những loại này mình xếp vào nhóm trà thay nước ngọt ban ngày hơn là trà ngủ ngon, nhưng chúng gián tiếp giúp giấc ngủ vì cắt bớt đường và caffeine buổi chiều."
        ]
      },
      {
        heading: "Uống thế nào cho đúng",
        paragraphs: [
          "Thời điểm: trước giờ ngủ 60-90 phút. Uống sát giờ ngủ dễ phản tác dụng vì dậy đi vệ sinh giữa đêm. Nồng độ: pha loãng hơn hướng dẫn trong tuần đầu, nhất là tâm sen. Không đường: đường buổi tối làm giấc ngủ chập chờn hơn — trái mục đích.",
          "Kiên trì 2-3 tuần: trà thảo mộc là tích lũy, không phải công tắc. Mình ghi chú nhanh mỗi sáng (ngủ lúc mấy giờ, dậy có mệt không) để tự đánh giá — cách này giúp mình biết tâm sen hợp còn lavender chỉ ở mức thơm. Trà phát huy tốt nhất khi là một bước trong chuỗi thư giãn tối, mình gói cả quy trình 15 phút trong một bài riêng.",
          "Lưu ý an toàn: trà thảo mộc hỗ trợ thư giãn, không thay thế điều trị. Nếu bạn mất ngủ kéo dài trên 1 tháng, ngủ dưới 5 tiếng/đêm thường xuyên, hoặc đang dùng thuốc (đặc biệt thuốc an thần, huyết áp), hãy đi khám thay vì tự xử bằng trà. Phụ nữ mang thai cần hỏi bác sĩ trước khi dùng bất kỳ loại thảo mộc nào."
        ]
      }
    ],
    comparisonTable: {
      headers: ["", "Tâm sen", "Hoa cúc mật ong", "Lavender"],
      rows: [
        ["Hợp nhất với", "Khó ngủ do nghĩ nhiều", "Người mới bắt đầu", "Stress, bồn chồn"],
        ["Vị", "Đắng nhẹ, hậu ngọt", "Dịu, ngọt thơm", "Hương hoa đậm"],
        ["Độ khó làm quen", "Cao nhất", "Thấp nhất", "Trung bình"],
        ["Lưu ý", "Tính hàn, không uống đặc dài ngày", "Ít lưu ý nhất", "Kén người nhạy mùi"]
      ]
    },
    datePublished: "2026-05-30",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Uống trà ngủ ngon bao lâu thì thấy hiệu quả?", answer: "Tuần đầu thường chưa rõ, từ tuần 2-3 mới thấy khác biệt về thời gian vào giấc. Nếu sau 3 tuần không thấy gì, nên đổi loại khác hoặc xem lại thói quen màn hình buổi tối." },
      { question: "Có nên uống trộn nhiều loại trà ngủ ngon cùng lúc?", answer: "Người mới nên uống từng loại riêng 1-2 tuần để biết cơ thể phản ứng với loại nào, sau đó có thể luân phiên theo ngày." },
      { question: "Trà ngủ ngon có gây phụ thuộc không?", answer: "Các loại trà thảo mộc như tâm sen, hoa cúc, lavender không chứa chất gây nghiện. Thứ dễ quen nhất là nghi thức thư giãn buổi tối — một thói quen có lợi." }
    ]
  },
  {
    slug: "routine-buoi-toi-15-phut-giam-cang-thang",
    title: "Routine buổi tối 15 phút giúp dân văn phòng ngắt việc, dễ ngủ hơn",
    description: "Routine 15 phút mình duy trì hơn 1 năm: 5 phút pha trà tắt màn hình, 5 phút giãn cơ, 5 phút dọn đầu óc. Không cần app, không cần dụng cụ, bắt đầu ngay tối nay.",
    category: "healthy-lifestyle",
    relatedSlugs: ["tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong", "review-tra-tam-sen-say-kho-cho-nguoi-kho-ngu", "giam-stress-o-van-phong-bang-do-uong-lanh-manh"],
    intro: "Routine của mình gồm 3 khối 5 phút, làm ngay sau khi kết thúc việc: 5 phút pha trà và tắt hẳn màn hình, 5 phút giãn cơ cổ-vai-lưng, 5 phút dọn đầu óc bằng cách viết ra việc ngày mai. Không cần app, không cần dụng cụ. Điều quan trọng nhất không phải làm đủ 15 phút, mà là làm cùng một chuỗi, cùng một giờ mỗi tối.",
    toc: ["Vì sao cần một routine buổi tối", "Routine 15 phút, từng phút một", "3 lỗi khiến routine thất bại"],
    body: [
      {
        heading: "Vì sao cần một routine buổi tối",
        paragraphs: [
          "Evening routine là một chuỗi hành động lặp lại cố định trước giờ ngủ, giúp cơ thể nhận tín hiệu ngày làm việc đã kết thúc — với dân văn phòng, nó là công tắc bù cho việc ranh giới nhà và công ty đã bị laptop xóa mất.",
          "Hồi mới đi làm, tối của mình là: làm đến 10 giờ, gập laptop, lăn lên giường lướt điện thoại cho thư giãn, rồi 12 rưỡi vẫn mở mắt trân trân. Vấn đề không phải mình thiếu thời gian ngủ — mà là không có khoảng đệm giữa chế độ làm việc và chế độ ngủ. Não mình đi thẳng từ deadline vào giường, và nó không tắt kịp.",
          "Routine 15 phút này là khoảng đệm đó. Mình duy trì hơn một năm, kết quả thấy được: thời gian nằm trằn trọc giảm từ 40-60 phút xuống còn 15-20 phút, và quan trọng hơn, cảm giác sợ đi ngủ vì biết sẽ trằn trọc biến mất."
        ]
      },
      {
        heading: "Routine 15 phút, từng phút một",
        paragraphs: [
          "Khối 1 (5 phút) — pha trà, và đây là lúc tắt màn hình: đặt ấm nước là hành động bấm nút kết thúc ngày của mình. Trong lúc chờ nước, mình gập laptop, chuyển điện thoại sang chế độ nghỉ và để nó ra khỏi tầm tay. Hôm bình thường mình pha trà hoa cúc mật ong, hôm nghĩ ngợi nhiều thì tâm sen, hôm stress cao độ thì lavender. Chọn loại nào không quan trọng bằng việc có nghi thức pha.",
          "Khối 2 (5 phút) — giãn cơ cổ-vai-lưng, chỗ dân văn phòng gánh cả ngày: không cần thảm, không cần đồ tập. Mình làm 4 động tác, mỗi cái khoảng 1 phút, vừa làm vừa nhấp trà giữa các động tác — nghiêng cổ tai chạm dần về vai giữ 15 giây mỗi bên, xoay vai 10 vòng mỗi chiều, ưỡn ngực mở vai bằng cách đan hai tay sau lưng kéo nhẹ xuống, và gập người thả lỏng tay cổ hoàn toàn 30 giây. Nguyên tắc duy nhất: chậm và dễ chịu, không phải tập luyện.",
          "Khối 3 (5 phút) — dọn đầu óc bằng giấy bút, khối ăn tiền nhất với kiểu khó ngủ do nghĩ ngợi: mình viết vào sổ đúng 2 thứ — 3 việc quan trọng nhất ngày mai, để não không cần giữ chúng nữa; và 1 dòng cảm nhận hôm nay, một câu thôi. Xong 15 phút, mình để cốc vào bồn, đánh răng, lên giường. Điện thoại ở nguyên chỗ cũ, ngoài phòng ngủ."
        ]
      },
      {
        heading: "3 lỗi khiến routine thất bại",
        paragraphs: [
          "Tham lam kéo dài: bản đầu tiên của mình là 45 phút gồm cả đọc sách, thiền, skincare — trụ được đúng 4 ngày. 15 phút là con số mình giữ được cả năm. Thà ngắn mà đều.",
          "Cầm điện thoại chỉ xem một tí trong lúc chờ nước sôi: một tí đó nuốt luôn cả routine. Điện thoại phải ra khỏi tầm tay từ phút 0.",
          "Đợi có hứng mới làm: routine hiệu quả chính vào những hôm bạn không muốn làm — hôm mệt nhất, căng nhất. Hôm đó cứ làm bản rút gọn 5 phút (chỉ pha trà và viết 3 việc) còn hơn bỏ. Lưu ý: routine hỗ trợ chất lượng giấc ngủ, không điều trị mất ngủ bệnh lý. Nếu bạn mất ngủ kéo dài trên 1 tháng dù đã điều chỉnh thói quen, hãy đi khám."
        ]
      }
    ],
    datePublished: "2026-06-05",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Không có đủ 15 phút thì làm routine thế nào?", answer: "Làm bản rút gọn 5 phút: pha trà kèm tắt màn hình và viết 3 việc ngày mai. Đều đặn quan trọng hơn đầy đủ." },
      { question: "Nên bắt đầu routine buổi tối lúc mấy giờ?", answer: "Chọn giờ bạn thực tế kết thúc công việc và cố định giờ đó mỗi tối. Cố định giờ quan trọng hơn việc giờ sớm hay muộn." },
      { question: "Có thể thay trà bằng đồ uống khác không?", answer: "Được. Cốt lõi là nghi thức đồ uống ấm đánh dấu kết thúc ngày — sữa ấm hoặc nước gừng đều dùng được, miễn không chứa caffeine và ít đường." }
    ]
  },
  {
    slug: "kien-thuc-co-ban-ve-tra-thao-moc",
    title: "Trà thảo mộc là gì? Toàn bộ kiến thức nền cho người mới bắt đầu",
    description: "Trà thảo mộc khác trà thường thế nào, có caffeine không, pha bao nhiêu độ? Toàn bộ kiến thức nền để chọn và pha đúng ngay từ đầu, kèm bảng nhiệt độ từng loại.",
    category: "kien-thuc-tra",
    relatedSlugs: ["review-tra-hoa-cuc-mat-ong-van-an-ocop", "review-nu-hoa-oai-huong-lavender-say-kho", "tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong"],
    intro: "Trà thảo mộc là thức uống pha từ hoa, lá, hạt, rễ hoặc vỏ của các loài thực vật không phải cây trà — vì vậy hầu hết không chứa caffeine và uống được buổi tối. Ba điều người mới hay làm sai: dùng nước quá sôi cho trà hoa, pha quá đậm ngày đầu, và kỳ vọng tác dụng như thuốc. Bài này gom đủ kiến thức để bạn tránh cả ba.",
    toc: ["Trà thảo mộc khác trà thường ở đâu", "Cách chọn mua và bảo quản", "Trà thảo mộc không phải thuốc"],
    body: [
      {
        heading: "Trà thảo mộc khác trà thường ở đâu",
        paragraphs: [
          "Đây là hiểu lầm phổ biến nhất. Trà thường (trà xanh, trà đen, ô long, trà mạn) đều pha từ lá cây trà Camellia sinensis — và đều chứa caffeine. Trà thảo mộc (herbal tea) pha từ thực vật khác: bông cúc, tâm sen, nụ lavender, gừng, táo đỏ, gạo rang — về mặt kỹ thuật không phải trà mà là dịch hãm thực vật, và hầu hết không chứa caffeine.",
          "Hệ quả thực tế cho dân văn phòng: trà mạn uống tối dễ trằn trọc, còn trà thảo mộc thì uống tối được. Một ngoại lệ cần nhớ: các sản phẩm trà nhài, trà sen truyền thống thường là trà xanh ướp hương — vẫn có caffeine. Muốn không caffeine, phải chọn loại nguyên bông, nguyên liệu thuần và đọc kỹ thành phần.",
          "Sai nhiệt độ là lỗi số một làm trà dở. Quy tắc chung: nguyên liệu càng mỏng manh, nước càng phải nguội bớt; nguyên liệu càng cứng chắc, nước càng phải sôi già. Hoa cúc và hoa nhài hợp 80-85°C ủ 3-5 phút; lavender chỉ cần 1g cho 250ml vì rất dễ nồng; tâm sen hợp 85-90°C ủ 5-7 phút, người mới nên pha loãng nửa liều; cam quế táo đỏ cần nước sôi già 95-100°C ủ 7-10 phút mới ra hết vị; gạo lứt đậu đỏ có thể ủ 20-30 phút hoặc nấu 10-15 phút cho đậm hơn. Mẹo canh nhiệt không cần nhiệt kế: nước sôi để mở nắp khoảng 2 phút xấp xỉ 90°C, khoảng 4 phút xấp xỉ 85°C, khoảng 6 phút xấp xỉ 80°C."
        ]
      },
      {
        heading: "Cách chọn mua và bảo quản",
        paragraphs: [
          "Bốn dấu hiệu mình luôn kiểm tra khi mua, học được sau vài lần mua phải hàng dở: nhìn nguyên liệu — bông hoặc hạt còn nguyên dạng, màu tự nhiên hơi xỉn là bình thường, màu quá rực rỡ đôi khi là dấu hiệu xử lý màu, vụn nát nhiều là hàng đáy bao. Ngửi — thơm dịu tự nhiên là tốt, thơm sực nức như xịt phòng là ướp hương liệu, nên bỏ qua.",
          "Đọc thành phần — xem có trộn trà xanh (caffeine), đường, hương liệu không; trà quảng cáo ngủ ngon mà trộn trà xanh là tự mâu thuẫn. Nguồn gốc — ưu tiên có thương hiệu, ngày sản xuất, hạn dùng rõ ràng, chứng nhận kiểu OCOP là điểm cộng.",
          "Về bảo quản, kẻ thù là ẩm, sáng và mùi: đựng trong hũ hoặc túi kín, tốt nhất là hũ tối màu hoặc túi zip có lớp bạc; để nơi khô mát, tránh nắng; tránh xa gia vị mạnh vì trà hoa hút mùi rất nhanh; dùng thìa khô để múc trà. Trà hoa đã mở nên dùng trong 3-6 tháng, hương giảm dần dù chưa hết hạn."
        ]
      },
      {
        heading: "Trà thảo mộc không phải thuốc",
        paragraphs: [
          "Đây là phần quan trọng nhất bài. Trà thảo mộc hỗ trợ thư giãn, tạo thói quen tốt, nhưng không điều trị mất ngủ bệnh lý, lo âu hay bất kỳ bệnh nào. Các công dụng truyền miệng như thanh nhiệt, giải độc, dưỡng nhan phần lớn chưa có bằng chứng khoa học mạnh.",
          "Tác dụng thường từ từ và nhẹ — cần 2-3 tuần dùng đều để tự đánh giá. Những ai nên hỏi bác sĩ trước khi dùng đều đặn: phụ nữ mang thai hoặc cho con bú, người đang dùng thuốc (đặc biệt an thần, chống đông, huyết áp), người có bệnh nền gan thận. Thảo mộc tự nhiên không đồng nghĩa vô hại với mọi người. Nếu mất ngủ kéo dài trên 1 tháng, hãy đi khám — trà là bạn đồng hành, không phải phác đồ.",
          "Lộ trình gợi ý cho người mới: tuần 1-2 bắt đầu với trà hoa cúc mật ong vì dễ nhất, gần như không thể ghét. Tuần 3-4 thêm tâm sen nếu mục tiêu là ngủ ngon, hoặc lavender nếu vấn đề là stress. Song song, ghép trà vào một routine buổi tối cố định — thói quen mới là thứ tạo khác biệt, trà chỉ là chất xúc tác."
        ]
      }
    ],
    comparisonTable: {
      headers: ["Loại", "Nhiệt độ", "Thời gian ủ", "Lượng/250ml"],
      rows: [
        ["Hoa cúc", "80-85°C", "3-5 phút", "3-4 bông"],
        ["Hoa nhài nguyên bông", "80-85°C", "3-5 phút", "5-7 bông"],
        ["Lavender", "85°C", "4-5 phút", "1g (rất ít!)"],
        ["Tâm sen", "85-90°C", "5-7 phút", "2-3g"],
        ["Cam quế táo đỏ", "95-100°C", "7-10 phút", "1 gói/350ml"],
        ["Gạo lứt đậu đỏ", "100°C (ủ/nấu)", "20-30 phút ủ", "2 thìa canh/500ml"]
      ]
    },
    datePublished: "2026-06-08",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà thảo mộc có caffeine không?", answer: "Hầu hết không, vì trà thảo mộc không pha từ cây trà Camellia sinensis. Ngoại lệ là các loại ướp hương trên nền trà xanh như trà nhài, trà sen truyền thống — vẫn chứa caffeine." },
      { question: "Uống nhiều loại trà thảo mộc cùng lúc có sao không?", answer: "Người mới nên dùng từng loại riêng 1-2 tuần để biết cơ thể hợp loại nào, sau đó có thể luân phiên. Tránh uống quá đậm đặc nhiều loại trong ngày." },
      { question: "Trà thảo mộc để được bao lâu?", answer: "Theo hạn dùng trên bao bì, nhưng hương vị tốt nhất trong 3-6 tháng sau khi mở. Bảo quản trong hũ kín, nơi khô mát, tránh ánh sáng và mùi mạnh." }
    ]
  },
  {
    slug: "giam-stress-o-van-phong-bang-do-uong-lanh-manh",
    title: "Giảm stress ở văn phòng bằng đồ uống: đổi gì, giữ gì, bỏ gì?",
    description: "Mình giảm hẳn cảm giác căng thẳng bồn chồn ở văn phòng chỉ bằng cách sắp xếp lại đồ uống trong ngày: cà phê trước 14h, chiều chuyển trà thảo mộc, tối không đường.",
    category: "giam-stress",
    relatedSlugs: ["routine-buoi-toi-15-phut-giam-cang-thang", "review-tra-gao-lut-dau-do-rang-cho-van-phong", "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay"],
    intro: "Nguyên tắc của mình gói trong 3 điều: cà phê chỉ trước 14h (caffeine ở lại cơ thể 5-6 tiếng), ca chiều đổi sang trà thảo mộc không caffeine (giữ thói quen cầm ly, bỏ chất kích thích), và sau 20h không đồ uống có đường. Không cấm món nào, chỉ xếp lại giờ. Đây là cách duy nhất mình duy trì được quá 2 tuần.",
    toc: ["Thủ phạm không phải deadline", "Ba thay đổi cụ thể", "Đừng quên nước lọc"],
    body: [
      {
        heading: "Thủ phạm không phải deadline",
        paragraphs: [
          "Đồ uống ảnh hưởng đến mức căng thẳng theo hai đường: trực tiếp qua caffeine (tăng nhịp tim, cảm giác bồn chồn khi quá liều) và gián tiếp qua đường (dao động đường huyết tạo chu kỳ hưng phấn rồi uể oải). Sắp xếp lại đồ uống vì thế là cách can thiệp stress rẻ nhất — không cần thêm thời gian, chỉ đổi thứ đã uống sẵn.",
          "Có giai đoạn mình bồn chồn cả ngày, tim hơi nhanh, khó tập trung sâu — mình đổ hết cho deadline. Đến khi thử ghi lại đồ uống một tuần mới giật mình: 2 cà phê sữa cộng 1 trà sữa cộng 1 nước ngọt mỗi ngày, ly cuối lúc 5 giờ chiều. Tức là mình nạp caffeine và đường gần như liên tục từ 8h sáng đến tối — cơ thể không bồn chồn mới lạ.",
          "Cái hay là mình không cần sống healthy toàn tập. Chỉ cần xếp lại giờ và thay ca chiều, hai tuần sau cảm giác bồn chồn giảm hẳn, và tối ngủ dễ hơn như một phần thưởng kèm theo."
        ]
      },
      {
        heading: "Ba thay đổi cụ thể",
        paragraphs: [
          "Dời cà phê về trước 14h — dễ nhất, tác động lớn nhất: không giảm số ly vội, chỉ dời giờ. Caffeine có thời gian bán thải khoảng 5-6 tiếng: ly 15h nghĩa là 21h cơ thể vẫn còn nửa liều. Riêng thay đổi này đã cải thiện cả độ bồn chồn buổi chiều lẫn giấc ngủ của mình.",
          "Thay ca chiều bằng trà thảo mộc — thay thói quen, không chống lại nó: cơn thèm 15h thực chất là thèm nghi thức nghỉ nhiều hơn là thèm caffeine. Vậy nên đừng bỏ nghi thức, chỉ đổi ruột ly. Ca chiều của mình xoay vòng hoa cúc mật ong ngày thường, gạo lứt đậu đỏ khi thèm vị đã, lavender loãng hôm căng thẳng cao.",
          "Cắt đường sau 20h — khó nhất, làm cuối cùng: trà sữa, nước ngọt, ca cao ngọt buổi tối là stress trả góp — dễ chịu 30 phút, đổi lại giấc ngủ chập chờn và sáng hôm sau uể oải. Mình không cai bằng nghị lực mà bằng thay thế: tối thèm ngọt thì pha cam quế táo đỏ, ngọt thanh tự nhiên, đủ lừa cơn thèm."
        ]
      },
      {
        heading: "Đừng quên nước lọc",
        paragraphs: [
          "Thiếu nước nhẹ cũng gây mệt mỏi, khó tập trung — dễ nhầm thành stress. Quy tắc của mình đơn giản: chai 500ml trên bàn, hết trước bữa trưa, refill hết trước 17h. Trà không thay được phần này — trà là gia vị, nước lọc là cơm.",
          "Lưu ý: điều chỉnh đồ uống giúp giảm cảm giác căng thẳng do caffeine và đường, nhưng không điều trị rối loạn lo âu. Nếu bạn căng thẳng kéo dài kèm mất ngủ trên 1 tháng, tim đập nhanh thường xuyên hoặc ảnh hưởng công việc rõ rệt, hãy đi khám."
        ]
      }
    ],
    comparisonTable: {
      headers: ["Khung giờ", "Nên uống", "Nên tránh"],
      rows: [
        ["8h-11h", "Cà phê (nếu uống), nước lọc", "—"],
        ["11h-14h", "Nước lọc, trà ban ngày", "Ly cà phê thứ 3"],
        ["14h-17h", "Trà thảo mộc không caffeine", "Cà phê, trà sữa, nước ngọt"],
        ["17h-20h", "Trà thảo mộc, nước lọc", "Nước tăng lực"],
        ["Sau 20h", "Trà tối hoặc nước ấm", "Mọi thứ có đường"]
      ]
    },
    datePublished: "2026-06-12",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Bỏ cà phê đột ngột có sao không?", answer: "Người uống nhiều bỏ đột ngột dễ đau đầu, uể oải vài ngày do hội chứng cai caffeine nhẹ. Cách nhẹ nhàng hơn là giữ nguyên số ly nhưng dời hết về trước 14h, để số ly tự giảm dần." },
      { question: "Trà thảo mộc có giúp giảm stress thật không?", answer: "Tác dụng trực tiếp ở mức nhẹ; tác dụng lớn hơn đến từ việc thay thế đồ uống chứa caffeine và đường gây bồn chồn, đồng thời tạo nghi thức nghỉ giữa giờ." },
      { question: "Mất bao lâu để thấy khác biệt khi đổi đồ uống?", answer: "Thường khoảng 2 tuần cho cảm giác bồn chồn ban ngày và 3 tuần cho giấc ngủ, với điều kiện duy trì đều." }
    ]
  },
  {
    slug: "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay",
    title: "6 loại trà cho dân văn phòng dễ uống ban ngày (xếp theo độ dễ)",
    description: "6 loại trà không caffeine mình mang đi làm thường xuyên, xếp theo độ dễ uống cho người mới. Kèm bảng chọn nhanh theo nhu cầu: thay nước ngọt, đẹp bàn, hay ấm bụng.",
    category: "tra-ngu-ngon",
    relatedSlugs: ["tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong", "giam-stress-o-van-phong-bang-do-uong-lanh-manh", "review-tra-gao-lut-dau-do-rang-cho-van-phong"],
    intro: "Cả 6 loại dưới đây đều không caffeine (hoặc cần kiểm tra thành phần với hoa nhài), mang đi làm được và không cần kỹ thuật pha cầu kỳ. Nếu chỉ chọn một loại để bắt đầu: trà hoa cúc mật ong, dễ nhất. Nếu mục tiêu là bỏ trà sữa: gạo lứt đậu đỏ. Danh sách xếp theo độ dễ uống với người mới, không phải độ xịn.",
    toc: ["Bảng chọn nhanh theo nhu cầu", "Danh sách chi tiết", "Bộ dụng cụ văn phòng tối giản"],
    body: [
      {
        heading: "Bảng chọn nhanh theo nhu cầu",
        paragraphs: [
          "Trà ban ngày cho dân văn phòng, theo cách mình định nghĩa, là các loại trà thảo mộc không chứa caffeine, pha nhanh tại bàn làm việc, dùng thay nước ngọt và cà phê ca chiều mà không ảnh hưởng giấc ngủ buổi tối."
        ]
      },
      {
        heading: "Danh sách chi tiết, xếp theo độ dễ uống",
        paragraphs: [
          "1. Trà hoa cúc mật ong — điểm khởi đầu của mọi người. Dễ uống đến mức mình đưa cho đồng nghiệp chỉ uống trà sữa cũng khen. Ngọt dịu sẵn, thơm nhẹ, pha nước 80-85°C là xong.",
          "2. Trà gạo lứt đậu đỏ rang — cho người đang cai đồ ngọt. Vị bùi thơm mùi rang, uống đã nhất trong nhóm không đường. Nhược điểm duy nhất ở văn phòng: cần ủ 20-30 phút, giải pháp của mình là ủ bình giữ nhiệt từ sáng.",
          "3. Trà hoa nhài nguyên bông — ly trà đẹp nhất bàn làm việc. Thả bông vào ly thủy tinh, ngắm nó nở lại — 30 giây thư giãn giữa giờ. Lưu ý mua đúng loại nguyên bông thuần nếu muốn tránh caffeine.",
          "4. Nụ lavender — lối thoát hiểm cho chiều căng thẳng. Không phải trà uống hằng ngày, mà là trà tình huống: hôm nào họp hành căng, một ly lavender loãng (chỉ 1g!) vừa uống vừa ngửi có tác dụng xả van nhanh nhất.",
          "5. Trà cam quế táo đỏ — dành cho ngày mưa. Blend ấm nồng mùi mứt Tết, ngọt thanh từ táo đỏ. Tính mùa vụ cao, hè ít dùng.",
          "6. Trà tâm sen — kén nhất, nhưng đáng cho người đầu nóng. Xếp cuối vì vị đắng cần thời gian làm quen, nhưng với những chiều đầu óc quay cuồng, một ly tâm sen loãng giúp hạ nhiệt theo cách không loại nào trong danh sách làm được."
        ]
      },
      {
        heading: "Bộ dụng cụ văn phòng tối giản",
        paragraphs: [
          "Không cần ấm chén cầu kỳ: một ly thủy tinh có lọc để pha trà hoa, một bình giữ nhiệt 500ml để ủ gạo lứt hoặc cam quế từ sáng, và một hũ nhỏ đựng trà để ngăn kéo. Tổng đầu tư ít hơn 2 ly trà sữa.",
          "Lưu ý: các loại trà trên hỗ trợ thói quen uống lành mạnh, không phải thuốc và không điều trị bệnh. Người có bệnh nền hoặc đang dùng thuốc nên tham khảo bác sĩ trước khi dùng đều đặn."
        ]
      }
    ],
    comparisonTable: {
      headers: ["Bạn cần", "Chọn", "Vì sao"],
      rows: [
        ["Loại đầu tiên để thử", "Hoa cúc mật ong", "Dễ nhất, gần như không thể ghét"],
        ["Bỏ trà sữa, nước ngọt", "Gạo lứt đậu đỏ", "Vị bùi có gì đó để thay thế"],
        ["Ly trà đẹp trên bàn", "Hoa nhài nguyên bông", "Bông nở trong ly, hương thanh"],
        ["Chiều căng thẳng", "Lavender (pha loãng)", "Hương xả stress tức thì"],
        ["Ngày mưa, mùa lạnh", "Cam quế táo đỏ", "Ấm người, ngọt thanh tự nhiên"],
        ["Đầu óc nóng, bứt rứt", "Tâm sen (pha loãng)", "Vị mộc hạ nhiệt — kén người nhất"]
      ]
    },
    datePublished: "2026-06-15",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Uống trà thảo mộc thay nước lọc cả ngày được không?", answer: "Không nên thay hoàn toàn — nước lọc vẫn là nền tảng. Nên duy trì 1-2 ly trà mỗi ngày xen kẽ nước lọc." },
      { question: "Loại trà nào giúp tỉnh táo thay cà phê?", answer: "Các trà thảo mộc không caffeine không tạo sự tỉnh táo kiểu cà phê; chúng thay thói quen cầm ly ca chiều. Nếu cần caffeine, nên uống cà phê trước 2 giờ chiều." },
      { question: "Mang trà đi làm thế nào cho tiện?", answer: "Chia sẵn từng phần nhỏ vào túi zip mini hoặc hộp chia ngăn từ tối hôm trước, tránh mang cả gói lớn làm trà nhanh giảm hương." }
    ]
  },
  {
    slug: "review-tra-tam-sen-say-kho-cho-nguoi-kho-ngu",
    title: "Review Trà Tâm Sen Sấy Khô: dân văn phòng khó ngủ có nên thử?",
    description: "Mình đã uống trà tâm sen sấy khô mỗi tối suốt 3 tuần. Review thật về vị, cách pha cho đỡ đắng, và ai nên (không nên) dùng.",
    category: "review-tra",
    productId: "tam-sen-say-kho",
    relatedSlugs: ["tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong", "routine-buoi-toi-15-phut-giam-cang-thang", "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay"],
    intro: "Có — nếu bạn khó ngủ vì đầu óc còn chạy deadline lúc lên giường và chịu được vị hơi đắng. Sau 3 tuần uống mỗi tối, mình thấy dễ vào giấc hơn rõ rệt, nhưng đây không phải thuốc ngủ thảo mộc và không hợp với tất cả mọi người. Trà tâm sen là loại trà thảo mộc pha từ tâm sen (phần mầm xanh nằm giữa hạt sen) đem sấy khô, từ lâu được y học cổ truyền Việt Nam dùng để hỗ trợ an thần và dễ ngủ.",
    toc: ["Mở gói: mùi, màu, vị thật sự", "Cách pha để đỡ đắng", "Sau 3 tuần: có ngủ ngon hơn không"],
    quickSummary: ["Vị mộc, hơi đắng nhẹ.", "Hợp dùng tối sau bữa ăn.", "Nên bắt đầu từ nồng độ vừa phải."],
    bestFor: ["Người muốn giảm căng thẳng cuối ngày.", "Người thích trà vị mộc."],
    notFor: ["Người không quen vị đắng.", "Người cần tư vấn y tế chuyên sâu."],
    body: [
      {
        heading: "Mở gói: mùi, màu, vị thật sự thế nào",
        paragraphs: [
          "Mình làm văn phòng, tối nào cũng ôm laptop đến 10 giờ. Tắt máy rồi mà nằm xuống đầu vẫn quay cuồng chuyện báo cáo, tin nhắn sếp. Một chị đồng nghiệp mách uống thử tâm sen nên mình đặt một gói về làm chuột bạch 3 tuần.",
          "Mở túi zip ra, mùi đầu tiên là mùi mộc hơi ngai ngái, giống mùi thuốc bắc nhẹ chứ không thơm kiểu hoa cỏ như trà hoa cúc. Tâm sen khô màu xanh rêu sẫm, sợi nhỏ cỡ đầu tăm. Pha ra, nước trà màu vàng xanh nhạt, khá trong.",
          "Ngụm đầu tiên: đắng. Không đắng gắt như thuốc, mà đắng kiểu rau má đậm, xong để lại hậu ngọt nhẹ ở cuống họng chừng vài giây. Uống đến ngày thứ ba thì mình quen, thậm chí thấy cái đắng đó đúng vị — nó làm mình có cảm giác đang uống thứ gì đó tử tế cho cơ thể, không phải nước ngọt."
        ]
      },
      {
        heading: "Cách pha để đỡ đắng",
        paragraphs: [
          "Ba ngày đầu mình pha sai — bỏ nhiều, ủ lâu, đắng muốn bỏ cuộc. Sau chỉnh lại thế này thì dễ uống hẳn: lượng 2g (nhúm nhỏ bằng nửa thìa cà phê) cho 250ml, người mới nên bắt đầu ít hơn hướng dẫn trên bao bì. Nước 85-90°C, tức đun sôi rồi chờ 2-3 phút, đừng đổ nước sôi sùng sục. Thời gian ủ 5 phút rồi rót ra luôn, đừng ngâm tâm sen trong cốc.",
          "Về thời điểm, mình uống sau ăn tối 1 tiếng, khoảng 60-90 phút trước khi ngủ. Uống lúc đói thấy hơi cồn cào. Mẹo: nếu vẫn đắng quá, tuần đầu có thể pha loãng gấp đôi nước, quen dần rồi tăng lại. Đừng thêm đường — vừa mất vị mộc, vừa ngược mục đích uống để ngủ ngon."
        ]
      },
      {
        heading: "Sau 3 tuần: có ngủ ngon hơn không",
        paragraphs: [
          "Nói thẳng: trà không đánh gục bạn như thuốc ngủ. Tuần đầu mình chưa thấy khác biệt rõ. Từ tuần thứ hai, cái thấy rõ nhất là thời gian nằm trằn trọc ngắn lại — trước đây mình lăn qua lăn lại cỡ 40-60 phút, giờ thường 15-20 phút là thiếp đi. Có thể một phần nhờ chính nghi thức pha trà buộc mình rời màn hình sớm hơn.",
          "Về mặt khoa học, tâm sen chứa các alkaloid như neferine — hoạt chất đã có một số nghiên cứu về tác dụng an thần. Tuy nhiên số nghiên cứu trên người còn hạn chế, nên mình chỉ dám nói: theo trải nghiệm cá nhân, nó hỗ trợ thư giãn tốt, còn hiệu quả với bạn thì cần tự thử và theo dõi 2-3 tuần.",
          "Ưu điểm: hỗ trợ thư giãn cuối ngày rõ từ tuần 2, nguyên liệu thuần Việt dễ mua giá mềm, không caffeine nên uống tối không lo tỉnh. Nhược điểm nói thật: vị đắng khiến người mới rất dễ bỏ cuộc trong 3 ngày đầu; tâm sen tính hàn nên mình uống lúc đói thấy cồn cào, người hay lạnh bụng, tiêu hóa kém hoặc huyết áp thấp nên thận trọng, không uống đặc và liên tục dài ngày; và đây không phải giải pháp tức thì, ai kỳ vọng uống phát ngủ luôn sẽ thất vọng."
        ]
      }
    ],
    rating: 8,
    pros: ["Hỗ trợ thư giãn cuối ngày rõ rệt từ tuần 2", "Nguyên liệu thuần Việt, dễ mua, giá mềm", "Không caffeine, uống tối không lo tỉnh"],
    cons: ["Vị đắng, người mới rất dễ bỏ cuộc trong 3 ngày đầu", "Tính hàn, không hợp người lạnh bụng hoặc huyết áp thấp", "Không phải giải pháp tức thì, cần kiên trì 2-3 tuần"],
    priceNote: "Giá tham khảo trên Shopee — kiểm tra giá mới nhất tại thời điểm mua vì có thể thay đổi theo chương trình khuyến mãi.",
    datePublished: "2026-05-30",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà tâm sen có gây buồn ngủ ngay không?", answer: "Không. Theo trải nghiệm của mình, nó hỗ trợ trạng thái thư giãn dần chứ không gây buồn ngủ tức thì như thuốc. Nên uống đều và kết hợp giảm màn hình trước giờ ngủ." },
      { question: "Uống mỗi ngày có sao không?", answer: "Với liều loãng (2-3g/ngày) nhiều người dùng hằng ngày bình thường, nhưng tâm sen tính hàn nên không nên uống đặc liên tục nhiều tuần; người có bệnh nền hoặc đang dùng thuốc nên hỏi bác sĩ trước." },
      { question: "Bị đắng quá thì làm sao?", answer: "Giảm còn 1-2g, ủ ngắn 3-4 phút, pha loãng gấp đôi trong tuần đầu. Đừng thêm đường, hãy để lưỡi quen dần, thường mất 3-5 ngày." }
    ]
  },
  {
    slug: "review-tra-hoa-cuc-mat-ong-van-an-ocop",
    title: "Review Trà Hoa Cúc Mật Ong Vạn An OCOP: có đáng là trà đầu tiên?",
    description: "Mình review trà hoa cúc mật ong Vạn An OCOP sau 1 tháng uống: vị ngọt dịu thế nào, pha bao nhiêu độ, có thật sự hợp người mới uống trà thảo mộc không.",
    category: "review-tra",
    productId: "tra-hoa-cuc-mat-ong",
    relatedSlugs: ["kien-thuc-co-ban-ve-tra-thao-moc", "routine-buoi-toi-15-phut-giam-cang-thang", "tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong"],
    intro: "Nếu bạn chưa từng uống trà thảo mộc và hỏi mình nên bắt đầu từ loại nào, câu trả lời là loại này. Thơm dịu, ngọt nhẹ, pha kiểu gì cũng khó hỏng. Trà hoa cúc mật ong là trà thảo mộc pha từ hoa cúc sấy khô kết hợp mật ong hoặc đường phèn, không chứa caffeine, thường dùng buổi chiều tối để thư giãn. Bản của Vạn An là sản phẩm đạt chứng nhận OCOP — chương trình xếp hạng sản phẩm đặc trưng địa phương của Việt Nam.",
    toc: ["Ấn tượng đầu: thơm trước cả khi pha", "Cách pha và có giúp thư giãn thật không", "So sánh trong bộ ba trà tối"],
    quickSummary: ["Dễ uống với người mới.", "Pha nhanh 3-5 phút.", "Hợp khung giờ chiều tối."],
    bestFor: ["Người mới bắt đầu uống trà thảo mộc.", "Dân văn phòng cần lựa chọn pha nhanh."],
    notFor: ["Người dị ứng với phấn hoa.", "Người cần đồ uống không có vị ngọt tự nhiên."],
    body: [
      {
        heading: "Ấn tượng đầu: thơm trước cả khi pha",
        paragraphs: [
          "Mình mua loại này sau khi vật lộn với vị đắng của tâm sen, kiểu muốn tìm gì đó dễ thở hơn. Mở gói ra đã thấy khác: mùi hoa cúc khô thơm nhẹ, thoảng chút ngọt của mật ong, không hắc, không mùi hương liệu gắt — điểm mình để ý đầu tiên vì trà ướp hương rẻ tiền thường lộ ngay ở bước này.",
          "Bông cúc khô nhỏ, vàng nhạt, khá nguyên vẹn. Pha ra nước màu vàng óng, trong veo. Vị ngọt dịu — không phải ngọt đường mà ngọt thanh kiểu mật ong loãng, nền là vị hoa cúc hơi thảo mộc. Ngụm đầu tiên mình nghĩ ngay: đây là loại đưa được cho bất kỳ ai. Đồng nghiệp mình vốn chỉ uống trà sữa cũng khen dễ uống."
        ]
      },
      {
        heading: "Cách pha và có giúp thư giãn thật không",
        paragraphs: [
          "Nhiệt độ 80-85°C, thấp hơn tâm sen. Nước sôi già làm hoa cúc chuyển vị hơi nồng và mất mùi thơm. Đun sôi rồi chờ 3-4 phút là vừa. Lượng 3-4 bông (hoặc 1 gói nếu dạng túi) cho 250ml, ủ 3-5 phút. Không cần thêm gì vì bản này đã có sẵn vị ngọt — vừa tiện vừa cần lưu ý bên dưới. Mình hay pha một ly lúc 4-5 giờ chiều thay nước ngọt, và một ly sau ăn tối những hôm căng thẳng.",
          "Hoa cúc chứa apigenin — hoạt chất được nghiên cứu về tác dụng thư giãn và hỗ trợ giấc ngủ, tuy nhiên các nghiên cứu cho thấy hiệu quả ở mức nhẹ đến vừa. Trải nghiệm của mình khớp với điều đó: uống xong thấy dịu, bớt bứt rứt, nhưng không hạ nhiệt cái đầu rõ như tâm sen những hôm nghĩ ngợi nhiều. Nói cách khác: hoa cúc là trà cho ngày thường, tâm sen là trà cho ngày deadline dí."
        ]
      },
      {
        heading: "So sánh trong bộ ba trà tối và điểm cần lưu ý",
        paragraphs: [
          "Ưu điểm: dễ uống nhất trong các trà mình từng review, gần như không có rào cản vị; thơm tự nhiên, không lộ mùi hương liệu; có chứng nhận OCOP, nguồn gốc rõ; pha nhanh, hợp mang lên văn phòng.",
          "Nhược điểm nói thật: có sẵn vị ngọt từ mật ong hoặc đường phèn nên uống sát giờ ngủ không lý tưởng, người đang giảm đường hoặc tiểu đường nên đọc kỹ thành phần và cân nhắc lượng dùng; hiệu quả thư giãn êm nên ai kỳ vọng tác động rõ như tâm sen sẽ thấy nhẹ đô; vị nhẹ nên người quen trà đậm có thể thấy nhạt."
        ]
      }
    ],
    comparisonTable: {
      headers: ["", "Hoa cúc mật ong Vạn An", "Tâm sen", "Lavender"],
      rows: [
        ["Độ dễ uống", "Rất cao", "Thấp", "Trung bình"],
        ["Cảm giác thư giãn", "Êm, nhẹ", "Rõ nhất", "Mạnh về hương"],
        ["Hợp với", "Người mới, uống hằng ngày", "Khó ngủ do nghĩ nhiều", "Stress cuối ngày"],
        ["Lưu ý", "Có vị ngọt sẵn", "Đắng, tính hàn", "Kén người nhạy mùi"]
      ]
    },
    rating: 8.5,
    pros: ["Dễ uống nhất cho người mới, gần như không có rào cản vị", "Thơm tự nhiên, chứng nhận OCOP, nguồn gốc rõ", "Pha nhanh 3-5 phút, tiện mang đi làm"],
    cons: ["Có vị ngọt sẵn, cân nhắc khi uống sát giờ ngủ", "Hiệu quả thư giãn ở mức êm, không mạnh như tâm sen", "Người quen trà đậm có thể thấy nhạt"],
    priceNote: "Giá tham khảo trên Shopee — kiểm tra giá mới nhất tại thời điểm mua.",
    datePublished: "2026-06-02",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà hoa cúc mật ong uống lúc nào tốt nhất?", answer: "Buổi chiều thay nước ngọt hoặc sau ăn tối. Vì có vị ngọt sẵn, nên uống trước giờ ngủ ít nhất 60-90 phút." },
      { question: "Người tiểu đường có uống trà hoa cúc mật ong được không?", answer: "Nên đọc kỹ thành phần mật ong hoặc đường phèn và tham khảo bác sĩ trước khi dùng. Có thể cân nhắc hoa cúc nguyên bông không đường thay thế." },
      { question: "Trà hoa cúc có giúp đẹp da không?", answer: "Chưa có bằng chứng khoa học mạnh cho công dụng dưỡng nhan. Công dụng được ghi nhận rõ hơn là hỗ trợ thư giãn nhẹ." }
    ]
  },
  {
    slug: "review-nu-hoa-oai-huong-lavender-say-kho",
    title: "Review Nụ Lavender Sấy Khô: trà cho những ngày stress cao độ",
    description: "Mình dùng nụ lavender sấy khô cả để pha trà lẫn để cạnh gối suốt 1 tháng. Review thật: hương thế nào, vị có ngon không, ai hợp ai không, cách pha để không bị nồng.",
    category: "review-tra",
    productId: "tra-lavender-ngu-ngon",
    relatedSlugs: ["tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong", "kien-thuc-co-ban-ve-tra-thao-moc", "routine-buoi-toi-15-phut-giam-cang-thang"],
    intro: "Lavender là loại ăn điểm bằng hương chứ không phải vị — hợp nhất với người căng thẳng, bồn chồn cuối ngày và thích mùi thơm. Vị trà thực ra chỉ ở mức ổn. Nụ hoa oải hương (lavender) sấy khô là nụ hoa của cây oải hương được sấy giữ nguyên hình dạng và tinh dầu, dùng để pha trà, làm túi thơm hoặc kết hợp cả hai.",
    toc: ["Hương và vị: hai câu chuyện khác nhau", "Cách pha để không bị nồng", "Có thật sự giảm stress không"],
    quickSummary: ["Mùi floral rõ.", "Nên pha nhẹ nếu mới dùng.", "Hợp routine thư giãn tối."],
    bestFor: ["Người thích hương hoa rõ.", "Người cần ritual thư giãn sau giờ làm."],
    notFor: ["Người nhạy với mùi floral.", "Người muốn vị trà đậm kiểu rang."],
    body: [
      {
        heading: "Hương và vị: hai câu chuyện khác nhau",
        paragraphs: [
          "Thú thật mình mua lavender ban đầu vì đẹp — nụ tím khô nhìn rất Pinterest. Nhưng thứ giữ mình dùng hết túi lại là cái khác: những hôm về nhà mà người vẫn căng như dây đàn, nghi thức mở túi, hít một hơi, pha trà, vừa uống vừa ngửi có tác dụng xả van nhanh hơn bất kỳ loại trà nào mình từng thử.",
          "Hương đúng chất lavender — thơm nồng, hơi ngọt, thoảng chút long não rất nhẹ. Mở túi zip là thơm cả góc bàn. Vị thì không ngon bằng hương — nước trà màu vàng tím nhạt, vị hơi chát nhẹ, thoảng đắng thảo mộc, và nếu pha quá tay thì nồng như uống nước hoa. Ba lần đầu mình đều pha hỏng vì cho nhiều quá."
        ]
      },
      {
        heading: "Cách pha để không bị nồng",
        paragraphs: [
          "Cho rất ít: 1g, khoảng 1 thìa cà phê gạt ngang nụ khô, cho 250ml. Đây là loại duy nhất mình khuyên thà thiếu còn hơn thừa. Nước 85°C, ủ 4-5 phút rồi lọc bỏ nụ ngay, không ngâm.",
          "Kết hợp: hợp nhất khi pha chung vài bông cúc, dịu vị đi nhiều. Những hôm không muốn uống, mình bỏ nụ khô vào chén nhỏ đặt cạnh gối, dùng như túi thơm. Thời điểm: sau ăn tối, trước ngủ 60-90 phút, những hôm stress cao."
        ]
      },
      {
        heading: "Có thật sự giảm stress không",
        paragraphs: [
          "Với mình: có, và là loại cho cảm giác dịu xuống nhanh nhất — nhưng cần nói rõ cơ chế chủ yếu qua mùi hương. Tinh dầu lavender chứa linalool, hoạt chất được nghiên cứu khá nhiều về tác dụng thư giãn qua liệu pháp mùi hương. Bằng chứng cho đường uống thì mỏng hơn. Vậy nên mình coi ly trà lavender là aromatherapy kèm nước ấm, và với mục đích xả stress cuối ngày, thế là đủ. Còn về giấc ngủ thuần túy, tâm sen vẫn cho mình kết quả rõ hơn.",
          "Ưu điểm: hương thơm thật, đậm, tác dụng thư giãn cảm nhận được ngay khi mở túi; đa dụng, pha trà, mix với hoa cúc, làm túi thơm phòng ngủ; một túi dùng rất lâu vì mỗi lần chỉ cần 1g. Nhược điểm nói thật: vị không ngon bằng hương, uống thuần dễ thấy chát và nồng; rất dễ pha hỏng nếu cho nhiều; kén người nhạy cảm mùi hoa đậm hoặc dị ứng phấn hoa nên thử lượng nhỏ trước; phụ nữ mang thai nên hỏi bác sĩ trước khi dùng thường xuyên."
        ]
      }
    ],
    comparisonTable: {
      headers: ["", "Lavender", "Tâm sen", "Hoa cúc mật ong"],
      rows: [
        ["Điểm mạnh nhất", "Hương thơm xả stress", "Hỗ trợ vào giấc", "Dễ uống"],
        ["Vị", "Chát nhẹ, dễ nồng", "Đắng, hậu ngọt", "Ngọt dịu"],
        ["Độ khó pha", "Cao nhất (dễ quá tay)", "Trung bình", "Thấp"],
        ["Hợp với", "Ngày stress cao độ", "Khó ngủ do nghĩ nhiều", "Người mới, ngày thường"]
      ]
    },
    rating: 7.5,
    pros: ["Hương thơm thư giãn cảm nhận ngay khi mở túi", "Đa dụng: pha trà, mix với hoa cúc, làm túi thơm"],
    cons: ["Vị không ngon bằng hương, dễ nồng nếu pha quá tay", "Kén người nhạy mùi hoa đậm"],
    priceNote: "Giá tham khảo trên Shopee — kiểm tra giá mới nhất tại thời điểm mua. Vì mỗi lần pha chỉ cần 1g nên một túi dùng được rất lâu.",
    datePublished: "2026-06-18",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà lavender có giúp ngủ ngon không?", answer: "Tác dụng chính là thư giãn tinh thần qua hương thơm; hiệu quả với giấc ngủ là gián tiếp qua giảm căng thẳng. Nếu mục tiêu chính là dễ vào giấc, trà tâm sen phù hợp hơn." },
      { question: "Pha trà lavender bị nồng quá thì sửa thế nào?", answer: "Giảm lượng xuống 0.5-1g cho 250ml, ủ ngắn 3-4 phút, lọc bỏ nụ ngay sau ủ, hoặc pha chung với hoa cúc để dịu vị." },
      { question: "Không uống được lavender thì có cách dùng khác không?", answer: "Có thể dùng như túi thơm: bỏ nụ khô vào chén hoặc túi vải đặt cạnh gối hoặc bàn làm việc. Tác dụng thư giãn qua mùi hương là điểm mạnh nhất của lavender." }
    ]
  },
  {
    slug: "review-tra-gao-lut-dau-do-rang-cho-van-phong",
    title: "Review Trà Gạo Lứt Đậu Đỏ Rang: bỏ được trà sữa nhờ loại này?",
    description: "Mình dùng trà gạo lứt đậu đỏ rang để cai bớt trà sữa trong 2 tháng. Review thật: vị bùi thế nào, nấu hay ủ ngon hơn, uống lúc nào và ai hợp với loại này.",
    category: "review-tra",
    productId: "tra-gao-lut-dau-do",
    relatedSlugs: ["giam-stress-o-van-phong-bang-do-uong-lanh-manh", "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay", "kien-thuc-co-ban-ve-tra-thao-moc"],
    intro: "Đây không phải trà ngủ ngon — đây là trà cai đồ ngọt tốt nhất mình từng thử. Vị bùi thơm mùi rang, ngọt nhẹ tự nhiên không cần đường, uống được cả ngày vì không caffeine. Trà gạo lứt đậu đỏ rang là thức uống nấu hoặc ủ từ gạo lứt và đậu đỏ đã rang chín, cho vị bùi thơm như cốm rang, hoàn toàn không chứa caffeine.",
    toc: ["Bối cảnh: 4 ly trà sữa một tuần", "Mùi, màu, vị và 2 cách pha", "Uống lúc nào, và có ngủ ngon không"],
    quickSummary: ["Vị bùi nhẹ, dễ uống.", "Thay thế đồ ngọt hằng ngày.", "Phù hợp mang đi làm."],
    bestFor: ["Người muốn giảm nước ngọt mỗi ngày.", "Người thích vị ngũ cốc dễ uống."],
    notFor: ["Người cần đồ uống thay bữa ăn.", "Người không hợp đồ uống có mùi rang."],
    body: [
      {
        heading: "Bối cảnh: 4 ly trà sữa một tuần",
        paragraphs: [
          "Mình từng là trụ cột của nhóm đặt trà sữa văn phòng — 3-4 ly một tuần, size L, 70% đường. Biết là nhiều đường nhưng cứ 3 giờ chiều là thèm một thứ gì đó có vị chứ không phải nước lọc. Trà gạo lứt đậu đỏ là thứ mình thử để lấp đúng khoảng trống đó: có vị, có mùi thơm, cầm ấm tay, nhưng không đường, không caffeine.",
          "Kết quả sau 2 tháng: từ 3-4 ly trà sữa mỗi tuần xuống còn 1 ly cuối tuần cho vui. Không phải nhờ nghị lực, nhờ có thứ thay thế đủ ngon."
        ]
      },
      {
        heading: "Mùi, màu, vị và 2 cách pha",
        paragraphs: [
          "Mở gói ra là mùi rang thơm phức, kiểu mùi cơm cháy đáy nồi cộng mùi cốm. Hạt gạo lứt nâu đỏ, đậu đỏ bóng, nhìn rõ từng hạt. Nước pha ra màu nâu đỏ trong, đẹp như hổ phách. Vị bùi là chủ đạo, thêm chút ngọt béo rất nhẹ của đậu đỏ. Không đắng, không chát, gần như không có rào cản nào với người mới.",
          "Kiểu 1, ủ bình giữ nhiệt cho đi làm: 2 thìa canh hạt với 500ml nước sôi, ủ 20-30 phút là uống được, càng để càng đậm. Kiểu 2, nấu cho cuối tuần: đun sôi nhỏ lửa 10-15 phút, nước đậm và béo hơn hẳn kiểu ủ, nấu xong hạt đậu mềm có thể ăn luôn. Mẹo: đừng bỏ ít quá, loại này cần đủ lượng mới ra vị, khác hẳn lavender."
        ]
      },
      {
        heading: "Uống lúc nào, và có ngủ ngon không",
        paragraphs: [
          "Loại này mình xếp vào trà ban ngày: sáng, chiều, hoặc tối sớm đều được vì không caffeine. Nó phục vụ giấc ngủ theo cách gián tiếp — cắt được ly trà sữa 3 giờ chiều thì tối ngủ tốt hơn là chuyện tự nhiên. Còn để thư giãn trực tiếp buổi tối, tâm sen hay hoa cúc vẫn đúng vai hơn.",
          "Một lưu ý sức khỏe: đây là nước nấu từ ngũ cốc nên có một lượng tinh bột nhỏ hòa vào nước. Với người bình thường không đáng kể, nhưng người tiểu đường đang kiểm soát chặt đường huyết nên hỏi ý kiến bác sĩ. Ưu điểm: thay thế trà sữa và nước ngọt hiệu quả nhất trong các trà mình thử; không caffeine, không đường, uống được mọi khung giờ; rẻ, một gói dùng rất lâu. Nhược điểm nói thật: không có gì thư giãn đặc biệt, đừng mua vì mục đích ngủ ngon; cần lượng nhiều và thời gian ủ hoặc nấu lâu hơn trà hoa; vị bùi nhẹ nhàng, ai quen vị đậm đà kích thích sẽ thấy hiền quá."
        ]
      }
    ],
    comparisonTable: {
      headers: ["", "Trà gạo lứt đậu đỏ", "Trà sữa", "Hoa cúc mật ong"],
      rows: [
        ["Đường", "Không", "Rất nhiều", "Ít (có sẵn)"],
        ["Caffeine", "Không", "Có", "Không"],
        ["Vị", "Bùi, thơm rang", "Ngọt béo", "Ngọt dịu"],
        ["Uống cả ngày?", "Có", "Không", "Chiều tối"]
      ]
    },
    rating: 8,
    pros: ["Thay thế trà sữa, nước ngọt hiệu quả nhất trong các trà đã thử", "Không caffeine, không đường, uống được cả ngày, giá rẻ"],
    cons: ["Cần ủ hoặc nấu lâu, kém tiện hơn trà hoa", "Không có công dụng thư giãn trực tiếp"],
    priceNote: "Giá tham khảo trên Shopee — kiểm tra giá mới nhất tại thời điểm mua. Tính theo ly, đây là đồ uống rẻ nhất trong nhóm mình đã thử.",
    datePublished: "2026-06-22",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà gạo lứt đậu đỏ có giúp giảm cân không?", answer: "Trà hỗ trợ giảm cân theo nghĩa thay thế đồ uống nhiều đường, không phải thức uống đốt mỡ. Bản thân trà gần như không đường và không calo đáng kể." },
      { question: "Uống trà gạo lứt đậu đỏ hằng ngày có sao không?", answer: "Người khỏe mạnh uống hằng ngày bình thường. Người tiểu đường hoặc ăn kiêng tinh bột chặt nên tham khảo bác sĩ vì nước có lượng tinh bột nhỏ." },
      { question: "Trà gạo lứt ủ rồi để được bao lâu?", answer: "Nên uống hết trong ngày. Nước ngũ cốc dễ thiu hơn trà hoa, không nên để qua đêm ở nhiệt độ phòng." }
    ]
  },
  {
    slug: "review-tra-hoa-nhai-no-say-kho-nguyen-bong",
    title: "Review Trà Hoa Nhài Nở Nguyên Bông: loại trà 'dễ sống chung' nhất?",
    description: "Trà hoa nhài nở nguyên bông có gì khác trà nhài ướp thường? Mình review sau 1 tháng uống chiều tối: hương, vị, cách pha và vì sao đây là loại dễ duy trì nhất.",
    category: "review-tra",
    productId: "tra-hoa-nhai-goji",
    relatedSlugs: ["kien-thuc-co-ban-ve-tra-thao-moc", "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay", "review-tra-hoa-cuc-mat-ong-van-an-ocop"],
    intro: "Nếu tâm sen là trà có nhiệm vụ và lavender là trà có cá tính, thì hoa nhài nguyên bông là trà dễ sống chung — hương thanh, vị nhẹ, pha nhanh, nhìn đẹp, uống chiều hay tối đều được. Trà hoa nhài nở nguyên bông là những bông nhài được sấy khô giữ nguyên hình dạng, pha ra nước hương nhài thanh nhẹ — khác với trà nhài truyền thống vốn là trà xanh ướp hương nhài.",
    toc: ["Điều đầu tiên phải nói: nó đẹp", "Cách pha và thư giãn kiểu nền", "Ưu nhược điểm và cách chọn mua"],
    quickSummary: ["Hương nhài nhẹ.", "Dễ duy trì 1-2 ly/ngày.", "Hợp văn phòng và buổi tối."],
    bestFor: ["Người thích hương nhài dịu nhẹ.", "Người cần trà uống đều mỗi ngày."],
    notFor: ["Người nhạy với mùi hoa.", "Người muốn vị trà mạnh và đậm."],
    body: [
      {
        heading: "Điều đầu tiên phải nói: nó đẹp",
        paragraphs: [
          "Nghe có vẻ không liên quan đến chất lượng, nhưng với việc duy trì thói quen thì liên quan lắm: hoa nhài nguyên bông là loại trà mình có hứng pha nhất. Thả 5-6 bông vào ly thủy tinh, chế nước nóng, bông nhài nở xòe lại từ từ — 30 giây ngắm nó nở cũng đã là một nhịp thư giãn.",
          "Hương nhài đúng nghĩa — thanh, ngọt nhẹ, không gắt. So với lavender thì kín đáo hơn nhiều, ai chê lavender nồng thường lại hợp nhài. Vị thì rất nhẹ, hơi ngọt hậu, thoáng chút chát mỏng ở cuối. Nói thật, vị là phần mỏng nhất của loại này, nó giống nước thơm hơn là trà đậm đà — vừa là điểm yếu với người thích vị rõ, vừa là lý do nó dễ uống hằng ngày không ngán."
        ]
      },
      {
        heading: "Cách pha và thư giãn kiểu nền",
        paragraphs: [
          "Lượng 5-7 bông cho 250ml — nhiều hơn thì hương đậm nhưng bắt đầu lộ vị chát. Nước 80-85°C, ủ 3-5 phút. Bông nhài còn hương cho nước thứ hai, nhạt hơn nhưng vẫn thơm — điểm cộng kinh tế. Cần kiểm tra thành phần thật: nếu là hoa nhài 100% thì không caffeine, uống tối được; nếu có trộn trà xanh thì có caffeine, nên dừng trước 5 giờ chiều.",
          "Hoa nhài không cho mình khoảnh khắc à, dịu hẳn như lavender hay hiệu quả vào giấc rõ như tâm sen. Thứ nó cho là cảm giác dễ chịu nền — một ly thơm nhẹ chiều tối làm buổi làm việc bớt khô khan, và vì quá dễ uống nên mình duy trì được mỗi ngày mà không cần cố. Với trà thảo mộc, đều đặn mới là thứ tạo khác biệt, không phải loại mạnh nhất."
        ]
      },
      {
        heading: "Ưu nhược điểm và cách chọn mua",
        paragraphs: [
          "Ưu điểm: dễ duy trì nhất trong các loại mình thử, hương vị hiền, pha nhanh, không ngán; pha đẹp, yếu tố tưởng phụ mà giúp giữ thói quen thật; pha được 2 nước, kinh tế. Nhược điểm nói thật: vị mỏng, người thích trà đậm sẽ thấy như nước thơm; không có công dụng thư giãn nổi bật riêng, đây là trà nền chứ không phải trà trị liệu; cần mua loại uy tín vì hoa nhài nguyên bông chất lượng kém dễ bị ướp hương liệu — nếu mở gói mà thơm sực kiểu nước xịt phòng thì đó là dấu hiệu xấu.",
          "Bốn dấu hiệu chọn mua tốt: bông còn nguyên dạng, màu trắng ngà tự nhiên (không trắng tinh bất thường), hương thơm thanh thoát chứ không sực nức như hương liệu, và khi pha bông nở lại mềm mại."
        ]
      }
    ],
    comparisonTable: {
      headers: ["", "Hoa nhài nguyên bông", "Lavender", "Hoa cúc mật ong"],
      rows: [
        ["Hương", "Thanh, kín đáo", "Nồng, cá tính", "Ngọt dịu"],
        ["Vị", "Rất nhẹ", "Chát nhẹ, dễ nồng", "Ngọt sẵn"],
        ["Nhìn khi pha", "Đẹp nhất (bông nở)", "Đẹp (nụ tím)", "Bình thường"],
        ["Dễ duy trì hằng ngày", "Cao nhất", "Trung bình", "Cao"]
      ]
    },
    rating: 8,
    pros: ["Dễ duy trì nhất, hương vị hiền, không ngán", "Pha đẹp, được 2 nước, kinh tế"],
    cons: ["Vị mỏng với người thích trà đậm", "Không có công dụng thư giãn chuyên biệt, cần chọn nguồn uy tín"],
    priceNote: "Giá tham khảo trên Shopee — kiểm tra giá mới nhất tại thời điểm mua. Pha được 2 nước nên tính ra mỗi ly khá rẻ.",
    datePublished: "2026-06-26",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà hoa nhài nguyên bông khác gì trà nhài thường?", answer: "Trà nhài thường là trà xanh ướp hương, có caffeine và vị chát đậm. Hoa nhài nguyên bông chỉ là bông hoa sấy, hương thanh và vị rất nhẹ. Nên kiểm tra thành phần thực tế của sản phẩm bạn mua." },
      { question: "Uống trà hoa nhài buổi tối có mất ngủ không?", answer: "Nếu là hoa nhài nguyên bông 100% không trộn trà xanh thì không chứa caffeine, uống tối được. Quan trọng là đọc kỹ thành phần trước khi mua." },
      { question: "Làm sao biết hoa nhài sấy chất lượng tốt?", answer: "Bông còn nguyên dạng, màu trắng ngà tự nhiên, hương thơm thanh thoát chứ không sực nức như hương liệu, và khi pha bông nở lại mềm mại." }
    ]
  },
  {
    slug: "review-tra-cam-que-hoa-hong-tao-do-hoa-nhai",
    title: "Review Trà Cam Quế Hoa Hồng, Táo Đỏ, Hoa Nhài: ly trà cho ngày mưa",
    description: "Blend cam, quế, hoa hồng, táo đỏ, hoa nhài — nghe tham lam nhưng uống thế nào? Mình review thật: vị, cách pha, uống lúc nào hợp và ai nên chọn loại này.",
    category: "review-tra",
    productId: "tra-cam-thao-tao-do",
    relatedSlugs: ["routine-buoi-toi-15-phut-giam-cang-thang", "giam-stress-o-van-phong-bang-do-uong-lanh-manh", "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay"],
    intro: "Đây là loại trà tâm trạng nhất trong tủ của mình — ấm, thơm mùi cam quế, ngọt thanh tự nhiên từ táo đỏ, hợp nhất cho tối sớm ngày mưa hoặc mùa lạnh. Trà cam quế táo đỏ là dạng trà blend gồm vỏ cam, quế, hoa hồng, táo đỏ và hoa nhài sấy khô — vị ngọt thanh có sẵn từ táo đỏ nên không cần thêm đường, và không chứa caffeine.",
    toc: ["Blend 5 vị: uống có loạn không", "Cách pha và công dụng thật", "Ưu nhược điểm"],
    quickSummary: ["Mùi thảo mộc ấm.", "Vị ngọt thanh tự nhiên.", "Hợp uống tối sớm."],
    bestFor: ["Người muốn đồ uống ấm dịu cuối ngày.", "Người đang giảm dần đồ uống nhiều đường."],
    notFor: ["Người không hợp mùi quế.", "Người muốn uống quá sát giờ ngủ."],
    body: [
      {
        heading: "Blend 5 vị: uống có loạn không",
        paragraphs: [
          "Thú thật lúc mua mình hơi nghi: 5 thứ trong một gói thường là dấu hiệu cái gì cũng có, cái gì cũng nhạt. Nhưng loại này phối khá khéo, có tầng lớp rõ: mùi đầu là cam và quế dẫn, mở gói ra là mùi ấm áp kiểu mứt Tết; vị chính là ngọt thanh của táo đỏ làm nền, không gắt, không cần thêm gì; hậu thoảng hoa hồng và nhài rất nhẹ ở cuối, kín đáo, không đánh nhau với cam quế. Nước pha ra màu hổ phách đỏ nhạt, đẹp và ấm đúng như vị của nó."
        ]
      },
      {
        heading: "Cách pha và công dụng thật",
        paragraphs: [
          "Lượng 1 gói nhỏ hoặc khoảng 1 nắm nhỏ nguyên liệu cho 300-350ml, loại này hợp pha bình hoặc ca lớn hơn là ly nhỏ. Nước sôi già 95-100°C — khác các trà hoa mỏng manh, cam quế táo đỏ cần nước thật nóng mới ra hết vị, ủ 7-10 phút. Táo đỏ nên xé đôi trước khi pha để ra vị ngọt nhanh hơn, ủ xong ăn được luôn miếng táo. Thời điểm: tối sớm sau ăn, khoảng 18h30-20h, vì có vị ngọt nhẹ mình không uống sát giờ ngủ.",
          "Mình sẽ không gán cho loại này những công dụng to tát. Trải nghiệm thật: những hôm mưa lạnh hoặc mệt mỏi uể oải, một ca cam quế nóng làm người ấm lên và tâm trạng dễ chịu hẳn — hiệu ứng comfort drink giống một bát súp nóng hơn là dược tính. Táo đỏ và quế được dùng lâu đời trong ẩm thực dưỡng sinh Á Đông, nhưng bằng chứng khoa học cho công dụng cụ thể còn hạn chế, nên hãy uống vì nó ngon và ấm. Về giấc ngủ, nó giúp gián tiếp theo kiểu thay được ly trà sữa hay ca cao ngọt buổi tối; còn hỗ trợ vào giấc trực tiếp, tâm sen vẫn là lựa chọn số một của mình."
        ]
      },
      {
        heading: "Ưu nhược điểm",
        paragraphs: [
          "Ưu điểm: comfort drink đúng nghĩa, ấm người, thơm, hợp tâm trạng cuối ngày; ngọt tự nhiên từ táo đỏ, không cần đường, thay ca cao hay trà sữa tối rất tốt; blend có tầng vị, không bị loạn, ăn được cả táo đỏ sau khi ủ.",
          "Nhược điểm nói thật: tính mùa vụ cao, hè nóng mình gần như không đụng đến, đây là trà mùa lạnh hoặc ngày mưa; cần nước thật sôi và ủ lâu 7-10 phút, kém tiện hơn trà hoa; có vị ngọt nhẹ tự nhiên nên vẫn nên tránh uống sát giờ ngủ, người tiểu đường lưu ý lượng táo đỏ; người không ưa mùi quế thì khỏi cân nhắc vì quế là mùi dẫn của cả blend."
        ]
      }
    ],
    comparisonTable: {
      headers: ["", "Cam quế táo đỏ", "Gạo lứt đậu đỏ", "Hoa cúc mật ong"],
      rows: [
        ["Vị", "Ngọt thanh, ấm nồng", "Bùi, thơm rang", "Ngọt dịu"],
        ["Hợp nhất", "Tối mưa, mùa lạnh", "Cả ngày, quanh năm", "Chiều tối hằng ngày"],
        ["Nguồn ngọt", "Táo đỏ (tự nhiên)", "Gần như không ngọt", "Mật ong/đường phèn"]
      ]
    },
    rating: 8,
    pros: ["Comfort drink ấm người, thơm tầng lớp", "Ngọt tự nhiên từ táo đỏ, không cần thêm đường"],
    cons: ["Tính mùa vụ, hè ít dùng", "Cần nước sôi già và ủ 7-10 phút, kém tiện"],
    priceNote: "Giá tham khảo trên Shopee — kiểm tra giá mới nhất tại thời điểm mua. Một gói pha được ca lớn cho 2 người uống.",
    datePublished: "2026-06-30",
    dateModified: "2026-07-21",
    faqs: [
      { question: "Trà cam quế táo đỏ có uống được buổi tối không?", answer: "Được, nhưng nên uống tối sớm trước ngủ ít nhất 90 phút vì có vị ngọt tự nhiên từ táo đỏ. Loại này không chứa caffeine." },
      { question: "Bà bầu uống trà cam quế được không?", answer: "Quế ở lượng gia vị thông thường được xem là an toàn, nhưng phụ nữ mang thai nên hỏi bác sĩ trước khi dùng thường xuyên bất kỳ trà thảo mộc nào." },
      { question: "Pha xong có ăn được táo đỏ không?", answer: "Được. Táo đỏ sau khi ủ mềm và ngọt như mứt nhẹ, có thể ăn trực tiếp." }
    ]
  }
];
