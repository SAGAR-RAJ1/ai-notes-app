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

  function loadNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    notes.forEach((note, index) => {
      let div = document.createElement("div");
      div.classList.add("note-item");
      div.innerHTML = `
              <span>${note.title || "Untitled Note"}</span>
              <button class="delete-btn" onclick="deleteNote(${index})">X</button>
          `;
      div.onclick = () => openNote(index);
      notesList.appendChild(div);
    });
  }

  function openNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let note = notes[index];
    currentNoteIndex = index;
    document.getElementById("noteTitle").value = note.title;
    document.getElementById("noteContent").value = note.content;
  }
  
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    currentNoteIndex = null;
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
    loadNotes();
  }