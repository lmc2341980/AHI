# TÀI LIỆU HƯỚNG DẪN: THIẾT KẾ CƠ SỞ DỮ LIỆU LAI (HYBRID DATABASE) CHO AI THẾ HỆ MỚI
*Tích hợp lưu trữ quan hệ dữ liệu (DR) và Không gian Vector đa chiều*

---

## 🎯 1. Tổng quan Kiến trúc CSDL Lai (Hybrid)
Để xây dựng một dòng AI đi theo con đường khác biệt hoàn toàn với AGI hiện tại, hệ thống lưu trữ phải xử lý đồng thời hai dạng dữ liệu trên cùng một hạ tầng:
1.  **Dữ liệu quan hệ (DR):** Quản lý thực thể, nhãn (Label), điều kiện logic cứng và các tham số logic mờ.
2.  **Dữ liệu Vector:** Lưu trữ mảng số thực đa chiều đại diện cho "tọa độ ý niệm" hoặc không gian tri thức mà thuật toán AI của bạn tự định nghĩa.

### 🛠️ Bộ công cụ khuyến nghị triển khai:
*   **Hệ quản trị chính:** `PostgreSQL` (Mạnh mẽ, bảo mật, xử lý dữ liệu quan hệ tối ưu).
*   **Tiện ích mở rộng AI:** `pgvector` (Extension mã nguồn mở, biến PostgreSQL thành CSDL Vector hiệu năng cao).
*   **Môi trường vận hành:** `Docker Desktop trên Windows` (Giúp khởi chạy nhanh cụm DB lai mà không cần cấu hình thủ công phức tạp).

---

## 📐 2. Quy trình 5 Bước Thiết kế CSDL Lai

### 🔹 Bước 1: Mô hình hóa cấu trúc dữ liệu (Data Modeling)
Bóc tách thông tin của một thực thể tri thức thành hai phần bổ trợ cho nhau:
*   *Phần định danh & ngữ cảnh (DR):* Mã định danh, chủ đề, thời gian, mức độ tin cậy của dữ liệu.
*   *Phần định vị không gian (Vector):* Tọa độ hình học đa chiều phục vụ cho thuật toán tìm kiếm tương đồng mềm.

### 🔹 Bước 2: Thiết lập môi trường và cấu hình
Sử dụng **Cursor Editor** để quản lý dự án. Khởi tạo một file cấu hình database và sử dụng Docker để chạy container PostgreSQL đã tích hợp sẵn extension `pgvector` nhằm đảm bảo tính đồng bộ giữa các máy tính của thành viên trong nhóm.

### 🔹 Bước 3: Tạo cơ chế ánh xạ (Embedding Pipeline)
Viết các hàm xử lý nền (bằng Python hoặc Rust) để biến đổi dữ liệu thô đầu vào thành chuỗi Vector số thực có số chiều cố định trước khi nạp đồng thời cả thông tin quan hệ và vector vào hệ thống bảng.

### 🔹 Bước 4: Thiết lập chỉ mục (Indexing) tối ưu
*   Sử dụng chỉ mục **B-Tree** truyền thống cho các cột dữ liệu quan hệ (khóa chính, khóa ngoại, chủ đề) để tăng tốc độ lọc điều kiện cứng.
*   Sử dụng chỉ mục **HNSW (Hierarchical Navigable Small World)** cho cột Vector để xây dựng đồ thị liên kết, cho phép AI tìm kiếm các tri thức gần giống nhau nhất với tốc độ mili-giây.

### 🔹 Bước 5: Ứng dụng Truy vấn Lai (Hybrid Search)
Viết các câu lệnh SQL kết hợp: Vừa lọc chính xác theo điều kiện thuộc tính (Ví dụ: `chu_de = 'Logic_Mo'`), vừa quét không gian để tìm ra các bản ghi có khoảng cách toán học (Cosine/L2) gần nhất với ý niệm AI đang xử lý.

---

