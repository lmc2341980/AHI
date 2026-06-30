# 🧬 HỆ SINH THÁI KIẾN TRÚC & QUY TRÌNH PHÁT TRIỂN DỰ ÁN AHI THẾ HỆ MỚI
*Tài liệu hướng dẫn kỹ thuật nội bộ dành cho đội ngũ phát triển dự án nghiên cứu dòng AHI (Artificial Hybrid Intelligence) tách biệt với kiến trúc AGI và HAI truyền thống.*

---

## 🎯 1. Tầm nhìn Chiến lược & Tiêu chí Lựa chọn Công nghệ
Để xây dựng một dòng AI đi theo con đường khác biệt hoàn toàn với **AGI (Trí tuệ nhân tạo tổng hợp dựa trên Học sâu/Transformer)** và **HAI (AI hướng nhân văn/Human-centric AI)**, hệ thống cốt lõi của chúng ta không thể phụ thuộc vào các khung phần mềm (framework) truyền thống. 

Kiến trúc mới đòi hỏi một ngôn ngữ lập trình và hệ thống lưu trữ phải thỏa mãn đồng thời **3 yếu tố cốt lõi**:
*   **Hiệu năng toán học cực cao:** Khả năng xử lý tính toán số học đại số tuyến tính không độ trễ.
*   **Quản lý bộ nhớ cấp thấp chặt chẽ:** Kiểm soát tài nguyên phần cứng trực tiếp (tương tự như Pascal nhưng mạnh mẽ hơn).
*   **Xử lý song song lý tưởng:** Khả năng tận dụng tối đa kiến trúc đa nhân của CPU và tính toán song song trên GPU mà không bị xung đột dữ liệu (Data races).

Hệ thống của chúng ta sẽ được xây dựng dựa trên mô hình **"Vỏ Python - Lõi Hệ thống"** để tối ưu hóa cả tốc độ phát triển lẫn hiệu năng vận hành.

---

## 📂 2. Cấu trúc Thư mục Dự án Chuẩn (Monorepo Architecture)
Toàn nhóm sẽ tuân thủ cấu trúc thư mục dạng **Monorepo** dưới đây để bóc tách rõ ràng giữa phần Vỏ (Python), phần Lõi (Rust), hạ tầng Cơ sở dữ liệu (Docker) và Tài liệu hướng dẫn:

```text
ahi-hybrid-project/
├── .gitignore               # Tệp chỉ định các file không đẩy lên GitHub (vứt bỏ build, venv)
├── README.md                # Tài liệu hướng dẫn tổng quan dự án (Tài liệu này)
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
        ├── db_sync.rs       # Tiến trình lưu kết quả tiến hóa bất đồng bộ vào Postgres
        └── ahi_daemon.rs    # Vòng lặp chạy ngầm tự động hóa hệ thống AHI
```

### 🔹 Cấu hình tệp `.gitignore` chuẩn cho dự án trên Windows:
Tạo một tệp tin tên là `.gitignore` ở ngay thư mục gốc `ahi-hybrid-project/` và dán nội dung sau vào:
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

## 📐 3. Quy trình 5 Bước Thiết kế CSDL Lai (Relational + Vector)
Hệ thống lưu trữ phải xử lý đồng thời hai dạng dữ liệu trên cùng một hạ tầng: Dữ liệu quan hệ (**DR**) quản lý thực thể, nhãn (Label), điều kiện logic cứng; và dữ liệu **Vector** lưu trữ mảng số thực đa chiều đại diện cho "tọa độ ý niệm".

*   **Bước 1: Mô hình hóa cấu trúc dữ liệu:** Bóc tách thông tin của một thực thể tri thức thành hai phần bổ trợ cho nhau: phần định danh & ngữ cảnh (DR) và phần định vị không gian (Vector).
*   **Bước 2: Thiết lập môi trường và cấu hình:** Sử dụng **Cursor Editor** để quản lý dự án. Khởi tạo một file cấu hình database và sử dụng Docker để chạy container PostgreSQL đã tích hợp sẵn extension `pgvector`.
*   **Bước 3: Tạo cơ chế ánh xạ (Embedding Pipeline):** Viết các hàm xử lý nền (bằng Python hoặc Rust) để biến đổi dữ liệu thô đầu vào thành chuỗi Vector số thực có số chiều cố định trước khi nạp đồng thời cả thông tin quan hệ và vector vào hệ thống bảng.
*   **Bước 4: Thiết lập chỉ mục (Indexing) tối ưu:** Sử dụng chỉ mục **B-Tree** truyền thống cho các cột dữ liệu quan hệ để tăng tốc độ lọc điều kiện cứng và chỉ mục **HNSW** cho cột Vector để xây dựng đồ thị liên kết ngữ nghĩa tốc độ cao.
*   **Bước 5: Ứng dụng Truy vấn Lai (Hybrid Search):** Viết các câu lệnh SQL kết hợp: Vừa lọc chính xác theo điều kiện thuộc tính, vừa quét không gian để tìm ra các bản ghi có khoảng cách toán học gần nhất với ý niệm AI đang xử lý.

