# 📝 AI-Powered Notes App

An elegant **Notes App** with **AI Assistant** using **Gemini 2.0 Flash API**.  
Easily **create, edit, delete, and organize** your notes, with AI-powered assistance for generating ideas, summarizing, and more!  

---

## 🎯 Features
✔ **Create, Edit, & Delete Notes**  
✔ **Click on Notes to Open & Edit**  
✔ **Auto-Save Notes** in Local Storage  
✔ **AI Assistant** for smart responses using **Gemini 2.0 Flash API**  
✔ **Markdown Support** for AI responses  
✔ **Press `Enter` to Save Notes** & **Send AI Queries**  
✔ **Beautiful UI with Sidebar & Text Editor**  

---

## 📸 Screenshots  
![screenshot of the webpage](assets/Screenshot%202025-03-22%20at%2010.24.55 PM.png) 

---

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/SAGAR-RAJ1/ai-notes-app
cd ai-notes-app
```

### 2️⃣ Install Dependencies (Optional)
This project runs on vanilla HTML, CSS, and JavaScript.  
But if you want a live server for development, install:  
```sh
npm install -g live-server
```

### 3️⃣ Run the Project
- Open `index.html` in your browser **OR**  
- Use **Live Server** for auto-reloading:  
  ```sh
  live-server
  ```

---

## 🚀 How to Use
1️⃣ **Create a New Note** by clicking the **"+ New Note"** button.  
2️⃣ **Type in the Note Title** and **Content** inside the editor.  
3️⃣ Notes are **auto-saved** and stored locally.  
4️⃣ Click on a saved note from the sidebar to **edit or delete** it.  
5️⃣ Use the **AI Assistant** to generate ideas, summarize, or ask questions.  

---

## 🤖 AI Assistant Setup
This app integrates **Gemini 2.0 Flash API** for AI-powered responses.  
To enable AI Assistant, follow these steps:  

1️⃣ **Get Your API Key** from [Google AI Studio](https://ai.google.dev/)  
2️⃣ Open `script.js` and **replace** `"YOUR_API_KEY"` with your **actual API Key**:  

```js
fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY", {
```

3️⃣ **Done!** 🎉 Now, ask AI anything from the AI Assistant panel!

---

## 🏗️ Project Structure
```
📂 ai-notes-app
 ┣ 📄 index.html    # Main HTML structure
 ┣ 📄 styles.css    # Styling for the app
 ┣ 📄 script.js     # Core JavaScript logic
 ┣ 📄 README.md     # Project Documentation
 ┗ 📂 assets        # (Optional) Add images/screenshots here
```
![folder structure](assets/Screenshot%202025-03-22%20at%2010.29.21 PM.png)

---

## 💡 Future Enhancements
🔹 Dark Mode 🌙  
🔹 Export Notes as **PDF or Markdown** 📄  
🔹 Cloud Storage Sync ☁  
🔹 AI-powered **Note Summarization** 🧠  

---

## 🤝 Contributing
Want to **improve** the project? Contributions are welcome!  
1️⃣ **Fork the Repository**  
2️⃣ Create a **Feature Branch** (`git checkout -b feature-name`)  
3️⃣ **Commit Changes** (`git commit -m "Added new feature"`)  
4️⃣ **Push to GitHub** (`git push origin feature-name`)  
5️⃣ Open a **Pull Request** 🚀  

---

## ⚖️ License
This project is **open-source** under the **MIT License**.  

📜 **MIT License** © 2025 [**SAGAR-RAJ1**](https://github.com/SAGAR-RAJ1/ai-notes-app)  

---

### 🌟 **Star the Repo if You Like It!** ⭐  


