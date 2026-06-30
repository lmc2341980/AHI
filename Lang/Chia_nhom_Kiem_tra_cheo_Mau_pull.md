# 🌿 TÀI LIỆU HƯỚNG DẪN QUẢN LÝ NHÁNH VÀ ĐÁNH GIÁ MÃ NGUỒN CHÉO DỰ ÁN AHI
*Tài liệu quy chuẩn phối hợp và kiểm soát an toàn mã nguồn dành cho các nhóm phát triển*

---

## 📅 1. Mô hình Phân rã Nhánh (Branching Model) Dự án AHI
Để đảm bảo nhiều nhóm chức năng có thể đồng thời phát triển các module phức tạp của hệ thống AHI (CSDL Lai, Lõi Rust, Vỏ Python) mà không gây xung đột (Conflict) mã nguồn, dự án áp dụng mô hình phân nhánh Monorepo cải tiến dưới đây.

```text
       ┌───> [feature/database] ───────> Nhóm 1: Triển khai Docker & SQL
       │
[main] ├───> [feature/rust-core] ──────> Nhóm 2: Phát triển thuật toán Lõi Rust
       │
       └───> [feature/python-shell] ───> Nhóm 3: Xây dựng vỏ ứng dụng Python
```

### 🔹 Quy định đặt tên và vai trò các Nhánh:
*   `main`: Nhánh gốc, lưu trữ phiên bản mã nguồn hoàn chỉnh và ổn định nhất của hệ thống AHI. **Tuyệt đối không một thành viên nào được phép commit hoặc push code trực tiếp lên nhánh này.**
*   `feature/database`: Nhánh triển khai cấu hình Docker, pgvector, khởi tạo cấu trúc bảng và quản lý tài nguyên DB (Do **Nhóm 1** đảm nhiệm).
*   `feature/rust-core`: Nhánh xử lý tính toán logic hệ thống cấp thấp, SIMD, giải thuật Tiến hóa, mạng Bayes và Background Daemon (Do **Nhóm 2** đảm nhiệm).
*   `feature/python-shell`: Nhánh xây dựng giao diện tương tác, kết nối API và luồng xử lý dữ liệu đầu vào bằng Python (Do **Nhóm 3** đảm nhiệm).

---

## 🛠️ 2. Quy trình Thiết lập và Quản lý Nhánh trên GitHub Desktop

Mọi thao tác quản lý nhánh hàng ngày sẽ được các nhóm thực hiện trực quan thông qua giao diện đồ họa của **GitHub Desktop** nhằm giảm thiểu sai sót lệnh:

### 🔹 Bước 2.1: Khởi tạo Nhánh chức năng (Dành cho Trưởng nhóm)
Khi bắt đầu một giai đoạn phát triển mới, Trưởng nhóm (hoặc Quản trị viên kho mã nguồn) sẽ tạo nhánh từ nhánh chính:
1.  Mở **GitHub Desktop** trên Windows, kiểm tra thanh công cụ trên cùng để đảm bảo **Current branch** đang chọn là `main`.
2.  Bấm vào nút **Fetch origin** để cập nhật trạng thái mới nhất từ đám mây.
3.  Bấm lại vào mục **Current branch**, chọn nút **New branch**.
4.  Nhập tên nhánh theo đúng quy ước phân vai (Ví dụ: `feature/rust-core`).
5.  Tại mục *Choose a branch to start from*, chọn `main`. Bấm **Create branch**.
6.  Bấm nút **Publish branch** xuất hiện ở góc phải thanh công cụ để đẩy nhánh này lên GitHub chung của nhóm.

