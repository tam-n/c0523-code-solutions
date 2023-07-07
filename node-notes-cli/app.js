import { writeFile, readFile } from 'node:fs/promises';

const [, , command, notesOrId, edit] = process.argv;

try {
  switch (command) {
    case 'read':
      await readNotes();
      break;
    case 'create':
      await createNotes();
      break;
    case 'delete':
      await deleteNotes();
      break;
    case 'edit':
      await editNotes();
      break;
    default:
      throw new Error('Invalid command');
  }
} catch (error) {
  console.log('There is an', error);
}

async function readNotes() {
  const contents = await readFile('data.json');
  const object = JSON.parse(contents);
  for (const keys in object.notes) {
    console.log(`${keys}: ${object.notes[keys]}`);
  }
}

async function createNotes() {
  const contents = await readFile('data.json');
  let object = JSON.parse(contents);
  const entryId = object.nextId++;
  object.notes[entryId] = notesOrId;
  object = JSON.stringify(object, null, 2);
  await writeFile('data.json', object);
}

async function deleteNotes() {
  const contents = await readFile('data.json');
  let object = JSON.parse(contents);
  if (Object.hasOwn(object.notes, notesOrId)) {
    delete object.notes[notesOrId];
  } else {
    throw new Error('Entry Id does not exist.');
  }
  object = JSON.stringify(object, null, 2);
  await writeFile('data.json', object);
}

async function editNotes() {
  const contents = await readFile('data.json');
  let object = JSON.parse(contents);
  if (Object.hasOwn(object.notes, notesOrId)) {
    object.notes[notesOrId] = edit;
  } else {
    throw new Error('Entry Id does not exist.');
  }
  object = JSON.stringify(object, null, 2);
  await writeFile('data.json', object);
}
