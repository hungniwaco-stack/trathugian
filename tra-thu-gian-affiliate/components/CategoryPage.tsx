import { posts } from "@/data/site";
import Link from "next/link";
import { ArticleCard } from "./CardSet";
import { Breadcrumb } from "./LayoutBits";

export default function CategoryPage({ slug, title, desc }: { slug: string; title: string; desc: string }) {
  const filtered = posts.filter((p) => p.category === slug);
  const clusterMap: Record<string, { hubSlug: string; spokeSlugs: string[]; relatedCats: { label: string; href: string }[] }> = {
    "tra-ngu-ngon": {
      hubSlug: "tra-nao-ho-tro-ngu-ngon-cho-dan-van-phong",
      spokeSlugs: [
        "vi-sao-dan-van-phong-mat-ngu-kinh-nien-5-cach-khong-dung-thuoc",
        "routine-buoi-toi-15-phut-giam-cang-thang",
        "review-tra-tam-sen-say-kho-cho-nguoi-kho-ngu"
      ],
      relatedCats: [
        { label: "Review trà", href: "/review-tra" },
        { label: "Healthy Lifestyle", href: "/healthy-lifestyle" }
      ]
    },
    "giam-stress": {
      hubSlug: "giam-stress-o-van-phong-bang-do-uong-lanh-manh",
      spokeSlugs: [
        "dau-hieu-stress-vi-cong-viec-va-cach-xu-ly",
        "ca-phe-chieu-gay-mat-ngu-nen-thay-bang-tra-gi",
        "review-tra-gao-lut-dau-do-rang-cho-van-phong"
      ],
      relatedCats: [
        { label: "Trà ngủ ngon", href: "/tra-ngu-ngon" },
        { label: "Kiến thức trà", href: "/kien-thuc-tra" }
      ]
    },
    "review-tra": {
      hubSlug: "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay",
      spokeSlugs: [
        "review-tra-tam-sen-say-kho-cho-nguoi-kho-ngu",
        "review-tra-hoa-cuc-mat-ong-van-an-ocop",
        "review-tra-gao-lut-dau-do-rang-cho-van-phong"
      ],
      relatedCats: [
        { label: "Trà ngủ ngon", href: "/tra-ngu-ngon" },
        { label: "Giảm stress", href: "/giam-stress" }
      ]
    },
    "healthy-lifestyle": {
      hubSlug: "routine-buoi-toi-15-phut-giam-cang-thang",
      spokeSlugs: [
        "5-thoi-quen-buoi-sang-giup-dan-van-phong-do-met-ca-ngay",
        "an-trua-van-phong-de-chieu-khong-buon-ngu",
        "giam-stress-o-van-phong-bang-do-uong-lanh-manh"
      ],
      relatedCats: [
        { label: "Trà ngủ ngon", href: "/tra-ngu-ngon" },
        { label: "Giảm stress", href: "/giam-stress" }
      ]
    },
    "kien-thuc-tra": {
      hubSlug: "kien-thuc-co-ban-ve-tra-thao-moc",
      spokeSlugs: [
        "review-tra-hoa-cuc-mat-ong-van-an-ocop",
        "review-nu-hoa-oai-huong-lavender-say-kho",
        "5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay"
      ],
      relatedCats: [
        { label: "Review trà", href: "/review-tra" },
        { label: "Trà ngủ ngon", href: "/tra-ngu-ngon" }
      ]
    }
  };
  const cluster = clusterMap[slug];
  const hubPost = cluster ? posts.find((p) => p.slug === cluster.hubSlug) : null;
  const spokePosts = cluster
    ? cluster.spokeSlugs.map((item) => posts.find((p) => p.slug === item)).filter((item): item is (typeof posts)[number] => Boolean(item))
    : [];

  return (
    <div className="section">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: title }]} />
      <h1>{title}</h1>
      <p>{desc}</p>
      {hubPost ? (
        <section className="card">
          <h2>Bài trụ cột của chuyên mục</h2>
          <h3><Link href={`/bai-viet/${hubPost.slug}`}>{hubPost.title}</Link></h3>
          <p>{hubPost.description}</p>
        </section>
      ) : null}
      {spokePosts.length > 0 ? (
        <section className="card">
          <h2>Lộ trình đọc theo nhu cầu</h2>
          <ul>
            {spokePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/bai-viet/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {cluster?.relatedCats?.length ? (
        <section className="card">
          <h2>Khám phá cụm liên quan</h2>
          <ul>
            {cluster.relatedCats.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <div className="grid grid-2">{filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
    </div>
  );
}
