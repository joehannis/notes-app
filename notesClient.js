class NotesClient {
  constructor() {}

  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        //callback.bind(this.model)(data);
        callback(data);
      });
  }
}

module.exports = NotesClient;
