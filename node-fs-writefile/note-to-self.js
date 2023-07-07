import { writeFile } from 'node:fs/promises';

try {
  const [, , notes] = process.argv;
  await writeFile('note.txt', notes + '\n');
} catch (error) {
  console.log(error);
}
