document.addEventListener("DOMContentLoaded", loadNotes);

let currentNoteIndex = null;

function newNote() {
  currentNoteIndex = null;
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
}
function saveNote() {
    let title = document.getElementById("noteTitle").value.trim();
    let content = document.getElementById("noteContent").value.trim();
    if (!title && !content) return;
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    if (currentNoteIndex !== null) {
      notes[currentNoteIndex] = { title, content };
    } else {
      notes.push({ title, content });
      currentNoteIndex = notes.length - 1;
    }
  
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
  }