### 🔹 Bước 2.2: Chuyển đổi Nhánh làm việc (Dành cho Thành viên)
Khi thành viên của một nhóm bắt đầu thực hiện phần việc được giao:
1.  Mở **GitHub Desktop**, bấm nút **Fetch origin** để cập nhật danh sách các nhánh mới được Trưởng nhóm tạo.
2.  Bấm vào mục **Current branch**, tìm trong danh sách và chọn đúng nhánh của nhóm mình (Ví dụ: chọn `feature/rust-core`).
3.  Mở phần mềm **Cursor Editor**, bạn sẽ thấy tên nhánh ở góc dưới cùng bên trái tự động chuyển đổi đồng bộ. Tiến hành viết code, sửa giải thuật và thực hiện lệnh **Commit** như bình thường trên nhánh này.

---

## 🔍 3. Quy trình Đánh giá Mã nguồn Chéo (Code Review & Pull Request)
Để bảo vệ nhánh `main` không bị dính mã lỗi, lỗi biên dịch Rust hoặc lỗi logic toán học, code từ các nhánh `feature/*` bắt buộc phải đi qua quy trình kiểm duyệt chéo (Pull Request) trước khi được gộp vào kho tổng.

```text
[Nhánh feature/*] ──> [Tạo Pull Request] ──> [Nhóm khác Review] ──> [Duyệt & Merge vào main]
```

### 🔹 Bước 3.1: Gửi yêu cầu gộp code (Create Pull Request)
Khi một nhóm đã hoàn thành module chức năng và chạy thử nghiệm cục bộ thành công:
1.  Đẩy toàn bộ mã nguồn mới nhất lên nhánh của mình bằng phần mềm **GitHub Desktop** (`Commit` -> `Push origin`).
2.  Nhìn lên thanh công cụ của GitHub Desktop, bấm vào nút **Create Pull Request** (hoặc vào menu `Branch` > `Create pull request`).
3.  Hệ thống sẽ tự động mở giao diện trang web GitHub trên trình duyệt.
4.  Điền thông tin yêu cầu:
    *   **Tiêu đề:** Ghi rõ tính năng hoàn thành (Ví dụ: `Feature: Hoàn thiện lõi tính toán mạng Bayes bất đồng bộ`).
    *   **Mô tả:** Liệt kê các file thay đổi, kết quả chạy thử nghiệm và các điểm lưu ý kỹ thuật.
    *   **Reviewers:** Chỉ định đích danh đại diện của một nhóm khác hoặc Trưởng nhóm để vào kiểm tra mã nguồn chéo.

### 🔹 Bước 3.2: Quy trình Đánh giá Chéo (Code Review Guideline)
Đại diện nhóm được chỉ định làm người duyệt (Reviewer) sẽ mở liên kết Pull Request trên website GitHub và thực hiện đánh giá theo các tiêu chí nghiêm ngặt sau:
*   **Tính biên dịch (Dành cho Rust):** Code Rust có đảm bảo tuân thủ nghiêm ngặt cơ chế quản lý bộ nhớ không? Có bị cảnh báo (warnings) nào khi chạy ở chế độ release không?
*   **Bảo mật dữ liệu:** Module mới có gọi qua Bộ lọc bảo mật chống độc hại (`RawKnowledgeInput`) chưa? Các tham số SQL có an toàn trước lỗ hổng SQL Injection không?
*   **Hiệu năng:** Hàm toán học vector đã được viết tối ưu bằng thuật toán SIMD để tận dụng phần cứng chưa?

*Thao tác trên giao diện GitHub Web:*
*   Nếu phát hiện dòng code lỗi: Click trực tiếp vào dòng đó trên giao diện web, chọn **Start a review** và để lại bình luận yêu cầu sửa chữa (Ví dụ: *"Dòng này chưa bắt lỗi chia cho 0 khi magnitude bằng không"*).
*   Nếu mã nguồn đạt yêu cầu: Bấm vào nút **Review changes** ở góc trên bên phải, chọn **Approve** (Chấp thuận).

