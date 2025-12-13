"use client"

import { useState } from "react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatWindow } from "@/components/chat-window"
import { CHAT_DATA, type Chat } from "@/lib/chat-data"

export function ChatLayout() {
  const [selectedChat, setSelectedChat] = useState<Chat>(CHAT_DATA[0])

  return (
    <div className="flex h-screen bg-chat-pattern">
      <ChatSidebar chats={CHAT_DATA} selectedChatId={selectedChat.id} onChatSelect={setSelectedChat} />
      <ChatWindow chat={selectedChat} />
    </div>
  )
}
