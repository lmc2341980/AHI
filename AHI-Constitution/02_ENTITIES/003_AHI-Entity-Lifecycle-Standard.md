# AHI Entity Lifecycle Standard

**Artifact ID:** AHI-STD-ENTITY-002

**Artifact Name:** AHI Entity Lifecycle Standard

**Version:** 1.0

**Status:** Approved

**Owner:** AHI-F (AHI-Founder)

**Source of Truth:** GitHub

---

# 1. Purpose

Tài liệu này quy định vòng đời (Lifecycle) chuẩn của mọi Entity trong Hệ sinh thái Artificial Hybrid Intelligence (AHI).

Mục tiêu:

- Chuẩn hóa quá trình hình thành và tiến hóa.
- Đảm bảo mọi Entity đều có lịch sử phát triển rõ ràng.
- Hỗ trợ AHI-V kiểm tra.
- Hỗ trợ AHI-Factory sinh tự động.
- Tránh tạo hoặc thay đổi Entity không kiểm soát.

---

# 2. Scope

Áp dụng cho toàn bộ Entity trong hệ sinh thái AHI.

Bao gồm nhưng không giới hạn:

- Constitution
- Standard
- Specification
- Workflow
- Skill
- Platform
- Module
- Repository
- Application
- Service
- Knowledge
- Database
- Infrastructure
- AI Model

---

# 3. Lifecycle

Mọi Entity phải trải qua các trạng thái sau.

```text
Proposal
    │
    ▼
Discussing
    │
    ▼
Approved
    │
    ▼
Artifact
    │
    ▼
Implemented
    │
    ▼
Deprecated
```

Không được bỏ qua trạng thái.

---

# 4. Lifecycle Definitions

## 4.1 Proposal

Ý tưởng ban đầu.

Đặc điểm:

- Chưa được xác nhận.
- Có thể thay đổi hoàn toàn.
- Không được xem là tri thức chính thức.

---

## 4.2 Discussing

Đang thảo luận.

Đặc điểm:

- Có nhiều phương án.
- Có thể bổ sung.
- Có thể loại bỏ.
- Chưa phải Source of Truth.

---

## 4.3 Approved

Đã được AHI-F hoặc chủ sở hữu phê duyệt.

Đặc điểm:

- Nội dung được chấp nhận.
- Sẵn sàng tạo Artifact.
- Chưa đồng nghĩa với việc đã triển khai.

---

## 4.4 Artifact

Đã chuẩn hóa thành Artifact trên GitHub.

Đặc điểm:

- Có Path.
- Có Version.
- Có Commit History.
- Trở thành Source of Truth.

---

## 4.5 Implemented

Đã được áp dụng trong hệ thống.

Ví dụ:

- Code
- Workflow
- Platform
- Product
- Runtime

---

## 4.6 Deprecated

Không còn được sử dụng.

Đặc điểm:

- Không xóa lịch sử.
- Không chỉnh sửa.
- Chỉ thay thế bằng phiên bản mới.

---

# 5. Transition Rules

Chỉ được phép chuyển trạng thái theo thứ tự:

Proposal

↓

Discussing

↓

Approved

↓

Artifact

↓

Implemented

↓

Deprecated

Không được:

- Proposal → Implemented
- Discussing → Implemented
- Proposal → Artifact

trừ khi có quyết định đặc biệt của AHI-F.

---

# 6. Versioning

Mỗi lần thay đổi phải:

- tăng Version
- cập nhật Changelog
- giữ lịch sử

Không ghi đè lịch sử.

---

# 7. Ownership

Mỗi Entity phải có Owner.

Owner chịu trách nhiệm:

- phê duyệt
- cập nhật
- tiến hóa
- ngừng sử dụng

Trong trường hợp không xác định, Owner mặc định là AHI-F.

---

# 8. Traceability

Mọi Entity phải truy vết được:

- nguồn gốc
- phiên bản
- người sở hữu
- tài liệu tham chiếu
- lịch sử thay đổi

AHI-V phải kiểm tra được toàn bộ chuỗi truy vết.

---

# 9. Evolution Principles

Lifecycle không kết thúc ở Implemented.

Entity có thể tiếp tục:

Implemented

↓

Proposal (Version mới)

↓

Discussing

↓

Approved

↓

Artifact

↓

Implemented

Tạo thành vòng đời tiến hóa liên tục.

Không sửa quá khứ.

Chỉ tạo phiên bản mới.

---

# 10. Relationship with Other Standards

Lifecycle Standard được sử dụng bởi:

- AHI Entity Specification Standard
- AHI Workflow Standard
- AHI Skill Standard
- AHI Repository Standard
- AHI Knowledge Standard
- AHI-V

---

# 11. Validation Rules

AHI-V phải kiểm tra được:

- Lifecycle hợp lệ.
- Không bỏ qua trạng thái.
- Version liên tục.
- Owner hợp lệ.
- Changelog đầy đủ.
- Artifact tồn tại trên GitHub trước khi đánh dấu Implemented.

---

# 12. References

- AHI Constitution
- AHI Entity Definitions
- AHI Entity Specification Standard

---

# Changelog

## v1.0

- Khởi tạo tiêu chuẩn vòng đời (Lifecycle Standard) cho toàn bộ Entity trong hệ sinh thái AHI.
