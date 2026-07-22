import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Kiến thức trà | Blog trà thư giãn",
  description: "Kiến thức trà thảo mộc cơ bản cho người mới: thành phần thường gặp, cách pha đúng nhiệt độ và thời gian, cách chọn loại trà phù hợp với nhu cầu của bạn.",
  alternates: { canonical: "/kien-thuc-tra/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="kien-thuc-tra"
      title="Kiến thức trà"
      desc="Nền tảng để chọn trà đúng nhu cầu và cách dùng."
    />
  );
}
