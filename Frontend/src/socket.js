import { io } from "socket.io-client";

export const initSocket = async () => {
    const options = {
        forceNew: true,  
        reconnectionAttempts: 5,  
        timeout: 10000,
        transports: ["websocket"]
    };
    return io(import.meta.env.VITE_BACKEND_URL || "https://devsync-xxt8.onrender.com", options);
};
