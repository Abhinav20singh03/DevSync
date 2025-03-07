import {io} from "socket.io-client";

export const initSocket = async () => {
    const option = {
        "force new connection" : true,
         reconnectionAttempt : true,
         timeout : 10000,
         transports : ["websocket"],
    };
    return io("https://devsync-xxt8.onrender.com",option);
}