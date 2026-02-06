"use client";

import { useEffect } from "react";
import { getSocket, disconnectSocket } from "@/lib/socket";
import { useAppSelector } from "@/lib/redux/hooks";

function SocketProvider({ children }: { children: React.ReactNode }) {
  const { token, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && token) {
      getSocket(token);
    } else {
      disconnectSocket();
    }
  }, [isAuthenticated, token]);

  return <>{children}</>;
}

export default SocketProvider;
