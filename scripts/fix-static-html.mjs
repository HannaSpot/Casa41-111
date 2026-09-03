import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const englishRoot = path.resolve("out/en");

async function updateEnglishHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await updateEnglishHtml(filePath);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;

    const html = await readFile(filePath, "utf8");
    const corrected = html.replace('<html lang="es-CO">', '<html lang="en">');
    if (corrected !== html) await writeFile(filePath, corrected, "utf8");
  }
}

await updateEnglishHtml(englishRoot);
