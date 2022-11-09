const chalk = require("chalk");
const yargs = require("yargs");

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
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
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
    console.log(`Removing note titled "${title}"`);
  },
});

//******************************************************
// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    console.log(`Listing out all notes`);
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
    console.log(`Reading note titled "${title}"`);
  },
});

yargs.parse();