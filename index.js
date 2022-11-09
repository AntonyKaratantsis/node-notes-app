const chalk = require("chalk");
const yargs = require("yargs");

// Process args the right way

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

yargs.argv;
