"use client"

import { useState } from "react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatWindow } from "@/components/chat-window"
import { CHAT_DATA, type Chat } from "@/lib/chat-data"
import { NewChatSidebar } from "./new-chat-sidebar"

export function ChatLayout() {
  const [selectedChat, setSelectedChat] = useState<Chat>(CHAT_DATA[0])
  const [showChat, setShowChat] = useState(false) // For mobile view
  const [isNewChatOpen, setIsNewChatOpen] = useState(false)

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat)
    setShowChat(true) // Show chat window on mobile
  }

  const handleBackToChats = () => {
    setShowChat(false) // Go back to chat list on mobile
  }

  return (
    <div className="flex h-screen bg-chat-pattern relative overflow-hidden">
      {/* Sidebar - Hidden on mobile when chat is open */}
      <div className={`${showChat ? 'hidden md:flex' : 'flex'} w-full md:w-[400px] relative`}>
        <ChatSidebar 
          chats={CHAT_DATA} 
          selectedChatId={selectedChat.id} 
          onChatSelect={handleChatSelect} 
          onNewChatClick={() => setIsNewChatOpen(true)}
        />
        <NewChatSidebar 
          isOpen={isNewChatOpen} 
          onClose={() => setIsNewChatOpen(false)} 
        />
      </div>
      
      {/* Chat Window - Hidden on mobile when sidebar is shown */}
      <div className={`${showChat ? 'flex' : 'hidden md:flex'} flex-1`}>
        <ChatWindow 
          chat={selectedChat} 
          onBack={handleBackToChats}
        />
      </div>
    </div>
  )
}
