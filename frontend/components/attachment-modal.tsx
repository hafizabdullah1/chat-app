"use client"

import { ImageIcon, FileText, Camera, Users, LucideComponent as FileIconComponent } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AttachmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AttachmentModal({ isOpen, onClose }: AttachmentModalProps) {
  const attachmentOptions = [
    { icon: FileText, label: "Document", color: "bg-purple-500" },
    { icon: Camera, label: "Camera", color: "bg-pink-500" },
    { icon: ImageIcon, label: "Gallery", color: "bg-blue-500" },
    { icon: Users, label: "Contact", color: "bg-teal-500" },
    { icon: FileIconComponent, label: "Files", color: "bg-orange-500" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 py-4">
          {attachmentOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.label}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => {
                  console.log("Selected:", option.label)
                  onClose()
                }}
              >
                <div className={`${option.color} text-white rounded-full p-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-700">{option.label}</span>
              </button>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
