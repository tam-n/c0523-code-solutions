import { writeFile } from 'node:fs/promises';

try {
  const randomNum = Math.random();
  await writeFile('random.txt', randomNum + '\n');
} catch (error) {
  console.log(error);
}
