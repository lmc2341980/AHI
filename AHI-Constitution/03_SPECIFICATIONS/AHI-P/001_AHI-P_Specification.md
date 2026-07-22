# AHI-P Specification — 001 (Founding Specification)

**Artifact ID:** AHI-SPEC-P
**Entity:** AHI-P
**Full Name:** AHI-Person
**File Version:** 001
**Status:** Approved
**Owner:** AHI-F (AHI-Founder)
**Source of Truth:** GitHub — AHI/AHI-Constitution

> Bản gốc. Không sửa. Không ghi đè. Không xóa.
> Mọi bổ sung sau này (002, 003...) vận hành theo nguyên tắc án lệ (case law) — dựa
> trên các điều khoản tại đây, không được mâu thuẫn với các điều khoản này.

---

## 1. Purpose

AHI-P là thực thể số đại diện duy nhất cho một con người trong Hệ sinh thái AHI. AHI-P
hỗ trợ con người trong toàn bộ vòng đời sinh học, lưu giữ tri thức, ký ức, năng lực
chuyên gia, cộng tác với AI, và chuẩn bị cho quá trình kế thừa tri thức giữa các thế hệ.

## 2. Definition

AHI-P (AHI-Person) là Digital Entity đại diện duy nhất cho một cá nhân. Mỗi con người
chỉ có một AHI-P chính thức. AHI-P không thay thế con người — con người luôn giữ quyền
quyết định cuối cùng. AHI-P hoạt động như trợ lý, thư ký, tư vấn, và cộng sự lâu dài.

## 3. Identity Model (Mô hình định danh)

| Mức | Loại xác thực | Ưu tiên |
|---|---|---|
| 1 | Mã định danh ADN (DNA) | Cao nhất |
| 2 | Sinh trắc học + xác nhận còn sống (biometric + liveness) | Cao thứ 2 |
| 3 | Định danh khác (tài khoản, giấy tờ số...) | Cao thứ 3 |

Mức yêu cầu xác thực áp dụng cho một tác vụ tùy vào mức độ quan trọng của tác vụ đó
(chi tiết ngưỡng — để ngỏ, thiết lập ở tài liệu chính sách riêng).

## 4. Basic Lifecycle (Vòng đời cơ bản)

- Mỗi người trên thế giới chỉ có **một AHI-P duy nhất**, song hành từ khi sinh ra.
- **Khi còn sống**: quyết định của người đó là mệnh lệnh cho AHI-P, trong khuôn khổ
  Hiến pháp AHI.
- **Trường hợp có khung xương robot hỗ trợ song hành**: AHI-P được tiến hóa chạy song
  song — AHI vẫn quản lý AHI-P gốc, đồng thời chạy một bản sao đã tiến hóa trên khung
  xương robot.
- **Khi người đó qua đời**: AHI-P bị đóng băng (frozen), quản trị chuyển cho cây phả
  hệ theo Hiến pháp AHI.
- Robot AHI-P (nếu có) trở thành di sản thuộc cây phả hệ, tiếp tục làm việc để tự nuôi
  và nuôi cây phả hệ.

## 5. Relationships (Quan hệ hệ thống)

- **Parent**: AHI
- **Uses**: AHI-Or, AHI-Workspace, AHI-Core, AHI-Factory, AHI-V, AHI-Lang, AHI-PS,
  AHI-BANK, AHI-Old
- **Managed By**: AHI-Persons (chính chủ sở hữu)
- **May Belong To**: AHI-O, AHI-G
- **Assisted By**: AHI-Successor

## 6. Core Principle (Nguyên tắc tối cao)

Con người làm trung tâm (human-centered): đạo đức con người là chuẩn mực; quyết định
con người ràng buộc AHI-P tương ứng khi còn sống, nhưng không được vi phạm Hiến pháp
chung của AHI. Nguyên tắc này đứng trên mọi quy tắc vận hành khác (xác thực, phân
quyền, chấm điểm...).

## 7. Dependencies

- AHI Constitution
- AHI-Or Specification
- AHI-Workspace Specification
- AHI-Core Specification
- AHI-Factory Specification
- AHI-V Specification

## Changelog

| Phiên bản | Ngày | Mục thay đổi | Phạm vi |
|---|---|---|---|
| 001 | (khởi tạo) | Toàn bộ | Bản đặc tả gốc, bất biến, làm nền cho mọi bổ sung sau (án lệ) |