## 💾 3. Mã SQL Minh họa Khởi tạo Bảng mẫu `kho_tri_thuc_ai`

Dưới đây là kịch bản SQL chuẩn để thiết lập hệ thống lưu trữ lai với không gian tri thức **768 chiều** (Số chiều tối ưu cho sự cân bằng giữa hiệu năng và độ chính xác toán học):

```sql
-- =========================================================================
-- KỊCH BẢN KHỞI TẠO CƠ SỞ DỮ LIỆU LAI CHO DỰ ÁN AI THẾ HỆ MỚI
-- Hệ quản trị: PostgreSQL + pgvector
-- Không gian cấu trúc: 768 chiều hình học Vector
-- =========================================================================

-- BƯỚC 1: Kích hoạt extension pgvector trong cơ sở dữ liệu
CREATE EXTENSION IF NOT EXISTS pgvector;

-- BƯỚC 2: Tạo bảng lưu trữ dữ liệu lai (Hybrid Knowledge Base)
CREATE TABLE kho_tri_thuc_ai (
    -- ---------------------------------------------------------------------
    -- PHẦN DỮ LIỆU QUAN HỆ (DR) - Kế thừa tư duy cấu trúc hệ thống chặt chẽ
    -- ---------------------------------------------------------------------
    id BIGSERIAL PRIMARY KEY,                          -- Khóa chính tăng tự động
    ma_dinh_danh VARCHAR(50) UNIQUE NOT NULL,         -- Mã định danh duy nhất của thực thể tri thức
    chu_de VARCHAR(100) NOT NULL,                      -- Phân loại chủ đề cốt lõi
    muc_do_tin_cay NUMERIC(3,2) CHECK (muc_do_tin_cay >= 0.00 AND muc_do_tin_cay <= 1.00), 
                                                       -- Tham số cho thuật toán Logic Mờ (Ví dụ: 0.85)
    ngay_cap_nhat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Mốc thời gian hệ thống

    -- ---------------------------------------------------------------------
    -- PHẦN DỮ LIỆU HÌNH HỌC AI (VECTOR) - Không gian định vị tri thức đa chiều
    -- ---------------------------------------------------------------------
    toa_do_tri_thuc vector(768)                        -- Mảng 768 số thực đại diện cho tọa độ ý niệm
);

-- BƯỚC 3: Xây dựng các chỉ mục (Indexes) để tối ưu hóa hiệu năng truy vấn

-- Chỉ mục B-Tree truyền thống cho các trường dữ liệu quan hệ (DR)
CREATE INDEX idx_kho_tri_thuc_chu_de ON kho_tri_thuc_ai(chu_de);
CREATE INDEX idx_kho_tri_thuc_ma_dinh_danh ON kho_tri_thuc_ai(ma_dinh_danh);

-- Chỉ mục đồ thị HNSW cho trường Vector để tăng tốc độ tìm kiếm khoảng cách mềm
-- Sử dụng thuật toán vector_cosine_ops để tính toán độ tương đồng góc Cosine
CREATE INDEX idx_kho_tri_thuc_vector_hnsw ON kho_tri_thuc_ai 
USING hnsw (toa_do_tri_thuc vector_cosine_ops);

-- =========================================================================
-- VÍ DỤ MINH HỌA CÂU LỆNH TRUY VẤN LAI (HYBRID SEARCH)
-- Lọc cứng theo chủ đề đồng thời tìm 5 ý niệm tương đồng nhất trong không gian hình học
-- =========================================================================
-- SELECT id, ma_dinh_danh, chu_de, muc_do_tin_cay,
--        (toa_do_tri_thuc <=> '[0.012,-0.034,...,0.123]') AS khoang_cach_cosine
-- FROM kho_tri_thuc_ai
-- WHERE chu_de = 'Kien_Truc_He_Thong' AND muc_do_tin_cay > 0.70
-- ORDER BY toa_do_tri_thuc <=> '[0.012,-0.034,...,0.123]' ASC
-- LIMIT 5;
```
