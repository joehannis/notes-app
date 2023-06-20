class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
    document.querySelector("#add-note-btn").addEventListener("click", () => {
      let newNote = document.querySelector("#add-note-input").value;
      this.addNewNote(newNote);
      document.querySelector("#add-note-input").value = "";
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotesFromAPI() {
    this.client.loadNotes((data) => {
      this.model.setNotes(data);
      this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });
  }
}

module.exports = NotesView;
