import { readFile } from 'node:fs/promises';

const arrayOfFiles = process.argv.splice(2);
const promises = arrayOfFiles.map(async (fileName) => {
  try {
    const filePath = new URL(fileName, import.meta.url);
    const content = await readFile(filePath, { encoding: 'utf8' });
    return content;
  } catch (error) {
    console.log(error);
  }
});

await Promise.all(promises)
  .then((contents) => {
    for (const item of contents) {
      console.log(item);
    }
  })
  .catch((error) => console.log(error));
