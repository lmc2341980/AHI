# HƯỚNG DẪN ĐỊNH HƯỚNG KIẾN TRÚC & QUY TRÌNH PHÁT TRIỂN DỰ ÁN AI THẾ HỆ MỚI
*Tài liệu nội bộ dành cho đội ngũ phát triển dự án nghiên cứu dòng AI tách biệt với AGI và HAI*

---

## 🎯 1. Tầm nhìn chiến lược & Tiêu chí lựa chọn công nghệ

Để xây dựng một dòng AI đi theo con đường khác biệt hoàn toàn với **AGI (Trí tuệ nhân tạo tổng hợp dựa trên Học sâu/Transformer)** và **HAI (AI hướng nhân văn/Human-centric AI)**, hệ thống cốt lõi của chúng ta không thể phụ thuộc vào các khung phần mềm (framework) truyền thống. 

Kiến trúc mới đòi hỏi một ngôn ngữ lập trình phải thỏa mãn đồng thời **3 yếu tố cốt lõi**:
*   **Hiệu năng toán học cực cao:** Khả năng xử lý tính toán số học đại số tuyến tính không độ trễ.
*   **Quản lý bộ nhớ cấp thấp chặt chẽ:** Kiểm soát tài nguyên phần cứng trực tiếp (tương tự như Pascal nhưng mạnh mẽ hơn).
*   **Xử lý song song lý tưởng:** Khả năng tận dụng tối đa kiến trúc đa nhân của CPU và tính toán song song trên GPU mà không bị xung đột dữ liệu (Data races).

---

## 💻 2. Bản đồ công nghệ của Dự án (Tech Stack)

Hệ thống của chúng ta sẽ được xây dựng dựa trên mô hình **"Vỏ Python - Lõi Hệ thống"** để tối ưu hóa cả tốc độ phát triển lẫn hiệu năng vận hành.

### 🐍 Lựa chọn 1: Python (Đóng vai trò làm "Vỏ" kiến trúc)
*   **Ưu điểm:** Hệ sinh thái toán học, xử lý ma trận và quản trị dữ liệu lớn mạnh nhất thế giới. Hầu hết các công cụ AI hỗ trợ code hiện nay đều ưu tiên tối ưu cho Python đầu tiên.
*   **Nhược điểm:** Tốc độ thực thi chậm ở cấp độ biên dịch.
*   **Vai trò trong dự án:** Dùng để xây dựng các bản mẫu thử nghiệm nhanh (Prototype), kiểm tra tính đúng đắn của thuật toán mới trước khi đưa vào tối ưu phần cứng.

### 🦀 Lựa chọn 2: Rust hoặc C++ (Đóng vai trò làm "Lõi" kiến trúc)
*Khi định nghĩa lại cách máy tính tư duy từ cấp phần cứng, chúng ta không thể dùng lại các thư viện cũ của AGI (như PyTorch/TensorFlow). Nhóm cần chọn một trong hai ngôn ngữ hệ thống sau:*

*   **Rust (Khuyến nghị hàng đầu):** 
    *   Ngôn ngữ hoàn hảo nhất cho các kiến trúc AI thế hệ mới.
    *   An toàn tuyệt đối về bộ nhớ (loại bỏ hoàn toàn rủi ro crash hệ thống nhờ cơ chế *Ownership*).
    *   Tốc độ thực thi nhanh ngang ngửa C++.
    *   Tư duy lập trình hệ thống chặt chẽ, tường minh (rất quen thuộc nếu các thành viên từng có nền tảng từ ngôn ngữ Pascal hiện đại).
*   **C++ (Lựa chọn thay thế):**
    *   Ngôn ngữ đứng sau hầu hết các mô hình tính toán lớn hiện nay.
    *   Khả năng can thiệp cực sâu vào chip đồ họa (GPU) và tối ưu hóa phần cứng.
    *   *Lưu ý:* Rất khó kiểm soát lỗi rò rỉ bộ nhớ (Memory leak) đối với nhân sự mới.

---

## 🛠️ 3. Quy trình thiết lập môi trường phát triển (Dành cho Windows)

Đội ngũ phát triển trên hệ điều hành Windows sẽ tuân thủ quy trình thiết lập chuẩn hóa bằng bộ công cụ: **Cursor Editor (AI-first IDE) + GitHub Desktop**.

### 🔹 Bước 1: Cài đặt công cụ lập trình Cursor
1. Tải và cài đặt phần mềm chỉnh sửa mã nguồn tại: [cursor.com](https://cursor.com).
2. Đăng nhập tài khoản và cấu hình các phím tắt cơ bản (Khuyến nghị chọn cấu hình tương thích với VS Code để dễ đồng bộ cấu hình trong nhóm).

### 🔹 Bước 2: Liên kết hệ thống quản lý mã nguồn GitHub
1. Tải phần mềm quản lý mã nguồn trực quan: [GitHub Desktop](https://github.com).
2. Tiến hành Clone hoặc khởi tạo Repository của dự án về máy cục bộ.
3. Liên kết thư mục dự án đó với phần mềm **Cursor Editor** để sẵn sàng đồng bộ mã nguồn bằng chuột (không cần gõ lệnh Git phức tạp).

### 🔹 Bước 3: Quy trình phát triển mã nguồn phối hợp với AI
1. Sử dụng tính năng AI tích hợp trong Cursor (nhấn `Ctrl + K` hoặc `Ctrl + L`) để ra lệnh thiết kế các cấu trúc hàm cơ bản bằng **Python**.
2. Thực thi thử nghiệm, kiểm tra logic thuật toán AI mới trên môi trường Python xem đã đi đúng hướng thiết kế chưa.
3. Khi cấu trúc logic đã chạy thành công và đạt độ ổn định, ra lệnh cho AI (Claude/Cursor) **"dịch và tối ưu hóa"** toàn bộ cấu trúc logic đó sang ngôn ngữ **Rust** nhằm đạt hiệu năng xử lý cốt lõi tối đa.

---

## 💡 4. Khung thảo luận định hình lõi AI của Nhóm
> **Lưu ý quan trọng cho các buổi họp Kiến trúc kế tiếp:** Ý tưởng đi tìm một hướng đi mới độc lập với mạng thần kinh (Neural Networks) hiện tại của AGI là một hướng đi rất táo bạo. Để chuẩn bị thiết lập các tệp mã nguồn cốt lõi đầu tiên, toàn đội cần thống nhất:

*   Hệ thống AI mới này sẽ xử lý và lưu trữ dữ liệu dựa trên nguyên lý toán học nào?
    *   *Gợi ý định hướng:* Hệ thống dựa trên **Logic mờ (Fuzzy Logic)**, **Thuật toán tiến hóa (Evolutionary Algorithms)**, hay tái cấu trúc **Hệ thống dựa trên tri thức (Knowledge-based Systems)** kết hợp tư duy quản trị cơ sở dữ liệu lớn (như triết lý của Foxpro)?
