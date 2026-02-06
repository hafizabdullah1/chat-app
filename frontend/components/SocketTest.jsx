"use client";

import { useEffect, useState } from "react";
import { getSocket, connectSocket, disconnectSocket } from "@/lib/socket";

export default function SocketTest() {
    const [isConnected, setIsConnected] = useState(false);
    const [socketId, setSocketId] = useState("");

    useEffect(() => {
        // Socket instance
        const socket = getSocket();

        // Event listeners
        const handleConnect = () => {
            console.log("Component: Socket connected");
            setIsConnected(true);
            setSocketId(socket.id);
        };

        const handleDisconnect = () => {
            console.log("Component: Socket disconnected");
            setIsConnected(false);
            setSocketId("");
        };

        // Listeners attach
        socket.on("connect", handleConnect);
        socket.on("disconnect", handleDisconnect);

        if (socket.connected) {
            setIsConnected(true);
            setSocketId(socket.id);
        }

        // Cleanup function
        return () => {
            socket.off("connect", handleConnect);
            socket.off("disconnect", handleDisconnect);
        };
    }, []);

    return (
        <div style={{ padding: "20px", border: "2px solid #ccc", margin: "20px" }}>
            <h2>Socket.IO Connection Test</h2>

            {/* Connection Status */}
            <div style={{ marginBottom: "20px" }}>
                <p>
                    Status: {" "}
                    <strong style={{ color: isConnected ? "green" : "red" }}>
                        {isConnected ? "✅ Connected" : "❌ Disconnected"}
                    </strong>
                </p>
                {isConnected && (
                    <p>Socket ID: <code>{socketId}</code></p>
                )}
            </div>

            {/* Control Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    onClick={connectSocket}
                    disabled={isConnected}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: isConnected ? "#ccc" : "#4CAF50",
                        color: "white",
                        border: "none",
                        cursor: isConnected ? "not-allowed" : "pointer"
                    }}
                >
                    Connect
                </button>

                <button
                    onClick={disconnectSocket}
                    disabled={!isConnected}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: !isConnected ? "#ccc" : "#f44336",
                        color: "white",
                        border: "none",
                        cursor: !isConnected ? "not-allowed" : "pointer"
                    }}
                >
                    Disconnect
                </button>
            </div>
        </div>
    );
}