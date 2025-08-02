# 🧠 AI Assistant + Task Manager Web App

A sleek and modern web app featuring a smart **AI Assistant** (powered by Groq API) and a **Task Manager (ToDo List)** — built with **React + Express + Tailwind CSS**.

---

## ✨ Features

- ✅ **AI Assistant Chatbot**
  - Chat with an AI that helps you with tasks
  - Uses the **Groq API** under the hood
  - Clean, responsive chat UI

- ✅ **To-Do List Panel**
  - Add, complete, and delete tasks
  - Priority tags (High, Medium, Low)
  - Completion progress bar
  - Stylish UI with modern interactions

- ✅ **Fully Responsive**
  - Works smoothly on desktop and mobile
  - Light, vibrant design (no dull grey!)

---

## ⚙️ Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **AI API**: Groq (LLaMA models via REST)

---

## 🚀 Getting Started

Follow these instructions to run the app locally on your machine.

---

## 📁 Folder Structure

```
/client     → React frontend
/server     → Express backend
```

---

## 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/ai-task-assistant.git
cd ai-task-assistant
```

---

## 2️⃣ Setup the Backend (Express)

```bash
cd server
npm install
```

### ✏️ Configure Environment

Create a `.env` file in `/server`:

```
GROQ_API_KEY=your_groq_api_key_here
PORT=3001
```

### ▶️ Start the Backend

```bash
npm run dev
```

The backend should run on: `http://localhost:3001`

---

## 3️⃣ Setup the Frontend (React + Vite)

```bash
cd ../client
npm install
```

### ▶️ Start the Frontend

```bash
npm run dev
```

The frontend should open at: `http://localhost:5173`

---

## 🧪 Example

> *(Insert screenshot or demo gif here)*

---

## 🛠️ Scripts

### Backend (from `/server`)
```bash
npm run dev       # Start dev server with nodemon
```

### Frontend (from `/client`)
```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
```

---

## 📦 Build for Production

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. Serve the build from Express (optional):
   - Move the `client/dist` folder to `/server/public`
   - Serve static files from `server.js`

---

## 🙋 FAQ

### ❓ Nothing happens when I chat?
- Make sure your **Groq API key** is correct.
- Backend should be running on port `3001`.

### ❓ Getting CORS issues?
- Make sure both frontend (`5173`) and backend (`3001`) are running.
- Backend should include CORS middleware.

---

## 📄 License

MIT License. Feel free to use, remix, and contribute!