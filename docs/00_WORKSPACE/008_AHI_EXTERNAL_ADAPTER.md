Repository:
AHI

Folder:
docs/00_WORKSPACE/

Action:
CREATE FILE

File:
008_AHI_EXTERNAL_ADAPTER.md

Purpose:
Định nghĩa chuẩn kết nối AHI-Orchestrator với AI và dịch vụ bên ngoài.

Nội dung chính:

1. Adapter Layer
- Chuẩn giao tiếp thống nhất.
- Không phụ thuộc từng AI.

2. External AI
- ChatGPT
- Claude
- Gemini
- Grok
- DeepSeek
- Qwen
- Local LLM

3. External Service
- GitHub
- GitLab
- Google Drive
- OneDrive
- Notion
- Slack
- Discord
- Email
- Calendar

4. Adapter Interface
- Authentication
- Request
- Response
- Streaming
- Error Handling
- Retry
- Logging

5. AI Selection
AHI-Orchestrator quyết định AI nào thực hiện nhiệm vụ theo:
- Chi phí
- Tốc độ
- Chất lượng
- Chuyên môn
- Chính sách

6. Output Normalization
Mọi kết quả được chuẩn hóa về định dạng AHI trước khi đưa vào Context và Memory.

7. Evolution
Adapter có thể thay đổi API mà không ảnh hưởng Workspace.

Commit:
feat(workspace): add external adapter specification
