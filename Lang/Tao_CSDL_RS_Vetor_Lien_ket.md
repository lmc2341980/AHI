-- 1. Kích hoạt tính năng Vector trên PostgreSQL
CREATE EXTENSION IF NOT EXISTS pgvector;

-- 2. Tạo bảng lưu trữ Tri thức Lai (Hybrid Knowledge Base)
CREATE TABLE kho_tri_thuc_ai (
    -- Phần dữ liệu quan hệ (DR) kế thừa tư duy cấu trúc
    id BIGSERIAL PRIMARY KEY,
    ma_dinh_danh VARCHAR(50) UNIQUE NOT NULL,
    chu_de VARCHAR(100),
    muc_do_tin_cay NUMERIC(3,2), -- Thích hợp cho Logic mờ (ví dụ: 0.85)
    ngay_cap_nhat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Phần dữ liệu hình học AI (Vector)
    -- Giả sử cấu trúc không gian tri thức của bạn cần 768 chiều tọa độ
    toa_do_tri_thuc vector(768) 
);

-- 3. Tạo chỉ mục tối ưu hóa tốc độ tìm kiếm cho nhóm
CREATE INDEX idx_kho_tri_thuc_chu_de ON kho_tri_thuc_ai(chu_de);
CREATE INDEX idx_kho_tri_thuc_vector ON kho_tri_thuc_ai USING hnsw (toa_do_tri_thuc vector_cosine_ops);
