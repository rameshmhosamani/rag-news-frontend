# RAG News Chatbot – Frontend (Assignment)

## 1. Tech Stack
- React (Vite)
- Axios
- SCSS (optional)
- Node.js (Vite dev server)

---

## 2. Folder Structure

---

src/ App.jsx api.js main.jsx index.html package.json vite.config.js
## 3. Features
- Simple clean chat UI
- Send message to backend
- Show bot response
- Fetch chat history
- Reset session
- Uses Axios for API requests

---


## 4. Run Frontend

Install dependencies:

npm install

Start frontend:

npm run dev

Runs on:

http://localhost:5173

---

## 5. How it Works
Frontend calls backend APIs:

### ➤ Create Session  
`GET /api/session`

### ➤ Send user message  
`POST /api/chat`

### ➤ Load history  
`GET /api/history/:id`

### ➤ Reset history  
`DELETE /api/history/:id`

---


