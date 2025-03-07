import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import ACTIONS from "./src/actions.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"]
  }
});

// ✅ WebSocket logic must be handled before serving frontend
io.on("connection", (socket) => {
  console.log("✅ WebSocket Connected:", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    console.log(`🟢 ${username} joined room: ${roomId}`);
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketid }) => {
      io.to(socketid).emit(ACTIONS.JOINED, {
        client: clients,
        username,
        socketid: socket.id
      });
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  socket.on(ACTIONS.SYNC_CODE, ({ socketid, code }) => {
    io.to(socketid).emit(ACTIONS.CODE_CHANGE, { code });
  });

  socket.on("disconnecting", () => {
    console.log("❌ Disconnecting:", socket.id);
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketid: socket.id,
        username: userSocketMap[socket.id]
      });
    });
    delete userSocketMap[socket.id];
  });
});

// ✅ Serve static frontend *after* WebSocket setup
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