### 🔹 Bước 3.3: Gộp mã nguồn chính thức (Merge Pull Request)
Sau khi Pull Request nhận được tối thiểu **1 lượt Approve** từ nhóm kiểm duyệt chéo và tất cả các bình luận góp ý đã được nhóm phát triển sửa đổi, Trưởng nhóm hoặc người có thẩm quyền sẽ thực hiện bước cuối cùng:
1.  Trên giao diện web của Pull Request, bấm vào nút màu xanh **Merge pull request**.
2.  Chọn **Confirm merge** để chính thức sáp nhập toàn bộ mã nguồn của nhánh chức năng vào nhánh chính `main`.
3.  Tất cả các thành viên trong dự án mở lại **GitHub Desktop** của mình, chuyển về nhánh `main`, bấm nút **Fetch origin** và **Pull origin** để cập nhật toàn bộ hệ thống AHI mới nhất về máy tính Windows của mình.

---

## 📄 4. Mẫu Ghi chú Duyệt Code Chuẩn (Pull Request Template)
Để chuẩn hóa thông tin bàn giao giữa các nhóm, mỗi khi một nhóm phát triển gửi yêu cầu gộp code (Pull Request) trên GitHub, nội dung mô tả bắt buộc phải tuân thủ và điền đầy đủ theo biểu mẫu kiểm duyệt dưới đây.

```markdown
## 📝 1. Tóm tắt Thay đổi (Summary of Changes)
*Mô tả ngắn gọn về tính năng mới, module hoặc giải thuật vừa được triển khai hoặc tối ưu hóa.*
- **Tính năng cốt lõi:** [Ví dụ: Triển khai thuật toán Tiến hóa tri thức di truyền di truyền bằng Rust]
- **Các tệp tin tạo mới/chỉnh sửa chính:** [Ví dụ: `src/evolution.rs`, `Cargo.toml`]
- **Mục tiêu đạt được:** [Ví dụ: Điểm `muc_do_tin_cay` tự động biến đổi tối ưu qua các thế hệ chạy ngầm]

## 🛠️ 2. Loại hình Chỉnh sửa (Type of Change)
*Vui lòng đánh dấu [x] vào ô phù hợp:*
- [ ] 🚀 Tính năng mới (New Feature)
- [ ] 🔧 Sửa lỗi logic/hệ thống (Bug Fix)
- [ ] ⚡ Tối ưu hóa hiệu năng/Phần cứng (Performance Optimization)
- [ ] 🛡️ Bảo mật/Bộ lọc dữ liệu (Security Fix)
- [ ] 📚 Cập nhật tài liệu hướng dẫn (Documentation Update)

## 🛡️ 3. Danh mục Kiểm tra Bảo mật & Chất lượng Code (Code Quality Checklist)
*Nhóm phát triển tự kiểm tra và đánh dấu [x] trước khi chỉ định nhóm khác Review:*
- [ ] **Biên dịch ổn định:** Mã nguồn Rust đã biên dịch thành công 100% không báo lỗi ở chế độ `--release`.
- [ ] **Bộ lọc độc hại:** Dữ liệu đầu vào của module đã đi qua lá chắn an toàn `RawKnowledgeInput`.
- [ ] **Chống SQL Injection:** Toàn bộ các tham số gọi dữ liệu đến PostgreSQL đã sử dụng cấu trúc Prepared Statement an toàn.
- [ ] **Tối ưu hóa phần cứng:** Các hàm xử lý mảng toán học đa chiều đã được cấu hình cờ SIMD (`target-cpu=native`).
- [ ] **Quản lý tài nguyên:** Background Worker đã được cấu hình cơ chế bất đồng bộ thông qua `tokio::time::interval`, không gây hiện tượng nghẽn luồng (Blocking).

## 🧪 4. Kết quả Thực nghiệm & Kiểm thử (Testing & Performance Results)
*Ghi lại minh chứng cho thấy mã nguồn đã chạy thành công ổn định cục bộ:*
- **Thời gian thực thi lõi (Microseconds):** [Ví dụ: Lõi Rust chạy mất 15 micro giây cho vector 768 chiều]
- **Nhật ký Log hệ thống:** [Dán 3-5 dòng log JSON từ tệp tin `logs/ahi-daemon.log` minh chứng hệ thống chạy mượt mà]
```

