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
  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NotesClient();
    mockClient.loadNotes.mockImplementation(() => "This is my callback");

    const model = new NotesModel();
    const view = new NotesView(model, mockClient);

    // 1. Fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "My new amazing test note";

    // 2. Click the button
    const button = document.querySelector("#add-note-btn");
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "My new amazing test note"
    );
  });
  it("adds 2 notes, only displays each one once", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NotesClient();
    mockClient.loadNotes.mockImplementation(() => "This is my callback");
    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    model.addNote("one");
    model.addNote("two");

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
  it("adds adds a note from api and displays it", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NotesClient();
    mockClient.loadNotes.mockImplementation((callback) => {
      const data = "This is my callback";
      callback(data);
    });
    const model = new NotesModel();
    const view = new NotesView(model, mockClient);
    view.displayNotesFromAPI();
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "This is my callback"
    );
  });
});