---

## 💾 4. Kịch bản Khởi tạo Cơ sở dữ liệu và Môi trường Docker

### 🐳 Cấu hình Môi trường chạy Docker (`docker-compose.yml`)
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
*Cách vận hành:* Mở Terminal tại thư mục gốc dự án và gõ lệnh: `docker-compose up -d`.

### 🛢️ Kịch bản Khởi tạo SQL (`database/init_db.sql`)
```sql
-- Kích hoạt extension pgvector trong cơ sở dữ liệu
CREATE EXTENSION IF NOT EXISTS pgvector;

-- Tạo bảng lưu trữ dữ liệu lai (Hybrid Knowledge Base)
CREATE TABLE kho_tri_thuc_ai (
    id BIGSERIAL PRIMARY KEY,                          -- Khóa chính tăng tự động
    ma_dinh_danh VARCHAR(50) UNIQUE NOT NULL,         -- Mã định danh duy nhất của thực thể tri thức
    chu_de VARCHAR(100) NOT NULL,                      -- Phân loại chủ đề cốt lõi
    muc_do_tin_cay NUMERIC(3,2) CHECK (muc_do_tin_cay >= 0.00 AND muc_do_tin_cay <= 1.00), 
                                                       -- Tham số cho thuật toán Logic Mờ
    ngay_cap_nhat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Mốc thời gian hệ thống
    toa_do_tri_thuc vector(768)                        -- Mảng 768 số thực đại diện cho tọa độ ý niệm
);

-- Xây dựng các chỉ mục (Indexes) để tối ưu hóa hiệu năng truy vấn
CREATE INDEX idx_kho_tri_thuc_chu_de ON kho_tri_thuc_ai(chu_de);
CREATE INDEX idx_kho_tri_thuc_ma_dinh_danh ON kho_tri_thuc_ai(ma_dinh_danh);

-- Chỉ mục đồ thị HNSW cho trường Vector (Tính toán độ tương đồng góc Cosine)
CREATE INDEX idx_kho_tri_thuc_vector_hnsw ON kho_tri_thuc_ai 
USING hnsw (toa_do_tri_thuc vector_cosine_ops);
```

---

## 🐍 5. Tầng Ứng dụng Vỏ Python (Python Shell Pipeline)

### 🔹 Thư viện yêu cầu (`ahi_python_shell/requirements.txt`)
```text
psycopg2-binary
numpy
```

### 📥 Script Nạp dữ liệu mẫu (`ahi_python_shell/insert_sample_data.py`)
```python
import psycopg2
import numpy as np

def connect_and_seed():
    db_config = {
        "host": "localhost", "database": "core_knowledge_base",
        "user": "ai_developer", "password": "SecretPassword123", "port": 5432
    }
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()
        raw_vector = np.random.uniform(-1.0, 1.0, 768)
        vector_string = "[" + ",".join(map(str, raw_vector.tolist())) + "]"

        data_to_insert = {
            "ma_dinh_danh": "KNOW-ID-001",
            "chu_de": "Kien_Truc_He_Thong",
            "muc_do_tin_cay": 0.87,
            "toa_do_tri_thuc": vector_string
        }

        insert_query = """
        INSERT INTO kho_tri_thuc_ai (ma_dinh_danh, chu_de, muc_do_tin_cay, toa_do_tri_thuc)
        VALUES (%(ma_dinh_danh)s, %(chu_de)s, %(muc_do_tin_cay)s, %(toa_do_tri_thuc)s)
        ON CONFLICT (ma_dinh_danh) DO NOTHING;
        """
        cursor.execute(insert_query, data_to_insert)
        conn.commit()
        print(f"🚀 Đã nạp thành công bản ghi '{data_to_insert['ma_dinh_danh']}' vào bảng lưu trữ.")
    except Exception as error:
        print(f"❌ Lỗi: {error}")
    finally:
        if conn:
            cursor.close()
            conn.close()

if __name__ == "__main__":
    connect_and_seed()
```

