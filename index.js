const chalk = require("chalk");
const yargs = require("yargs");

// Process args the right way

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
  handler: (argv) => {
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  },
});

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
  handler: (argv) => {
    console.log(`Removing note titled "${argv.title}"`);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: (argv) => {
    console.log(`Listing out all notes`);
  },
});

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
  handler: (argv) => {
    console.log(`Reading note titled "${argv.title}"`);
  },
});

yargs.argv;
