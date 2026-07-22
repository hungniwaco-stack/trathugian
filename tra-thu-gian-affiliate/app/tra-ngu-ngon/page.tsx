import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Trà ngủ ngon cho dân văn phòng: 6 lựa chọn dễ bắt đầu",
  description: "Nên uống trà gì để dễ ngủ hơn? Xem 6 lựa chọn trà thảo mộc phổ biến, cách pha và thời điểm uống trước giờ ngủ, cùng lưu ý quan trọng dành cho người mới bắt đầu.",
  alternates: { canonical: "/tra-ngu-ngon/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="tra-ngu-ngon"
      title="Trà ngủ ngon"
      desc="Nên uống trà gì để ngủ ngon hơn? Tổng hợp bài chọn trà và routine buổi tối cho dân văn phòng."
    />
  );
}
