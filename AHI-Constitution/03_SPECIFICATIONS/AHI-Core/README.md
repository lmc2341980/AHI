# AHI-Core Specification

**Artifact ID:** AHI-SPEC-CORE-001

**Entity:** AHI-Core

**Full Name:** AHI-Core

**Version:** 1.0

**Status:** Approved

**Owner:** AHI-F (AHI-Founder)

**Source of Truth:** GitHub

---

# 1. Purpose

AHI-Core là nền tảng lõi của Hệ sinh thái Artificial Hybrid Intelligence (AHI).

AHI-Core cung cấp các năng lực dùng chung, các dịch vụ lõi và các quy tắc nền tảng để mọi thành phần trong hệ sinh thái hoạt động thống nhất.

---

# 2. Definition

AHI-Core là Core Platform của hệ sinh thái AHI.

AHI-Core không trực tiếp thực hiện nghiệp vụ của từng Platform mà cung cấp các dịch vụ nền tảng để các Platform khác kế thừa và sử dụng.

AHI-Core là thành phần hạ tầng logic, không đồng nhất với một chương trình, máy chủ hoặc cơ sở dữ liệu cụ thể.

---

# 3. Goals

- Cung cấp các dịch vụ lõi cho toàn hệ sinh thái.
- Chuẩn hóa hành vi giữa các Platform.
- Giảm lặp lại chức năng.
- Hỗ trợ khả năng mở rộng và tiến hóa.
- Đảm bảo tính nhất quán của hệ thống.

---

# 4. Scope

AHI-Core chịu trách nhiệm:

- Quản lý các dịch vụ lõi.
- Quản lý cấu hình dùng chung.
- Quản lý định danh nội bộ.
- Quản lý khả năng dùng chung của nền tảng.
- Cung cấp các API và dịch vụ nền tảng cho các thành phần khác.

AHI-Core không điều phối Workflow (thuộc AHI-Or).

AHI-Core không quản lý giao diện người dùng (thuộc AHI-Workspace).

AHI-Core không lưu trữ Source of Truth (thuộc GitHub và các hệ lưu trữ được chỉ định).

---

# 5. Responsibilities

- Core Services.
- Shared Components.
- Configuration Services.
- Identity Services.
- Platform Utilities.
- Common Libraries.
- Internal Service Registry.

---

# 6. Relationships

## Parent

- AHI

## Used By

- AHI-Or
- AHI-Workspace
- AHI-Factory
- AHI-P
- AHI-O
- AHI-G
- AHI-Applications

## Uses

- Infrastructure Services
- Storage Services
- Network Services

---

# 7. Inputs

- Configuration.
- Policies.
- Service Registration.
- Internal Requests.

---

# 8. Outputs

- Core Services.
- Shared APIs.
- Shared Components.
- Platform Configuration.
- Internal Utilities.

---

# 9. Core Principles

AHI-Core phải bảo đảm:

- Reusability.
- Consistency.
- Extensibility.
- High Availability.
- Loose Coupling.
- Evolution First.

---

# 10. Security

AHI-Core phải:

- Bảo vệ các dịch vụ lõi.
- Kiểm soát quyền truy cập nội bộ.
- Ghi nhận Audit khi cần.
- Không tự thay đổi Constitution hoặc Artifact.

---

# 11. Evolution

AHI-Core được thiết kế để:

- Có khả năng mở rộng theo module.
- Hỗ trợ nhiều Platform.
- Hỗ trợ nhiều giao thức.
- Không phá vỡ khả năng tương thích khi tiến hóa.

---

# 12. Dependencies

AHI-Core phụ thuộc vào:

- AHI Constitution
- AHI Entity Definitions
- AHI Entity Specification Standard
- AHI Entity Lifecycle Standard

---

# 13. References

- AHI Constitution
- AHI-Or Specification
- AHI-Workspace Specification

---

# Changelog

## v1.0

- Khởi tạo đặc tả chính thức của AHI-Core.
