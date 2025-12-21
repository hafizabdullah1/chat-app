export interface Message {
  id: string
  sender: "me" | "other"
  content: string
  time: string
  status?: "sent" | "delivered" | "read"
  type: "text" | "image" | "file"
  fileName?: string
  fileSize?: string
  caption?: string
}

export interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unreadCount: number
  isOnline: boolean
  lastSeen?: string
  isGroup: boolean
  members?: number
  messages: Message[]
}

export const CHAT_DATA: Chat[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "Hey! How are you doing?",
    time: "10:30 AM",
    unreadCount: 3,
    isOnline: true,
    isGroup: false,
    messages: [
      {
        id: "m1",
        sender: "other",
        content: "Hey! How are you doing?",
        time: "10:15 AM",
        type: "text",
      },
      {
        id: "m2",
        sender: "me",
        content: "I'm doing great! Just finished the project",
        time: "10:20 AM",
        status: "read",
        type: "text",
      },
      {
        id: "m3",
        sender: "other",
        content: "That's awesome! Can you share the files?",
        time: "10:25 AM",
        type: "text",
      },
      {
        id: "m4",
        sender: "me",
        content: "Sure, here you go",
        time: "10:28 AM",
        status: "delivered",
        type: "text",
      },
      {
        id: "m5",
        sender: "me",
        content: "/document-stack.png",
        time: "10:29 AM",
        status: "delivered",
        type: "file",
        fileName: "Project_Report.pdf",
        fileSize: "2.4 MB",
      },
      {
        id: "m6",
        sender: "other",
        content: "Perfect! Let me check it out 👍",
        time: "10:30 AM",
        type: "text",
      },
    ],
  },
  {
    id: "2",
    name: "Development Team",
    avatar: "/diverse-professional-team.png",
    lastMessage: "John: Meeting at 3 PM tomorrow",
    time: "9:45 AM",
    unreadCount: 0,
    isOnline: false,
    isGroup: true,
    members: 12,
    messages: [
      {
        id: "m1",
        sender: "other",
        content: "Good morning team! Quick update on the sprint",
        time: "9:00 AM",
        type: "text",
      },
      {
        id: "m2",
        sender: "me",
        content: "Morning! All tasks are on track 👍",
        time: "9:15 AM",
        status: "read",
        type: "text",
      },
      {
        id: "m3",
        sender: "other",
        content: "Great work everyone! Meeting at 3 PM tomorrow",
        time: "9:45 AM",
        type: "text",
      },
    ],
  },
  {
    id: "3",
    name: "Michael Chen",
    avatar: "/man.jpg",
    lastMessage: "Thanks for the update!",
    time: "Yesterday",
    unreadCount: 0,
    isOnline: false,
    lastSeen: "today at 8:30 AM",
    isGroup: false,
    messages: [
      {
        id: "m1",
        sender: "me",
        content: "Hi Michael, wanted to update you on the client meeting",
        time: "Yesterday 4:20 PM",
        status: "read",
        type: "text",
      },
      {
        id: "m2",
        sender: "other",
        content: "Sure, how did it go?",
        time: "Yesterday 4:25 PM",
        type: "text",
      },
      {
        id: "m3",
        sender: "me",
        content: "They loved the demo! Want to move forward with phase 2",
        time: "Yesterday 4:30 PM",
        status: "read",
        type: "text",
      },
      {
        id: "m4",
        sender: "other",
        content: "Thanks for the update!",
        time: "Yesterday 4:35 PM",
        type: "text",
      },
    ],
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    avatar: "/professional-woman.png",
    lastMessage: "See you at the conference!",
    time: "Yesterday",
    unreadCount: 0,
    isOnline: true,
    isGroup: false,
    messages: [
      {
        id: "m1",
        sender: "other",
        content: "Are you attending the tech conference next week?",
        time: "Yesterday 2:00 PM",
        type: "text",
      },
      {
        id: "m2",
        sender: "me",
        content: "Yes! I'll be presenting on day 2",
        time: "Yesterday 2:15 PM",
        status: "read",
        type: "text",
      },
      {
        id: "m3",
        sender: "other",
        content: "Awesome! Looking forward to it",
        time: "Yesterday 2:20 PM",
        type: "text",
      },
      {
        id: "m4",
        sender: "other",
        content: "See you at the conference!",
        time: "Yesterday 2:25 PM",
        type: "text",
      },
    ],
  },
  {
    id: "5",
    name: "Design Squad",
    avatar: "/design-team.jpg",
    lastMessage: "Lisa: New mockups are ready",
    time: "Monday",
    unreadCount: 5,
    isOnline: false,
    isGroup: true,
    members: 8,
    messages: [
      {
        id: "m1",
        sender: "other",
        content: "Hey team, starting work on the new landing page",
        time: "Monday 11:00 AM",
        type: "text",
      },
      {
        id: "m2",
        sender: "me",
        content: "Sounds good! Need any assets?",
        time: "Monday 11:15 AM",
        status: "read",
        type: "text",
      },
      {
        id: "m3",
        sender: "other",
        content: "/generic-product-mockup.png",
        time: "Monday 2:30 PM",
        type: "image",
        caption: "New mockups are ready",
      },
    ],
  },
]
