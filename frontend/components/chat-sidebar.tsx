"use client"

import { useState } from "react"
import { Search, MoreVertical, MessageSquarePlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ChatItem } from "@/components/chat-item"
import type { Chat } from "@/lib/chat-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ChatSidebarProps {
  chats: Chat[]
  selectedChatId: string
  onChatSelect: (chat: Chat) => void
}

export function ChatSidebar({ chats, selectedChatId, onChatSelect }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="w-full md:w-[400px] bg-white border-r border-gray-200 flex flex-col">
      {/* Profile Header */}
      <div className="bg-chat-header px-4 py-3 flex items-center justify-between">
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage src="/abstract-geometric-shapes.png" alt="You" />
          <AvatarFallback className="bg-emerald-500 text-white">ME</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-6">
          <MessageSquarePlus className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search or start new chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-9 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-1 focus:ring-whatsapp-green"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            isSelected={chat.id === selectedChatId}
            onClick={() => onChatSelect(chat)}
          />
        ))}
      </div>
    </div>
  )
}
