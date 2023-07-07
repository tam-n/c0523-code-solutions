import { readFile } from 'node:fs/promises';

const arrayOfFiles = process.argv.splice(2);
const promises = arrayOfFiles.map(async (fileName) => {
  const content = await readFile(fileName, 'utf8');
  return content;
});

try {
  const contents = await Promise.all(promises);
  contents.forEach((item) => console.log(item));
} catch (error) {
  console.log(error);
}
