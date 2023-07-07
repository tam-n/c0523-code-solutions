import { writeFile, readFile } from 'node:fs/promises';

try {
  const [, , file, fileCopy] = process.argv;
  const content = await readFile(file, 'utf8');

  await writeFile(fileCopy, content);
} catch (error) {
  console.log(error);
}
