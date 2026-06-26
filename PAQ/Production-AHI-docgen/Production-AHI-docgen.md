# AHI-docgen Production Pipeline

Mục tiêu:

> Push tài liệu tiếng Việt → GitHub tự dịch → kiểm tra → build → deploy website.

---

# 1. Kiến trúc tổng thể

```txt
AHI/
│
├── source/                  # INPUT (VI only - bạn sửa ở đây)
│   ├── VISION.vi.md
│   ├── ARCHITECTURE.vi.md
│
├── ai/
│   ├── semantic-lock.md
│   ├── memory.json
│
├── tools/
│   ├── ai-docgen.js
│   ├── consistency-checker.js
│   ├── build-site.js
│
├── dist/                    # AUTO GENERATED (EN/JA/RU/HI/AR/DE)
│
├── site/                    # WEBSITE OUTPUT (GitHub Pages)
│
├── .github/
│   └── workflows/
│       └── pipeline.yml
│
├── package.json
└── README.md
```

---

# 2. Pipeline CI/CD

```txt
Git Push
   ↓
GitHub Actions
   ↓
npm install
   ↓
AI DocGen (translate + semantic lock)
   ↓
Consistency Check
   ↓
Build static website
   ↓
Deploy GitHub Pages
```

---

# 3. package.json

Vị trí:

```txt
AHI/package.json
```

Nội dung:

```json
{
  "name": "ahi-docgen",
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "generate": "node tools/ai-docgen.js",
    "check": "node tools/consistency-checker.js",
    "build": "node tools/build-site.js"
  },
  "dependencies": {}
}
```

---

# 4. GitHub Actions

Vị trí:

```txt
AHI/.github/workflows/pipeline.yml
```

Nội dung:

```yaml
name: AHI Production Pipeline

on:
  push:
    branches:
      - main
    paths:
      - "source/**"
      - "ai/**"
      - "tools/**"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run AI DocGen
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: npm run generate

      - name: Run Consistency Check
        run: npm run check

      - name: Build Site
        run: npm run build

      - name: Deploy Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
```

---

# 5. AI DocGen

Vị trí:

```txt
AHI/tools/ai-docgen.js
```

Nội dung:

```javascript
import fs from "fs";
import path from "path";

const langs = ["en", "ja", "ru", "hi", "ar", "de"];

const semanticLock = fs.readFileSync("./ai/semantic-lock.md", "utf-8");
const memory = JSON.parse(fs.readFileSync("./ai/memory.json", "utf-8"));

async function translate(text, lang) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
AHI SEMANTIC ENGINE

=== SEMANTIC LOCK ===
${semanticLock}

=== MEMORY TRANSLATION ===
${JSON.stringify(memory, null, 2)}

RULE:
- Preserve meaning
- Preserve structure
- Keep AHI philosophy intact
`
        },
        {
          role: "user",
          content: \`Translate to \${lang}:\n\n\${text}\`
        }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}

function injectLinks(content, doc, lang) {
  const all = ["vi","en","ja","ru","hi","ar","de"];

  const links = all.map(l =>
    l === lang
      ? \`**\${l.toUpperCase()}**\`
      : \`<a href="./\${doc}.\${l}.md">\${l.toUpperCase()}</a>\`
  ).join(" | ");

  return \`<p align="center">\${links}</p>\n\n\${content}\`;
}

export async function generateAll(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const doc = path.basename(filePath).replace(".vi.md", "");

  for (const lang of langs) {
    const translated = await translate(content, lang);
    const finalContent = injectLinks(translated, doc, lang);

    const outPath = filePath
      .replace("/source/", "/dist/")
      .replace(".vi.md", \`.\${lang}.md\`);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, finalContent, "utf-8");

    console.log("Generated:", outPath);
  }
}
```

---

# 6. Consistency Checker

Vị trí:

```txt
AHI/tools/consistency-checker.js
```

Nội dung:

```javascript
import fs from "fs";

export function checkConsistency() {
  const files = fs.readdirSync("./dist");

  const issues = [];

  for (const file of files) {
    const content = fs.readFileSync(`./dist/${file}`, "utf-8");

    if (!content.includes("AHI")) {
      issues.push(`${file}: missing AHI reference`);
    }
  }

  if (issues.length > 0) {
    console.log("⚠️ Consistency issues detected:");
    console.log(issues.join("\n"));
    process.exit(1);
  }

  console.log("✅ All docs consistent");
}
```

---

# 7. Website Builder

Vị trí:

```txt
AHI/tools/build-site.js
```

Nội dung:

```javascript
import fs from "fs";

const files = fs.readdirSync("./dist");

let html = `
<html>
<head><title>AHI Docs</title></head>
<body>
<h1>AHI Documentation</h1>
<ul>
`;

for (const f of files) {
  html += `<li><a href="../dist/${f}">${f}</a></li>`;
}

html += `
</ul>
</body>
</html>
`;

fs.mkdirSync("./site", { recursive: true });
fs.writeFileSync("./site/index.html", html);

console.log("Site built");
```

---

# 8. Quy trình sử dụng

## Bước 1

Chỉ sửa:

```txt
source/VISION.vi.md
```

hoặc:

```txt
source/ARCHITECTURE.vi.md
```

---

## Bước 2

Push lên GitHub:

```bash
git add .
git commit -m "update docs"
git push
```

---

## Bước 3

GitHub Actions tự động:

- Dịch sang:
  - English
  - Japanese
  - Russian
  - Hindi
  - Arabic
  - German

- Chèn liên kết đa ngôn ngữ

- Kiểm tra tính nhất quán

- Build website

- Deploy GitHub Pages

---

# 9. Các file cấu hình AI

Semantic Lock:

```txt
AHI/ai/semantic-lock.md
```

Translation Memory:

```txt
AHI/ai/memory.json
```

---

# 10. Mục tiêu cuối cùng

AHI-docgen không chỉ là trình dịch tài liệu.

Nó là:

- AI Documentation System
- Semantic Translation Engine
- Knowledge Consistency Framework
- Multi-language Documentation Pipeline
- GitHub-based Documentation OS
