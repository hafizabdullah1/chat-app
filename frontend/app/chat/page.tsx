"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";
import { ChatLayout } from "@/components/chat-layout";

export default function ChatPage() {
  const router = useRouter();
  const { isAuthenticated, isInitialized } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/login");
    }
  }, [isInitialized, isAuthenticated, router]);

  if (!isInitialized || !isAuthenticated) {
    return null;
  }

  return <ChatLayout />;
}
