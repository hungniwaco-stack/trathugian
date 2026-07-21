import type { Metadata } from "next";
import Link from "next/link";
import { author, posts } from "@/data/site";
import { ArticleCard } from "@/components/CardSet";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Minh Thư — tác giả Trà Thư Giãn",
  description: "Minh Thư là người viết chính của Trà Thư Giãn — nhân viên văn phòng từng mất ngủ 2 năm, đã tự thử hàng chục loại trà thảo mộc và chia sẻ lại bằng trải nghiệm thật.",
  alternates: { canonical: "/tac-gia/minh-thu/" }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": "https://trathugian.shop/tac-gia/minh-thu/#person",
    name: author.name,
    url: `https://trathugian.shop${author.url}`,
    image: `https://trathugian.shop${author.avatar}`,
    jobTitle: "Người viết chính, Trà Thư Giãn",
    description: author.bio,
    worksFor: { "@id": "https://trathugian.shop/#organization" }
  }
};

export default function AuthorPage() {
  return (
    <section className="article">
      <JsonLd data={personSchema} />
      <h1>{author.name}</h1>
      <div className="author-box">
        <img src={author.avatar} alt={author.name} />
        <div>
          <p><strong>Người viết chính, Trà Thư Giãn</strong></p>
          <p>{author.bio}</p>
        </div>
      </div>

      <h2>Mình là ai</h2>
      <p>Mình là nhân viên văn phòng, làm việc với laptop 9-10 tiếng mỗi ngày như phần lớn bạn đọc của blog này. Không phải bác sĩ, không phải chuyên gia dinh dưỡng — mình là người đã tự thử nghiệm trên chính mình, và chia sẻ lại đúng những gì đã trải qua.</p>

      <h2>Vì sao mình viết về trà</h2>
      <p>2 năm mất ngủ vì stress công việc buộc mình thử đủ thứ. Trà thảo mộc và routine buổi tối là hai thứ hiệu quả và bền nhất với mình. Từ đó mình có thói quen mua và thử mọi loại trà thư giãn phổ biến trên thị trường — mỗi loại tối thiểu 2-3 tuần — rồi viết lại trung thực: vị thật ra sao, pha thế nào cho đúng, ai hợp ai không.</p>

      <h2>Cách mình đánh giá một loại trà</h2>
      <p>Dùng thật tối thiểu 2 tuần, ghi chép cảm nhận theo ngày, chấm điểm trên thang 10 kèm lý do trừ điểm, và luôn nêu ít nhất một nhược điểm. Những gì mình viết là trải nghiệm cá nhân cộng thông tin đã kiểm chứng nguồn, không phải tư vấn y tế — cơ địa mỗi người khác nhau, vấn đề sức khỏe thật sự thì nên gặp bác sĩ.</p>

      <h2>Bài viết của {author.name}</h2>
      <div className="grid grid-2">
        {posts.map((post) => <ArticleCard key={post.slug} post={post} />)}
      </div>

      <p><Link href="/lien-he">Liên hệ với mình →</Link></p>
    </section>
  );
}
