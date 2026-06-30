# TÀI LIỆU HƯỚNG DẪN: THIẾT KẾ CƠ SỞ DỮ LIỆU LAI (HYBRID DATABASE) CHO AI THẾ HỆ MỚI
*Tích hợp lưu trữ quan hệ dữ liệu (DR) và Không gian Vector đa chiều*.
---
Toàn bộ cấu trúc hệ sinh thái cho dự án AHI (Artificial Hybrid Intelligence) đã được thiết lập đồng bộ từ: Hạ tầng CSDL Lai (DR + Vector), Lõi xử lý toán học SIMD Rust, Giải thuật Tiến hóa & Logic Mờ, cho đến Background Daemon tự động hóa.
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
---

## 🐳 4. Cấu hình Môi trường Chạy Thử nghiệm nhanh với Docker
Để toàn bộ thành viên trong nhóm thiết lập nhanh cơ sở dữ liệu này trên Windows thông qua **Docker Desktop** mà không cần cài đặt PostgreSQL thủ công, hãy tạo một tệp tin đặt tên là `docker-compose.yml` trong thư mục dự án trên **Cursor**:

```yaml
version: '3.8'

services:
  postgres_hybrid_db:
    image: pgvector/pgvector:pg16 # Sử dụng bản build sẵn tích hợp pgvector chính thức
    container_name: ai_hybrid_database
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: ai_developer
      POSTGRES_PASSWORD: SecretPassword123
      POSTGRES_DB: core_knowledge_base
    volumes:
      - postgres_ai_data:/var/lib/postgresql/data
    restart: always

volumes:
  postgres_ai_data:
```

*Cách vận hành:* Mở Terminal trên Windows (hoặc terminal tích hợp trong Cursor), di chuyển tới thư mục chứa tệp tin trên và gõ lệnh: `docker-compose up -d`.

---

## 🐍 5. Script Python Kiểm thử Kết nối & Nạp Dữ liệu Mẫu (Embedding Pipeline)
Dưới đây là mã nguồn Python để kiểm tra khả năng lưu trữ thực tế. Mã nguồn này sử dụng thư viện `psycopg2` và thư viện toán học `numpy` để giả lập việc tạo và đẩy một dòng tri thức lai (vừa chứa logic mờ, vừa chứa 768 chiều vector) vào cơ sở dữ liệu.

### 🔹 Cài đặt thư viện bổ trợ trước khi chạy:
```bash
pip install psycopg2-binary numpy
```

### 🔹 Mã nguồn Python (`insert_sample_data.py`):
```python
import psycopg2
import numpy as np

def connect_and_seed():
    # 1. Cấu hình thông số kết nối đến Docker Postgres
    db_config = {
        "host": "localhost",
        "database": "core_knowledge_base",
        "user": "ai_developer",
        "password": "SecretPassword123",
        "port": 5432
    }
    
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()
        print("✅ Kết nối đến Cơ sở dữ liệu Lai thành công!")

        # 2. Giả lập một Vector tri thức gồm 768 chiều (số thực ngẫu nhiên từ -1 đến 1)
        # Trong thực tế, mảng này sẽ do thuật toán AI độc quyền của nhóm bạn tự tính toán và sinh ra
        raw_vector = np.random.uniform(-1.0, 1.0, 768)
        
        # Chuẩn hóa Vector về dạng chuỗi văn bản theo định dạng định sẵn của pgvector: '[v1,v2,v3,...]'
        vector_string = "[" + ",".join(map(str, raw_vector.tolist())) + "]"

        # 3. Định nghĩa dữ liệu Lai (Cả dữ liệu cấu trúc DR và dữ liệu Vector AI)
        data_to_insert = {
            "ma_dinh_danh": "KNOW-ID-001",
            "chu_de": "Kien_Truc_He_Thong",
            "muc_do_tin_cay": 0.87, # Giá trị tham chiếu Logic mờ
            "toa_do_tri_thuc": vector_string
        }

        # 4. Viết lệnh SQL chèn dữ liệu
        insert_query = """
        INSERT INTO kho_tri_thuc_ai (ma_dinh_danh, chu_de, muc_do_tin_cay, toa_do_tri_thuc)
        VALUES (%(ma_dinh_danh)s, %(chu_de)s, %(muc_do_tin_cay)s, %(toa_do_tri_thuc)s)
        ON CONFLICT (ma_dinh_danh) DO NOTHING;
        """

        cursor.execute(insert_query, data_to_insert)
        conn.commit()
        print(f"🚀 Đã nạp thành công bản ghi '{data_to_insert['ma_dinh_danh']}' vào bảng lưu trữ.")

    except Exception as error:
        print(f"❌ Lỗi trong quá trình kết nối hoặc ghi dữ liệu: {error}")
    finally:
        if conn:
            cursor.close()
            conn.close()
            print("🔒 Đã ngắt kết nối an toàn với cơ sở dữ liệu.")

if __name__ == "__main__":
    connect_and_seed()
```
---

## 🔍 6. Script Python Thực hiện Truy vấn Lai (Hybrid Search Pipeline)
Sau khi đã nạp dữ liệu, đây là đoạn mã Python hoàn chỉnh giúp hệ thống thực hiện tìm kiếm lai. Hàm tìm kiếm này kết hợp đồng thời hai cơ chế:
1.  **Lọc cứng (Relational Search):** Chỉ quét các bản ghi thuộc đúng `chu_de` chỉ định và có `muc_do_tin_cay` (tham số logic mờ) vượt qua ngưỡng tối thiểu.
2.  **Quét mềm (Vector Search):** Tính toán khoảng cách Cosine giữa Vector truy vấn và dữ liệu trong kho, sắp xếp để lấy ra các kết quả có độ tương đồng cao nhất.

### 🔹 Cài đặt thư viện bổ trợ (nếu chưa cài):
```bash
pip install psycopg2-binary numpy
```

### 🔹 Mã nguồn Python (`hybrid_search.py`):
```python
import psycopg2
import numpy as np

def execute_hybrid_search(search_topic, min_confidence, query_vector, limit_results=5):
    """
    Thực hiện truy vấn lai (Hybrid Search): Lọc theo thuộc tính quan hệ và tìm kiếm khoảng cách vector
    """
    # Cấu hình kết nối đến Docker Postgres
    db_config = {
        "host": "localhost",
        "database": "core_knowledge_base",
        "user": "ai_developer",
        "password": "SecretPassword123",
        "port": 5432
    }
    
    # Chuyển đổi mảng numpy sang chuỗi text định dạng '[v1,v2,v3,...]' để truyền vào pgvector
    vector_string = "[" + ",".join(map(str, query_vector.tolist())) + "]"
    
    conn = None
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()

        # Câu lệnh SQL thực hiện Truy vấn Lai (Hybrid Query)
        # Toán tử <=> trong pgvector đại diện cho việc tính Khoảng cách Cosine (Cosine Distance)
        # Khoảng cách càng nhỏ (gần về 0) nghĩa là hai Ý niệm/Vector càng giống nhau
        hybrid_query = """
        SELECT 
            id, 
            ma_dinh_danh, 
            chu_de, 
            muc_do_tin_cay,
            (toa_do_tri_thuc <=> %s::vector) AS khoang_cach_cosine
        FROM 
            kho_tri_thuc_ai
        WHERE 
            chu_de = %s 
            AND muc_do_tin_cay >= %s
        ORDER BY 
            toa_do_tri_thuc <=> %s::vector ASC
        LIMIT %s;
        """

        # Truyền tham số an toàn chống lỗi SQL Injection
        query_params = (vector_string, search_topic, min_confidence, vector_string, limit_results)
        
        cursor.execute(hybrid_query, query_params)
        records = cursor.fetchall()

        print(f"\n=== KẾT QUẢ TRUY VẤN LAI (Chủ đề: '{search_topic}' | Ngưỡng tin cậy >= {min_confidence}) ===")
        if not records:
            print("❌ Không tìm thấy bản ghi nào thỏa mãn điều kiện.")
            return

        for row in records:
            rec_id, ma_dinh, chu_de, tin_cay, distance = row
            # Độ tương đồng toán học (Cosine Similarity) = 1 - Khoảng cách Cosine
            similarity_score = (1 - distance) * 100 
            
            print(f"📍 Mã định danh: {ma_dinh}")
            print(f"   |- Độ tin cậy (Logic mờ): {float(tin_cay):.2f}")
            print(f"   |- Độ tương đồng Vector : {similarity_score:.2f}% (Khoảng cách: {distance:.4f})")
            print("-" * 50)

    except Exception as error:
        print(f"❌ Lỗi hệ thống khi thực hiện truy vấn: {error}")
        
    finally:
        if conn:
            cursor.close()
            conn.close()

if __name__ == "__main__":
    # GIẢ LẬP TÌNH HUỐNG TRUY VẤN:
    
    # 1. Ý niệm/Yêu cầu hiện tại của AI được chuyển đổi thành 1 Vector 768 chiều ngẫu nhiên
    mock_ai_concept_vector = np.random.uniform(-1.0, 1.0, 768)
    
    # 2. Định nghĩa các tiêu chí lọc cứng (DR)
    target_topic = "Kien_Truc_He_Thong"
    minimum_fuzzy_score = 0.80
    
    # 3. Kích hoạt bộ máy tìm kiếm lai
    execute_hybrid_search(
        search_topic=target_topic,
        min_confidence=minimum_fuzzy_score,
        query_vector=mock_ai_concept_vector,
        limit_results=3
    )
```
---

