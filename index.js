const yargs = require("yargs");
const { addNote, listNotes, removeNote, readNote } = require("./notes");

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
  handler: (note) => addNote(note),
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
  handler: (note) => removeNote(note),
});

//******************************************************
// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => listNotes(),
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
  handler: (note) => readNote(note),
});

yargs.parse();
