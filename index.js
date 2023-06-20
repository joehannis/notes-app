const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesClient = require("./notesClient");

// index.js
// ...
const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);
view.displayNotes();

// console.log(model.getNotes());
