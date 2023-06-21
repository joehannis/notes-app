class Model {
  constructor() {
    this.notes = [];
    // this.setNotes = this.setNotes.bind(this);
  }

  getNotes() {
    return this.notes;
  }

  setNotes(data) {
    this.notes = data;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}
module.exports = Model;
