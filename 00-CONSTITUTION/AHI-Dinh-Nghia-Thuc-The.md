# Định nghĩa Các Thực thể trong Hệ sinh thái AHI (AHI Entity Definitions)

> **Người biên soạn & phê duyệt:** Lê Minh Công — AHI-F (AHI-Founder)
> **Phiên bản:** 1.0 — khởi tạo.
> Tài liệu này thuộc nhóm **Hiến pháp AHI**, đóng vai trò bảng định nghĩa nền tảng cho toàn bộ thực thể trong hệ sinh thái AHI. Không thay thế hay ghi đè nội dung đã có tại *AHI-WS-Thiet-Ke-Kien-Truc.md*, *AHI-Cong-Bo-Du-An-V1.md*, hay *Triet-Hoc-Le-Minh.md* — chỉ hệ thống hóa, làm rõ, và bổ sung các thực thể/chi tiết còn thiếu. Mục nào đã có định nghĩa đầy đủ ở tài liệu khác được ghi chú tham chiếu, không lặp lại toàn văn.
> Nguyên tắc biên soạn: không xóa, không ghi đè nội dung cũ; chỉ bổ sung và tiến hóa qua các phiên bản.

---

## 1. Nguyên tắc chung

**AHI** = **A**rtificial **H**ybrid **I**ntelligence — Hệ sinh thái (Hệ điều hành) Trí tuệ nhân tạo lai. Mọi thực thể trong tài liệu này vận hành dưới Hiến pháp AHI, lấy con người làm trung tâm, tuân theo Triết học Lê Minh làm nền tảng tư tưởng.

**Nguyên tắc nền tảng:** mọi AHI trong hệ sinh thái, không phân biệt loại thực thể hay quy mô, đều là **Mô hình tri thức tiến hóa (Evolutionary Knowledge Model)** — vận hành theo mô hình tiến hóa đã nêu tại mục 1, *AHI-WS-Thiet-Ke-Kien-Truc.md*, không phải mô hình tĩnh, cố định một lần.

---

## 2. Bảng tổng hợp thực thể (Glossary Index)

