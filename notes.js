const fs = require("fs");

const loadNotes = () => {
  let notes;
  try {
    notes = require("./notes.json");
  } catch (e) {
    notes = [];
  }
  return notes;
};

module.exports = {
  loadNotes,
};