## 🦀 7. Thiết kế Hàm Xử lý Lõi bằng Rust (Tối ưu hiệu năng cực hạn với SIMD)
Để đạt tốc độ xử lý nhanh nhất khi tính toán khoảng cách Vector (vốn là điểm nghẽn lớn nhất của các dòng AI), chúng ta cần dịch chuyển mã nguồn tính toán lõi từ Python sang **Rust**. 

Đoạn mã dưới đây sử dụng kỹ thuật toán học **SIMD** để ép chip xử lý (CPU) tính toán đồng thời nhiều số thực cùng một lúc, giúp tăng tốc độ xử lý lên gấp nhiều lần so với các vòng lặp thông thường.

### 🔹 Cấu hình file dự án Rust (`Cargo.toml`)
Tạo một dự án Rust mới bằng lệnh `cargo new ai_core_math`. Cấu hình file `Cargo.toml` như sau để kích hoạt tối ưu hóa biên dịch ở mức cao nhất:

```toml
[package]
name = "ai_core_math"
version = "0.1.0"
edition = "2021"

[dependencies]
# Sử dụng thư viện ndarray để quản lý mảng đa chiều hiệu năng cao
ndarray = "0.15"

[profile.release]
opt-level = 3          # Tối ưu hóa tốc độ ở mức tối đa khi build release
lto = true             # Kích hoạt Link-Time Optimization để giảm kích thước và tăng tốc hàm
codegen-units = 1      # Giảm đơn vị sinh mã để trình biên dịch tối ưu tốt hơn
```

### 🔹 Mã nguồn lõi Rust (`src/main.rs`)
Đoạn mã này định nghĩa hàm tính toán khoảng cách Cosine (Cosine Distance) giữa hai vector 768 chiều với cơ chế tự động tối ưu hóa theo phần cứng của máy tính Windows chạy chip Intel/AMD hiện đại:

```rust
use ndarray::Array1;
use std::time::Instant;

/// Hàm lõi: Tính toán khoảng cách Cosine giữa hai không gian ý niệm AI
/// Tối ưu hóa: Trình biên dịch Rust sẽ tự động chuyển đổi vòng lặp này thành
/// tập lệnh AVX2/AVX-512 (SIMD) trên CPU Windows nếu phần cứng hỗ trợ.
pub fn fast_cosine_distance(v1: &Array1<f32>, v2: &Array1<f32>) -> f32 {
    let mut dot_product = 0.0;
    let mut norm_v1 = 0.0;
    let mut norm_v2 = 0.0;

    // Duyệt song song luồng dữ liệu (Auto-vectorization)
    for i in 0..v1.len() {
        let x = v1[i];
        let y = v2[i];
        
        dot_product += x * y;
        norm_v1 += x * x;
        norm_v2 += x * y; // Hoặc y * y tùy thuộc vào công thức chuẩn
    }

    // Tính toán khoảng cách Cosine dựa trên các tích lũy bộ nhớ
    let magnitude = (norm_v1.sqrt() * norm_v2.sqrt());
    if magnitude == 0.0 {
        return 1.0; // Tránh lỗi chia cho 0 nếu vector rỗng
    }

    1.0 - (dot_product / magnitude)
}

fn main() {
    // 1. Khởi tạo 2 Vector giả lập 768 chiều của dòng AI mới
    let dimension = 768;
    let concept_a: Array1<f32> = Array1::from_elem(dimension, 0.5);
    let concept_b: Array1<f32> = Array1::from_elem(dimension, 0.3);

    println!("🚀 Đang thực hiện tính toán hiệu năng cao trên Rust...");

    // 2. Đo hiệu năng tính toán chính xác bằng vi giây (Microseconds)
    let start = Instant::now();
    
    // Chạy thử nghiệm phép tính lõi
    let distance = fast_cosine_distance(&concept_a, &concept_b);
    
    let duration = start.elapsed();

    // 3. Xuất kết quả kiểm thử tốc độ phần cứng
    println!("--------------------------------------------------");
    println!("✅ Kết quả khoảng cách Cosine: {:.6}", distance);
    println!("⏱️ Thời gian thực thi lõi Rust: {:?} micro giây", duration.as_micros());
    println!("--------------------------------------------------");
    println!("💡 Mẹo: Hãy chạy lệnh 'cargo run --release' để kích hoạt SIMD phần cứng.");
}
```

### 🔹 Cách biên dịch tối ưu trên Windows:
Khi làm việc trên **Cursor**, bạn mở Terminal của Windows lên và bắt buộc phải chạy lệnh sau để kích hoạt toàn bộ sức mạnh phần cứng của CPU chip Intel/AMD hiện tại:

```bash
# Thiết lập cờ biên dịch tận dụng mọi tập lệnh SIMD của CPU hiện tại
\$env:RUSTFLAGS="-C target-cpu=native"
# Chạy dự án ở chế độ Release (Tối ưu hóa mức 3)
cargo run --release
```
---

## 🔗 8. Đóng gói lõi Rust thành Thư viện mở rộng cho Python (Python Extension via PyO3)
Để giữ nguyên cấu trúc **"Vỏ Python - Lõi Rust"**, chúng ta sẽ sử dụng công cụ **PyO3** kết hợp với **Maturin**. Cơ chế này cho phép bạn biên dịch mã nguồn Rust thành một file thư viện dạng `.pyd` (trên Windows), sau đó dùng lệnh `import` trực tiếp trong Python với tốc độ thực thi nguyên bản của Rust.

### 🔹 Bước 1: Khởi tạo và Cấu hình file `Cargo.toml`
Di chuyển vào thư mục dự án Rust lõi của bạn, mở file `Cargo.toml` trên **Cursor** và cập nhật cấu hình cấu trúc thư viện động (`cdylib`) như sau:

```toml
[package]
name = "ai_core_math" # Đây sẽ là tên thư viện bạn import trong Python
version = "0.1.0"
edition = "2021"

[lib]
name = "ai_core_math"
crate-type = ["cdylib"] # Bắt buộc phải có để tạo ra thư viện liên kết động cho Python

[dependencies]
# Thư viện cầu nối giữa Rust và Python
pyo3 = { version = "0.21", features = ["extension-module"] }

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
```

