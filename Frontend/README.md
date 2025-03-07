# **DevSync – Collaborative Code Editor** 📝💻  

![DevSync Banner](https://your-image-url.com) <!-- Optional: Add a project banner -->

> **Real-time collaborative code editor powered by WebSockets and Socket.io**  
> Built with **React, Express, Node.js, and Socket.io**, DevSync enables multiple users to **code together in real time** with seamless synchronization.

---

## **🌟 Features**  

✅ **Real-Time Code Sharing** – Instant code updates across connected users.  
✅ **Multiple Room Support** – Users can create and join private coding rooms.  
✅ **Live Cursor Tracking** – See who is editing in real time (Future Update).  
✅ **Syntax Highlighting** – CodeMirror-based editor with JavaScript support.  
✅ **Persistent Session Handling** – Auto-syncs code for new participants.  
✅ **User Presence Detection** – Shows active users in each room.  
✅ **Clipboard Sharing** – Easily copy room IDs for quick collaboration.  
✅ **Built with WebSockets** – Low latency, high-performance collaboration.  

---

## **🚀 Tech Stack**
### **Frontend** 🌐  
- **React.js** – UI Framework  
- **Vite** – Fast Build Tool  
- **CodeMirror** – Code Editor  
- **React Router** – Navigation  
- **React Toastify** – Notifications  

### **Backend** 🛠  
- **Node.js & Express.js** – API & Server  
- **Socket.io** – Real-time communication  
- **CORS** – Cross-Origin Request Handling  

### **Deployment** ☁️  
- **Render** – Backend Hosting  
- **Vercel/Netlify** – Frontend Hosting  

---

## **📸 Screenshots**  

![Homepage](https://your-image-url.com) <!-- Add images of your project -->
![Editor Page](https://your-image-url.com)  

---

## **🛠 Installation & Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/devsync.git
cd devsync
```

### **2️⃣ Install Dependencies**  
```bash
npm install   # Install both frontend & backend dependencies
```

### **3️⃣ Start Backend** 🖥  
```bash
cd backend
node server.js   # Start Express & Socket.io server
```

### **4️⃣ Start Frontend** 🌐  
```bash
cd frontend
npm run dev   # Runs the React app
```

🔹 **Your app will be running at**: `http://localhost:5173`  
🔹 **Backend is running on**: `http://localhost:3000`  

---

## **🌍 Deployment**  

### **Backend Deployment (Render)**  
1. Push your backend code to **GitHub**.  
2. Create a new **Web Service** on **Render**.  
3. Set the **Build Command**:  
   ```bash
   npm install && npm run build
   ```
4. Set the **Start Command**:  
   ```bash
   node server.js
   ```
5. Add **Environment Variables**:
   ```
   ENABLE_WEBSOCKETS = true
   PORT = 3000
   ```

### **Frontend Deployment (Vercel/Netlify)**  
1. Deploy the frontend repo using **Vercel** or **Netlify**.  
2. Set `VITE_BACKEND_URL` in `.env`:  
   ```env
   VITE_BACKEND_URL="https://your-backend-url.onrender.com"
   ```
3. **Deploy & Share the Link!** 🚀  

---



## **🛠 Roadmap & Future Features**
✅ **Real-time Cursor Position Tracking**  
✅ **Multi-Language Support (Python, Java, etc.)**  
✅ **Dark/Light Mode Toggle**  
✅ **Chat Functionality**  
✅ **GitHub OAuth for Authentication**  

---

## **🤝 Contributing**
We welcome contributions!  

1. **Fork the repo**  
2. **Create a feature branch:** `git checkout -b feature-name`  
3. **Commit changes:** `git commit -m "Added new feature"`  
4. **Push to GitHub:** `git push origin feature-name`  
5. **Open a Pull Request**  

---

## **📝 License**
This project is licensed under the **MIT License**.  

---

## **💡 Inspiration & Credits**
Inspired by **Google Docs for Coding**. Built using **Socket.io for real-time collaboration**. 🚀  

---

## **📩 Contact**
💻 **Developer:** Abhinav Singh
📧 **Email:** abhinav20singh03@gmail.com
🐙 **GitHub:** [Your GitHub Profile](https://github.com/Abhinav20singh03)  

---

### 🎯 **Made with ❤️ for developers to code together in real-time!** 🚀  
---
