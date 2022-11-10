const fs = require("fs");
const yargs = require("yargs");
const { loadNotes } = require("./notes");

const notesPath = "./notes.json";

// let notes = [];
// if (fs.existsSync(notesPath)) {
//   notes = JSON.parse(fs.readFileSync(notesPath));
// }
let notes = loadNotes();

// Process args the right way
//******************************************************
// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    //if note with the same title exists,
    //overwrite the body of that note. Otherwise
    //append new note to the list
    const noteIdx = notes.findIndex((el) => el.title === title);
    if (noteIdx !== -1) {
      notes[noteIdx].body = body;
      console.log(`Update note "${title} with body "${body}"`);
      fs.writeFileSync(notesPath, JSON.stringify(notes));
      return;
    }

    notes.push({ title, body });
    fs.writeFileSync(notesPath, JSON.stringify(notes));
    console.log(
      `Note with title "${title}" and body "${body}" saved to notes db successfully.`
    );
  },
});

//******************************************************
// Create delete command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of note to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    const noteIdx = notes.findIndex((el) => el.title === title);
    if (noteIdx === -1) {
      console.log(`Note with title "${title}" not found in database.`);
      return;
    }

    notes = notes.filter((note) => note.title !== title);
    fs.writeFileSync(notesPath, JSON.stringify(notes));
    console.log(`Removed note titled "${title}"`);
  },
});

//******************************************************
// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    if (notes.length === 0) {
      console.log("Notes list is empty.");
      return;
    }
    console.log("Listing notes:");
    debugger
    notes.forEach(({ title, body }) =>
      console.log(`Title: "${title}", body: "${body}"`)
    );
  },
});

//******************************************************
// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of note to be read",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    const noteIdx = notes.findIndex((el) => el.title === title);
    if (noteIdx === -1) {
      console.log(`Note with title "${title}" not found in database.`);
      return;
    }

    const [note] = notes.filter((note) => note.title === title);
    console.log(note.body);
  },
});

yargs.parse();
