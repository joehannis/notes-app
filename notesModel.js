class Model {
  constructor() {
    this.notes = [];
    // this.setNotes = this.setNotes.bind(this);
  }

  getNotes() {
    return this.notes;
  }

  setNotes(data) {
    this.notes.push(data);
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}
module.exports = Model;
