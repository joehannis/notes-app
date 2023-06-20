const NotesModel = require("./notesModel");
const NotesView = require("./view");

const model = new NotesModel();
const view = new NotesView(model);
model.addNote("This is an example note");
view.displayNotes();

console.log(model.getNotes());
