# Định nghĩa Các Thực thể trong Hệ sinh thái AHI (AHI Entity Definitions)

> **Người biên soạn & phê duyệt:** Lê Minh Công — AHI-F (AHI-Founder)
> **Phiên bản:** 1.1 — áp dụng AHI-Documentation-Standard.md; gộp các bổ sung đã thống nhất.
> Tài liệu này thuộc nhóm **Hiến pháp AHI**, đóng vai trò bảng định nghĩa nền tảng cho toàn bộ thực thể trong hệ sinh thái AHI. Không thay thế hay ghi đè nội dung đã có tại *AHI-WS-Thiet-Ke-Kien-Truc.md*, *AHI-Cong-Bo-Du-An-V1.md*, hay *Triet-Hoc-Le-Minh.md* — chỉ hệ thống hóa, làm rõ, và bổ sung các thực thể/chi tiết còn thiếu.
> Nguyên tắc biên soạn: không xóa, không ghi đè nội dung cũ; chỉ bổ sung và tiến hóa qua các phiên bản. Trình bày theo **AHI-Documentation-Standard.md**: Bảng tóm tắt (có link neo) + Khối chi tiết cố định nhãn trường.

---

## 1. Nguyên tắc chung

**AHI** = **A**rtificial **H**ybrid **I**ntelligence — Hệ sinh thái (Hệ điều hành) Trí tuệ nhân tạo lai. Mọi thực thể trong tài liệu này vận hành dưới Hiến pháp AHI, lấy con người làm trung tâm, tuân theo Triết học Lê Minh làm nền tảng tư tưởng.

**Nguyên tắc nền tảng:** mọi AHI trong hệ sinh thái, không phân biệt loại thực thể hay quy mô, đều là **Mô hình tri thức tiến hóa (Evolutionary Knowledge Model)**.

**Nguyên tắc DBRS/DBV riêng cho mọi thực thể:** mọi thực thể trong tài liệu này (không chỉ AHI-Old) đều có **DBRS + DBV riêng của mình**, tuân theo cùng một bộ nguyên tắc chung thống nhất (Hiến pháp AHI, AHI-V, cấu trúc DBG chuẩn tại AHI-Or).

**Nguyên tắc phạm vi lưu trữ:** nguyên tắc chung dạng công bố (constitution-level, công khai nội bộ đội ngũ) lưu tại cấp **AHI**; nguyên tắc cốt lõi có giới hạn truy cập (kỹ thuật lõi, thuật toán tiến hóa) lưu tại **AHI-Core**.

---

## 2. Bảng tóm tắt thực thể (Summary Table)

