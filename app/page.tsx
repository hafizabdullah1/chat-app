"use client"

import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { ChatLayout } from "@/components/chat-layout"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  }

  return <ChatLayout />
}
