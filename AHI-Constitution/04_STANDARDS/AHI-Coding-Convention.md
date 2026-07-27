# AHI — Quy ước Đặt tên trong Code (AHI Coding Convention)

> **Người biên soạn & phê duyệt:** Lê Minh Công — AHI-F (AHI-Founder)
> **Phiên bản:** 1.0 — khởi tạo.
> Vị trí đề xuất trong repo: `AHI-Constitution/04_STANDARDS/AHI-Coding-Convention.md`
> (khớp bước "Standards" trong pipeline: Constitution → Entity Definitions → Entity
> Specification → Entity Lifecycle → **Standards** → Skills → Architecture →
> Implementation).
> Tài liệu này áp dụng cho **code triển khai** (implementation layer) — khác với
> AHI-Lang, vốn là thiết kế ngôn ngữ giao tiếp người-máy-AI (xem AHI-Dinh-Nghia-Thuc-The.md).
> Hai bộ ưu tiên của hai tài liệu **không giống nhau**, xem mục 4 để phân biệt.

---

## 1. Nguyên tắc chung

Mọi định danh trong code (tên class, module, function, biến, package...) liên quan tới
thực thể hoặc thành phần AHI **ưu tiên mang tiền tố `AHI`**, để nhất quán và dễ nhận
diện xuyên suốt hệ sinh thái. Tuy nhiên, tiền tố này **không bắt buộc tuyệt đối** — nếu
việc thêm tiền tố làm định danh trở nên nặng nề (dài dòng, khó đọc, giảm hiệu năng...),
được phép bỏ đi.

## 2. Thứ tự ưu tiên khi quyết định giữ hay bỏ tiền tố AHI

| Thứ tự | Tiêu chí | Ý nghĩa |
|---|---|---|
| 1 (cao nhất) | **Tiện lợi người dùng** (developer/end-user convenience) | Định danh phải dễ đọc, dễ nhớ, dễ dùng — đây là tiêu chí quyết định trên hết |
| 2 | **Tốc độ xử lý** (processing speed) | Nếu tiền tố làm tăng chi phí xử lý (tên quá dài ảnh hưởng tới hiệu năng, kích thước bundle, tốc độ biên dịch...), có thể bỏ |
| 3 (thấp nhất) | **Dấu hiệu chống sao chép** (anti-piracy marker) | Tiền tố `AHI` cũng đóng vai trò dấu hiệu nhận diện chống sao chép code trái phép trong tương lai — nhưng đây là tiêu chí ưu tiên thấp nhất, không được đánh đổi lấy sự tiện lợi hay tốc độ |

**Quy tắc quyết định:** khi cân nhắc một định danh cụ thể, luôn kiểm tra theo đúng thứ
tự trên — chỉ giữ tiền tố nếu không vi phạm tiêu chí ưu tiên cao hơn. Nếu thêm tiền tố
làm hại tiêu chí (1) hoặc (2), bỏ tiền tố đó, dù có thể mất một phần giá trị ở tiêu chí (3).

## 3. Ví dụ minh họa (không bắt buộc, chỉ mang tính gợi ý)

| Ngữ cảnh | Có tiền tố AHI | Lý do |
|---|---|---|
| Tên class/entity cấp cao (đại diện thực thể AHI) | `AHIPerson`, `AHIOrchestrator` | Định danh cấp cao, ít lặp lại, tiền tố giúp nhận diện rõ nguồn gốc mà không gây nặng nề |
| Tên package/namespace gốc | `ahi.core`, `ahi.workspace` | Namespace chỉ khai báo một lần, tiền tố không lặp lại nhiều lần trong code |
| Biến cục bộ, tham số hàm, vòng lặp | `person`, `state`, `i` (không có tiền tố) | Thêm tiền tố vào biến cục bộ dùng nhiều lần trong một hàm sẽ làm code dài dòng, giảm tiện lợi đọc — ưu tiên 1 thắng |
| Hàm nội bộ gọi rất thường xuyên (hot path) | Không tiền tố hoặc viết tắt ngắn | Nếu tiền tố ảnh hưởng tới độ dài định danh trong đường xử lý tốc độ cao — ưu tiên 2 thắng |
| Tên hằng số định danh hệ thống, mã nguồn công khai (public API surface) | Giữ tiền tố `AHI` | Đây là nơi giá trị chống sao chép (ưu tiên 3) phát huy tác dụng mà không ảnh hưởng tiện lợi/tốc độ |

*Bảng trên là ví dụ minh họa để hình dung cách áp dụng 3 tiêu chí — không phải danh
sách quy tắc đóng băng. Áp dụng cụ thể do đội phát triển quyết định theo từng ngữ cảnh,
dựa trên đúng thứ tự ưu tiên ở mục 2.*

## 4. Phân biệt với AHI-Lang

- **AHI-Coding-Convention** (tài liệu này): áp dụng cho **code triển khai** — cách đặt
  tên định danh trong các ngôn ngữ lập trình hiện có (Python, JS, v.v.), 3 tiêu chí ưu
  tiên: tiện lợi người dùng → tốc độ → chống sao chép.
- **AHI-Lang**: là **thiết kế một ngôn ngữ mới** để làm trong suốt hóa giao tiếp ngôn
  ngữ tự nhiên giữa con người — AI — thiết bị, 4 tiêu chí ưu tiên riêng (xem
  AHI-Dinh-Nghia-Thuc-The.md, mục AHI-Lang): dễ nhất cho con người → tốc độ → chống sao
  chép → tốn ít tài nguyên.
- Hai bộ quy tắc **không dùng chung**, dù có điểm tương đồng (đều đặt tốc độ và chống
  sao chép làm tiêu chí) — vì phạm vi áp dụng khác nhau (code triển khai vs. thiết kế
  ngôn ngữ giao tiếp).

## 5. Nhật ký cập nhật (Changelog)

| Phiên bản | Ngày | Mục thay đổi | Phạm vi / Giới hạn |
|---|---|---|---|
| v1.0 | 2026-07-24 | Toàn bộ tài liệu | Khởi tạo quy ước đặt tên tiền tố AHI trong code: 3 tiêu chí ưu tiên (tiện lợi người dùng → tốc độ → chống sao chép), ví dụ minh họa, phân biệt rõ với AHI-Lang |
