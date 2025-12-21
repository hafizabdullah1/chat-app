import { Phone, Video, Search, MoreVertical, ArrowLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { Chat } from "@/lib/chat-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ChatHeaderProps {
  chat: Chat
  onBack?: () => void
}

export function ChatHeader({ chat, onBack }: ChatHeaderProps) {
  return (
    <div className="bg-chat-header px-4 md:px-6 py-3 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center gap-3">
        {/* Back button - Only visible on mobile */}
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="md:hidden -ml-2 hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </Button>
        )}
        
        <div className="relative">
          <Avatar className="w-10 h-10">
            <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
            <AvatarFallback className="bg-emerald-500 text-white">{chat.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          {chat.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          )}
        </div>
        <div>
          <h2 className="font-medium text-gray-900">
            {chat.name}
            {chat.isGroup && <span className="text-sm text-gray-500 ml-1">({chat.members} members)</span>}
          </h2>
          <p className="text-xs text-gray-600">
            {chat.isOnline ? "online" : `last seen ${chat.lastSeen || "recently"}`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Video className="hidden md:block w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        <Phone className="hidden md:block w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Contact info</DropdownMenuItem>
            <DropdownMenuItem>Select messages</DropdownMenuItem>
            <DropdownMenuItem>Mute notifications</DropdownMenuItem>
            <DropdownMenuItem>Clear messages</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete chat</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