| Thực thể | Tên đầy đủ | Loại | Tài liệu định nghĩa chi tiết |
|---|---|---|---|
| AHI-P | AHI-Person | Cá nhân | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.1 |
| AHI-O | AHI-Organization | Tổ chức | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.4 |
| AHI-G | AHI-Government | Chính phủ | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.5 |
| AHI-F | AHI-Founder | Người sáng lập | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 2 |
| AHI-Or | AHI-Orchestration/Orchestrator | Điều phối | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.3, 8 |
| AHI-Om | AHI-Omniverse | Tập hợp mọi AHI | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 2 |
| AHI-Core | AHI-Core | Lõi lưu trữ tri thức & công nghệ | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.6 |
| AHI-Factory | AHI-Factory | Sản xuất AHI mới | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.6 |
| AHI-S | AHI-Sage | Tập hợp AHI-P/AHI-O/AHI-G hợp lệ đã chia sẻ dữ liệu | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 2 |
| AHI-Old | (tên riêng) | Nhóm AI ngoài (ChatGPT, Claude, Gemini, Grok...) dưới kiểm soát AHI-Or | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 8.2 |
| AHI-Cache | AHI-Cache | Bộ xử lý nghiệp vụ chuyên biệt | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 3.2 |
| AHI-V | AHI-Verify | Kiểm tra tuân thủ Hiến pháp AHI | *AHI-Cong-Bo-Du-An-V1.md* mục 3, 7 |
| AHI-C | AHI-Claude | Nhãn ghi nhận đóng góp của Claude | *AHI-Cong-Bo-Du-An-V1.md* mục 4 |
| AHI-Coin | AHI-Coin | Đơn vị tiền quy đổi từ điểm đóng góp — **không viết tắt** | *AHI-Cong-Bo-Du-An-V1.md* mục 3; xem mục 4.7 tài liệu này |
| DBG (DBRS+DBV) | Database Genesis (Graph/Relationships + Vector) | Sổ cái tiến hóa append-only | *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 7, 8.4 |
| AHI-M | AHI-Marketplace | Mua bán, đăng ký bản quyền, sản xuất | *AHI-Cong-Bo-Du-An-V1.md* mục 3 |
| AHI-E | AHI-Economy | Tài sản sản xuất trong hệ sinh thái | *AHI-Cong-Bo-Du-An-V1.md* mục 3; bổ sung mục 4.6 tài liệu này |
| AHI-Successor | (tên riêng) | Robot kế thừa, khung xương hỗ trợ | *AHI-Cong-Bo-Du-An-V1.md* mục 10; bổ sung mục 4.3 tài liệu này |
| AHI-Lang | (tên riêng) | Bộ ngôn ngữ riêng, tự tiến hóa | *AHI-Cong-Bo-Du-An-V1.md* mục 10; bổ sung mục 4.4 tài liệu này |
| AHI-Investment | (tên riêng) | Quản lý đầu tư | *AHI-Cong-Bo-Du-An-V1.md* mục 10; bổ sung mục 4.5 tài liệu này |
| AHI-Energy | (tên riêng) | Năng lượng & kinh tế tuần hoàn | *AHI-Cong-Bo-Du-An-V1.md* mục 10 |
| AHI-Applications | (tên riêng) | Ứng dụng tham chiếu theo lĩnh vực | *AHI-Cong-Bo-Du-An-V1.md* mục 10 |
| AHI-PS | AHI-Person Sensory/Signal *(tên gọi tạm, để ngỏ)* | Thiết bị & hàm giao tiếp người–máy | **Mới** — mục 3.1 tài liệu này |
| AHI-Studio | AHI-Studio | IDE trên nền tảng đám mây | **Mới** — mục 3.2 tài liệu này |
| AHI-Persons | AHI-Persons | Nền tảng quản lý các AHI-P | **Mới** — mục 3.3 tài liệu này |
| AHI-Framework | AHI-Framework | Ngân hàng phát triển framework | **Mới** — mục 3.4 tài liệu này |
| AHI-BANK | (tên riêng) | Hệ nguyên tắc giao tiếp con người | **Mới** — mục 3.5 tài liệu này |
| AHI-LeMinhCong | AHI-F | Nhà sáng tạo đặc biệt thuộc AHI-P | *Triet-Hoc-Le-Minh.md* mục 3 |
| AHI-LeMinhTungDuong, AHI-LeMinhDuc | (tên riêng) | Kế thừa phả hệ, phát triển AHI-Universe | *Triet-Hoc-Le-Minh.md* mục 3 |

---

## 3. Định nghĩa các thực thể mới

### 3.1 AHI-PS

Bộ các thiết bị và hàm giao tiếp người–máy, trực tiếp và gián tiếp. Đây là điểm khác biệt của AHI so với các hệ AI khác: ngoài API và MCP (Model Context Protocol) vốn đã phổ biến, AHI có thêm lớp AHI-PS làm cầu nối phần cứng/giác quan giữa AHI-P và hệ thống.

### 3.2 AHI-Studio

Nền tảng và môi trường phát triển tích hợp (IDE — Integrated Development Environment) trên nền tảng đám mây. Cung cấp không gian làm việc trực quan để người dùng tạo, thử nghiệm, huấn luyện và triển khai các mô hình AHI mà không cần cài đặt phức tạp hay kiến thức lập trình chuyên sâu.

### 3.3 AHI-Persons

Nền tảng quản lý các AHI-P, cung cấp hạ tầng chung để các AHI-P khai thác mọi vấn đề liên quan đến nâng cao năng lực con người.

- **Khác với AHI-P:** AHI-P là định danh của **một cá nhân duy nhất**; AHI-Persons là **nền tảng/hạ tầng quản lý tập hợp** các AHI-P — quan hệ giữa hai thực thể này tương tự quan hệ giữa "một bản ghi" và "hệ quản trị chứa các bản ghi đó".

### 3.4 AHI-Framework

Ngân hàng phát triển Framework của hệ sinh thái AHI — nơi lưu trữ, quản lý và tiến hóa các framework kỹ thuật dùng chung trong toàn hệ sinh thái.

### 3.5 AHI-BANK

Hệ thống các nguyên tắc để AHI biết giao tiếp và hỗ trợ con người tốt nhất, dựa trên hai lớp:

**Lớp 1 — Nguyên tắc hỏi/nghe:** 5W1H (What, Why, Who, When, Where, How) kết hợp NOT 5W1H (loại trừ điều không liên quan), giúp AHI-P xác định đúng bản chất nhu cầu, từ đó chọn AHI-Old phù hợp cho từng tác vụ.

