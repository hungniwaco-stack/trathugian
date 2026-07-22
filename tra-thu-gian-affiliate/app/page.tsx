import type { Metadata } from "next";
import Link from "next/link";
import { categories, posts, products } from "@/data/site";
import { ArticleCard, CategoryCard, ProductCard } from "@/components/CardSet";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Trang chủ | Trà thư giãn cho dân văn phòng",
  description: "Trà Thư Giãn giúp dân văn phòng chọn trà ngủ ngon, giảm stress và xây routine buổi tối lành mạnh, dựa trên trải nghiệm dùng thật và review chi tiết, trung thực.",
  alternates: { canonical: "/" }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://trathugian.shop/#organization",
      name: "Trà Thư Giãn",
      url: "https://trathugian.shop/",
      logo: { "@type": "ImageObject", url: "https://trathugian.shop/images/brand/logo.png" },
      description: "Blog review và tư vấn trà thảo mộc (trà tâm sen, hoa cúc, lavender) giúp dân văn phòng thư giãn, ngủ ngon và sống lành mạnh."
    },
    {
      "@type": "WebSite",
      "@id": "https://trathugian.shop/#website",
      url: "https://trathugian.shop/",
      name: "Trà Thư Giãn",
      publisher: { "@id": "https://trathugian.shop/#organization" },
      inLanguage: "vi-VN"
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <section className="hero hero-banner">
        <p className="hero-kicker">Tea & Calm Living</p>
        <h1>Trà thư giãn & healthy lifestyle cho dân văn phòng</h1>
        <p>Gợi ý các loại trà thảo mộc giúp bạn thư giãn, ngủ ngon hơn và xây dựng thói quen sống nhẹ nhàng mỗi ngày.</p>
        <Link className="btn btn-primary" href="/tra-ngu-ngon">Khám phá trà ngủ ngon</Link>
        <Link className="btn btn-secondary" href="/review-tra">Xem review trà</Link>
      </section>

      <section className="section">
        <div className="mini-banner card">
          <div>
            <p className="mini-kicker">Gợi ý tuần này</p>
            <h2>Top 6 loại trà dễ bắt đầu cho dân văn phòng</h2>
            <p>Ưu tiên dễ uống, dễ pha và phù hợp routine buổi tối nhẹ nhàng.</p>
          </div>
          <Link className="btn btn-primary" href="/bai-viet/5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay">Xem danh sách</Link>
        </div>
      </section>

      <section className="section">
        <h2>Bài viết nổi bật về trà ngủ ngon</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "tra-ngu-ngon").slice(0, 2).map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Review trà mới nhất</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "review-tra").map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Healthy routine buổi tối</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "healthy-lifestyle").map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Top sản phẩm trà được gợi ý</h2>
        <div className="grid grid-2">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="section">
        <h2>Chuyên mục chính</h2>
        <div className="grid grid-3">{categories.map((cat) => <CategoryCard key={cat.slug} slug={cat.slug} name={cat.name} desc={cat.desc} />)}</div>
      </section>

      <section className="section">
        <h2>Cụm nội dung theo mục tiêu</h2>
        <div className="grid grid-3">
          <article className="card">
            <h3><Link href="/bai-viet/tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong">Cụm ngủ ngon cho dân văn phòng</Link></h3>
            <p>Bắt đầu từ bài trụ cột, sau đó đi sang routine tối và review sản phẩm phù hợp.</p>
          </article>
          <article className="card">
            <h3><Link href="/bai-viet/giam-stress-o-van-phong-bang-do-uong-lanh-manh">Cụm giảm stress ban ngày</Link></h3>
            <p>Tập trung thay đổi đồ uống hằng ngày, kết nối sang trà dễ uống và bài review ứng dụng thực tế.</p>
          </article>
          <article className="card">
            <h3><Link href="/bai-viet/kien-thuc-co-ban-ve-tra-thao-moc">Cụm kiến thức trà cho người mới</Link></h3>
            <p>Nắm nền tảng chọn trà, rồi đi vào các bài review để chọn đúng sản phẩm theo nhu cầu.</p>
          </article>
        </div>
      </section>
    </>
  );
}
