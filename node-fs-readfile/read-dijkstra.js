import { readFile } from 'node:fs/promises';

try {
  const filePath = new URL('./dijkstra.txt', import.meta.url);
  const content = await readFile(filePath, { encoding: 'utf8' });
  console.log(content);
} catch (error) {
  console.log(error);
}
