import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Trà Thư Giãn">
          <img className="brand-image" src="/images/brand/logo.png" alt="Logo Trà Thư Giãn" width={84} height={56} loading="eager" />
          <span className="brand-label">TRÀ THƯ GIÃN</span>
        </Link>
        <nav>
          <Link href="/">Trang chủ</Link>
          <Link href="/tra-ngu-ngon">Trà ngủ ngon</Link>
          <Link href="/giam-stress">Giảm stress</Link>
          <Link href="/review-tra">Review trà</Link>
          <Link href="/healthy-lifestyle">Healthy Lifestyle</Link>
          <Link href="/kien-thuc-tra">Kiến thức trà</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid grid-3">
        <div>
          <p className="footer-title">Về chúng tôi</p>
          <p>Trà Thư Giãn là blog cá nhân của Minh Thư, chia sẻ trải nghiệm thật với trà thảo mộc cho dân văn phòng.</p>
        </div>
        <div>
          <p className="footer-title">Thông tin</p>
          <ul>
            <li><Link href="/ve-chung-toi">Về chúng tôi</Link></li>
            <li><Link href="/tac-gia/minh-thu">Tác giả</Link></li>
            <li><Link href="/chinh-sach-affiliate">Chính sách affiliate</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
            <li><Link href="/dieu-khoan-su-dung">Điều khoản sử dụng</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Disclaimer sức khỏe</p>
          <p>Nội dung trên website chỉ mang tính tham khảo, không thay thế tư vấn y tế chuyên môn.</p>
          <p>Một số liên kết là affiliate và có thể mang lại hoa hồng nhỏ cho đội ngũ biên tập.</p>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}

export function TableOfContents({ items }: { items: string[] }) {
  return (
    <aside className="toc">
      <h2>Mục lục</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </aside>
  );
}

export function DisclaimerBox() {
  return (
    <div className="disclaimer-box">
      Nội dung trên website chỉ mang tính tham khảo, không thay thế tư vấn y tế chuyên môn.
    </div>
  );
}

export function ComparisonTableView({ table }: { table: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
