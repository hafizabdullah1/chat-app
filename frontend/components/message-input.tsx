"use client"

import { cn } from "@/lib/utils"

import type React from "react"

import { useState } from "react"
import { Smile, Paperclip, Send, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EmojiPicker } from "@/components/emoji-picker"
import { AttachmentModal } from "@/components/attachment-modal"

export function MessageInput() {
  const [message, setMessage] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showAttachmentModal, setShowAttachmentModal] = useState(false)

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleEmojiSelect = (emoji: string) => {
    setMessage((prev) => prev + emoji)
  }

  return (
    <div className="bg-chat-header px-4 py-3 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <Smile className="w-6 h-6" />
          </Button>
          {showEmojiPicker && (
            <EmojiPicker onEmojiSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-gray-900"
          onClick={() => setShowAttachmentModal(true)}
        >
          <Paperclip className="w-6 h-6" />
        </Button>

        <Input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 rounded-lg border-gray-200 focus:border-whatsapp-green focus:ring-whatsapp-green"
        />

        <Button
          size="icon"
          className={cn(
            "rounded-full transition-colors",
            message.trim()
              ? "bg-whatsapp-green hover:bg-whatsapp-green-dark text-white"
              : "bg-transparent hover:bg-gray-100 text-gray-600",
          )}
          onClick={message.trim() ? handleSend : undefined}
        >
          {message.trim() ? <Send className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </Button>
      </div>

      <AttachmentModal isOpen={showAttachmentModal} onClose={() => setShowAttachmentModal(false)} />
    </div>
  )
}
