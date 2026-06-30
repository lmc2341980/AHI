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

