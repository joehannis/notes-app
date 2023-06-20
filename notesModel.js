class Model {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote() {
    const message = document.querySelector("#message-input").value;
    const messageElement = document.createElement("div");
    messageElement.id = "message";
    messageElement.innerText = message;
    document.querySelector("#main-container").append(messageElement);
  }

  reset() {
    this.notes = [];
  }
}
module.exports = Model;
