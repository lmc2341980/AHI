import fs from "fs";

async function translateWithAI(text, targetLang) {
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
You are AHI translation engine.
- Keep meaning, not word-by-word translation
- Preserve Markdown structure
- Preserve links and headers
`
        },
        {
          role: "user",
          content: `Translate to ${targetLang}:\n\n${text}`
        }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}

export async function generateAll(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const langs = ["en", "ja", "ru", "hi", "ar", "de"];

  for (const lang of langs) {
    const translated = await translateWithAI(content, lang);

    const outPath = filePath
      .replace("/source/", "/dist/")
      .replace(".vi.md", `.${lang}.md`);

    fs.mkdirSync(require("path").dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, translated);
  }
}
