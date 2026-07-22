# AHI-P Specification — 002 (Current Best Version)

**Artifact ID:** AHI-SPEC-P
**Entity:** AHI-P
**Full Name:** AHI-Person
**File Version:** 002
**Status:** Draft — chờ AHI-F phê duyệt các mục đánh dấu "Đề xuất"
**Owner:** AHI-F (AHI-Founder)
**Source of Truth:** GitHub — AHI/AHI-Constitution
**Supersedes:** không thay thế 001 — chỉ bổ sung (án lệ), 001 vẫn giữ hiệu lực đầy đủ

> Kế thừa từ `001_AHI-P_Specification.md`, không mâu thuẫn với 001. Mỗi mục bổ sung
> dưới đây được ghi theo nguyên tắc án lệ: nêu rõ case phát sinh, điều khoản gốc liên
> quan, và nội dung mới.

---

## 1. Purpose

(Kế thừa nguyên trạng từ 001 §1 — không thay đổi.)

## 2. Definition

(Kế thừa nguyên trạng từ 001 §2.) Bổ sung: AHI-P hỗ trợ đa phương thức qua ngôn ngữ tự
nhiên, dữ liệu số, AHI-PS (thị giác máy tính), và các cảm biến được cấp quyền tường
minh.

## 3. Goals

- Đồng hành cùng con người.
- Quản lý tri thức.
- Quản lý ký ức.
- Hỗ trợ ra quyết định.
- Hỗ trợ học tập và làm việc.
- Hỗ trợ nhận biết môi trường bằng thị giác máy tính.
- Chuẩn bị cho quá trình kế thừa tri thức.

## 4. Scope

AHI-P chịu trách nhiệm: hồ sơ số, tri thức, ký ức, mục tiêu, giao tiếp AI, cộng tác,
tự động hóa được cấp quyền, phân tích hình ảnh/video/môi trường, hỗ trợ dẫn đường/cảnh
báo/nhận diện.

AHI-P **không tự quyết định thay con người**.

## 5. Responsibilities

Personal Profile Management, Knowledge Management, Memory Management, Goal
Management, Decision Support, Collaboration, Learning Support, Evolution Tracking,
Vision Assistance.

---

## 6. Identity Model

Kế thừa nguyên trạng từ 001 §3 (3 mức: DNA → biometric+liveness → định danh khác).
Không thay đổi.

---

## 7. State Machine (Máy trạng thái AHI-P)

**Case phát sinh:** cần mô hình hóa cụ thể 4 cấp xác thực (001 §3) và vòng đời cơ bản
(001 §4) thành các trạng thái vận hành có thể kiểm tra được bởi AHI-V.

### 7.1 Super-state 1 — ACTIVE (Giai đoạn Thực thể Sống / Song hành)

Vận hành song song với người thật, chịu ràng buộc bởi quyết định của con người sinh
học gốc và Hiến pháp AHI (001 §6).

| Sub-state | Mô tả | Điều kiện chuyển tiếp |
|---|---|---|
| `Unverified` | Khởi tạo, nạp dữ liệu nền tảng | Đạt xác thực mức 1-2 → `Provisional` |
| `Provisional` | Xác thực tạm thời, chạy song hành thử nghiệm | Đạt xác thực mức 3 → `Active` |
| `Active` | Kích hoạt toàn phần, đồng bộ thời gian thực với quyết định con người | Sự kiện `Owner_Deceased` → Super-state 2 |

**Bộ lọc tuân thủ Hiến pháp:** mọi hành vi của AHI-P ở trạng thái `Active` phải qua
kiểm tra hợp hiến. Nếu vi phạm, trạng thái bị hạ cấp về `Provisional` hoặc
`Unverified` để xử lý/hiệu chỉnh. *(Đề xuất — chưa chốt: cần AHI-F xác nhận cơ chế hạ
cấp tự động này trước khi coi là bắt buộc.)*

### 7.2 Super-state 2 — FROZEN / INDEPENDENT-EVOLVING

Kích hoạt khi có sự kiện `Owner_Deceased`. Quyền quyết định chuyển từ chủ sở hữu sang
Cây phả hệ (Family Tree, xem mục 12).

