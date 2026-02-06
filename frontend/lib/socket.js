// import { io } from "socket.io-client";

// // Backend server URL
// const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// // Socket instance
// let socket = null;

// /**
//  * Get or create socket instance
//  * @returns {Socket} Socket.IO client instance
//  */

// export const getSocket = () => {
//   if (!socket) {
//     socket = io(SERVER_URL, {
//       autoConnect: false,
//       withCredentials: true,
//     });

//     // Connection event listeners for debugging
//     socket.on("connect", () => {
//       console.log("✅ Connected to server", socket.id);
//     });

//     socket.on("disconnect", (reason) => {
//       console.log("❌ Disconnect from server:", reason);
//     });

//     socket.on("connect_error", (error) => {
//       console.error("❌ Connection error:", error.message);
//     });
//   }

//   return socket;
// };

// /**
//  * Manually connect socket
//  */
// export const connectSocket = () => {
//   const socket = getSocket();
//   if (!socket.connected) {
//     socket.connect();
//   }
// };

// /**
//  * Manually disconnect socket
//  */
// export const disconnectSocket = () => {
//   if (socket && socket.connected) {
//     socket.disconnect();
//   }
// };


import { io } from "socket.io-client";

const SERVER_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000").replace("/api", "");

let socket = null;

export const disconnectSocket = () => {
  if (socket) {
    if (socket.connected) {
      socket.disconnect();
    }
    socket = null;
    console.log("❌ Socket disconnected and cleared");
  }
};

export const getSocket = (token) => {
  if (!socket && token) {
    socket = io(SERVER_URL, {
      autoConnect: false,
      withCredentials: true,
      auth: {
        token: token,
      },
    });

    // Debugging Listeners
    socket.on("connect", () => {
      console.log("✅ Connected to Socket Server:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket Connection Error:", err.message);
    });
    
    socket.connect();
  }
  
  return socket;
};

export const useSocket = () => {
    return socket;
};