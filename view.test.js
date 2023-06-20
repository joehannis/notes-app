/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./view");
const NotesModel = require("./notesModel");

describe("Notes view", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });
  it("gets a list of notes from model class and adds them to page", () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});
