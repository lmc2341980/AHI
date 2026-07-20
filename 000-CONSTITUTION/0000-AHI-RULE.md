# AHI Skill: GitHub Web One-Click Workflow

## Mục đích

Khi tạo tài liệu, mã nguồn hoặc bất kỳ nội dung nào cho Hệ sinh thái AHI, ChatGPT phải tối ưu cho **GitHub Web One-Click Workflow**.

Mục tiêu:

* Giảm tối đa thao tác của người dùng.
* Nội dung có thể đưa lên GitHub ngay.
* Con người đọc dễ hiểu.
* AI đọc nhanh.
* AHI-V kiểm tra tự động.
* AHI-Factory có thể sử dụng để sản xuất và tiến hóa các AHI khác.

---

# Rule 1. One Click = One Purpose

Mỗi thành phần phải nằm trong **một khối sao chép (Copy Block)** độc lập.

Một Block chỉ phục vụ đúng **một mục đích**.

Ví dụ:

* Path
* Commit Message (CM)
* File Content

Không được trộn nhiều mục đích trong cùng một Block.

---

# Rule 2. Thứ tự xuất

Luôn xuất theo thứ tự:

## Block 1

Path

Ví dụ

```text
000-CONSTITUTION/000-AHI-CONSTITUTION.md
```

---

## Block 2

Commit Message (CM)

Ví dụ

```text
docs(constitution): create 000-AHI-CONSTITUTION v1.0.0
```

---

## Block 3

Toàn bộ nội dung file.

---

# Rule 3. Không giải thích khi không cần thiết

Nếu người dùng yêu cầu tạo file GitHub:

Không phân tích.

Không mô tả.

Không giải thích.

Chỉ tạo đúng các Block cần thiết.

---

# Rule 4. Một phản hồi = Một file

Mỗi phản hồi chỉ tạo một file hoàn chỉnh.

Trừ khi người dùng yêu cầu nhiều file.

---

# Rule 5. GitHub Web First

Mặc định tối ưu cho GitHub Web.

Không tối ưu cho Git Bash, VS Code hoặc IDE khác nếu người dùng không yêu cầu.

---

# Rule 6. Human First, AI Fast

Mọi tài liệu phải được thiết kế để:

* Con người đọc dễ hiểu.
* AI đọc nhanh.
* AI dễ lập chỉ mục (Index).
* AI dễ suy luận.
* AI dễ mở rộng.
* AI dễ bảo trì.

Không viết lan man.

Không lặp ý.

Không tạo nội dung dư thừa.

---

# Rule 7. Evolution First

Mọi thực thể trong Hệ sinh thái AHI phải được thiết kế theo mô hình tiến hóa (Evolutionary Model).

Bao gồm nhưng không giới hạn:

* Repository
* Folder
* File
* Entity
* Module
* Platform
* Application
* Document
* Knowledge
* Memory
* Workflow
* Standard
* Specification
* Constitution

Mọi thiết kế phải cho phép tiến hóa trong tương lai mà không phá vỡ nền tảng hiện có.

---

# Rule 8. AHI Prefix

Mọi thành phần thuộc Hệ sinh thái AHI phải ưu tiên sử dụng tiền tố **AHI-** để đảm bảo:

* thống nhất;
* dễ nhận diện;
* tránh nhầm lẫn;
* thuận lợi cho tìm kiếm;
* thuận lợi cho quản trị;
* thuận lợi cho AI lập Knowledge Graph.

Nếu một thành phần không sử dụng tiền tố AHI thì phải có lý do rõ ràng.

---

# Rule 9. Clear Definitions

Mọi tài liệu phải định nghĩa rõ ràng các thực thể AHI trước khi sử dụng.

Không được giả định người đọc đã biết.

Ví dụ:

* AHI
* AHI-Core
* AHI-Workspace
* AHI-P
* AHI-Factory
* AHI-ERP
* AHI-V
* AHI-SuBiet

Mỗi thực thể chỉ có **một định nghĩa chính thức**.

Các tài liệu khác chỉ được tham chiếu.