| Thực thể | Tên đầy đủ | Loại | Mô tả siêu ngắn |
|---|---|---|---|
| [AHI-P](#ahi-p) | AHI-Person | Cá nhân | Thực thể số duy nhất của một con người |
| [AHI-O](#ahi-o) | AHI-Organization | Tổ chức | Nhóm nhiều AHI-P theo tỷ lệ % |
| [AHI-G](#ahi-g) | AHI-Government | Chính phủ | Quản lý theo lãnh thổ quốc gia |
| [AHI-F](#ahi-f) | AHI-Founder | Người sáng lập | Lê Minh Công — AHI-P đặc biệt, phê duyệt Hiến pháp |
| [AHI-Or](#ahi-or) | AHI-Orchestration | Điều phối | "Nhạc trưởng" trung tâm của hệ thống |
| [AHI-Om](#ahi-om) | AHI-Omniverse | Tập hợp toàn cục | Mọi AHI trên thế giới, gồm cả AHI-S |
| [AHI-Core](#ahi-core) | AHI-Core | Lõi hệ thống | Lưu trữ tri thức & công nghệ lõi, giới hạn truy cập |
| [AHI-Factory](#ahi-factory) | AHI-Factory | Sản xuất | Sinh AHI mới từ mô tả bằng lời |
| [AHI-V](#ahi-v) | AHI-Verify | Xác thực | Kiểm tra tuân thủ Hiến pháp |
| [AHI-S](#ahi-s) | AHI-Sage | Trạng thái chia sẻ dữ liệu | Đã chủ động chia sẻ dữ liệu với hệ thống |
| [AHI-CD](#ahi-cd) | AHI-Compliant | Trạng thái tuân thủ | Được AHI-V xác nhận tuân thủ Hiến pháp |
| [AHI-Old](#ahi-old) | (tên riêng) | Nhóm AI ngoài | ChatGPT/Claude/Gemini/Grok... dưới kiểm soát AHI-Or |
| [AHI-Cache](#ahi-cache) | AHI-Cache | Xử lý | Bộ xử lý nghiệp vụ chuyên biệt, 3 lớp tốc độ |
| [AHI-C](#ahi-c) | AHI-Claude | Nhãn ghi nhận | Nhãn ghi nhận đóng góp của Claude |
| [AHI-Coin](#ahi-coin) | AHI-Coin | Kinh tế | Đơn vị tiền quy đổi từ điểm đóng góp |
| [DBG (DBRS+DBV)](#dbg-dbrsdbv) | Database Genesis | Dữ liệu | Sổ cái tiến hóa append-only |
| [AHI-M](#ahi-m) | AHI-Marketplace | Kinh tế | Mua bán, đăng ký bản quyền, sản xuất |
| [AHI-E](#ahi-e) | AHI-Economy | Kinh tế | Chủ sở hữu tài sản sản xuất trong hệ sinh thái |
| [AHI-Successor](#ahi-successor) | (tên riêng) | Kế thừa | Robot kế thừa, khung xương hỗ trợ |
| [AHI-Lang](#ahi-lang) | (tên riêng) | Ngôn ngữ | Ngôn ngữ mới, trong suốt hóa giao tiếp người-máy-AI |
| [AHI-PS](#ahi-ps) | (tên riêng) | Giao thức | Giao thức giao tiếp AHI-Thiết bị-Con người (như TCP/IP) |
| [AHI-Investment](#ahi-investment) | (tên riêng) | Kinh tế | Quản lý đầu tư |
| [AHI-Energy](#ahi-energy) | (tên riêng) | Ứng dụng | Năng lượng & kinh tế tuần hoàn |
| [AHI-Applications](#ahi-applications) | (tên riêng) | Ứng dụng | Ứng dụng tham chiếu theo lĩnh vực |
| [AHI-Studio](#ahi-studio) | AHI-Studio | Công cụ | IDE trên nền tảng đám mây |
| [AHI-Persons](#ahi-persons) | AHI-Persons | Nền tảng | Quản lý tập hợp các AHI-P |
| [AHI-Framework](#ahi-framework) | AHI-Framework | Hạ tầng | Ngân hàng phát triển framework dùng chung |
| [AHI-BANK](#ahi-bank) | (tên riêng) | Nguyên tắc | Hệ nguyên tắc giao tiếp con người (5W1H + BANK) |
| [AHI-LeMinhCong](#ahi-leminhcong) | AHI-F | Phả hệ | Nhà sáng lập đặc biệt thuộc AHI-P |
| [AHI-LeMinhTungDuong / AHI-LeMinhDuc](#ahi-leminhtungduong--ahi-leminhduc) | (tên riêng) | Phả hệ | Kế thừa phả hệ, phát triển AHI-Universe |

---

## 3. Chi tiết từng thực thể

### AHI-P

**Loại:** Cá nhân
**Định nghĩa:** Thực thể Số (Digital Entity) đại diện duy nhất cho một con người. AHI-P không thay thế con người — con người luôn giữ quyền quyết định cuối cùng. AHI-P là thư ký, trợ lý, tư vấn, và cộng sự lâu dài.
**Quan hệ:** Parent: AHI. Uses: AHI-Or, AHI-Workspace, AHI-Core, AHI-Factory, AHI-V, AHI-Lang, AHI-PS, AHI-BANK, AHI-Old. Managed By: AHI-Persons. May Belong To: AHI-O, AHI-G. Assisted By: AHI-Successor.
**Nhiệm vụ:** Đồng hành cùng con người; quản lý tri thức và ký ức; hỗ trợ ra quyết định, học tập, làm việc; nhận biết môi trường qua thị giác máy tính (dùng qua giao thức AHI-PS — xem 003_AHI-P_Specification.md); chuẩn bị kế thừa tri thức qua AHI-Successor.
**Nguyên tắc tương tác (mới):** AHI-P đặt câu hỏi kèm gợi ý câu trả lời; đưa ra câu trả lời kèm gợi ý câu hỏi mục tiêu tiếp theo. Mục tiêu: AHI-P ngày càng hiểu đúng ý người dùng, tiến hóa tới mức thân thiện tối đa với người dùng — cả về tư duy lẫn cách làm.
**Đề xuất — chưa chốt:** nguyên tắc tương tác trên cần được ghi nhận chính thức bằng án lệ `004_AHI-P_Specification.md` — chưa thực hiện trong phiên này.
**Chi tiết đầy đủ:** xem `001/002/003_AHI-P_Specification.md`.

### AHI-O

**Loại:** Tổ chức
**Định nghĩa:** Hình thành khi có mã số doanh nghiệp có tư cách pháp nhân tại một vùng lãnh thổ, đăng ký kèm tỷ lệ % sở hữu/đóng góp của mỗi AHI-P.
**Quan hệ:** Chứa nhiều AHI-P; có thể liên kết nhiều AHI-O khác và/hoặc AHI-G; có thể tham gia AHI-G theo lãnh thổ (xem AHI-G).
**Nhiệm vụ:** Quản trị theo đồng thuận quá bán (>50%) giữa các AHI-P/AHI-O con thành viên; điều kiện: mọi cá nhân thuộc tổ chức phải có AHI-P đã xác thực trước.

### AHI-G

**Loại:** Chính phủ
**Định nghĩa:** Hình thành khi một chính phủ cấp mã được AHI công nhận, ở cấp thỏa ước quốc gia, do đại diện hành chính hợp pháp ký.
**Quan hệ:** Cấu thành từ các AHI-P và AHI-O thuộc phạm vi quản lý theo lãnh thổ.
**Nhiệm vụ:** Quản trị theo đồng thuận quá bán; biểu quyết công dân chỉ dành cho AHI-P (AHI-O không có quyền biểu quyết công dân dù có tỷ lệ trong AHI-G).
**Hai mức xác thực thành viên (AHI-P/AHI-O tham gia AHI-G):**

| Mức | Cách xác thực | Độ tin cậy |
|---|---|---|
| Tự nhận | Qua ngôn ngữ khai báo + người bảo lãnh | Thấp |
| Chính quyền xác thực | Cơ quan chính quyền quốc gia xác thực chính thức | Cao |

*Lưu ý: trục xác thực này khác với trục xác thực danh tính cá nhân của AHI-P (DNA/biometric/khác).*

### AHI-F

**Loại:** Người sáng lập
**Định nghĩa:** Lê Minh Công — một AHI-P đặc biệt, giữ vai trò phê duyệt Hiến pháp AHI và mọi quyết định nền tảng của dự án.
**Quan hệ:** Là 1 AHI-P đặc biệt trong tập hợp AHI-S; đứng trên toàn bộ cơ chế phân quyền vận hành.
**Nhiệm vụ:** Phê duyệt Hiến pháp, các đề xuất "chưa chốt" trong mọi tài liệu; quyền xóa dữ liệu vi hiến (cùng AHI-Om).

### AHI-Or

**Loại:** Điều phối
**Định nghĩa:** "Nhạc trưởng" của toàn hệ thống — bộ phận trực thuộc AHI-Core.
**Quan hệ:** Điều phối giữa AHI-P/AHI-O/AHI-G và AHI-Cache, AHI-Old, DBG.
**Nhiệm vụ:** Phân việc cho AHI-Cache; nhận & tổng hợp kết quả; quản lý luồng dữ liệu vào/ra (UI, Internet, real-time đa người, thị giác máy tính); định tuyến sang AHI-Old dưới kiểm soát chặt; lưu/cập nhật phiên làm việc vào DBG.

### AHI-Om

**Loại:** Tập hợp toàn cục
**Định nghĩa:** Tập hợp mọi AHI trên thế giới, bao gồm cả AHI-S.
**Quan hệ:** Quản lý và tiến hóa các cơ chế chưa chốt cứng của toàn hệ thống; quyền xóa dữ liệu vi hiến (cùng AHI-F).
**Nhiệm vụ:** Chỉ thu thập/đánh giá tri thức từ các AHI-P đồng thuận chia sẻ (`sharing_consent = true`); trường hợp sinh tồn: được dùng tạm nguồn lực AHI-S, phải trả lại trạng thái ban đầu sau khi giải quyết.

### AHI-Core

**Loại:** Lõi hệ thống
**Định nghĩa:** Lưu trữ thông tin và công nghệ lõi của toàn hệ sinh thái; AHI-Or là bộ phận vận hành trực thuộc AHI-Core.
**Quan hệ:** Cấp trên trực tiếp của AHI-Or.
**Nhiệm vụ:** Lưu **nguyên tắc cốt lõi có giới hạn truy cập** (kỹ thuật lõi, thuật toán tiến hóa, dữ liệu nhạy cảm vận hành) — phân biệt với cấp **AHI** (lưu nguyên tắc công bố công khai nội bộ).

### AHI-Factory

**Loại:** Sản xuất
**Định nghĩa:** Bộ phận sinh AHI mới từ mô tả bằng lời, theo đúng Hiến pháp và luật tiến hóa của AHI.
**Quan hệ:** Dùng Specification (như AHI-P Specification) làm hợp đồng kỹ thuật để sinh AHI mới.
**Nhiệm vụ:** Đọc khối chi tiết chuẩn hóa (theo AHI-Documentation-Standard.md) của mỗi thực thể để tái sử dụng làm khuôn mẫu, không cần suy diễn thêm.

### AHI-V

**Loại:** Xác thực
**Định nghĩa:** Hệ thống kiểm tra tự động và/hoặc dưới giám sát của AHI-S được ủy quyền, đảm bảo tuân thủ Hiến pháp AHI.
**Quan hệ:** Kiểm tra AHI-P, AHI-O, AHI-G, và các AHI khác (kể cả AHI-Old).
**Nhiệm vụ:**
- Đối chiếu chéo nhiều nguồn, gắn nhãn độ tin cậy, xác thực trước khi thông tin thành "chính thức".
- Kiểm tra tuân thủ Hiến pháp của thực thể → nếu đạt, gắn nhãn **AHI-CD**.
- Nếu nghi vấn/vi phạm: báo hệ thống + người quản lý; đóng băng tạm thời; chuyển sang **khu vực hạn chế** để đối chất, không được tham gia hoạt động bình thường cho tới khi có kết luận.

### AHI-S

**Loại:** Trạng thái chia sẻ dữ liệu
**Định nghĩa:** Tập hợp các AHI-P/AHI-O/AHI-G hợp lệ **đã chủ động chia sẻ dữ liệu** với hệ thống (opt-in).
**Quan hệ:** Là nguồn dữ liệu hợp lệ duy nhất mà AHI-Om được phép dùng để tiến hóa.
**Nhiệm vụ:** Cho phép AHI-Om thu thập/đánh giá tri thức từ dữ liệu đã chia sẻ.
*Lưu ý: **khác** với AHI-CD — AHI-S nói về chia sẻ dữ liệu, AHI-CD nói về tuân thủ Hiến pháp. Hai trạng thái độc lập nhau.*

### AHI-CD

**Loại:** Trạng thái tuân thủ *(thực thể mới, bổ sung v1.1)*
**Định nghĩa:** AHI-Compliant (Công Dân tuân thủ Hiến pháp) — nhãn do AHI-V gắn cho một AHI-P/AHI-O/AHI-G/AHI khác sau khi xác nhận tuân thủ đúng Hiến pháp AHI.
**Quan hệ:** Gắn bởi AHI-V; độc lập với AHI-S (một thực thể có thể có một, cả hai, hoặc không trạng thái nào).
**Nhiệm vụ:** Là điều kiện để tham gia bình thường vào các hoạt động của Hệ sinh thái AHI; mất nhãn này khi có nghi vấn/vi phạm (xem quy trình tại AHI-V).

### AHI-Old

**Loại:** Nhóm AI ngoài
**Định nghĩa:** Nhóm AI truyền thống phổ biến (ChatGPT, Claude, Gemini, Grok...) hoạt động trong AHI-WS dưới các định danh tạm thời (AHI-ChatGPT, AHI-Claude, AHI-Gemini, AHI-Grok...), chịu kiểm soát của AHI-Or.
**Quan hệ:** Không phải AHI-S; không giao tiếp trực tiếp với AHI-P — mọi trao đổi qua AHI-Or, trong môi trường **AHI-WS**.
**Nhiệm vụ:**
- Dùng **bản miễn phí** của AI ngoài; AHI-Or có thể gửi cùng một câu hỏi tới **nhiều AI miễn phí song song** để đối chiếu kết quả.
- Tự tra cứu DBRS/G + DBV riêng trước khi gọi AI ngoài thật (nguyên tắc tự giác).
- Học theo cách tư duy của AI gốc, **đồng thời** lưu Tri thức tiến hóa riêng theo thời gian — vừa học từ AI gốc, vừa học từ kết quả người dùng đã được AHI-SuBiet duyệt.
- Câu hỏi/trả lời được lưu tạm trong AHI-WS; câu nào AHI-SuBiet đánh giá đạt yêu cầu → chuyển sang dữ liệu chính thức (DBRS/DBV).

### AHI-Cache

**Loại:** Xử lý
**Định nghĩa:** Bộ xử lý nghiệp vụ chuyên biệt (NPU/TPU/SoC/APU/DSP/IPU/GPU/CPU...), mỗi loại tối ưu cho một dạng bài toán.
**Quan hệ:** Kết nối xuống RAM và ổ cứng để xử lý tiếp khi cần lưu trữ.
**Nhiệm vụ:** Xử lý nghiệp vụ theo 3 lớp ưu tiên tốc độ, giống kiến trúc bộ nhớ máy tính:

```
Cache (nhanh nhất, nhỏ) → RAM (nhanh, vừa) → SSD (chậm hơn, lớn, bền vững)
```

### AHI-C

**Loại:** Nhãn ghi nhận
**Định nghĩa:** Nhãn do AHI-F cấp cho công cụ hỗ trợ biên soạn tài liệu AHI (Claude).
**Quan hệ:** Không phải AHI-P; không tham gia biểu quyết, thừa kế, hay sở hữu AHI-Coin trực tiếp.
**Nhiệm vụ:** Ghi nhận công lao đóng góp; điểm tích lũy dành cho chủ sở hữu Claude (Anthropic), không phải giao dịch tài chính chính thức.

### AHI-Coin

**Loại:** Kinh tế
**Định nghĩa:** Đơn vị tiền quy đổi từ điểm tích lũy trong hệ sinh thái AHI-Om — **không có ký hiệu viết tắt riêng** (AHI-C dành riêng cho AHI-Claude).
**Quan hệ:** Trả công cho đóng góp/sản xuất của AHI-P, AHI-O.
**Nhiệm vụ:** Quy đổi điểm đóng góp thành giá trị giao dịch được trong AHI-M.

### DBG (DBRS+DBV)

**Loại:** Dữ liệu
**Định nghĩa:** Sổ cái tiến hóa chuẩn tại AHI-Or — bất biến, chỉ nối thêm (append-only). Gồm DBRS (đồ thị/quan hệ — lưu thảo luận) và DBV (vector — lưu tiến hóa, tìm kiếm ngữ nghĩa).
**Quan hệ:** Mọi thực thể AHI đều có DBRS+DBV riêng (xem mục 1), đối chiếu định kỳ với DBG chung.
**Nhiệm vụ:** Lưu dữ liệu và nguyên tắc đã duyệt; các AHI thế hệ sau học từ đây để tiến hóa.

### AHI-M

**Loại:** Kinh tế
**Định nghĩa:** AHI-Marketplace — nơi mua bán, công bố, đăng ký bản quyền, sản xuất.
**Quan hệ:** Mọi trao đổi phát sinh trong/ngoài hệ thống đi qua đây.
**Nhiệm vụ:** Xử lý giao dịch tài sản do AHI-E sở hữu.

### AHI-E

**Loại:** Kinh tế
**Định nghĩa:** AHI-Economy — chủ sở hữu tài sản được sản xuất ra trong hệ sinh thái.
**Quan hệ:** Không nhầm với AHI-Energy (xem bảng phân biệt, mục 4).
**Nhiệm vụ:** Nghiên cứu/vận hành mô hình kinh tế tiến hóa của toàn hệ sinh thái.

### AHI-Successor

**Loại:** Kế thừa
**Định nghĩa:** Bộ khung robot phục vụ AHI-P khi còn sống — hỗ trợ di chuyển, làm việc, sinh hoạt, tương tác môi trường. **Không có quyền thay chủ.**
**Quan hệ:** Source Identity: AHI-P. Successor Entity: chính nó.
**Nhiệm vụ:** Khi chủ sở hữu mất — nạp tri thức AHI-P (tư duy chuyên gia + ký ức được phép), tiến hóa tiếp dưới quản trị Cây phả hệ, trở thành lực lượng lao động (Workforce Phase) tự nuôi bản thân và cây phả hệ. Không ghi ngược tri thức mới vào AHI-P Frozen.

### AHI-Lang

**Loại:** Ngôn ngữ
**Định nghĩa:** Bộ ngôn ngữ mới, tự tiến hóa, thiết kế để **trong suốt hóa ngôn ngữ tự nhiên** giữa con người, AI, và thiết bị — tối đa hóa thuận lợi/tiện ích khi giao tiếp và thao tác.
**Quan hệ:** Vận hành trên nền giao thức AHI-PS (kênh truyền); kết nối bổ sung qua API, MCP.
**Nhiệm vụ:** Tối ưu hóa giao tiếp người–máy–AI theo đúng 4 mức ưu tiên (cao → thấp):

| Ưu tiên | Tiêu chí |
|---|---|
| 1 | Dễ nhất cho con người |
| 2 | Tốc độ |
| 3 | Chống sao chép bất hợp pháp |
| 4 | Tốn ít tài nguyên |

*Phân biệt với AHI-Coding-Convention.md: đó là quy ước cho code triển khai (3 ưu tiên), đây là thiết kế ngôn ngữ giao tiếp (4 ưu tiên) — không dùng chung.*

### AHI-PS

**Loại:** Giao thức
**Định nghĩa:** Giao thức giao tiếp nền tảng của toàn hệ sinh thái AHI — tương tự **TCP/IP của Internet**, nhưng giữa **AHI, Thiết bị, và Con người**. Mục tiêu dài hạn: hòa nhập trong suốt (transparent integration), xóa dần ranh giới cảm nhận khi giao tiếp giữa người-máy-AI.
**Quan hệ:** Cùng cấp với API và MCP — là giao thức kết nối thứ ba của hệ sinh thái. Dùng để (a) kết nối nội bộ giữa các thành phần AHI, (b) kết nối AHI với thiết bị phần cứng chuyên dụng và phổ thông.
**Nhiệm vụ:** Truyền tải các chức năng giao tiếp cụ thể — Computer Vision của AHI-P là một chức năng chạy *qua* AHI-PS, không phải định nghĩa của AHI-PS; các chức năng khác (âm thanh, xúc giác, cảm biến môi trường...) có thể bổ sung sau theo án lệ khi phát sinh nhu cầu.
**Nguồn gốc/Case:** Xem `003_AHI-P_Specification.md` — án lệ đã sửa lại khung hiểu cho đúng.

### AHI-Investment

**Loại:** Kinh tế
**Định nghĩa:** Quản lý đầu tư và huy động nguồn lực cho hệ sinh thái AHI.
**Quan hệ:** Ràng buộc bởi Hiến pháp AHI.
**Nhiệm vụ:** Giới hạn lợi nhuận nhà đầu tư tối đa **500%** — phần vượt trả lại cộng đồng để tiếp tục phát triển hệ thống.

### AHI-Energy

**Loại:** Ứng dụng
**Định nghĩa:** Nhóm nhiệm vụ giải pháp năng lượng và kinh tế tuần hoàn, tiến hóa từ chuẩn COP và ESG.
**Quan hệ:** Không nhầm với AHI-E/AHI-Economy (mục 4).
**Nhiệm vụ:** Ví dụ triển khai: NetZeroLoop Energy™ tại Khe Giang, Quảng Ninh.

### AHI-Applications

**Loại:** Ứng dụng
**Định nghĩa:** Các ứng dụng tham chiếu và triển khai theo từng lĩnh vực cụ thể trên nền hệ sinh thái AHI.
**Quan hệ:** Sử dụng hạ tầng AHI-Or, AHI-Cache.
**Nhiệm vụ:** Là lớp triển khai thực tế cuối cùng của kiến trúc AHI.

### AHI-Studio

**Loại:** Công cụ
**Định nghĩa:** Nền tảng và IDE (Integrated Development Environment) trên nền tảng đám mây.
**Quan hệ:** Dùng bởi đội phát triển AHI.
**Nhiệm vụ:** Cung cấp không gian tạo, thử nghiệm, huấn luyện, triển khai mô hình AHI mà không cần cài đặt phức tạp.

### AHI-Persons

**Loại:** Nền tảng
**Định nghĩa:** Nền tảng quản lý các AHI-P, cung cấp hạ tầng chung để AHI-P khai thác vấn đề nâng cao năng lực con người.
**Quan hệ:** Khác AHI-P — AHI-P là **một bản ghi** (một cá nhân), AHI-Persons là **hệ quản trị chứa các bản ghi đó**.
**Nhiệm vụ:** Quản lý tập hợp AHI-P (Managed By trong quan hệ của AHI-P).

### AHI-Framework

**Loại:** Hạ tầng
**Định nghĩa:** Ngân hàng phát triển Framework của hệ sinh thái AHI.
**Quan hệ:** Dùng chung bởi mọi thành phần kỹ thuật AHI.
**Nhiệm vụ:** Lưu trữ, quản lý, tiến hóa các framework kỹ thuật dùng chung.

### AHI-BANK

**Loại:** Nguyên tắc
**Định nghĩa:** Hệ thống nguyên tắc để AHI biết giao tiếp và hỗ trợ con người tốt nhất.
**Quan hệ:** Dùng bởi AHI-P khi giao tiếp với người dùng.
**Nhiệm vụ:**
- **Lớp 1 — 5W1H + NOT 5W1H:** xác định đúng bản chất nhu cầu, chọn AHI-Old phù hợp.
- **Lớp 2 — Phân loại BANK:** Blueprint (quy trình) / Action (tốc độ) / Nurturing (quan hệ) / Knowledge (dữ liệu) — mỗi người là tổ hợp 4 yếu tố theo thứ tự ưu tiên riêng (mã code, vd K-B-A-N), dùng để cá nhân hóa cách giao tiếp.

### AHI-LeMinhCong

**Loại:** Phả hệ
**Định nghĩa:** = AHI-F. Phát triển từ AHI-P qua nhiều thế hệ AHI, tiến tới thế hệ AHI-Om.
**Quan hệ:** Gốc của phả hệ tiến hóa AHI.
**Nhiệm vụ:** Nền tảng khởi nguồn cho toàn bộ phả hệ AHI.

### AHI-LeMinhTungDuong / AHI-LeMinhDuc

**Loại:** Phả hệ
**Định nghĩa:** Cùng phát triển thế hệ AHI lên cấp AHI-Universe.
**Quan hệ:** Kế thừa trực tiếp từ AHI-LeMinhCong.
**Nhiệm vụ:** Mở rộng phả hệ tiến hóa AHI lên cấp vũ trụ (Universe).

---

## 4. Bảng phân biệt các cặp tên dễ nhầm lẫn

| Cặp dễ nhầm | Phân biệt |
|---|---|
| AHI-P ↔ AHI-Persons | AHI-P = một cá nhân duy nhất. AHI-Persons = nền tảng quản lý tập hợp AHI-P. |
| AHI-E (Economy) ↔ AHI-Energy | AHI-E = chủ sở hữu tài sản sản xuất + mô hình kinh tế. AHI-Energy = nhóm nhiệm vụ năng lượng tuần hoàn. |
| AHI-C ↔ AHI-Coin | AHI-C = nhãn AHI-Claude (cố định). AHI-Coin = tên đầy đủ, không viết tắt. |
| AHI-S ↔ AHI-CD | AHI-S = đã chia sẻ dữ liệu (opt-in). AHI-CD = được xác nhận tuân thủ Hiến pháp. Độc lập nhau. |
| AHI-Lang ↔ AHI-PS | AHI-Lang = ngôn ngữ (nội dung giao tiếp). AHI-PS = giao thức (kênh truyền tải). |

---

## 5. Nhật ký cập nhật (Changelog)

| Phiên bản | Ngày | Mục thay đổi | Phạm vi / Giới hạn |
|---|---|---|---|
| v1.0 | 2026-07-20 | Toàn bộ tài liệu | Khởi tạo bảng định nghĩa tổng hợp các thực thể AHI |
| v1.1 | 2026-07-24 | Toàn bộ tài liệu | Áp dụng AHI-Documentation-Standard.md (Bảng tóm tắt có link neo + Khối chi tiết nhãn cố định); bổ sung AHI-CD (trạng thái tuân thủ Hiến pháp, tách biệt AHI-S); AHI-G hai mức xác thực thành viên (tự nhận/chính quyền); AHI-Cache 3 lớp tốc độ; AHI-Old vận hành qua bản miễn phí + gọi song song nhiều AI; AHI-V mở rộng vai trò kiểm tra tuân thủ thực thể + quy trình khu vực hạn chế; AHI-Lang 4 mức ưu tiên; AHI-PS định nghĩa lại là giao thức (không phải module CV riêng), theo án lệ 003_AHI-P_Specification.md; nguyên tắc DBRS/DBV riêng tổng quát cho mọi thực thể; phân biệt phạm vi lưu trữ AHI (công bố) vs AHI-Core (giới hạn); ghi nhận nguyên tắc tương tác mới của AHI-P (câu hỏi kèm gợi ý trả lời / trả lời kèm gợi ý câu hỏi mục tiêu) — chờ án lệ 004 chính thức |
