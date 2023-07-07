import { writeFile, readFile } from 'node:fs/promises';

try {
  const [, , file, fileCopy] = process.argv;
  const filePath = new URL(file, import.meta.url);
  const content = await readFile(filePath, { encoding: 'utf8' });

  await writeFile(fileCopy, content);
} catch (error) {
  console.log(error);
}
