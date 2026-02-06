## 1. Authentication & Database Setup (Complete)

- [ ] Backend Routes & Models
- Frontend Login/Signup/UserList

## 2. Socket.IO Connection & Security (Complete)

- Backend: Authenticate Socket connection & User Mapping
- Frontend: Pass JWT & Handle Online Status (Green Dot)
- Basic 1-on-1 Messaging (Ephemeral)

## 3. Message Persistence (Core Feature) (Complete)

- Backend: Create Message Model (sender, receiver, content, timestamp)
- Backend: Save messages to DB on private_message event
- Backend: Create API to fetch Chat History (GET /api/messages/:userId)
- Frontend: Fetch and display history on Chat Select

## 4. Advanced Chat UI (WhatsApp Style) (Complete)

- Backend: API to get "My Conversations" (last message per user)
- Frontend: Build "Recent Chats" Sidebar (vs "All Users")
- Frontend: Separate "All Users" list to a "New Chat" modal/screen

## 5. Real-time Polish

- Inbox Updates: Update conversation list on new message
- Typing Indicators: "User is typing..." events
- Message Status: Sent, Delivered, Seen (Blue Ticks)
- Notifications: Toast/Badge for new messages
