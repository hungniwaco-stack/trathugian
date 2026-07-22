import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Healthy Lifestyle | Blog trà thư giãn",
  description: "Routine buổi tối lành mạnh cho dân văn phòng: thói quen thư giãn 15 phút, giảm dùng điện thoại trước khi ngủ và xây nếp sống cân bằng, bền vững mỗi ngày.",
  alternates: { canonical: "/healthy-lifestyle/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="healthy-lifestyle"
      title="Healthy Lifestyle"
      desc="Routine dễ áp dụng để ngủ tốt và cân bằng hơn."
    />
  );
}
