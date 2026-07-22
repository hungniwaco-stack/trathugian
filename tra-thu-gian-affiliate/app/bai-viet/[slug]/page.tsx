import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { author, categoryLabelMap, posts, products } from "@/data/site";
import { Breadcrumb, ComparisonTableView, DisclaimerBox, TableOfContents } from "@/components/LayoutBits";
import { FAQSection, ProductCard } from "@/components/CardSet";
import JsonLd from "@/components/JsonLd";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Bài viết không tồn tại" };
  const productForPost = post.productId ? products.find((p) => p.id === post.productId) : undefined;
  const ogImage = productForPost?.image ?? "/images/brand/logo.png";
  const url = `https://trathugian.shop/bai-viet/${post.slug}/`;

  return {
    title: `${post.title} | Trà Thư Giãn`,
    description: post.description,
    alternates: { canonical: `/bai-viet/${post.slug}/` },
    openGraph: {
      type: "article",
      locale: "vi_VN",
      siteName: "Trà Thư Giãn",
      title: post.title,
      description: post.description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const productForPost = post.productId ? products.find((p) => p.id === post.productId) : products[0];

  const relatedPosts = post.relatedSlugs && post.relatedSlugs.length > 0
    ? post.relatedSlugs
        .map((slug) => posts.find((item) => item.slug === slug))
        .filter((item): item is (typeof posts)[number] => Boolean(item))
        .slice(0, 3)
    : posts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 3);
  const isReview = post.category === "review-tra";
  const url = `https://trathugian.shop/bai-viet/${post.slug}/`;
  const articleImage = `https://trathugian.shop${productForPost?.image ?? "/images/brand/logo.png"}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://trathugian.shop/" },
      { "@type": "ListItem", position: 2, name: categoryLabelMap[post.category], item: `https://trathugian.shop/${post.category}/` },
      { "@type": "ListItem", position: 3, name: post.title, item: url }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [articleImage],
    inLanguage: "vi-VN",
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@type": "Person", name: author.name, url: `https://trathugian.shop${author.url}` },
    publisher: {
      "@type": "Organization",
      name: "Trà Thư Giãn",
      logo: { "@type": "ImageObject", url: "https://trathugian.shop/images/brand/logo.png" }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <article className="article">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: categoryLabelMap[post.category], href: `/${post.category}` }, { label: post.title }]} />
      <h1>{post.title}</h1>
      <p>{post.intro}</p>

      <div className="meta-row">
        <p><strong>Tác giả:</strong> <Link href={author.url}>{author.name}</Link></p>
        <p><strong>Cập nhật:</strong> {new Date(post.dateModified).toLocaleDateString("vi-VN")}</p>
      </div>

      <section className="card">
        <h2>Tóm tắt nhanh</h2>
        <ul>{(post.quickSummary ?? [post.description]).map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="fit-grid">
        <div className="card">
          <h2>Phù hợp với ai?</h2>
          <ul>{(post.bestFor ?? ["Người cần đồ uống thư giãn nhẹ nhàng.", "Dân văn phòng muốn routine tối ổn định."]).map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="card">
          <h2>Ai nên cân nhắc thêm?</h2>
          <ul>{(post.notFor ?? ["Người cần tư vấn y tế chuyên môn cụ thể.", "Người không phù hợp với thành phần thảo mộc nhất định."]).map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <TableOfContents items={post.toc} />

      {isReview && post.rating ? (
        <section className="card">
          <h2>Điểm đánh giá: <span className="review-score">{post.rating}/10</span></h2>
          <div className="pros-cons">
            <div>
              <h3>Ưu điểm</h3>
              <ul>{(post.pros ?? []).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h3>Nhược điểm</h3>
              <ul>{(post.cons ?? []).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>
      ) : null}

      {post.body.map((section, index) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
          {index === 1 ? <DisclaimerBox /> : null}
        </section>
      ))}

      {post.comparisonTable ? (
        <section>
          <h2>Bảng so sánh nhanh</h2>
          <ComparisonTableView table={post.comparisonTable} />
        </section>
      ) : null}

      <section>
        <h2>Box sản phẩm gợi ý</h2>
        {productForPost ? <ProductCard product={productForPost} /> : null}
        {post.priceNote ? <p className="price-note">{post.priceNote}</p> : null}
      </section>

      <FAQSection faqs={post.faqs} />

      {relatedPosts.length > 0 ? (
        <section>
          <h2>Đọc tiếp</h2>
          <ul>
            {relatedPosts.map((item) => (
              <li key={item.slug}>
                <Link href={`/bai-viet/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="author-box">
        <img src={author.avatar} alt={author.name} width={56} height={56} loading="lazy" />
        <div>
          <p><strong>{author.name}</strong></p>
          <p>{author.bio}</p>
          <Link href={author.url}>Xem tất cả bài viết của {author.name} →</Link>
        </div>
      </div>
    </article>
  );
}
