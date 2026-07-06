Purpose:
Định nghĩa Workspace Runtime.

Nội dung chính:

- Workspace Runtime là điểm khởi đầu của mọi phiên làm việc.
- Workspace chịu trách nhiệm:
  - Khởi tạo phiên làm việc.
  - Nạp Profile.
  - Nạp Context.
  - Nạp Cache.
  - Kết nối AHI-Orchestrator.
  - Kết nối AHI-Hybrid Memory.
  - Kết nối External Adapter.
  - Trả Workspace sẵn sàng cho người dùng.

Workspace không xử lý nghiệp vụ.
Workspace chỉ điều phối môi trường làm việc.

Commit:
feat(workspace): add workspace runtime readme
