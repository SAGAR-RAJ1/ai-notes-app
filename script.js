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

  function askAI() {
    let query = document.getElementById("aiQuery").value;
    if (!query.trim()) return;
  
    document.getElementById("aiResponse").innerHTML = "Thinking...";
  
    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={YOUR_GEMINI_API_KEY}",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: query }] }],
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let aiResponse =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "No response received.";
        document.getElementById("aiResponse").innerHTML =
          marked.parse(aiResponse);
      })
      .catch((error) => {
        document.getElementById("aiResponse").innerHTML =
          "Error fetching AI response.";
      });
  }

  function handleAIKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      askAI();
    }
  }

  document
  .getElementById("noteContent")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      saveNote();
    }
  });