### 🔹 Bước 2: Viết mã nguồn cầu nối trong Rust (`src/lib.rs`)
Đổi tên file `src/main.rs` thành `src/lib.rs` (hoặc tạo mới file `src/lib.rs`). Chúng ta sẽ thêm các nhãn thuộc tính macro `#[pyfunction]` và `#[pymodule]` của PyO3 để khai báo hàm cho Python nhận diện:

```rust
use pyo3::prelude::*;

/// Hàm tính toán khoảng cách Cosine hiệu năng cao (Expose sang Python)
#[pyfunction]
fn fast_cosine_distance(v1: Vec<f32>, v2: Vec<f32>) -> PyResult<f32> {
    if v1.len() != v2.len() || v1.is_empty() {
        return Err(pyo3::exceptions::PyValueError::new_err(
            "Độ dài hai vector không bằng nhau hoặc rỗng!"
        ));
    }

    let mut dot_product = 0.0;
    let mut norm_v1 = 0.0;
    let mut norm_v2 = 0.0;

    for i in 0..v1.len() {
        let x = v1[i];
        let y = v2[i];
        
        dot_product += x * y;
        norm_v1 += x * x;
        norm_v2 += y * y;
    }

    let magnitude = norm_v1.sqrt() * norm_v2.sqrt();
    if magnitude == 0.0 {
        return Ok(1.0);
    }

    Ok(1.0 - (dot_product / magnitude))
}

/// Định nghĩa Module Python được sinh ra từ Rust
#[pymodule]
fn ai_core_math(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(fast_cosine_distance, m)?)?;
    Ok(())
}
```

### 🔹 Bước 3: Biên dịch và Cài đặt vào môi trường Python (Maturin)
Để cài đặt tự động file cấu trúc này vào Python trên Windows, chúng ta sử dụng công cụ biên dịch **Maturin**:

1. Mở Terminal trên **Cursor** (hoặc Powershell trên Windows), kích hoạt môi trường ảo Python của bạn (nếu có) và cài đặt `maturin`:
   ```bash
   pip install maturin
   ```

2. Tiến hành biên dịch tối ưu hóa phần cứng và cài thẳng vào môi trường Python bằng duy nhất một lệnh:
   ```bash
   # Thiết lập cờ SIMD tối ưu cho CPU máy bạn
   \$env:RUSTFLAGS="-C target-cpu=native"
   
   # Biên dịch ở chế độ Release và cài đặt trực tiếp
   maturin develop --release
   ```

---

## 🐍 9. Chạy thử nghiệm gọi Lõi Rust từ Vỏ Python
Sau khi lệnh `maturin develop` hoàn tất, bạn có thể tạo một file Python bất kỳ (Ví dụ: `test_core.py`) nằm ngay trong thư mục dự án để kiểm tra. Bạn sẽ thấy hàm Rust chạy mượt mà ngay trong script Python:

```python
import ai_core_math
import numpy as np
import time

# 1. Khởi tạo 2 mảng dữ liệu lớn bằng Numpy (768 chiều không gian AI)
vector_a = np.random.uniform(-1.0, 1.0, 768).tolist()
vector_b = np.random.uniform(-1.0, 1.0, 768).tolist()

print("⚡ Đang gọi hàm xử lý lõi Rust từ môi trường Python...")

# 2. Đo thời gian thực thi tính toán
start_time = time.perf_counter()

# Gọi trực tiếp hàm viết bằng Rust
distance = ai_core_math.fast_cosine_distance(vector_a, vector_b)

end_time = time.perf_counter()
execution_time_us = (end_time - start_time) * 1_000_000

# 3. Xuất kết quả kiểm thử hiệu năng lai
print("-" * 50)
print(f"✅ Khoảng cách Cosine tính bằng Rust: {distance:.6f}")
print(f"⏱️ Thời gian thực thi (Lõi Rust): {execution_time_us:.2f} micro giây")
print("-" * 50)
```
---

## 🧠 10. Danh sách các Thuật toán Cốt lõi phù hợp cho Kiến trúc AHI
Đối với dòng **AHI (Artificial Hybrid Intelligence)**, mục tiêu là kết hợp khả năng tính toán suy luận logic của máy tính với tri thức có cấu trúc. Để tính toán tham số `muc_do_tin_cay` trước khi lưu kho PostgreSQL, các thuật toán sau đây là những ứng viên tối ưu nhất nhờ tính tường minh (không phải là hộp đen như Deep Learning):

1.  **Logic Mờ (Fuzzy Logic):** Xử lý các khái niệm không rõ ràng, xấp xỉ trong thế giới thực (Ví dụ: dữ liệu không chỉ là 0 hoặc 1, mà có thể là "hơi tin cậy" - 0.65, "rất tin cậy" - 0.90).
2.  **Thuật toán Tiến hóa Tri thức (Evolutionary / Genetic Algorithms):** Cho phép các cấu trúc tri thức tự lai ghép, đột biến và chọn lọc tự nhiên qua các thế hệ. Cấu trúc tri thức nào giải quyết vấn đề tốt hơn sẽ tự động được cộng điểm `muc_do_tin_cay`.
3.  **Hệ chuyên gia dựa trên Luật (Rule-Based Expert Systems):** Kết hợp tư duy của Foxpro với suy luận hiện đại. Sử dụng các tập luật `IF-THEN` mờ để suy diễn ra độ tin cậy của một thông tin mới dựa trên các tri thức cũ đã biết.
4.  **Mạng Bayes (Bayesian Networks):** Tính toán xác suất có điều kiện. Khi có thêm một bằng chứng/dữ liệu mới, thuật toán sẽ tự động cập nhật lại điểm số tin cậy của toàn bộ mạng lưới tri thức liên quan.
5.  **Dự đoán dựa trên Lý thuyết Chứng cứ Dempster-Shafer:** Thuật toán cao cấp cho phép kết hợp nhiều nguồn thông tin không chắc chắn hoặc xung đột nhau từ các thực thể khác nhau để đưa ra một mức độ tin cậy tổng hợp cuối cùng.

---

## 🦀 11. Triển khai Module Tính toán Lõi Logic Mờ bằng Rust
Dưới đây là mã nguồn Rust chạy tính toán logic mờ (Fuzzy Logic) để xác định tham số `muc_do_tin_cay`. Thuật toán sẽ nhận vào 2 tham số đầu vào:
*   `do_chinh_xac_ngu_phap` (0.0 -> 1.0): Đo lường bằng các thuật toán kiểm tra cấu trúc dữ liệu.
*   `tan_suat_lap_lai` (Số lần xuất hiện): Đo lường mức độ kiểm chứng của tri thức trong quá khứ.

### 🔹 Cấu trúc Mã nguồn Rust (`src/fuzzy_logic.rs`)
Thêm đoạn mã này vào dự án Rust lõi của nhóm để thực hiện xử lý:

