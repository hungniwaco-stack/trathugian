import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Giảm stress văn phòng: bắt đầu từ đồ uống mỗi ngày",
  description: "Giảm stress khi làm việc bắt đầu từ đồ uống mỗi ngày: thay nước ngọt và cà phê chiều bằng trà phù hợp, nhận biết dấu hiệu stress sớm và giữ năng lượng ổn định.",
  alternates: { canonical: "/giam-stress/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="giam-stress"
      title="Giảm stress"
      desc="Giảm stress văn phòng với đồ uống lành mạnh và thói quen đơn giản, dễ duy trì mỗi ngày."
    />
  );
}