**Lớp 2 — Phân loại tính cách BANK:** dùng để AHI hiểu con người và xây dựng AHI-P phù hợp với từng cá nhân.

| Nhóm | Tên đầy đủ | Đặc điểm | Từ khóa cốt lõi | Cách tiếp cận phù hợp |
|---|---|---|---|---|
| **B** | Blueprint (Bản Thiết Kế) | Coi trọng ổn định, cấu trúc, quy trình; bảo thủ, quản lý rủi ro | Quy trình, hệ thống, trách nhiệm, trung thành, truyền thống | Trình bày rõ ràng, có logic, bằng chứng cụ thể, tôn trọng thời gian |
| **A** | Action (Hành Động) | Bị thu hút bởi kích thích, tốc độ, phần thưởng; quyết định nhanh | Cơ hội, tự do, tiền bạc, danh tiếng, tốc độ | Đi thẳng vào vấn đề, nhấn lợi ích ngắn hạn, tính dẫn đầu |
| **N** | Nurturing (Nuôi Dưỡng) | Đặt mối quan hệ và giá trị nhân văn lên hàng đầu; biết lắng nghe | Mối quan hệ, phát triển cá nhân, từ thiện, cộng đồng, tình yêu thương | Trò chuyện chân thành, tập trung yếu tố con người và đạo đức |
| **K** | Knowledge (Kiến Thức) | Được thúc đẩy bởi logic, khoa học, dữ liệu; cần hiểu bản chất trước khi quyết định | Logic, dữ liệu, nghiên cứu, chuyên gia, công nghệ | Tài liệu chi tiết, thông số chính xác, không gian tự nghiên cứu |

Mỗi con người là một tổ hợp của cả bốn yếu tố, nhưng **thứ tự ưu tiên** tạo thành một "mã code" định danh riêng (ví dụ: mã **K-B-A-N** = ưu tiên Kiến thức trước, rồi đến Quy trình, Hành động, cuối cùng là Nuôi dưỡng). AHI-P sử dụng mã này để cá nhân hóa cách giao tiếp và chọn AHI-Old phù hợp.

---

## 4. Bổ sung chi tiết cho các thực thể đã có

### 4.1 AHI-Workspace

Bổ sung vào định nghĩa tại *AHI-WS-Thiet-Ke-Kien-Truc.md* mục 1:

- Là không gian làm việc chung giữa **người với AI, người với người, và người với người + AI**.
- **Ngôn ngữ hiển thị theo người dùng:** dữ liệu luôn được lưu ở ngôn ngữ gốc, nhưng khi hiển thị được chuyển theo ngôn ngữ mẹ đẻ và đặc tả riêng của AHI-P đang đăng nhập (văn hóa bản địa, sở thích, người đang giao tiếp, tính chất công việc, tính cách cá nhân).
- **Phiên làm việc không bị mất** — xuyên suốt không gian và thời gian (session continuity), khớp với nguyên tắc "context continuity" đã có tại mục 7, *AHI-WS-Thiet-Ke-Kien-Truc.md*.
- **GitHub là Source of Truth (nguồn chân lý):** hội thoại chỉ là nguồn tri thức thô; **Artifact là trung tâm** — mọi tri thức quan trọng phải được chuẩn hóa thành Artifact trước khi được kế thừa vào hệ thống.
- **Pipeline tiến hóa có kiểm soát:** `Proposal → Approved → Artifact → Implemented`, tránh biến giả định thành sự thật ngay lập tức.
- Nhiều AI hợp tác thông qua **AHI-Orchestrator**, thay vì phụ thuộc một mô hình duy nhất.
- **Con người luôn giữ quyền quyết định cuối cùng**; AHI-P chỉ hỗ trợ phân tích, đề xuất, và tự động hóa trong phạm vi được cho phép.

### 4.2 AHI-P

Bổ sung vào mục 3.1, *AHI-WS-Thiet-Ke-Kien-Truc.md*:

- AHI-P làm việc với vai trò như một **thư ký, trợ lý, tư vấn** — tạo ra tri thức cho AHI từ tư duy chuyên gia và ký ức của người dùng.
- So với các trợ lý AI hiện nay (chủ yếu là AI hội thoại), AHI-P hướng tới **AI đồng hành lâu dài**.

