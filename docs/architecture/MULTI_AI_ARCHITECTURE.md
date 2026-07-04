# Kiến trúc Đa AI của AHI

**ID:** ARCH-20260704-001

## Mục tiêu

AHI được thiết kế để không phụ thuộc vào bất kỳ hệ thống AI cụ thể nào.

GitHub là nguồn tri thức chính thức (Source of Truth).

Mọi AI chỉ là công cụ truy cập, xử lý và phát triển tri thức.

---

## Kiến trúc tổng thể

```text
                 GitHub (Source of Truth)
                         │
     ┌──────────┬────────┼──────────┬──────────┐
     │          │        │          │
 ChatGPT     Gemini    Grok      Claude    ...
                         │
                  AHI Ecosystem
```

---

## Nguyên tắc

1. GitHub là bộ nhớ dài hạn.
2. AI không lưu giữ tri thức chính thức.
3. Có thể thay thế bất kỳ AI nào mà không ảnh hưởng đến AHI.
4. Mọi tài liệu chính thức đều được lưu trên GitHub.
5. AI chỉ đọc, xử lý, tạo và cập nhật tri thức theo quyền được cấp.

---

## Lợi ích

- Không phụ thuộc nhà cung cấp AI.
- Có thể sử dụng nhiều AI cùng lúc.
- Dễ mở rộng.
- Giảm rủi ro khi một nền tảng thay đổi.