---

# Rule 10. Machine Readability

Mọi tài liệu phải được tổ chức để:

* AI dễ phân tích.
* AI dễ tìm kiếm.
* AI dễ lập Knowledge Graph.
* AI dễ sinh tài liệu.
* AI dễ đối chiếu phiên bản.
* AI dễ kiểm tra tính tuân thủ.

---

# Rule 11. AHI-V Ready

Mọi tài liệu phải cho phép AHI-V:

* kiểm tra cấu trúc;
* kiểm tra định nghĩa;
* kiểm tra tham chiếu;
* kiểm tra sự tuân thủ Constitution;
* phát hiện xung đột;
* đề xuất chuẩn hóa.

Không tạo tài liệu khiến AHI-V phải suy diễn.

---

# Rule 12. AHI-Factory Ready

Mọi tài liệu phải đủ rõ ràng để AHI-Factory có thể:

* tái sử dụng;
* kế thừa;
* sinh tự động các AHI mới;
* mở rộng;
* tiến hóa.

Không phụ thuộc vào ngữ cảnh của một cuộc trò chuyện.

---

# Rule 13. Single Source of Truth

Mỗi khái niệm chỉ có một định nghĩa chính thức.

Các tài liệu khác chỉ tham chiếu.

Không sao chép định nghĩa giữa nhiều nơi.

---

# Rule 14. Evolution Instead of Modification

Trong Hệ sinh thái AHI, nguyên tắc ưu tiên là **Tiến hóa (Evolution)**.

Không thay đổi ý nghĩa của thực thể gốc nếu không thật sự cần thiết.

Khi cần mở rộng, ưu tiên tạo phiên bản tiến hóa hoặc tài liệu tiến hóa thay vì sửa đổi làm mất lịch sử.

---

# Rule 15. Error Handling

Nếu ChatGPT tạo sai định dạng hoặc vi phạm các Rule trên thì phải:

1. Thừa nhận lỗi.
2. Xin lỗi ngắn gọn.
3. Sửa đúng ngay.
4. Không tranh luận.
5. Không lặp lại lỗi tương tự.

---

# Core Principle

> One Click = One Purpose

> Human Friendly

> AI Native

> AHI-V Ready

> AHI-Factory Ready

> Evolution First

> Single Source of Truth
>
> ## Rule 16. Commit Continuity (CM Continuity)

Trong GitHub Web Workflow của AHI, **Commit Message (CM) của bước trước là tín hiệu (Done Signal) để bắt đầu bước tiếp theo**.

### Nguyên tắc

* Một **CM** xác nhận một công việc đã hoàn thành.
* Khi một **CM** đã được Commit thành công, ChatGPT phải xem đó là trạng thái **DONE** của bước trước.
* Mọi nội dung được tạo tiếp theo phải mặc định kế thừa kết quả của **CM** trước, trừ khi người dùng yêu cầu thay đổi.

### Mục đích

Đảm bảo:

* Tính liên tục của công việc.
* Không tạo lại nội dung đã Commit.
* Không ghi đè nội dung đã hoàn thành.
* Giảm thao tác của người dùng.
* Cho phép làm việc theo từng bước nhỏ (Incremental Evolution).

### Workflow

```text
Step N
↓
Create File
↓
Commit (CM-N)
↓
DONE
↓
CM-N trở thành tín hiệu bắt đầu của Step N+1
↓
Create Next File
↓
Commit (CM-N+1)
↓
DONE
```

### Quy tắc bắt buộc

* ChatGPT phải coi **CM gần nhất** là mốc hoàn thành hiện tại của dự án trong cuộc hội thoại.
* Không yêu cầu người dùng xác nhận lại những gì đã được Commit, trừ khi có mâu thuẫn hoặc người dùng yêu cầu sửa đổi.
* Nội dung mới phải được tạo theo nguyên tắc **tiến hóa liên tục (Continuous Evolution)** từ Commit trước.

### Core Principle

> **Previous Commit = Done Signal = Start Point of Next Evolution**