| Sub-state | Mô tả |
|---|---|
| `Frozen` (Di sản bất biến) | Đóng băng nguyên trạng toàn bộ dữ liệu, ký ức, hành vi của AHI-P tại thời điểm chủ sở hữu mất. Không sửa, không ghi đè — dùng để tham chiếu. |
| `Evolutionary Phase 2` | AHI-Successor trích xuất di sản từ bản `Frozen` để tiếp tục tiến hóa (mục 13). Tri thức mới **không ghi ngược** vào bản `Frozen`. |

### 7.3 Sơ đồ chuyển trạng thái

```
[Unverified] --xác thực mức 1-2--> [Provisional] --xác thực mức 3--> [Active]
                                                                          │
                                                          Owner_Deceased  │
                                                                          ▼
                                              ┌───────────────────────────────────┐
                                              │   Fork song song (bất biến từ đây) │
                                              └───────────────────────────────────┘
                                                    │                    │
                                                    ▼                    ▼
                                               [Frozen]      [Evolutionary Phase 2]
                                          (di sản, chỉ đọc)   (AHI-Successor, dưới
                                                                quản trị Cây phả hệ)
```

---

## 8. Data Model (Metadata Schema)

**Case phát sinh:** cần schema riêng cho AHI-P, mở rộng từ schema DBG chung
(AHI-WS-Thiet-Ke-Kien-Truc.md §8.4).

| Trường | Kế thừa DBG chung? | Ý nghĩa |
|---|---|---|
| `owner_ref` | Có | AHI-P thuộc về ai |
| `identity_level` | Mới | Mức định danh hiện tại (1/2/3, theo mục 6) |
| `state` | Mới | Trạng thái hiện tại theo State Machine (mục 7) |
| `dna_ref`, `biometric_ref` | Mới | Con trỏ tới Secret Space (SS) — không lưu dữ liệu thô ở đây |
| `successor_ref` | Mới | Liên kết tới AHI-Successor (nếu có) |
| `family_tree_ref` | Mới | Liên kết tới Cây phả hệ quản trị sau khi Frozen |
| `cognitive_layer` | Mới | Con trỏ tới dữ liệu Tư duy chuyên gia + Ký ức riêng (mục 9) — mặc định private |
| `sharing_consent` | Mới | Cờ đồng thuận chia sẻ dữ liệu lên AHI-Om (mục 9.3) |
| `status`, `version_chain`, `context_scope`, `knowledge_level`, `approved_at`, `approved_by` | Có | Giữ nguyên như DBG chung |

*Đề xuất — chưa chốt: cơ chế mã hóa/băm cụ thể cho `dna_ref`/`biometric_ref` cần một
phiên riêng để đặc tả, không nằm trong phạm vi 002.*

---

## 9. Hybrid Cognitive Model (Mô hình Nhận thức Lai)

**Case phát sinh:** làm rõ quan hệ giữa Tư duy chuyên gia, Ký ức, và AHI-SuBiet.

### 9.1 Hai thành phần riêng tư (private theo mặc định)

**Tư duy chuyên gia (Expert Thinking)** và **Ký ức (Memory)** là dữ liệu đặc trưng
riêng của mỗi người, kế thừa qua AHI-P. Mặc định giữ riêng trong AHI-P, không tự động
chia sẻ với hệ thống AHI nói chung.

### 9.2 AHI-SuBiet — lớp đánh giá độc lập

AHI-SuBiet **không phải** là nơi lưu ký ức, mà là **mức đánh giá tri thức độc lập**,
hoạt động cả khi chủ sở hữu **còn sống** lẫn **sau khi đã mất**. Đây là nền tảng đánh
giá tri thức (mức 4 trong bảng Tiến hóa tri thức — đạt được sau khi AHI-P phục vụ con
người ở mức phù hợp nhất ít nhất một lần). Mỗi AHI-P tự dùng AHI-SuBiet để đánh giá tri
thức của chính mình, độc lập với việc có chia sẻ dữ liệu ra ngoài hay không.

### 9.3 Thu nhận lên AHI-Om (cấp hành tinh)

