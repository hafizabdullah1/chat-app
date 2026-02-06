"use client";

import { useEffect, useState } from "react";
import { getSocket, disconnectSocket } from "@/lib/socket";

export default function SocketTest() {
    const [isConnected, setIsConnected] = useState(false);
    const [socketId, setSocketId] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Poll for socket instance because it might be initialized by SocketProvider
        const interval = setInterval(() => {
            const s = getSocket();
            if (s) {
                setSocket(s);
                if (s.connected) {
                    setIsConnected(true);
                    setSocketId(s.id);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!socket) return;

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

        socket.on("connect", handleConnect);
        socket.on("disconnect", handleDisconnect);

        return () => {
            socket.off("connect", handleConnect);
            socket.off("disconnect", handleDisconnect);
        };
    }, [socket]);

    const handleManualConnect = () => {
        alert("Socket connection is now handled automatically via Login/SocketProvider.");
    };

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
                    onClick={handleManualConnect}
                    disabled={isConnected}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: isConnected ? "#ccc" : "#4CAF50",
                        color: "white",
                        border: "none",
                        cursor: isConnected ? "not-allowed" : "pointer"
                    }}
                >
                    Connect (Auto-Auth)
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