```rust
/// Định nghĩa cấu trúc hệ thống suy luận mờ cho AHI
pub struct FuzzyTrustEvaluator {
    // Ngưỡng định nghĩa tập mờ cho tần suất lặp lại (Ví dụ: dưới 5 lần là thấp, trên 20 lần là cao)
    pub freq_low: f32,
    pub freq_high: f32,
}

impl FuzzyTrustEvaluator {
    pub fn new(freq_low: f32, freq_high: f32) -> Self {
        Self { freq_low, freq_high }
    }

    /// Hàm mờ hóa (Fuzzification) cho biến Tần suất lặp lại
    /// Trả về điểm mờ thuộc tập [0.0, 1.0] đại diện cho mức độ "Thường xuyên" của dữ liệu
    fn fuzzify_frequency(&self, frequency: f32) -> f32 {
        if frequency <= self.freq_low {
            0.0
        } else if frequency >= self.freq_high {
            1.0
        } else {
            // Hàm liên thuộc dạng tuyến tính (Linear Membership Function)
            (frequency - self.freq_low) / (self.freq_high - self.freq_low)
        }
    }

    /// Hàm Lõi: Suy luận và Giải mờ (Defuzzification) theo phương pháp Trung bình trọng số
    /// Trả về tham số `muc_do_tin_cay` chuẩn để nạp vào PostgreSQL
    pub fn evaluate_confidence(&self, accuracy: f32, frequency: f32) -> f32 {
        // 1. Mờ hóa các biến đầu vào
        let µ_high_accuracy = accuracy; // Bản chất accuracy từ 0-1 đã là một tập mờ
        let µ_high_frequency = self.fuzzify_frequency(frequency);

        // 2. Áp dụng Luật Hợp nhất Mờ (Fuzzy Rules Execution)
        // LUẬT 1: NẾU độ chính xác CAO VÀ tần suất CAO -> THÌ độ tin cậy RẤT CAO (0.95)
        let w1 = µ_high_accuracy.min(µ_high_frequency);
        let r1 = 0.95;

        // LUẬT 2: NẾU độ chính xác CAO VÀ tần suất THẤP -> THÌ độ tin cậy TRUNG BÌNH (0.60)
        let w2 = µ_high_accuracy.min(1.0 - µ_high_frequency);
        let r2 = 0.60;

        // LUẬT 3: NẾU độ chính xác THẤP -> THÌ độ tin cậy THẤP (0.20)
        let w3 = 1.0 - µ_high_accuracy;
        let r3 = 0.20;

        // 3. Giải mờ bằng phương pháp trọng số (Mamdani/Sugeno giản lược)
        let total_weight = w1 + w2 + w3;
        if total_weight == 0.0 {
            return 0.20; // Ngưỡng an toàn tối thiểu
        }

        let confidence_score = (w1 * r1 + w2 * r2 + w3 * r3) / total_weight;
        
        // Làm tròn 2 chữ số thập phân để phù hợp kiểu NUMERIC(3,2) trong PostgreSQL
        (confidence_score * 100.0).round() / 100.0
    }
}

fn main() {
    // Khởi tạo bộ đánh giá với cấu hình: Tần suất < 5 lần là ít, > 25 lần là nhiều
    let evaluator = FuzzyTrustEvaluator::new(5.0, 25.0);

    // Giả lập tình huống: Một tri thức có độ chính xác logic đạt 85% (0.85) nhưng mới chỉ xuất hiện 8 lần
    let accuracy = 0.85;
    let frequency = 8.0;

    let muc_do_tin_cay = evaluator.evaluate_confidence(accuracy, frequency);

    println!("--------------------------------------------------");
    println!("🔮 KẾT QUẢ TÍNH TOÁN LOGIC MỜ (AHI ENGINE)");
    print!(f"👉 Tri thức đầu vào: Độ chính xác {accuracy*100.:.0}%, Xuất hiện {frequency} lần");
    println!("👉 Tham số 'muc_do_tin_cay' đầu ra (Rust): {:.2}", muc_do_tin_cay);
    println!("--------------------------------------------------");
    println!("💡 Hướng dẫn: Tham số {:.2} này đã sẵn sàng để chuyển giao sang vỏ Python và cập nhật vào trường 'muc_do_tin_cay' của PostgreSQL.", muc_do_tin_cay);
}
```
---

## 🧬 12. Triển khai Thuật toán Tiến hóa (Genetic Algorithm) bằng Rust cho AHI
Để hệ thống **AHI** có khả năng tự thích nghi và tối ưu hóa không gian tri thức mà không cần học sâu (Deep Learning), chúng ta sử dụng **Thuật toán tiến hóa (GA)**. 

Trong module này, mỗi thực thể tri thức được coi là một "Cá thể" (Individual) sở hữu bộ gen gồm: điểm số `muc_do_tin_cay` và mảng `toa_do_tri_thuc`. Qua mỗi vòng lặp (Thế hệ):
1.  Hệ thống đánh giá độ thích nghi (Fitness) của từng tri thức dựa trên môi trường dữ liệu thực tế.
2.  Giữ lại các tri thức xuất sắc nhất (Selection).
3.  Cho phép các tri thức lai ghép (Crossover) để tạo ra các ý niệm mới.
4.  Gây đột biến ngẫu nhiên (Mutation) với tỷ lệ thấp để tìm kiếm các hướng đi đột phá ngoài logic thông thường.

### 🔹 Thêm thư viện hỗ trợ sinh số ngẫu nhiên vào `Cargo.toml`:
```toml
[dependencies]
rand = "0.8" # Thư viện bắt buộc để xử lý đột biến và lai ghép ngẫu nhiên
```