### 🔍 Script Truy vấn Lai (`ahi_python_shell/hybrid_search.py`)
```python
import psycopg2
import numpy as np

def execute_hybrid_search(search_topic, min_confidence, query_vector, limit_results=5):
    db_config = {
        "host": "localhost", "database": "core_knowledge_base",
        "user": "ai_developer", "password": "SecretPassword123", "port": 5432
    }
    vector_string = "[" + ",".join(map(str, query_vector.tolist())) + "]"
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()
        hybrid_query = """
        SELECT id, ma_dinh_danh, chu_de, muc_do_tin_cay, (toa_do_tri_thuc <=> %s::vector) AS khoang_cach_cosine
        FROM kho_tri_thuc_ai
        WHERE chu_de = %s AND muc_do_tin_cay >= %s
        ORDER BY toa_do_tri_thuc <=> %s::vector ASC LIMIT %s;
        """
        cursor.execute(hybrid_query, (vector_string, search_topic, min_confidence, vector_string, limit_results))
        records = cursor.fetchall()

        print(f"\n=== KẾT QUẢ TRUY VẤN LAI ===")
        for row in records:
            rec_id, ma_dinh, chu_de, tin_cay, distance = row
            print(f"📍 Mã định danh: {ma_dinh} | Tin cậy: {float(tin_cay):.2f} | Tương đồng: {(1 - distance) * 100:.2f}%")
    except Exception as error:
        print(f"❌ Lỗi truy vấn: {error}")
    finally:
        if conn:
            cursor.close()
            conn.close()

if __name__ == "__main__":
    mock_vector = np.random.uniform(-1.0, 1.0, 768)
    execute_hybrid_search("Kien_Truc_He_Thong", 0.80, mock_vector, limit_results=3)
```

---

---

## 🦀 6. Tầng Xử lý Lõi Hệ thống Rust (Rust Core Engines)

### 🔹 Tệp cấu hình thư viện (`ahi_rust_core/Cargo.toml`)
```toml
[package]
name = "ai_core_math"
version = "0.1.0"
edition = "2021"

[lib]
name = "ai_core_math"
crate-type = ["cdylib"]

[dependencies]
pyo3 = { version = "0.21", features = ["extension-module"] }
rand = "0.8"
tokio = { version = "1.0", features = ["full"] }
tokio-postgres = "0.7"
pgvector = { version = "0.4", features = ["postgres"] }

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
```

### 🔌 Cầu nối Thư viện mở rộng Python (`ahi_rust_core/src/lib.rs`)
```rust
use pyo3::prelude::*;

#[pyfunction]
fn fast_cosine_distance(v1: Vec<f32>, v2: Vec<f32>) -> PyResult<f32> {
    if v1.len() != v2.len() || v1.is_empty() {
        return Err(pyo3::exceptions::PyValueError::new_err("Độ dài hai vector không bằng nhau hoặc rỗng!"));
    }
    let (mut dot, mut norm_a, mut norm_b) = (0.0, 0.0, 0.0);
    for i in 0..v1.len() {
        dot += v1[i] * v2[i];
        norm_a += v1[i] * v1[i];
        norm_b += v2[i] * v2[i];
    }
    let magnitude = norm_a.sqrt() * norm_b.sqrt();
    if magnitude == 0.0 { Ok(1.0) } else { Ok(1.0 - (dot / magnitude)) }
}

#[pymodule]
fn ai_core_math(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(fast_cosine_distance, m)?)?;
    Ok(())
}
```
*Cách đóng gói sang Python:* Cài đặt `pip install maturin`, di chuyển vào thư mục `ahi_rust_core` và chạy lệnh: `maturin develop --release`.

### 🧬 Giải thuật Tiến hóa Tri thức (`ahi_rust_core/src/evolution.rs`)
```rust
use rand::Rng;

#[derive(Clone, Debug)]
pub struct KnowledgeIndividual {
    pub id: String,
    pub muc_do_tin_cay: f32,
    pub toa_do_tri_thuc: Vec<f32>,
    pub fitness: f32,
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

    pub fn mutate(&mut self, mutation_rate: f32) {
        let mut rng = rand::thread_rng();
        if rng.gen::<f32>() < mutation_rate {
            let delta = rng.gen_range(-0.1..0.1);
            self.muc_do_tin_cay = (self.muc_do_tin_cay + delta).clamp(0.0, 1.0);
        }
        for val in self.toa_do_tri_thuc.iter_mut() {
            if rng.gen::<f32>() < mutation_rate {
                *val += rng.gen_range(-0.1..0.1);
            }
        }
    }
}
```

