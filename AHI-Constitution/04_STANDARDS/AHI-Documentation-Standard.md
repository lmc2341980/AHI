# AHI — Chuẩn Trình bày Tài liệu (AHI Documentation Standard)

> **Người biên soạn & phê duyệt:** Lê Minh Công — AHI-F (AHI-Founder)
> **Phiên bản:** 1.0 — khởi tạo.
> Vị trí đề xuất trong repo: `AHI-Constitution/04_STANDARDS/AHI-Documentation-Standard.md`
> Áp dụng cho **mọi tài liệu** trong hệ sinh thái AHI (Hiến pháp, Định nghĩa Thực thể,
> Specification, Kiến trúc...) — không riêng cho một tài liệu cụ thể nào.

---

## 1. Năm tiêu chí bắt buộc

Mọi tài liệu AHI phải đồng thời phục vụ tốt cả 5 đối tượng đọc sau, không được ưu tiên
một bên mà hy sinh bên còn lại:

| # | Tiêu chí | Đối tượng phục vụ | Ý nghĩa |
|---|---|---|---|
| 1 | Dễ đọc cho người | Con người (AHI-F, đội ngũ, cộng đồng) | Câu chữ rõ ràng, có ví dụ, không đánh đố |
| 2 | Đọc nhanh cho AI | AHI-Old, AHI-Or khi tra cứu ngữ cảnh | Cấu trúc nhất quán, nhãn trường cố định, dễ trích xuất bằng khớp mẫu (pattern matching) |
| 3 | AHI-Factory dễ tự sửa/tạo AHI mới | AHI-Factory | Mỗi thực thể là một khối độc lập, đủ thông tin để dùng làm khuôn mẫu (template) sinh AHI mới mà không cần suy diễn thêm |
| 4 | AHI-V dễ kiểm tra & thực thi Hiến pháp | AHI-V | Nguyên tắc/điều khoản phải tách bạch, có thể đối chiếu từng điều một cách máy móc, không lẫn vào văn xuôi mô tả |
| 5 | Ngôn ngữ lập trình & thiết kế AHI tối giản nhất cho con người | Người dùng cuối cùng của mọi hệ thống AHI | Mọi thiết kế kỹ thuật (AHI-Lang, API, giao diện) phải ưu tiên thao tác đơn giản nhất cho con người trước mọi tiêu chí kỹ thuật khác |

## 2. Cấu trúc bắt buộc: Bảng tóm tắt + Khối chi tiết có neo (anchor)

Mọi tài liệu liệt kê nhiều thực thể/mục (Định nghĩa Thực thể, Glossary, danh sách quy
tắc...) phải có **hai lớp**:

### 2.1 Bảng tóm tắt (Summary Table)

- Đặt ở đầu tài liệu, ngay sau phần giới thiệu.
- Mỗi dòng: Tên thực thể (có link) | Tên đầy đủ | Loại | mô tả siêu ngắn (≤ 1 câu).
- Cột tên thực thể **phải là link neo** (anchor link) trỏ thẳng tới khối chi tiết tương
  ứng — bấm vào là nhảy xuống, không cần cuộn tìm.

### 2.2 Khối chi tiết (Detail Block)

- Mỗi thực thể là một **heading cấp 3 (`###`)**, dùng **đúng tên xuất hiện trong bảng
  tóm tắt** — để anchor tự sinh bởi Markdown khớp chính xác với link ở bảng, không lệch.
- Bên trong mỗi khối, dùng **đúng bộ nhãn trường cố định**, luôn theo thứ tự sau:

```
### <Tên thực thể>
**Loại:** ...
**Định nghĩa:** ...
**Quan hệ:** ...
**Nhiệm vụ:** ...
```

- Có thể thêm trường phụ nếu cần (`**Nguồn gốc/Case:**`, `**Đề xuất — chưa chốt:**`),
  nhưng 4 trường trên là bắt buộc và phải giữ đúng thứ tự, đúng tên nhãn — để AI/AHI-Factory
  dò theo mẫu cố định mà không cần hiểu ngữ cảnh câu văn.

## 3. Quy tắc viết câu

- Câu ngắn, một ý một câu. Tránh câu ghép nhiều mệnh đề.
- Thuật ngữ mới xuất hiện lần đầu: viết kèm giải nghĩa song ngữ (Anh - Việt), như quy
  ước đã áp dụng xuyên suốt các tài liệu AHI.
- Điều khoản/nguyên tắc mang tính bắt buộc phải tách thành gạch đầu dòng hoặc bảng —
  không viết lẫn trong đoạn văn mô tả, để AHI-V có thể đối chiếu từng điều một cách
  máy móc.
- Nội dung chưa được AHI-F phê duyệt chính thức phải gắn nhãn rõ **"Đề xuất — chưa
  chốt"** ngay tại chỗ, không để lẫn với nội dung đã chốt.

## 4. Nhật ký cập nhật (Changelog)

| Phiên bản | Ngày | Mục thay đổi | Phạm vi / Giới hạn |
|---|---|---|---|
| v1.0 | 2026-07-24 | Toàn bộ tài liệu | Khởi tạo chuẩn trình bày tài liệu AHI: 5 tiêu chí bắt buộc (người đọc, AI đọc, AHI-Factory tái dùng, AHI-V kiểm tra, tối giản cho con người); cấu trúc Bảng tóm tắt + Khối chi tiết có neo; quy tắc viết câu |
