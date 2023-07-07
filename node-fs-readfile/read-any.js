import { readFile } from 'node:fs/promises';

try {
  const [, , fileName] = process.argv;
  const filePath = new URL(fileName, import.meta.url);
  const content = await readFile(filePath, { encoding: 'utf8' });
  console.log(content);
} catch (error) {
  console.log(error);
}