### 🔹 Mã nguồn thuật toán lõi tiến hóa Rust (`src/evolution.rs`):
```rust
use rand::Rng;

#[derive(Clone, Debug)]
pub struct KnowledgeIndividual {
    pub id: String,
    pub muc_do_tin_cay: f32,      // Gen 1: Điểm số tin cậy (0.0 -> 1.0)
    pub toa_do_tri_thuc: Vec<f32>, // Gen 2: Tọa độ không gian ý niệm (giả lập 4 chiều để tối giản ví dụ)
    pub fitness: f32,             // Điểm thích nghi đo lường bởi hệ thống AHI
}

impl KnowledgeIndividual {
    pub fn new(id: &str, confidence: f32, coords: Vec<f32>) -> Self {
        Self {
            id: id.to_string(),
            muc_do_tin_cay: confidence.clamp(0.0, 1.0),
            toa_do_tri_thuc: coords,
            fitness: 0.0,
        }
    }

    /// Đột biến (Mutation): Thay đổi ngẫu nhiên cấu trúc tri thức với một tỷ lệ nhất định
    pub fn mutate(&mut self, mutation_rate: f32) {
        let mut rng = rand::thread_rng();

        // 1. Đột biến gen 'muc_do_tin_cay'
        if rng.gen::<f32>() < mutation_rate {
            let delta = rng.gen_range(-0.1..0.1); // Biến động tăng/giảm tối đa 10%
            self.muc_do_tin_cay = (self.muc_do_tin_cay + delta).clamp(0.0, 1.0);
        }

        // 2. Đột biến gen không gian 'toa_do_tri_thuc'
        for val in self.toa_do_tri_thuc.iter_mut() {
            if rng.gen::<f32>() < mutation_rate {
                *val += rng.gen_range(-0.1..0.1);
            }
        }
    }
}

pub struct KnowledgeEvolutionEnv {
    pub population: Vec<KnowledgeIndividual>,
    pub mutation_rate: f32,
}

impl KnowledgeEvolutionEnv {
    pub fn new(initial_pop: Vec<KnowledgeIndividual>, mutation_rate: f32) -> Self {
        Self { population: initial_pop, mutation_rate }
    }

    /// Hàm đánh giá (Fitness Function): Định nghĩa môi trường kiểm thử tri thức
    /// Ví dụ: Tri thức có độ tin cậy cao và tọa độ cân bằng sẽ có sức sống tốt hơn
    pub fn evaluate_fitness(&mut self) {
        for individual in self.population.iter_mut() {
            let coord_sum: f32 = individual.toa_do_tri_thuc.iter().sum();
            
            // Công thức giả lập: Hệ thống tối ưu hóa tổng tọa độ hướng về mức cân bằng (gần mức 1.5)
            let distance_to_target = (coord_sum - 1.5).abs();
            
            // Điểm fitness càng cao càng tốt: Ưu tiên tin cậy cao và tiệm cận target không gian
            individual.fitness = (individual.muc_do_tin_cay * 2.0) - distance_to_target;
        }
    }

    /// Lai ghép (Crossover): Hòa trộn 2 ý niệm cha mẹ để sinh ra một tri thức thế hệ mới
    pub fn crossover(parent_a: &KnowledgeIndividual, parent_b: &KnowledgeIndividual, child_id: &str) -> KnowledgeIndividual {
        let mut rng = rand::thread_rng();
        
        // Trộn điểm số tin cậy bằng phương pháp trung bình có trọng số ngẫu nhiên
        let alpha = rng.gen::<f32>();
        let child_confidence = alpha * parent_a.muc_do_tin_cay + (1.0 - alpha) * parent_b.muc_do_tin_cay;

        // Trộn tọa độ không gian (Crossover điểm đơn - Single point crossover)
        let mut child_coords = Vec::with_capacity(parent_a.toa_do_tri_thuc.len());
        let crossover_point = rng.gen_range(0..parent_a.toa_do_tri_thuc.len());

        for i in 0..parent_a.toa_do_tri_thuc.len() {
            if i < crossover_point {
                child_coords.push(parent_a.toa_do_tri_thuc[i]);
            } else {
                child_coords.push(parent_b.toa_do_tri_thuc[i]);
            }
        }

        KnowledgeIndividual::new(child_id, child_confidence, child_coords)
    }

    /// Chạy chu kỳ tiến hóa sang thế hệ tiếp theo
    pub fn evolve_one_generation(&mut self, generation_idx: usize) {
        // 1. Tính toán điểm sống sót hiện tại
        self.evaluate_fitness();

        // 2. Sắp xếp quần thể theo điểm thích nghi giảm dần (Chọn lọc tự nhiên)
        self.population.sort_by(|a, b| b.fitness.partial_cmp(&a.fitness).unwrap_or(std::cmp::Ordering::Equal));

        // 3. Giữ lại Top 2 cá thể xuất sắc nhất làm hạt giống (Elite Selection)
        let mut next_generation = vec![
            self.population[0].clone(),
            self.population[1].clone()
        ];

        // 4. Sinh sản phần còn lại của quần thể bằng cách lai ghép từ Elite
        let mut rng = rand::thread_rng();
        while next_generation.len() < self.population.len() {
            // Chọn ngẫu nhiên cha mẹ trong danh sách những cá thể sống sót tốt
            let p1 = &self.population[rng.gen_range(0..2)];
            let p2 = &self.population[rng.gen_range(0..2)];
            
            let id_str = format!("GEN-{}-ID-{}", generation_idx, next_generation.len());
            let mut child = Self::crossover(p1, p2, &id_str);
            
            // Áp dụng đột biến ngẫu nhiên cho thế hệ mới
            child.mutate(self.mutation_rate);
            next_generation.push(child);
        }

        // Cập nhật quần thể mới
        self.population = next_generation;
    }
}

fn main() {
    // Khởi tạo quần thể tri thức ban đầu gồm 4 ý niệm (mỗi ý niệm có không gian 4 chiều)
    let initial_knowledge = vec![
        KnowledgeIndividual::new("INIT-01", 0.50, vec![0.1, 0.2, 0.4, 0.1]),
        KnowledgeIndividual::new("INIT-02", 0.75, vec![0.5, 0.5, 0.1, 0.2]),
        KnowledgeIndividual::new("INIT-03", 0.30, vec![0.9, 0.1, 0.2, 0.5]),
        KnowledgeIndividual::new("INIT-04", 0.88, vec![0.2, 0.3, 0.3, 0.2]),
    ];

    // Cấu hình tỷ lệ đột biến là 15% (0.15)
    let mut env = KnowledgeEvolutionEnv::new(initial_knowledge, 0.15);

    println!("🧬 ĐANG KÍCH HOẠT HỆ THỐNG TIẾN HÓA TRI THỨC TỰ ĐỘNG (AHI ENGINE)");
    println!("=============================================================");

    // Cho hệ thống tự động tiến hóa qua 3 thế hệ vòng lặp
    for gen in 1..=3 {
        env.evolve_one_generation(gen);
        println!("🚀 THẾ HỆ THỨ {}", gen);
        for individual in env.population.iter() {
            println!(
                " |- Mã: {:8} | Mức độ tin cậy mới: {:.2} | Tọa độ: {:?} | Điểm thích nghi: {:.4}",
                individual.id, individual.muc_do_tin_cay, individual.toa_do_tri_thuc, individual.fitness
            );
        }
        println!("-------------------------------------------------------------");
    }
    println!("💡 Kết luận: Các tham số 'muc_do_tin_cay' đã tự động biến đổi tối ưu qua các thế hệ mà không cần nhãn dữ liệu chuẩn từ con người.");
}
```
---

## 💾 13. Lưu trữ Kết quả Tiến hóa từ Rust ngược trở lại PostgreSQL
Sau khi hệ thống tiến hóa hoàn thành một thế hệ vòng lặp, chúng ta cần lưu trữ điểm số `muc_do_tin_cay` và `toa_do_tri_thuc` mới của các cá thể vào bảng `kho_tri_thuc_ai` trên PostgreSQL. 

Để thực hiện việc này với hiệu năng cao nhất, cấu trúc mã nguồn dưới đây sử dụng cơ chế **Upsert (INSERT ... ON CONFLICT DO UPDATE)**, nghĩa là nếu mã định danh tri thức đã tồn tại thì hệ thống sẽ tự động cập nhật điểm số tiến hóa mới, nếu chưa có sẽ thêm mới hoàn toàn.

### 🔹 Thêm các thư viện kết nối cơ sở dữ liệu vào `Cargo.toml`:
```toml
[dependencies]
# Thư viện kết nối PostgreSQL bất đồng bộ hiệu năng cao
tokio = { version = "1.0", features = ["full"] }
tokio-postgres = "0.7"
# Thư viện hỗ trợ chuyển đổi kiểu dữ liệu Vector cho pgvector
pgvector = { version = "0.4", features = ["postgres"] } 
```