### 🔮 Mạng Suy luận Toán học Bayes (`ahi_rust_core/src/ahi_bayesian_network.rs`)
```rust
#[derive(Debug, Clone)]
pub struct BayesianNode {
    pub ma_dinh_danh: String,
    pub prior_probability: f32, 
}

pub struct CausalInferenceEngine {
    pub cause_node: BayesianNode,
    pub effect_node: BayesianNode,
    pub p_effect_given_cause: f32,
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

    pub fn predict_effect_confidence(&self) -> f32 {
        let p_a = self.cause_node.prior_probability;
        let p_b = (self.p_effect_given_cause * p_a) + (self.p_effect_given_no_cause * (1.0 - p_a));
        (p_b * 100.0).round() / 100.0
    }
}
```

### 🔒 Tiến trình đồng bộ CSDL bất đồng bộ (`ahi_rust_core/src/db_sync.rs`)
```rust
use tokio_postgres::{NoTls};
use pgvector::Vector;

pub async fn save_evolved_population(ma_dinh_danh: &str, score: f32, coords: Vec<f32>) -> Result<(), tokio_postgres::Error> {
    let connection_string = "host=localhost user=ai_developer password=SecretPassword123 dbname=core_knowledge_base port=5432";
    let (client, connection) = tokio_postgres::connect(connection_string, NoTls).await?;
    
    tokio::spawn(async move { if let Err(e) = connection.await { eprintln!("DB Error: {}", e); } });

    let pg_vector = Vector::from(coords);
    client.execute("
        INSERT INTO kho_tri_thuc_ai (ma_dinh_danh, chu_de, muc_do_tin_cay, toa_do_tri_thuc) VALUES (\$1, 'Kien_Truc_He_Thong', \$2, \$3)
        ON CONFLICT (ma_dinh_danh) DO UPDATE SET muc_do_tin_cay = EXCLUDED.muc_do_tin_cay, toa_do_tri_thuc = EXCLUDED.toa_do_tri_thuc;
    ", &[&ma_dinh_danh, &score, &pg_vector]).await?;
    Ok(())
}
```

### 🕒 Vòng lặp Điều hành Daemon Chạy ngầm (`ahi_rust_core/src/ahi_daemon.rs`)
```rust
use std::time::Duration;
use tokio::time::interval;
use tokio_postgres::{NoTls};

pub async fn start_ahi_background_daemon() -> Result<(), tokio_postgres::Error> {
    let connection_string = "host=localhost user=ai_developer password=SecretPassword123 dbname=core_knowledge_base port=5432";
    let (client, connection) = tokio_postgres::connect(connection_string, NoTls).await?;
    tokio::spawn(async move { if let Err(e) = connection.await { eprintln!("Daemon DB Error: {}", e); } });

    let mut ticker = interval(Duration::from_secs(5));
    loop {
        ticker.tick().await;
        println!("🔍 [DAEMON] Đang quét CSDL rà soát tối ưu hóa tri thức hệ thống...");
    }
}
```

---

## 🚀 7. Quy trình Vận hành Nhóm trên GitHub Desktop
Để đồng bộ mã nguồn và phối hợp làm việc nhanh chóng, toàn bộ các thành viên sẽ làm việc dựa trên giao diện **GitHub Desktop** theo các nguyên tắc sau:

1.  **Cập nhật đầu ngày (Fetch/Pull):** Trước khi viết code, bấm **Fetch origin** ở thanh trên cùng để tải toàn bộ mã nguồn mới nhất của các thành viên khác về máy, tránh xung đột (Conflict).
2.  **Xem dòng thay đổi (Changes):** Kiểm tra mã nguồn AI hoặc con người sinh ra trực tiếp ở màn hình bên trái. Chỉ cam kết các đoạn mã có nghĩa.
3.  **Lưu cục bộ (Commit):** Viết dòng tóm tắt rõ nghĩa tại ô *Summary* (Ví dụ: `Hoàn thiện thuật toán mạng Bayes mờ`) rồi bấm **Commit to main**.
4.  **Đồng bộ đám mây (Push):** Bấm **Push origin** để đưa mã nguồn lên kho lưu trữ GitHub chung của nhóm.