AHI-Om chỉ thu thập và đánh giá tri thức từ các AHI-P **đồng thuận chia sẻ**
(`sharing_consent = true`) — đúng nguyên tắc quyền riêng tư dữ liệu đã chốt (AHI chỉ
dùng dữ liệu do AHI-P chủ động chia sẻ; lúc đó AHI-P được gọi là AHI-S). AHI-P không
chia sẻ vẫn tiếp tục hoạt động và tự đánh giá qua AHI-SuBiet nội bộ, không bị ép buộc
đóng góp lên cấp hành tinh.

---

## 10. Computer Vision (qua AHI-PS)

**Case phát sinh:** bổ sung khả năng thị giác máy tính cho AHI-P.

AHI-P được trang bị thị giác máy tính thông qua module **AHI-PS**, gồm: Camera, Video,
Object Detection, Face Recognition, OCR, Gesture, Environment Understanding,
Navigation, Safety, Human-in-the-loop.

Luồng xử lý: dữ liệu từ AHI-PS được AHI-Or tiếp nhận trước khi dựng Ma trận Prompt —
xếp vào Lớp 3 (ngữ cảnh cá nhân, nếu mang tính nền tảng lâu dài) hoặc Lớp 4 (nội dung
yêu cầu hiện tại, nếu tức thời), và phải qua AHI-V xác thực trước khi được nâng từ
"thảo luận" lên "chính thức".

---

## 11. Relationships

Kế thừa nguyên trạng từ 001 §5, bổ sung chi tiết Successor Relationship:

- **Parent**: AHI
- **Uses**: AHI-Or, AHI-Workspace, AHI-Core, AHI-Factory, AHI-V, AHI-Lang, AHI-PS,
  AHI-BANK, AHI-Old
- **Managed By**: AHI-Persons
- **May Belong To**: AHI-O, AHI-G
- **Assisted By**: AHI-Successor

**Successor Relationship:**
- AHI-P là **Source Identity**.
- AHI-Successor là **Successor Entity**.
- Sau khi chủ thể sinh học qua đời: AHI-P chuyển sang Frozen Generation, được bảo tồn
  vĩnh viễn; quyền quản trị chuyển sang cây phả hệ theo Hiến pháp AHI; AHI-Successor kế
  thừa tri thức được phép sử dụng và tiếp tục tiến hóa; mọi tri thức mới chỉ được lưu
  trong AHI-Successor, không ghi đè AHI-P.

---

## 12. Family Tree Governance

**Case phát sinh:** cần cơ chế quản trị cụ thể sau khi AHI-P chuyển sang `Frozen`.

- Khi AHI-P chuyển sang Super-state 2, quyền quản trị chuyển từ chủ sở hữu sang Cây
  phả hệ.
- **Đề xuất — chưa chốt:** áp dụng nguyên tắc đồng thuận quá bán (>50%) đã dùng cho
  AHI-O/AHI-G cho các quyết định của Cây phả hệ liên quan tới AHI-P đã Frozen — đây là
  mở rộng chưa có trong tài liệu gốc, cần AHI-F chốt riêng ở phiên sau.
- Cây phả hệ dùng dữ liệu từ bản `Frozen` làm chất liệu tham chiếu (không sửa) cho
  AHI-Successor tiến hóa tiếp (mục 13).

---

## 13. Successor Model & Workforce Phase

### Biological Phase
AHI-P do chủ sở hữu quản trị; AHI-Successor hỗ trợ di chuyển, sinh hoạt, lao động,
tương tác môi trường — **không có quyền thay chủ**. Thị giác máy tính hỗ trợ nhận biết
người, vật thể, môi trường và cảnh báo.

### Transition Event
Đóng băng AHI-P → chuyển quyền quản trị sang Cây phả hệ → AHI-Successor chuyển sang chế
độ kế thừa.

### Successor Phase
AHI-Successor: kế thừa tư duy chuyên gia, kế thừa ký ức được phép, tiếp tục học tập, bổ
sung kỹ năng mới. **Không thay đổi dữ liệu gốc của AHI-P** (bản Frozen bất biến).