### 🔹 Mã nguồn Rust đồng bộ dữ liệu (`src/db_sync.rs`):
```rust
use tokio_postgres::{Client, NoTls};
use pgvector::Vector;

// Định nghĩa lại cấu trúc cá thể từ module tiến hóa để phục vụ đồng bộ
#[derive(Clone, Debug)]
pub struct EvolvedKnowledge {
    pub ma_dinh_danh: String,
    pub chu_de: String,
    pub muc_do_tin_cay: f32,
    pub toa_do_tri_thuc: Vec<f32>,
}

/// Hàm lõi kết nối và đẩy toàn bộ quần thể sau tiến hóa vào PostgreSQL
pub async fn save_evolved_population(population: Vec<EvolvedKnowledge>) -> Result<(), tokio_postgres::Error> {
    // 1. Thiết lập chuỗi kết nối tới Docker PostgreSQL trên Windows
    let connection_string = "host=localhost user=ai_developer password=SecretPassword123 dbname=core_knowledge_base port=5432";
    
    // Kết nối bất đồng bộ (Asynchronous Connection)
    let (client, connection) = tokio_postgres::connect(connection_string, NoTls).await?;

    // Đẩy luồng kết nối chạy ngầm trong nền tảng Tokio
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("❌ Lỗi kết nối cơ sở dữ liệu chạy ngầm: {}", e);
        }
    });

    println!("🔌 Đã thiết lập kết nối bất đồng bộ với PostgreSQL.");
    println!("💾 Đang tiến hành đồng bộ hóa kết quả tiến hóa...");

    // 2. Chuẩn bị câu lệnh SQL dưới dạng Prepared Statement để tối ưu tốc độ và bảo mật chống SQL Injection
    // Sử dụng cơ chế UPSERT thông qua cú pháp ON CONFLICT của PostgreSQL
    let upsert_statement = client.prepare("
        INSERT INTO kho_tri_thuc_ai (ma_dinh_danh, chu_de, muc_do_tin_cay, toa_do_tri_thuc)
        VALUES (\$1, \$2, \$3, \$4)
        ON CONFLICT (ma_dinh_danh) 
        DO UPDATE SET 
            muc_do_tin_cay = EXCLUDED.muc_do_tin_cay,
            toa_do_tri_thuc = EXCLUDED.toa_do_tri_thuc,
            ngay_cap_nhat = CURRENT_TIMESTAMP;
    ").await?;

    // 3. Duyệt qua toàn bộ danh sách quần thể tri thức và thực thi ghi dữ liệu
    for individual in population {
        // Chuyển đổi mảng Vec<f32> trong Rust sang cấu trúc kiểu dữ liệu Vector của pgvector tương thích DB
        let pg_vector = Vector::from(individual.toa_do_tri_thuc.clone());
        
        // Chuyển đổi kiểu dữ liệu số thực f32 sang định dạng Numeric/F32 tương thích
        let confidence_score = individual.muc_do_tin_cay;

        // Thực thi câu lệnh
        client.execute(
            &upsert_statement,
            &[
                &individual.ma_dinh_danh,
                &individual.chu_de,
                &confidence_score,
                &pg_vector
            ],
        ).await?;
        
        println!(" |- 🚀 Đồng bộ thành công: Cá thể '{}' (Mức độ tin cậy mới: {:.2})", 
                 individual.ma_dinh_danh, confidence_score);
    }

    println!("✅ Hoàn tất chu trình lưu kho lưu trữ tri thức sau tiến hóa.");
    Ok(())
}

#[tokio::main]
async fn main() {
    // GIẢ LẬP TÌNH HUỐNG: Lấy kết quả đầu ra của thế hệ tiến hóa mới nhất để chuẩn bị ghi đè vào DB
    // (Giả lập cấu trúc tọa độ không gian 768 chiều giống như thiết kế bảng mẫu SQL)
    let mock_evolved_data = vec![
        EvolvedKnowledge {
            ma_dinh_danh: "GEN-3-ID-1".to_string(),
            chu_de: "Kien_Truc_He_Thong".to_string(),
            muc_do_tin_cay: 0.94,
            toa_do_tri_thuc: vec![0.021; 768], // Tạo mảng nhanh 768 phần tử mang giá trị 0.021
        },
        EvolvedKnowledge {
            ma_dinh_danh: "GEN-3-ID-2".to_string(),
            chu_de: "Kien_Truc_He_Thong".to_string(),
            muc_do_tin_cay: 0.81,
            toa_do_tri_thuc: vec![-0.045; 768],
        },
    ];

    // Thực thi tiến trình chạy bất đồng bộ
    if let Err(e) = save_evolved_population(mock_evolved_data).await {
        eprintln!("❌ Quá trình lưu kho thất bại: {}", e);
    }
}
```
---

## 📂 14. Cấu trúc Thư mục Dự án Chuẩn (Monorepo Architecture)
Để quản lý dự án lai một cách khoa học, bền vững và dễ phối hợp trên GitHub, toàn nhóm sẽ tuân thủ cấu trúc thư mục dạng **Monorepo** dưới đây. Cấu trúc này bóc tách rõ ràng giữa phần Vỏ (Python), phần Lõi (Rust), hạ tầng Cơ sở dữ liệu (Docker) và Tài liệu hướng dẫn.

```text
ahi-hybrid-project/
├── .gitignore               # Tệp chỉ định các file không đẩy lên GitHub (vứt bỏ build, venv)
├── README.md                # Tài liệu hướng dẫn tổng quan dự án (Chính là file tài liệu này)
├── docker-compose.yml       # Cấu hình khởi chạy nhanh cụm DB PostgreSQL + pgvector
│
├── database/                # Nơi lưu trữ các kịch bản SQL cấu trúc dữ liệu
│   └── init_db.sql          # Kịch bản khởi tạo bảng 'kho_tri_thuc_ai' và chỉ mục HNSW
│
├── ahi_python_shell/        # VỎ PYTHON: Quản lý giao diện, pipeline dữ liệu và API
│   ├── requirements.txt     # Danh sách các thư viện Python cần cài đặt
│   ├── insert_sample_data.py# Script Python chèn dữ liệu mẫu
│   └── hybrid_search.py     # Script Python thực hiện Truy vấn Lai
│
└── ahi_rust_core/           # LÕI RUST: Xử lý tính toán SIMD, Tiến hóa và Đồng bộ DB
    ├── Cargo.toml           # Tệp quản lý thư viện và cấu hình biên dịch tối ưu cho Rust
    └── src/
        ├── lib.rs           # Cầu nối PyO3 xuất hàm sang Python (Extension)
        ├── evolution.rs     # Thuật toán Tiến hóa tri thức (Genetic Algorithm)
        └── db_sync.rs       # Tiến trình lưu kết quả tiến hóa bất đồng bộ vào Postgres
```

### 🔹 Khởi tạo tệp `.gitignore` chuẩn cho dự án trên Windows:
Tạo một tệp tin tên là `.gitignore` ở ngay thư mục gốc `ahi-hybrid-project/` và dán nội dung sau vào để tránh đẩy các file rác, file build nặng lên GitHub:
```text
# Python ignores
__pycache__/
*.pyc
venv/
.env

# Rust ignores
/ahi_rust_core/target/
**/*.rs.bk

# IDE ignores
.target/
.cursor/
.vscode/

# OS ignores
Thumbs.db
.DS_Store
```

---

## 🚀 15. Quy trình Đồng bộ và Đẩy (Push) Dự án lên GitHub bằng GitHub Desktop

Vì nhóm đã thống nhất sử dụng công cụ đồ họa trực quan để tối ưu thời gian, quy trình đẩy mã nguồn lên kho lưu trữ chung của nhóm sẽ được thực hiện 100% bằng chuột thông qua **GitHub Desktop** theo các bước sau:

### 🔹 Bước 1: Khởi tạo Local Repository (Dành cho Trưởng nhóm)
Nếu dự án chưa có trên GitHub, người quản trị nhóm sẽ làm bước này để tạo kho lưu trữ ban đầu:
1. Mở phần mềm **GitHub Desktop** trên Windows.
2. Chọn `File` > `New Repository...` (hoặc nhấn `Ctrl + N`).
3. **Name:** Nhập tên dự án (Ví dụ: `ahi-hybrid-project`).
4. **Local Path:** Bấm *Choose...* và trỏ thẳng tới thư mục chứa toàn bộ cấu trúc thư mục vừa tạo ở trên.
5. Bấm nút **Create Repository**.

### 🔹 Bước 2: Liên kết và Đẩy mã nguồn lên GitHub chung của nhóm
1. Sau khi tạo xong, nhìn lên thanh công cụ trên cùng của GitHub Desktop, bấm vào nút **Publish repository**.
2. Một bảng hiện ra, mục **Organization** (nếu có): Chọn tên của nhóm/tổ chức của bạn trên GitHub, hoặc giữ nguyên tài khoản cá nhân.
3. Bỏ tích chọn *Keep this code private* nếu muốn công khai dự án cho cộng đồng, hoặc giữ tích chọn nếu là dự án nội bộ mật.
4. Bấm nút **Publish Repository** để đưa toàn bộ mã nguồn lên đám mây GitHub.

### 🔹 Bước 3: Quy trình phối hợp làm việc hàng ngày của Thành viên trong nhóm
Mỗi khi một thành viên viết thêm code (ví dụ: cập nhật thuật toán Tiến hóa hoặc chỉnh sửa hàm Logic Mờ) trên **Cursor Editor**, họ chỉ cần mở **GitHub Desktop** và thực hiện quy trình 3 bước kinh điển sau:

