"use client"

import { useState } from "react"
import { ChatHeader } from "@/components/chat-header"
import { MessageBubble } from "@/components/message-bubble"
import { MessageInput } from "@/components/message-input"
import type { Chat } from "@/lib/chat-data"

interface ChatWindowProps {
  chat: Chat
  onBack?: () => void
}

export function ChatWindow({ chat, onBack }: ChatWindowProps) {
  const [isTyping] = useState(false)

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader chat={chat} onBack={onBack} />

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
