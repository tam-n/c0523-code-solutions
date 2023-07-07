import { readFile } from 'node:fs/promises';

try {
  const [, , fileName] = process.argv;
  const content = await readFile(fileName, 'utf8');
  console.log(content);
} catch (error) {
  console.log(error);
}