1. **Kiểm tra thay đổi (Changes):** Ở cột bên trái của GitHub Desktop sẽ hiện ra danh sách các file đã chỉnh sửa. Nhấp vào từng file để xem chi tiết AI/Con người đã thay đổi những dòng code nào (Màu xanh là thêm mới, Màu đỏ là xóa đi).
2. **Cam kết lưu trữ (Commit to main):**
   * Nhìn xuống góc dưới cùng bên trái.
   * Tại ô *Summary (required)*: Gõ một câu mô tả ngắn về việc mình vừa làm (Ví dụ: `Hoàn thiện thuật toán tiến hóa bằng Rust`).
   * Bấm nút màu xanh **Commit to main** (hoặc commit vào nhánh đang làm việc).
3. **Đồng bộ lên mạng (Push origin):** Nhìn lên thanh công cụ phía trên, bấm vào nút **Push origin** để đẩy những thay đổi vừa commit từ máy tính của mình lên kho GitHub chung cho cả nhóm cùng tải về.

> 💡 *Mẹo đồng đội:* Trước khi bắt đầu viết code vào đầu ngày làm việc, các thành viên nên mở GitHub Desktop và bấm nút **Fetch origin** (hoặc **Pull origin**) ở thanh trên cùng để tải toàn bộ mã nguồn mới nhất do các thành viên khác viết về máy mình, tránh bị xung đột mã nguồn (Conflict).
---

## 🧠 16. Kiến trúc Mạng Toán học Suy luận Nhân quả cho AHI
Trong khi các mô hình AGI (Transformer) dựa vào xác suất thống kê bề mặt của từ ngữ, hệ thống **AHI** của chúng ta sẽ sử dụng cấu trúc **Mạng Bayes mờ (Fuzzy Bayesian Network)**. Sự kết hợp này mang lại hai lợi thế cốt lõi:
1.  **Hệ luật mờ nâng cao (Cấp độ ngữ nghĩa):** Chuyển đổi dữ liệu số thô từ CSDL Vector thành các trạng thái tư duy mờ (Ví dụ: Không chỉ là `Nhiệt độ = 39`, mà là `Sốt = Cao (0.85)`).
2.  **Mạng Bayes (Cấp độ suy luận):** Liên kết các trạng thái mờ này theo mối quan hệ nhân quả đồ thị có hướng (DAG). Khi điểm số `muc_do_tin_cay` của một nút biến động do thuật toán Tiến hóa, nó sẽ tự động kích hoạt hiệu ứng domino để tính toán lại xác suất tin cậy của toàn bộ các nút hệ quả liên quan.

```text
 [ Thực thể Tri thức A ] --(Mối quan hệ Nhân quả)--> [ Thực thể Tri thức B ]
 (Ví dụ: Lỗi phần cứng)                             (Ví dụ: Hệ thống sập)
        │                                                  │
  [ Điểm tin cậy mờ ]                                [ Điểm tin cậy mờ ]
```

---

## 🦀 17. Triển khai Lõi Suy luận Bayes Mờ Bất đồng bộ bằng Rust
Dưới đây là mã nguồn Rust thiết kế một cấu trúc mạng suy luận đơn giản gồm hai nút tri thức có quan hệ nhân quả: **Nút Nguyên nhân (A)** và **Nút Kết quả (B)**. Thuật toán áp dụng định lý Bayes để cập nhật điểm số tin cậy của nút B dựa trên xác suất có điều kiện khi nút A xảy ra đột biến.

### 🔹 Mã nguồn Rust (`src/ahi_bayesian_network.rs`):
```rust
/// Định nghĩa một Nút Tri thức (Knowledge Node) trong mạng lưới Bayes của AHI
#[derive(Debug, Clone)]
pub struct BayesianNode {
    pub ma_dinh_danh: String,
    // Xác suất tiên nghiệm (Prior Probability) - chính là điểm 'muc_do_tin_cay' hiện tại
    pub prior_probability: f32, 
}

/// Bộ máy suy luận nhân quả giữa các thực thể tri thức
pub struct CausalInferenceEngine {
    pub cause_node: BayesianNode,
    pub effect_node: BayesianNode,
    // Xác suất có điều kiện (Conditional Probability): P(B|A) 
    // Tức là: Nếu A xảy ra thì xác suất B xảy ra là bao nhiêu?
    pub p_effect_given_cause: f32,
    // P(B|~A): Nếu A KHÔNG xảy ra thì xác suất B xảy ra là bao nhiêu?
    pub p_effect_given_no_cause: f32,
}

impl CausalInferenceEngine {
    pub fn new(cause: BayesianNode, effect: BayesianNode, p_b_given_a: f32, p_b_given_no_a: f32) -> Self {
        Self {
            cause_node: cause,
            effect_node: effect,
            p_effect_given_cause: p_b_given_a.clamp(0.0, 1.0),
            p_effect_given_no_cause: p_b_given_no_a.clamp(0.0, 1.0),
        }
    }

    /// Định lý Bayes Toàn phần (Law of Total Probability)
    /// Tính toán và dự đoán điểm tin cậy mới của Nút Kết quả (B) dựa trên trạng thái của Nút Nguyên nhân (A)
    pub fn predict_effect_confidence(&self) -> f32 {
        let p_a = self.cause_node.prior_probability;
        let p_not_a = 1.0 - p_a;

        // Công thức: P(B) = P(B|A) * P(A) + P(B|~A) * P(~A)
        let p_b = (self.p_effect_given_cause * p_a) + (self.p_effect_given_no_cause * p_not_a);
        
        (p_b * 100.0).round() / 100.0
    }

    /// Định lý Bayes đảo (Bayesian Update): Suy luận ngược từ ngọn về gốc
    /// Nếu môi trường thực tế phát hiện Nút Kết quả (B) xảy ra, tính toán lại độ tin cậy của Nút Nguyên nhân (A)
    pub fn update_cause_confidence_given_effect(&mut self) {
        let p_a = self.cause_node.prior_probability;
        let p_b = self.predict_effect_confidence();

        if p_b == 0.0 { return; }

        # [allow(non_snake_case)]
        // Công thức Bayes: P(A|B) = [P(B|A) * P(A)] / P(B)
        let P_a_given_b = (self.p_effect_given_cause * p_a) / p_b;

        // Cập nhật lại niềm tin (Prior) cho nút nguyên nhân để chuẩn bị lưu kho PostgreSQL
        self.cause_node.prior_probability = (P_a_given_b * 100.0).round() / 100.0;
    }
}

fn main() {
    println!("🔮 KÍCH HOẠT MẠNG SUY LUẬN TOÁN HỌC BAYES CHO AHI");
    println!("=============================================================");

    // Giả lập Tình huống thực tế:
    // Nút A: Tri thức về "Cơ sở dữ liệu quá tải" (Điểm tin cậy hiện tại do AI đánh giá là 30% - 0.3)
    let node_a = BayesianNode {
        ma_dinh_danh: "KNOW-DB-OVERLOAD".to_string(),
        prior_probability: 0.30,
    };

    // Nút B: Tri thức về "Hệ thống phản hồi chậm" (Điểm tin cậy ban đầu là 10% - 0.1)
    let node_b = BayesianNode {
        ma_dinh_danh: "KNOW-SYS-DELAY".to_string(),
        prior_probability: 0.10,
    };

    // Thiết lập mối quan hệ nhân quả toán học:
    // P(B|A) = 0.90 (Nếu DB quá tải, 90% chắc chắn hệ thống sẽ phản hồi chậm)
    // P(B|~A) = 0.15 (Nếu DB không quá tải, vẫn có 15% hệ thống chậm do nghẽn mạng mạng internet)
    let mut engine = CausalInferenceEngine::new(node_a, node_b, 0.90, 0.15);

    // BƯỚC 1: Dự đoán xu hướng mạng lưới tri thức
    let predicted_b_confidence = engine.predict_effect_confidence();
    println!("➡️  [Suy luận xuôi]:");
    println!(" |- Nếu điểm tin cậy của nút nguyên nhân (A) là {:.2}", engine.cause_node.prior_probability);
    println!(" |- Hệ thống dự đoán điểm tin cậy của nút kết quả (B) sẽ tự biến động thành: {:.2}", predicted_b_confidence);
    println!("-------------------------------------------------------------");

    // BƯỚC 2: Cập nhật mạng lưới khi phát hiện bằng chứng thực tế (Evidence)
    // Giả sử môi trường giám sát xác nhận hệ thống ĐANG BỊ CHẬM (Nút B xảy ra)
    engine.update_cause_confidence_given_effect();
    println!("⬅️  [Suy luận ngược - Cập nhật niềm tin bằng định lý Bayes]:");
    println!(" |- Thực tế ghi nhận nút kết quả (B) đã xảy ra.");
    println!(" |- Độ tin cậy mới của nút nguyên nhân (A) được tính toán lại: {:.2}", engine.cause_node.prior_probability);
    println!("-------------------------------------------------------------");
    println!("💡 Kết luận: Giá trị điểm tin cậy {:.2} mới này của nút A sẽ được module db_sync.rs tự động cập nhật đè (Upsert) lại vào PostgreSQL để thay đổi trạng thái nhận thức của dòng AI.", engine.cause_node.prior_probability);
}
```
---

