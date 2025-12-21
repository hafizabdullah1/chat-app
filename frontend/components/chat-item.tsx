"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Chat } from "@/lib/chat-data"

interface ChatItemProps {
  chat: Chat
  isSelected: boolean
  onClick: () => void
}

export function ChatItem({ chat, isSelected, onClick }: ChatItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors",
        isSelected && "bg-chat-selected",
      )}
    >
      <div className="relative flex-shrink-0">
        <Avatar className="w-12 h-12">
          <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
          <AvatarFallback className="bg-emerald-500 text-white">{chat.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        {chat.isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
          <span className="text-xs text-gray-500 flex-shrink-0">{chat.time}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          {chat.unreadCount > 0 && (
            <span className="flex-shrink-0 ml-2 bg-whatsapp-green text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
