# AHI Entity Base Specification

**Artifact ID:** AHI-SPEC-BASE-001

**Artifact Name:** AHI Entity Base Specification

**Version:** 1.0

**Status:** Approved

**Owner:** AHI-F (AHI-Founder)

**Source of Truth:** GitHub

---

# 1. Purpose

Định nghĩa cấu trúc nền tảng mà mọi Entity trong Hệ sinh thái AHI phải kế thừa.

Tài liệu này là Base Specification.

Không định nghĩa nghiệp vụ riêng của từng Entity.

---

# 2. Required Metadata

Mọi Entity phải có:

- Entity ID
- Official Name
- Full Name
- Version
- Status
- Owner
- Source of Truth

---

# 3. Required Sections

Mọi Entity Specification phải có:

1. Purpose
2. Definition
3. Goal
4. Scope
5. Responsibilities
6. Relationships
7. Inputs
8. Outputs
9. Lifecycle
10. Security
11. Evolution
12. References
13. Changelog

Không được loại bỏ các mục này.

Có thể bổ sung nhưng không được thiếu.

---

# 4. Inheritance Rules

Entity chỉ được:

- kế thừa
- mở rộng

Không được thay đổi ý nghĩa của Base Specification nếu không có phiên bản mới được phê duyệt.

---

# 5. Evolution Rules

Mọi Entity phải:

- tương thích với Constitution
- tương thích với Standards
- tương thích với Lifecycle
- có Version
- có Changelog

---

# 6. References

- AHI Constitution
- AHI Entity Definitions
- AHI Entity Specification Standard
- AHI Entity Lifecycle Standard

---

# Changelog

## v1.0

- Khởi tạo Base Specification cho toàn bộ Entity trong hệ sinh thái AHI.