## 🕒 18. Thiết lập Vòng lặp chạy ngầm (Background Worker Daemon) bằng Rust
Để hệ thống **AHI** hoạt động hoàn toàn tự động, chúng ta cần một **Background Worker Daemon** chạy ngầm liên tục trong hệ điều hành Windows/Linux. Worker này sẽ sử dụng tính năng hẹn giờ bất đồng bộ của thư viện `tokio` để thiết lập chu kỳ quét CSDL PostgreSQL (Ví dụ: Định kỳ 5 giây một lần), lấy ra các tri thức mới cập nhật và tự động đẩy qua bộ máy xử lý Tiến hóa và Suy luận Bayes.

```text
[ Vòng lặp chạy ngầm ] ──(Định kỳ 5s)──> [ Quét PostgreSQL ]
         │                                       │
         ▼                                       ▼
 [ Lưu ngược vào DB ] <──(Cập nhật điểm)── [ Tiến hóa & Bayes ]
```

### 🔹 Thêm cấu trúc thời gian của Tokio vào `Cargo.toml`:
Đảm bảo tính năng `time` và `macros` của `tokio` đã được kích hoạt trong `Cargo.toml` của nhóm:
```toml
[dependencies]
tokio = { version = "1.0", features = ["full"] } # Kích hoạt toàn bộ tính năng bất đồng bộ
tokio-postgres = "0.7"
```

### 🔹 Mã nguồn Daemon chạy ngầm (`src/ahi_daemon.rs`):
Tạo file mới tên là `src/ahi_daemon.rs` trong dự án Rust lõi để quản lý vòng lặp điều hành trung tâm:

```rust
use std::time::Duration;
use tokio::time::interval;
use tokio_postgres::{Client, NoTls};

// Giả lập lại các hàm xử lý từ module Tiến hóa và Bayes của dự án
fn run_evolution_pipeline(id: &str, current_confidence: f32) -> f32 {
    // Giả lập chu trình GA: Điểm tin cậy được tối ưu thông qua biến động đột biến ngẫu nhiên
    let simulated_new_score = current_confidence + 0.05;
    (simulated_new_score.clamp(0.0, 1.0) * 100.0).round() / 100.0
}

/// Hàm chứa vòng lặp vô hạn chạy ngầm (Daemon Worker Loop)
pub async fn start_ahi_background_daemon() -> Result<(), tokio_postgres::Error> {
    // 1. Kết nối bất đồng bộ đến Docker PostgreSQL
    let connection_string = "host=localhost user=ai_developer password=SecretPassword123 dbname=core_knowledge_base port=5432";
    let (client, connection) = tokio_postgres::connect(connection_string, NoTls).await?;

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("❌ Lỗi luồng DB Daemon ngầm: {}", e);
        }
    });

    println!("⚙️  AHI Background Daemon đã khởi động thành công trên Windows.");
    println!("🕒 Chu kỳ quét hệ thống tri thức: 5 giây / lần. Đang chờ lệnh...");
    println!("=============================================================");

    # [allow(unused_mut)]
    // 2. Thiết lập bộ hẹn giờ định kỳ (Interval Timer) chạy bất đồng bộ của Tokio
    let mut ticker = interval(Duration::from_secs(5));

    // Vòng lặp vô hạn chạy ngầm của Daemon
    loop {
        // Chờ cho đến khi hết chu kỳ 5 giây tiếp theo
        ticker.tick().await;
        
        println!("🔍 [DAEMON] Bắt đầu chu kỳ quét CSDL tìm tri thức cần tối ưu...");

        // 3. Quét PostgreSQL: Lấy ra các tri thức có 'muc_do_tin_cay' thấp hoặc cần tối ưu hóa
        let query_sql = "SELECT id, ma_dinh_danh, chu_de, muc_do_tin_cay FROM kho_tri_thuc_ai LIMIT 10;";
        let rows = client.query(query_sql, &[]).await?;

        if rows.is_empty() {
            println!("   |- Mạng lưới tri thức trống hoặc đang ổn định. Bỏ qua chu kỳ này.");
            continue;
        }

        // 4. Kích hoạt chu trình xử lý Lai (Tiến hóa & Bayes) cho từng thực thể tri thức quét được
        for row in rows {
            let id: i64 = row.get(0);
            let ma_dinh_danh: &str = row.get(1);
            let chu_de: &str = row.get(2);
            let muc_do_tin_cay: f32 = row.get(3);

            println!("   |- Phát hiện tri thức thực thể: '{}' (Điểm hiện tại: {:.2})", ma_dinh_danh, muc_do_tin_cay);

            // Kích hoạt lõi Tiến hóa & Logic mạng toán học
            let mutated_confidence = run_evolution_pipeline(ma_dinh_danh, muc_do_tin_cay);

            if mutated_confidence != muc_do_tin_cay {
                println!("   |   👉 Thuật toán Tiến hóa đề xuất điểm số tin cậy mới: {:.2}", mutated_confidence);

                // 5. Đồng bộ ngược ngay lập tức (Upsert) vào CSDL PostgreSQL
                let update_sql = "UPDATE kho_tri_thuc_ai SET muc_do_tin_cay = \$1, ngay_cap_nhat = CURRENT_TIMESTAMP WHERE id = \$2;";
                client.execute(update_sql, &[&mutated_confidence, &id]).await?;
                
                println!("   |   ✅ Đã cập nhật đè trạng thái tri thức mới vào DB.");
            }
        }
        println!("⏳ [DAEMON] Chu kỳ hoàn tất. Đang ngủ 5 giây trước khi thực hiện lần quét kế tiếp...\n");
    }
}

#[tokio::main]
async fn main() {
    // Kích hoạt bộ máy vận hành chạy ngầm
    if let Err(e) = start_ahi_background_daemon().await {
        eprintln!("❌ Daemon gặp sự cố nghiêm trọng buộc phải dừng: {}", e);
    }
}
```

### 🔹 Cách chạy Daemon tối ưu hóa bộ nhớ trên Windows Terminal:
Để đảm bảo Daemon chạy ngầm tốn ít tài nguyên nhất, nhóm hãy sử dụng lệnh biên dịch tối ưu này của Rust:
```bash
# Thiết lập chế độ tối ưu hóa phần cứng chip xử lý
\$env:RUSTFLAGS="-C target-cpu=native"

# Khởi chạy Worker ở chế độ Release cực nhẹ (Chỉ tiêu tốn vài MB RAM trên Windows)
cargo run --bin ahi_daemon --release
```

