document.addEventListener("DOMContentLoaded", loadNotes);

let currentNoteIndex = null;

function newNote() {
  currentNoteIndex = null;
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
}