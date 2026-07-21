# AHI-Or Specification

**Artifact ID:** AHI-SPEC-OR-001

**Artifact Name:** AHI-Or Specification

**Entity:** AHI-Or

**Full Name:** AHI-Orchestrator

**Version:** 1.0

**Status:** Approved

**Owner:** AHI-F (AHI-Founder)

**Source of Truth:** GitHub

---

# 1. Purpose

Định nghĩa đặc tả chính thức của AHI-Or (AHI-Orchestrator).

AHI-Or là trung tâm điều phối của Hệ sinh thái Artificial Hybrid Intelligence (AHI), chịu trách nhiệm quản lý luồng làm việc, lựa chọn AI phù hợp, điều phối tài nguyên và kết nối các thành phần trong hệ sinh thái.

---

# 2. Definition

AHI-Or là nền tảng điều phối (Orchestration Platform) của hệ sinh thái AHI.

AHI-Or không thay thế các AI hoặc các Platform khác.

AHI-Or quyết định **AI nào**, **Workflow nào**, **Service nào** và **Resource nào** phù hợp nhất để thực hiện từng nhiệm vụ theo Hiến pháp AHI và các Standard hiện hành.

---

# 3. Goal

Mục tiêu của AHI-Or:

- Điều phối toàn bộ hệ sinh thái AHI.
- Giảm phụ thuộc vào một AI duy nhất.
- Tối ưu chất lượng, chi phí và hiệu năng.
- Đảm bảo mọi hoạt động tuân thủ Constitution.

---

# 4. Scope

AHI-Or chịu trách nhiệm:

- Điều phối Workflow.
- Điều phối AHI-Old.
- Điều phối Platform.
- Điều phối Service.
- Điều phối Tool.
- Điều phối Cache.
- Điều phối Knowledge Flow.

AHI-Or không sở hữu tri thức.

AHI-Or không thay thế quyền quyết định của con người.

---

# 5. Responsibilities

- Chọn AI phù hợp cho từng tác vụ.
- Quản lý Pipeline.
- Quản lý Context.
- Quản lý Session Continuity.
- Quản lý Routing.
- Quản lý Permission.
- Quản lý Execution Flow.
- Quản lý Audit Log.

---

# 6. Relationships

## Parent

- AHI

## Uses

- AHI-Workspace
- AHI-Core
- AHI-Cache
- AHI-V
- AHI-Factory
- AHI-Old

## Used By

- AHI-P
- AHI-O
- AHI-G
- AHI-Applications

---

# 7. Inputs

- User Request
- Workflow
- Artifact
- Knowledge
- Context
- Policy
- Permission

---

# 8. Outputs

- Execution Plan
- AI Routing
- Workflow Routing
- Tool Invocation
- Audit Information
- Execution Result

---

# 9. Lifecycle

Tuân thủ AHI Entity Lifecycle Standard.

---

# 10. Security

AHI-Or phải:

- Thực thi đúng Permission.
- Ghi nhận Audit.
- Không tự thay đổi Constitution.
- Không tự thay đổi Artifact.
- Không tự tạo tri thức chính thức.

---

# 11. Evolution

AHI-Or được thiết kế để:

- Hỗ trợ nhiều AI.
- Hỗ trợ nhiều Platform.
- Hỗ trợ nhiều Workflow.
- Hỗ trợ nhiều Protocol.
- Hỗ trợ mở rộng mà không phá vỡ tương thích.

---

# 12. References

- AHI Constitution
- AHI Entity Definitions
- AHI Entity Specification Standard
- AHI Entity Lifecycle Standard

---

# Changelog

## v1.0

- Khởi tạo đặc tả chính thức cho AHI-Or (AHI-Orchestrator).
