const NotesModel = require("./notesModel");

describe("notesModel", () => {
  it("returns notes", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it("adds notes, returns notes", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });
  it("adds notes, deletes notes, returns []", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
