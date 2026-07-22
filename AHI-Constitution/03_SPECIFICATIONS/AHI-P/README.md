# AHI-P — AHI-Person Specification

## Giới thiệu

AHI-P (AHI-Person) là Thực thể Số (Digital Entity) đại diện **duy nhất** cho một con
người trong Hệ sinh thái AHI (Artificial Hybrid Intelligence). AHI-P không thay thế
con người — con người luôn giữ quyền quyết định cuối cùng. AHI-P đóng vai trò trợ lý,
thư ký, tư vấn, và cộng sự lâu dài, hỗ trợ đa phương thức qua ngôn ngữ tự nhiên, dữ
liệu số, AHI-PS (thị giác máy tính), và các cảm biến được cấp quyền.

## Mục đích tài liệu

Đặc tả này (Specification) là hợp đồng kỹ thuật (Contract) để:
- **AHI-V** kiểm tra tính hợp lệ/hợp hiến của một AHI-P.
- **AHI-Factory** dùng làm căn cứ khi sinh AHI-P mới.
- **AHI-Or** điều phối, định tuyến, quản lý vòng đời AHI-P.
- Các AHI khác trong **repository khác** đối chiếu và ánh xạ (xem Cross-Reference
  Block ở cuối file 002).

## Trạng thái tài liệu

| Mục | Giá trị |
|---|---|
| Artifact ID (cố định qua mọi phiên bản) | **AHI-SPEC-P** |
| Current Best Version | **002_AHI-P_Specification.md** |
| Trạng thái | Approved (001) / Draft (002) |
| Mô hình tiến hóa | Hiến pháp gốc bất biến (001) + Án lệ bổ sung (002, 003, ...) |

## ⚠️ Ghi chú khôi phục (2026-07)

File `001_AHI-P_Specification.md` từng bị ghi đè trực tiếp bởi một chỉnh sửa mang tên
"v1.1 tích hợp" — vi phạm nguyên tắc bất biến của file đánh số. Bản 001 hiện tại trong
thư mục này là bản được khôi phục/tái lập theo đúng nội dung gốc tối giản đã chốt.
Toàn bộ nội dung tích hợp (AHI-Successor, Frozen Generation, Family Tree Governance,
Computer Vision) được chuyển đúng vị trí của nó: file **002** (án lệ bổ sung), không
còn nằm trong 001.

## Danh sách phiên bản

| File | Vai trò | Trạng thái |
|---|---|---|
| `001_AHI-P_Specification.md` | Bản gốc (Founding Specification) — bất biến | Approved |
| `002_AHI-P_Specification.md` | Current Best Version — tích hợp Successor/Frozen/Family Tree/CV theo án lệ | Draft |

## Changelog tóm tắt

| Phiên bản | Ngày | Thay đổi chính |
|---|---|---|
| 001 | (khởi tạo) | Định nghĩa AHI-P, 3 mức định danh, vòng đời cơ bản, quan hệ hệ thống |
| 002 | 2026-07-21 | State Machine chi tiết, Data Model/Metadata schema, Mô hình Nhận thức Lai (Hybrid Cognitive Model — đã hiệu chỉnh AHI-SuBiet), Computer Vision qua AHI-PS, Family Tree Governance (đánh dấu đề xuất), Successor Model + Workforce Phase, Cross-Reference Block cho liên-repo |

## Quy tắc kế thừa (Inheritance Rule)

- File đã đánh số **không bao giờ bị sửa, ghi đè, hoặc xóa**.
- Mọi bổ sung là một "án lệ": phải ghi rõ **case/nhu cầu phát sinh** → **điều khoản gốc
  liên quan trong 001** → **nội dung mới**.
- 001 (Hiến pháp gốc của AHI-P) không bị phủ định bởi bản sau; các bản sau chỉ được
  **bổ sung**, không mâu thuẫn với 001.
- README luôn trỏ tới Current Best Version; không dùng README thay cho Specification.
- Nội dung đánh dấu "**Đề xuất — chưa chốt**" trong 002 là mở rộng hợp lý nhưng chưa
  được AHI-F phê duyệt chính thức; không coi là điều khoản bắt buộc cho tới khi được
  xác nhận và ghi lại trong changelog của phiên bản kế tiếp.

## Chỉ mục nội dung (002)

1. Purpose | 2. Definition | 3. Goals | 4. Scope | 5. Responsibilities |
6. Identity Model | 7. State Machine | 8. Data Model (Metadata Schema) |
9. Hybrid Cognitive Model (AHI-SuBiet) | 10. Computer Vision (AHI-PS) |
11. Relationships | 12. Family Tree Governance | 13. Successor Model & Workforce Phase |
14. Inputs / Outputs | 15. Core Principles | 16. Security | 17. API |
18. Dependencies | 19. References | 20. Cross-Reference Block | 21. Changelog
