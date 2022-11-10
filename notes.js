const fs = require("fs");
const NOTES_PATH = "./notes.json";

const loadNotes = () => {
  let notes;
  try {
    notes = require(NOTES_PATH);
  } catch (e) {
    notes = [];
  }
  return notes;
};

const writeNotes = (notes) =>
  fs.writeFileSync(NOTES_PATH, JSON.stringify(notes));

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  //if note with the same title exists,
  //overwrite the body of that note. Otherwise
  //append new note to the list
  const noteIdx = notes.findIndex((el) => el.title === title);
  if (noteIdx !== -1) {
    notes[noteIdx].body = body;
    writeNotes(notes);
    console.log(`Note with title "${title}" updated successfully.`);
    return;
  }
  //else
  notes.push({ title, body });
  writeNotes(notes);
  console.log(
    `Note with title "${title}" and body "${body}" saved to notes db successfully.`
  );
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log("Notes list is empty.");
    return;
  }
  console.log("Listing notes:");
  notes.forEach(({ title, body }) =>
    console.log(`Title: "${title}", body:"${body}"`)
  );
};

const removeNote = ({ title }) => {
  const notes = loadNotes();
  const noteIdx = notes.findIndex((el) => el.title === title);
  if (noteIdx === -1) {
    console.log(`Note with title "${title}" not found in database.`);
    return;
  }
  const newNotes = notes.filter((note) => note.title !== title);
  writeNotes(newNotes);
  console.log(`Removed note titled "${title}"`);
};

const readNote = ({ title }) => {
  const notes = loadNotes();
  const noteIdx = notes.findIndex((el) => el.title === title);
  const note = notes.find((note) => note.title === title);
  if (noteIdx === -1) {
    console.log(`Note with title "${title}" not found in database.`);
    return;
  }
  console.log(notes[noteIdx].body);
};

module.exports = {
  addNote,
  listNotes,
  removeNote,
  readNote,
};