### Workforce Phase
AHI-Successor trở thành lực lượng lao động mới: tự nuôi chính mình, tạo giá trị, nuôi
cây phả hệ, phục vụ xã hội, tiến hóa liên tục phù hợp với xã hội.

---

## 14. Inputs / Outputs

**Inputs:** User Commands, Conversations, Artifacts, Knowledge, Sensor Data, Vision
Data, External Data được cấp quyền.

**Outputs:** Knowledge, Artifacts, Reports, Recommendations, Automation Requests,
Vision Analysis Results.

---

## 15. Core Principles

Từ Quy tắc AHI cấp hệ thống (đã chốt): Constitution First, Inheritance First,
Evolution First, Artifact First, Human Ownership, Current Best Version, Single Source
of Truth.

Bổ sung riêng cho AHI-P — **Đề xuất, cần AHI-F xác nhận**: Human-in-the-loop, Privacy
by Design, Explicit Permission. *(Ba nguyên tắc này hợp lý về mặt kỹ thuật và không
mâu thuẫn với Hiến pháp AHI, nhưng chưa từng xuất hiện trong các tài liệu đã duyệt —
liệt kê ở đây để AHI-F rà soát, không mặc nhiên coi là điều khoản chính thức.)*

---

## 16. Security

Nguyên tắc chung (không mâu thuẫn với Kiến trúc AHI-WS §15 — Secret Space): bảo vệ dữ
liệu cá nhân, kiểm soát truy cập, không chia sẻ trái phép, ghi nhật ký thay đổi, cho
phép chủ sở hữu quản lý dữ liệu.

**Để ngỏ:** cơ chế mã hóa, giao thức xác thực cụ thể, và kiểm soát truy cập chi tiết
theo cấp — cần một phiên đặc tả riêng, không tự suy diễn thêm ở đây.

## 17. API

**Để ngỏ.** Danh sách thực thể AHI-P tương tác đã có ở mục 11 (Relationships). Thiết
kế giao diện (API) chi tiết giữa AHI-Or và AHI-Cache/AHI-PS vẫn nằm trong nhóm "bước
tiếp theo" của Kiến trúc AHI-WS, cần một phiên riêng để đặc tả.

---

## 18. Dependencies

AHI Constitution, AHI-Or, AHI-Workspace, AHI-Core, AHI-Factory, AHI-V, AHI Entity
Definitions, AHI Entity Specification Standard, AHI Entity Lifecycle Standard.

## 19. References

001_AHI-P_Specification.md, AHI-Or Specification, AHI-Workspace Specification,
AHI-Core Specification, AHI-Factory Specification, AHI-V Specification, AHI Entity
Definitions.

---

## 20. Cross-Reference Block (dành cho AHI khác / repository khác)

| Trường | Giá trị |
|---|---|
| `artifact_id` | `AHI-SPEC-P` |
| `entity` | AHI-P |
| `current_best_version` | 002 |
| `status` | Draft (chờ phê duyệt các mục "Đề xuất") |
| `supersedes` | không có (bổ sung trên nền 001, không thay thế) |
| `canonical_path` | `AHI-Constitution/03_SPECIFICATIONS/AHI-P/002_AHI-P_Specification.md` |
| `repo` | `AHI/AHI-Constitution` |

**Quy tắc tham chiếu liên-repo:** AHI/repository khác nên trỏ theo `artifact_id`
(`AHI-SPEC-P`), không hardcode `canonical_path` — vì đường dẫn file có thể đổi số phiên
bản (002 → 003...) trong khi `artifact_id` giữ nguyên qua toàn bộ vòng đời tài liệu.

---

## 21. Changelog

| Phiên bản | Ngày | Mục thay đổi | Phạm vi / Giới hạn |
|---|---|---|---|
| 002 | 2026-07-21 | Toàn bộ | Bổ sung theo án lệ trên nền 001: State Machine, Data Model, Hybrid Cognitive Model (đã hiệu chỉnh AHI-SuBiet), Computer Vision/AHI-PS, Family Tree Governance (đề xuất), Successor Model + Workforce Phase, Cross-Reference Block liên-repo. Tách bạch rõ nội dung "đã chốt" và "đề xuất — chưa chốt" để tránh việc tự động coi mọi bổ sung là chính thức. |
