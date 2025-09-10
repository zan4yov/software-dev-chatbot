# Software Dev Chatbot

Simple web chatbot powered by **Node.js**, **Express**, and the **OpenAI API**.  
Frontend lives in `/public` (HTML/CSS/JS), backend in `server.js` calling OpenAI via `openai.js`.

---

## Features
- Chat UI (message input, send button, response area)
- Conversation history (client-side)
- Error-safe server & OpenAI calls
- Easy theming via `public/style.css`
- Supports a logo image on the UI

---

## Project Structure
software-dev-chatbot/
├─ public/
│ ├─ index.html
│ ├─ main.js
│ ├─ style.css
│ └─ chat.png # <- your logo (you add this file)
├─ openai.js
├─ server.js
├─ .gitignore
├─ .env # <- not committed; stores your private API key
└─ package.json

---

## Prerequisites
- Node.js 18+ (fetch is built-in)
- An **OpenAI API key** (your own private key)

---

## 1) Install Dependencies (creates `node_modules`)
From the project root:
```bash
npm install
```
This command generates the node_modules/ folder automatically based on package.json.

## 2) Configure Environment Variables (`.env`)
Create a file named `.env` in the project root:

```env
OPENAI_API_KEY=sk-your-private-key-here
```

Use your own key. Do not share it, and do not commit .env to Git.

The project already loads it in server.js using:

```env 
require('dotenv').config();
```

## 3) Security & Git Hygiene
Create a .gitignore file (already included, but confirm):

```env 
node_modules/
.env
```

- Never hardcode secrets in source files.

- If a key leaked in git history, rotate the key and rewrite history before pushing.

## 4) Running the App
Start the server:
```env 
node server.js
```

Then open: http://localhost:3000
Type a message in the chat input and press Send.

## 5) Frontend: Add an Image to index.html
Put your logo image into public/ and name it chat.png
(You can use any PNG/JPG; update the path if you rename it.)

In public/index.html, add:

```env 
<header class="app-header">
  <img src="chat.png" alt="Chatbot Logo" class="logo" />
  <h1>Software Dev Chatbot</h1>
</header>
```

Optional styling in public/style.css:

```env 
.app-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
}

.logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
}
```

## 6) Minimal Endpoint
/chat (POST)

Body:
```env 
{ "message": "Explain CSS", "history": [] }
```

Response:
```env 
{ "reply": "CSS is a style sheet language..." }
```