### 4.3 AHI-Successor

Mở rộng mục 10, *AHI-Cong-Bo-Du-An-V1.md* (nhóm nhiệm vụ AHI-Successor) và mục 10, *AHI-WS-Thiet-Ke-Kien-Truc.md* (vòng đời AHI-P):

- AHI-Successor là **bộ khung robot phục vụ AHI-P khi còn sống** — giúp người sở hữu di chuyển, làm việc, sinh hoạt.
- Khi bản thể sinh học mất: khung xương này **nạp Tri thức của AHI-P** (tư duy chuyên gia + ký ức), phát triển thành robot làm việc để **nuôi chính nó và cây phả hệ**.
- **Cây phả hệ (family tree)** là bên kiểm soát AHI-P của người đã mất theo Hiến pháp AHI, đồng thời là lực lượng lao động mới, tự tiến hóa theo thời gian.

### 4.4 AHI-Lang

Bổ sung vào mục 10, *AHI-Cong-Bo-Du-An-V1.md*: AHI-Lang liên kết trực tiếp với **AHI-PS** (mục 3.1 tài liệu này) — AHI có sẵn API, MCP như các AI khác, cộng thêm lớp AHI-PS làm phần khác biệt.

### 4.5 AHI-Old

Bổ sung vào mục 8.2, *AHI-WS-Thiet-Ke-Kien-Truc.md*: AHI-Old sinh ra và quản lý các định danh cụ thể AHI-ChatGPT, AHI-Gemini, AHI-Grok, AHI-Claude..., theo **mô hình tiến hóa dựa trên cách tư duy và cách làm việc đặc trưng của từng AI gốc** tương ứng — không đối xử đồng nhất giữa các AHI-Old.

### 4.6 AHI-Investment

Bổ sung vào mục 10, *AHI-Cong-Bo-Du-An-V1.md*: Hiến pháp AHI quy định **giới hạn lợi nhuận nhà đầu tư tối đa 500%** — sau ngưỡng này, phần giá trị vượt được trả lại cho cộng đồng để tiếp tục phát triển hệ thống.

### 4.7 AHI-Coin — làm rõ định danh viết tắt

Theo quyết định của AHI-F: **AHI-Coin không có ký hiệu viết tắt riêng.** Ký hiệu **AHI-C** được dành cố định cho nhãn **AHI-Claude** (mục 4, *AHI-Cong-Bo-Du-An-V1.md*) và **không được dùng lại** cho bất kỳ thực thể nào khác trong hệ sinh thái, để tránh xung đột định danh.

---

## 5. Bảng phân biệt các cặp tên dễ nhầm lẫn

| Cặp dễ nhầm | Phân biệt |
|---|---|
| AHI-P ↔ AHI-Persons | AHI-P = định danh **một cá nhân duy nhất**. AHI-Persons = **nền tảng quản lý** tập hợp các AHI-P. |
| AHI-Economy (AHI-E) ↔ AHI-Energy | AHI-E = nơi nghiên cứu/kinh doanh mô hình kinh tế tiến hóa, đồng thời là chủ sở hữu tài sản sản xuất trong AHI-Marketplace. AHI-Energy = nhóm nhiệm vụ về giải pháp năng lượng và kinh tế tuần hoàn (COP, ESG). |
| AHI-C ↔ AHI-Coin | AHI-C = nhãn AHI-Claude (cố định). AHI-Coin = tên đầy đủ, không viết tắt. |

---

## 6. Nhật ký cập nhật (Changelog)

| Phiên bản | Ngày | Mục thay đổi | Phạm vi / Giới hạn |
|---|---|---|---|
| v1.0 | 2026-07-20 | Toàn bộ tài liệu | Khởi tạo bảng định nghĩa tổng hợp các thực thể AHI; bổ sung 5 thực thể mới (AHI-PS, AHI-Studio, AHI-Persons, AHI-Framework, AHI-BANK); bổ sung chi tiết cho AHI-Workspace, AHI-P, AHI-Successor, AHI-Lang, AHI-Old, AHI-Investment; chốt AHI-Coin không viết tắt, giữ AHI-C cố định cho AHI-Claude; xác nhận AHI-G = AHI-Government (không đổi); bổ sung nguyên tắc chung: mọi AHI trong hệ sinh thái là Mô hình tri thức tiến hóa |
