import type { Metadata } from "next";
import Link from "next/link";
import { author } from "@/data/site";

export const metadata: Metadata = {
  title: "Về Trà Thư Giãn — blog trà thảo mộc của một người từng mất ngủ",
  description: "Trà Thư Giãn bắt đầu từ 2 năm mất ngủ vì stress công việc. Review trà thảo mộc dựa trên trải nghiệm thật, routine lành mạnh và minh bạch affiliate.",
  alternates: { canonical: "/ve-chung-toi/" }
};

export default function AboutPage() {
  return (
    <section className="article">
      <h1>Về Trà Thư Giãn</h1>
      <p>Trà Thư Giãn không bắt đầu như một dự án kinh doanh. Nó bắt đầu từ giai đoạn mình — {author.name}, một nhân viên văn phòng — mất ngủ triền miên gần 2 năm vì stress công việc: nằm xuống là đầu tua lại deadline, 1-2 giờ sáng vẫn mở mắt, sáng dậy uể oải rồi lại bù bằng cà phê, và vòng lặp cứ thế.</p>
      <p>Trong hành trình tự tìm cách thoát ra, mình thử rất nhiều thứ — và trà thảo mộc cùng thói quen buổi tối là hai thứ ở lại. Không thần kỳ, không chữa khỏi sau 3 ngày như quảng cáo, nhưng bền và lành. Mình bắt đầu ghi chép lại từng loại trà đã thử: loại nào đáng tiền, loại nào chỉ đẹp bao bì, pha thế nào cho đúng — và blog này là những ghi chép đó, viết lại tử tế cho người đến sau.</p>

      <h2>Nguyên tắc viết ở đây</h2>
      <p><strong>Chỉ review thứ đã dùng thật.</strong> Mỗi bài review đều dựa trên tối thiểu 2-3 tuần sử dụng. Không review chay từ mô tả sản phẩm.</p>
      <p><strong>Chê thật, khen thật.</strong> Bài nào cũng có phần nhược điểm. Trà nào chỉ hợp một nhóm người, mình nói rõ nhóm nào không nên mua.</p>
      <p><strong>Không hứa hẹn y khoa.</strong> Trà thảo mộc là đồ uống hỗ trợ thói quen lành mạnh, không phải thuốc. Khi nhắc công dụng, mình phân biệt rõ đâu là trải nghiệm cá nhân, đâu là thông tin có nghiên cứu, và luôn khuyên đi khám khi vấn đề vượt quá phạm vi một ly trà.</p>
      <p><strong>Minh bạch affiliate.</strong> Một số link trong bài dẫn đến Shopee là link tiếp thị liên kết — blog nhận hoa hồng nhỏ nếu bạn mua qua đó, giá bạn trả không đổi. Hoa hồng này giúp mình duy trì blog và mua trà mới để review. Chi tiết: <Link href="/chinh-sach-affiliate">Chính sách affiliate</Link>.</p>

      <h2>Bạn nên bắt đầu từ đâu?</h2>
      <ul>
        <li>Chưa biết gì về trà thảo mộc → <Link href="/bai-viet/kien-thuc-co-ban-ve-tra-thao-moc">Kiến thức cơ bản về trà thảo mộc</Link></li>
        <li>Khó ngủ, muốn chọn trà → <Link href="/bai-viet/tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong">Trà ngủ ngon cho dân văn phòng: nên chọn loại nào?</Link></li>
        <li>Muốn xây thói quen tối → <Link href="/bai-viet/routine-buoi-toi-15-phut-giam-cang-thang">Routine buổi tối 15 phút</Link></li>
      </ul>

      <h2>Liên hệ</h2>
      <p>Có câu hỏi về trà, muốn góp ý hay gợi ý loại trà cho mình review? Nhắn qua <Link href="/lien-he">trang liên hệ</Link>. Mình đọc hết, trả lời chậm nhất vài ngày.</p>

      <p><Link href={author.url}>Xem trang tác giả của {author.name} →</Link></p>
    </section>
  );
}
