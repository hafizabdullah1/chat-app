"use client"

import { useState } from "react"
import { ChatHeader } from "@/components/chat-header"
import { MessageBubble } from "@/components/message-bubble"
import { MessageInput } from "@/components/message-input"
import type { Chat } from "@/lib/chat-data"

import { useAppSelector } from "@/lib/redux/hooks"
import { ContactInfo } from "./contact-info"

interface ChatWindowProps {
  chat: Chat
  onBack?: () => void
}

export function ChatWindow({ chat, onBack }: ChatWindowProps) {
  const [isTyping] = useState(false)
  const { selectedUser } = useAppSelector((state) => state.user)
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false)

  // Use selectedUser if available, otherwise fallback to chat (though we intend to move away from 'chat' prop fully eventually)
  // For now, if we selected a user from "New Chat", we display THAT user.
  // If we came from the normal sidebar (existing chat), we display that.
  
  // NOTE: This logic is transitional. Ideally we'd map "Chat" to "User" or vice versa.
  // For this step, let's prioritize selectedUser if it exists for the "Header" display.
   
  const displayUser = selectedUser ? {
    name: selectedUser.username,
    avatar: selectedUser.profilePic,
    isOnline: selectedUser.isOnline,
    lastSeen: selectedUser.lastSeen
  } : {
    name: chat.name,
    avatar: chat.avatar,
    isOnline: chat.isOnline,
    lastSeen: chat.lastSeen
  }

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <ChatHeader 
        // We are passing a "Chat-like" object to satisfy the interface for now, or we should refactor ChatHeader
        // Let's refactor ChatHeader to take name/avatar/etc directly or cast it.
        // For minimal breakage, let's cast.
        chat={{...chat, name: displayUser.name, avatar: displayUser.avatar, isOnline: displayUser.isOnline, lastSeen: displayUser.lastSeen}} 
        onBack={onBack} 
        onProfileClick={() => setIsContactInfoOpen(true)}
      />
      
      <ContactInfo 
        user={selectedUser} 
        isOpen={isContactInfoOpen} 
        onClose={() => setIsContactInfoOpen(false)} 
      />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 bg-chat-bg">
        {chat.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isTyping && (
          <div className="flex items-start gap-2">
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow-sm max-w-md">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <MessageInput />
    </div>
  )
}
