import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv"; 
import ACTIONS from "./src/actions.js";
import path from "path";
import { fileURLToPath } from "url"; 
dotenv.config(); // Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);
const io = new Server(server,{cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"]
  }});
 
app.use(express.static("dist"));
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'dist','index.html'));
})

const PORT = process.env.PORT || 3000; // Provide a fallback port


const userSocketMap = {};

function getAllConnectedClients(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId)||[]).map((socketid)=>{
        return {
            socketid,
            username : userSocketMap[socketid],
        };
    });
}

io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);
    console.log(socket.rooms)
    socket.on(ACTIONS.JOIN,({roomId,username})=>{
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const client = getAllConnectedClients(roomId);
        console.log(client);
        client.forEach(({socketid})=>{
            io.to(socketid).emit(ACTIONS.JOINED,{
                client,
                username:username,
                socketid:socket.id
            });
        });
    });


    socket.on(ACTIONS.CODE_CHANGE,({roomId,code})=>{
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE,{code})
      });

    socket.on(ACTIONS.SYNC_CODE,({socketid,code})=>{
        io.to(socketid).emit(ACTIONS.CODE_CHANGE,{code})
    });


    socket.on("disconnecting",()=>{
        const rooms = [...socket.rooms];
        rooms.forEach((roomId)=>{
            socket.in(roomId).emit(ACTIONS.DISCONNECTED,{
                socketid:socket.id,
                username: userSocketMap[socket.id]
            });
        });
        delete userSocketMap[socket.id];
        socket.leave();
    });


});

server.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
