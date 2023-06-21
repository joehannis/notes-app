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
    console.log("this is running");
    this.client.createNote(newNote, () => {
      this.model.addNote(newNote);
      this.displayNotes();
    });
  }

  displayNotesFromAPI() {
    this.client.loadNotes(
      (data) => {
        this.model.setNotes(data);
        this.displayNotes();
      },
      () => {
        // This will be executed if there's an error
        this.displayError();
      }
    );
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });
    const notes = this.model.getNotes();
    console.log(notes);
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });
  }
  displayError(error) {
    console.log("display error is running");
    const errorEl = document.createElement("div");
    errorEl.textContent = "Oops, something went wrong!";
    errorEl.className = "error";
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NotesView;
