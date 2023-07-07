import { readFile } from 'node:fs/promises';

try {
  const fileName = 'dijkstra.txt';
  const content = await readFile(fileName, 'utf8');
  console.log(content);
} catch (error) {
  console.log(error);
}
