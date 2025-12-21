import { Check, CheckCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Message } from "@/lib/chat-data"

interface MessageBubbleProps {
  message: Message
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isSent = message.sender === "me"

  return (
    <div className={cn("flex", isSent ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "rounded-lg px-4 py-2 shadow-sm max-w-md",
          isSent ? "bg-message-sent rounded-tr-none" : "bg-white rounded-tl-none",
        )}
      >
        {message.type === "text" && <p className="text-sm text-gray-900 whitespace-pre-wrap">{message.content}</p>}
        {message.type === "image" && (
          <div className="space-y-2">
            <img src={message.content || "/placeholder.svg"} alt="Shared image" className="rounded-lg max-w-xs" />
            {message.caption && <p className="text-sm text-gray-900">{message.caption}</p>}
          </div>
        )}
        {message.type === "file" && (
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center text-white text-xs font-medium">
              PDF
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{message.fileName}</p>
              <p className="text-xs text-gray-500">{message.fileSize}</p>
            </div>
          </div>
        )}
        <div className={cn("flex items-center justify-end gap-1 mt-1")}>
          <span className="text-xs text-gray-500">{message.time}</span>
          {isSent && (
            <div className="text-gray-500">
              {message.status === "sent" && <Check className="w-4 h-4" />}
              {message.status === "delivered" && <CheckCheck className="w-4 h-4" />}
              {message.status === "read" && <CheckCheck className="w-4 h-4 text-blue-500" />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
