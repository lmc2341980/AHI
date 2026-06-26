import fs from "fs";
import path from "path";

const langs = ["en", "ja", "ru", "hi", "ar", "de"];

function loadSemanticLock() {
  return fs.readFileSync("./ai/semantic-lock.md", "utf-8");
}

async function translateWithAI(text, targetLang) {
  const semanticLock = loadSemanticLock();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are AHI Semantic Translation Engine.

====================
SEMANTIC LOCK RULES
====================

${semanticLock}

====================
TASK
====================
Translate the document into: ${targetLang}

STRICT RULES:
- Preserve meaning, not words
- Preserve Markdown structure
- Preserve all links and filenames
- Keep AHI terminology consistent
`
        },
        {
          role: "user",
          content: text
        }
      ]
    })
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function generateAll(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  for (const lang of langs) {
    const translated = await translateWithAI(content, lang);

    const outPath = filePath
      .replace("/source/", "/dist/")
      .replace(".vi.md", `.${lang}.md`);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, translated, "utf-8");

    console.log(`Generated: ${outPath}`);
  }
}
