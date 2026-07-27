# AHI-P Specification — 003 (Án lệ bổ sung)

**Artifact ID:** AHI-SPEC-P
**Entity:** AHI-P
**Full Name:** AHI-Person
**File Version:** 003
**Status:** Draft — chờ AHI-F phê duyệt
**Owner:** AHI-F (AHI-Founder)
**Source of Truth:** GitHub — AHI/AHI-Constitution
**Supersedes:** không thay thế 001/002 — chỉ điều chỉnh cách đọc 002 §10, không sửa file 002

> Kế thừa từ `002_AHI-P_Specification.md`, không mâu thuẫn với 001/002. Án lệ này chỉ
> điều chỉnh **cách hiểu đúng** của một điều khoản đã có tại 002, không xóa hay ghi đè
> nội dung 002.

---

## 1. Case phát sinh

Mục §10 tại `002_AHI-P_Specification.md` được viết dưới tiêu đề **"Computer Vision
(qua AHI-PS)"**, khiến người đọc dễ hiểu nhầm **AHI-PS là một module thị giác máy tính
riêng của AHI-P**. AHI-F đã làm rõ: đây là cách hiểu sai — AHI-PS có phạm vi rộng hơn
nhiều, là giao thức nền tảng của toàn hệ sinh thái AHI, không phải chức năng riêng của
một thực thể.

## 2. Điều khoản gốc liên quan

`002_AHI-P_Specification.md` §10 — "Computer Vision (qua AHI-PS)".

## 3. Điều chỉnh án lệ

### 3.1 AHI-PS là gì — định nghĩa đúng

**AHI-PS là giao thức giao tiếp nền tảng của toàn hệ sinh thái AHI** — đóng vai trò
tương tự **TCP/IP của Internet**, nhưng ở đây là giữa **AHI, Thiết bị, và Con người**.
Đây là một tầng giao tiếp chung, cho phép AHI, thiết bị phần cứng (chuyên dụng lẫn phổ
thông), và con người trao đổi dữ liệu/tín hiệu với nhau, không phân biệt loại thiết bị
hay loại thực thể AHI đang giao tiếp.

*Định nghĩa canonical đầy đủ của AHI-PS (vai trò hệ thống, quan hệ với API/MCP) được
lưu tại `AHI-Dinh-Nghia-Thuc-The.md` — đây là Single Source of Truth cho định nghĩa
AHI-PS. Văn bản 003 này không định nghĩa lại AHI-PS từ đầu, chỉ điều chỉnh cách 002 §10
cần được đọc.*

### 3.2 Mục tiêu dài hạn

AHI-PS hướng tới **hòa nhập trong suốt (transparent integration)**: ranh giới giao tiếp
giữa người, máy, và AI mờ dần theo thời gian, đến mức người dùng không còn cảm nhận
"đang dùng một giao thức" — thao tác diễn ra tự nhiên như một môi trường liền mạch.

### 3.3 Vị trí của Computer Vision trong khung mới

Thị giác máy tính (Computer Vision) của AHI-P là **một trong các chức năng** mà AHI-P
sử dụng **thông qua** giao thức AHI-PS — không phải định nghĩa của AHI-PS, và không
phải chức năng duy nhất. Các chức năng khác (âm thanh, xúc giác, cảm biến môi trường,
điều khiển thiết bị...) có thể được bổ sung trong tương lai qua cùng giao thức này,
theo án lệ tiếp theo khi phát sinh nhu cầu cụ thể — không tự suy diễn thêm ở đây.

### 3.4 Ảnh hưởng tới các mục khác của 002

- **002 §10** ("Computer Vision qua AHI-PS"): tiêu đề và nội dung vẫn giữ nguyên trong
  file 002 (không sửa file đã đánh số), nhưng từ nay được đọc cùng với án lệ 003 này để
  hiểu đúng: AHI-PS là giao thức, CV là một chức năng chạy qua giao thức đó.
- **002 §11** (Relationships — "Uses: ... AHI-PS ..."): không thay đổi nội dung liệt kê,
  chỉ thay đổi cách hiểu — AHI-P dùng AHI-PS như một **giao thức kết nối tầng dưới**,
  tương tự cách một ứng dụng "dùng TCP/IP", không phải một submodule chức năng riêng.

---

## 4. Changelog

| Phiên bản | Ngày | Mục thay đổi | Phạm vi / Giới hạn |
|---|---|---|---|
| 003 | 2026-07-24 | Điều chỉnh cách đọc 002 §10 | Định nghĩa lại đúng vai trò AHI-PS là giao thức nền tảng (tương tự TCP/IP giữa AHI-Thiết bị-Con người), không phải module CV riêng của AHI-P; xác định CV là một chức năng dùng qua giao thức AHI-PS; trỏ định nghĩa canonical AHI-PS về AHI-Dinh-Nghia-Thuc-The.md |
