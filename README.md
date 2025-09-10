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
This command generates the node_modules/ folder automatically based on package.json.
