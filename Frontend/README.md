# 🚀 DevSync
![Built with Socket.io](https://img.shields.io/badge/Socket.io-enabled-blue)

**DevSync** is a real-time, collaborative code editor built with **WebSockets** and **Socket.io**. Multiple users can join private rooms, edit code simultaneously, and see each other’s changes live.

---

## 📑 Table of Contents

- [Features](#features)  
- [Architecture & Tech Stack](#architecture--tech-stack)  
- [Repository Structure](#repository-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Configuration](#configuration)  
- [Usage](#usage)  
- [Roadmap](#roadmap)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

---

## ✅ Features

- ⚡ **Real-Time Code Sharing**: Instant updates across all connected clients.  
- 🔐 **Multiple Room Support**: Create or join private rooms via unique room IDs.  
- 👀 **Live Cursor Tracking** *(Planned)*  
- 🎨 **Syntax Highlighting** with CodeMirror  
- 💾 **Persistent Sessions**: Code stays for new participants  
- 👥 **User Presence Detection**  
- 📋 **Clipboard Sharing**: Copy room IDs in one click  
- 🔌 **Low-Latency WebSockets** with Socket.io

---

## 🏗️ Architecture & Tech Stack

| Layer      | Technology                                                   |
|------------|--------------------------------------------------------------|
| Frontend   | React · Vite · CodeMirror · React Router · React Toastify   |
| Backend    | Node.js · Express · Socket.io · CORS                        |
| Deployment | Vercel/Netlify (frontend) · Render (backend)                |

---

## 📁 Repository Structure

```text
DevSync/
├─ Frontend/
│  ├─ public/           # Static assets & index.html
│  ├─ src/
│  │  ├─ components/    # React components
│  │  ├─ contexts/      # React Context for socket & auth
│  │  ├─ pages/         # Route components (Home, Editor)
│  │  ├─ utils/         # Helper functions (socket setup)
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ .env              # Frontend environment variables
│  ├─ server.js         # Dev proxy / CORS server (optional)
│  ├─ package.json
│  └─ vite.config.js
├─ .gitattributes
└─ README.md
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js **v16+**
- npm or yarn

---

### 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Abhinav20singh03/DevSync.git
cd DevSync
```

---

### ▶️ Running Locally

#### 1. Install root-level dependencies (if any):

```bash
npm install
```

#### 2. Start Frontend

```bash
cd Frontend
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

#### 3. Start Backend (if using proxy server)

```bash
cd Frontend
node server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuration

### Frontend `.env`

```env
VITE_BACKEND_URL="http://localhost:3000"
```

### Backend Environment Variables

```bash
ENABLE_WEBSOCKETS=true
PORT=3000
```

---

## 🧪 Usage

1. Open the app in your browser.  
2. Create a new room or join an existing Room ID.  
3. Start typing — code syncs in real time.  
4. Share the Room ID with collaborators.

---

## 🛣️ Roadmap

- [ ] Real-time cursor position tracking  
- [ ] Multi-language support (Python, Java, etc.)  
- [ ] Dark/Light mode toggle  
- [ ] In-app chat functionality  
- [ ] GitHub OAuth authentication

---

## 🤝 Contributing

Contributions are welcome!  

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "Add your feature"

# Push changes
git push origin feature/your-feature

# Open a Pull Request
```

Please follow the standard GitHub Flow.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

**Developer**: Abhinav Singh  
📧 Email: [abhinav20singh03@gmail.com](mailto:abhinav20singh03@gmail.com)  
🐙 GitHub: [@Abhinav20singh03](https://github.com/Abhinav20singh03)