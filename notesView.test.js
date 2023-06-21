/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

jest.mock("./notesClient");

describe("notesView", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    NotesClient.mockClear();
  });

  it("adds 2 notes, only displays each one once", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NotesClient();
    mockClient.loadNotes.mockImplementation(() => ["This is my callback"]);
    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    model.addNote("one");
    model.addNote("two");

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("adds a note from API and displays it", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NotesClient();
    mockClient.loadNotes.mockImplementation((callback) => {
      const data = ["This is my callback"];
      callback(data);
    });
    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    view.displayNotesFromAPI();
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "This is my callback"
    );
  });

  it("adds a post request to the API and displays it", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NotesClient();
    const note = ["This is my callback"];
    mockClient.loadNotes.mockImplementation((callback) => {
      const data = ["This is my callback"];
      callback(data);
    });
    mockClient.createNote.mockImplementation((note, callback) => {
      callback(note);
    });

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    view.displayNotesFromAPI();
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "This is my callback"
    );
  });
});
