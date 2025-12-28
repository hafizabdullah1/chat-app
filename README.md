# ChatApp - Real-Time Messaging Application

A modern, WhatsApp-inspired chat application built with Next.js, Express.js, and MongoDB. Features JWT authentication, Redux state management, and a fully responsive UI.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## ✨ Features

- 🔐 **JWT Authentication** - Secure user authentication with token-based sessions
- 💬 **Real-time Messaging** - Socket.io ready for instant message delivery
- 📱 **Responsive Design** - Mobile-first UI with WhatsApp-style navigation
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS and Shadcn UI
- 🔄 **State Management** - Redux Toolkit with RTK Query for efficient data handling
- 👥 **User Management** - Profile settings, contact list, and user search
- 🔒 **Protected Routes** - Secure pages with automatic authentication checks

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit + RTK Query
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js 5
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **Security:** bcryptjs for password hashing
- **Validation:** express-validator

## 📋 Prerequisites

- Node.js 18 or higher
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

Start the backend server:

```bash
npm run server
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📱 Usage

1. **Sign Up** - Create a new account with username, email, and password
2. **Login** - Access your account with email and password
3. **Contacts** - View all registered users and start conversations
4. **Chat** - Send and receive messages in real-time
5. **Profile** - Update your profile information and settings

## 🏗️ Project Structure

```
chat-app/
├── backend/
│   ├── config/          # Database and configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth and error middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   └── server.js        # Entry point
│
└── frontend/
    ├── app/             # Next.js pages
    ├── components/      # React components
    ├── lib/             # Redux store and utilities
    └── public/          # Static assets
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/search?q=term` - Search users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/profile` - Update user profile

## 🔐 Security

- Passwords are hashed using bcrypt with salt rounds
- JWT tokens for secure authentication
- Protected routes with middleware verification
- Input validation on all endpoints
- CORS enabled for cross-origin requests

## 🎨 UI Features

- **Mobile Responsive** - Optimized for all screen sizes
- **Dark Mode Ready** - Theme support built-in
- **Loading States** - Smooth user experience with loading indicators
- **Error Handling** - User-friendly error messages
- **Form Validation** - Client and server-side validation

## 🚧 Roadmap

- [ ] Socket.io integration for real-time messaging
- [ ] Message read receipts and typing indicators
- [ ] File and image sharing
- [ ] Group chat functionality
- [ ] Voice and video calls
- [ ] Push notifications
- [ ] Message encryption

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by WhatsApp Web
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ Star this repo if you find it helpful!

- ✅ Backend API with Express.js + MongoDB
- ✅ JWT token authentication
- ✅ Redux Toolkit state management
- ✅ Complete UI (Signup, Login, Contacts, Settings)
- ✅ Protected routes
- ✅ Token persistence

**Note:** Socket.io is NOT included - ready for you to implement real-time features!

---

## 📁 Project Structure

```
chat-app/
├── backend/                    # Express.js API
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Signup, Login, Logout, GetMe
│   │   └── userController.js  # Get users, Search, Update profile
│   ├── middleware/
│   │   ├── authMiddleware.js  # JWT verification
│   │   └── errorMiddleware.js # Error handling
│   ├── models/
│   │   └── User.js            # User schema with bcrypt
│   ├── routes/
│   │   ├── authRoutes.js      # /api/auth/*
│   │   └── userRoutes.js      # /api/users/*
│   ├── utils/
│   │   └── generateToken.js   # JWT token generation
│   ├── .env                   # Environment variables
│   ├── .env.example           # Example env file
│   ├── API_TESTING.md         # API documentation
│   ├── package.json
│   └── server.js              # Main server file
│
└── frontend/                   # Next.js 16 + TypeScript
    ├── app/
    │   ├── chat/
    │   │   └── page.tsx       # Protected chat page
    │   ├── contacts/
    │   │   └── page.tsx       # User list page
    │   ├── login/
    │   │   └── page.tsx       # Login page
    │   ├── settings/
    │   │   └── page.tsx       # Profile settings
    │   ├── signup/
    │   │   └── page.tsx       # Signup page
    │   ├── globals.css
    │   ├── layout.tsx         # Root layout with Redux
    │   └── page.tsx           # Home (redirects)
    │
    ├── components/
    │   ├── chat/              # Existing chat components
    │   └── ui/                # Shadcn UI components
    │
    ├── lib/
    │   ├── redux/
    │   │   ├── api/
    │   │   │   └── apiSlice.ts      # RTK Query API
    │   │   ├── slices/
    │   │   │   ├── authSlice.ts     # Auth state
    │   │   │   └── userSlice.ts     # User state
    │   │   ├── hooks.ts             # Typed hooks
    │   │   ├── ReduxProvider.tsx    # Provider component
    │   │   └── store.ts             # Redux store
    │   └── utils.ts
    │
    ├── .env.local             # Frontend env variables
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB running locally or connection string
- npm or yarn

### Backend Setup

1. **Navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update values:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/chatapp
     JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_min_32_chars
     JWT_EXPIRE=7d
     NODE_ENV=development
     ```

4. **Start server:**
   ```bash
   npm run server    # with nodemon
   # or
   npm start         # without nodemon
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create `.env.local`:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:5000/api
     ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   App will run on `http://localhost:3000`

---

## 🔐 Authentication Flow

### 1. Signup
- User fills form → POST `/api/auth/signup`
- Backend validates, hashes password, creates user
- Returns JWT token + user data
- Frontend stores in Redux + localStorage
- Redirects to `/contacts`

### 2. Login
- User fills form → POST `/api/auth/login`
- Backend validates credentials
- Returns JWT token + user data
- Frontend stores in Redux + localStorage
- Redirects to `/chat`

### 3. Protected Routes
- All pages check `isAuthenticated` from Redux
- If not authenticated → redirect to `/login`
- Token sent in `Authorization: Bearer <token>` header

### 4. Logout
- Calls POST `/api/auth/logout`
- Clears Redux state + localStorage
- Redirects to `/login`

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/signup` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login user |
| POST | `/api/auth/logout` | Private | Logout user |
| GET | `/api/auth/me` | Private | Get current user |

### Users

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/users` | Private | Get all users (contacts) |
| GET | `/api/users/search?q=term` | Private | Search users |
| GET | `/api/users/:id` | Private | Get user by ID |
| PUT | `/api/users/profile` | Private | Update profile |

**Full API documentation:** See `backend/API_TESTING.md`

---

## 🎨 Pages

### `/signup`
- Username, email, password, confirm password
- Validation: username (3-30 chars), email format, password (6+ chars)
- Error handling for duplicate username/email

### `/login`
- Email, password
- Error handling for invalid credentials
- Link to signup page

### `/contacts`
- Lists all registered users
- Search functionality
- Shows online status (placeholder for Socket.io)
- Click user → navigate to chat
- Logout button in dropdown

### `/chat`
- Protected route
- Renders existing ChatLayout component
- Ready for Socket.io integration

### `/settings`
- Update username, email, bio, phone, profile picture
- Form validation
- Success/error messages

---

## 🔧 Tech Stack

### Backend
- **Express.js 5** - Web framework
- **MongoDB + Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **cors** - Cross-origin requests

### Frontend
- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **RTK Query** - API calls
- **Tailwind CSS** - Styling
- **Shadcn UI** - UI components

---

## 🔑 Key Features

### Backend
✅ User model with password hashing (bcrypt)  
✅ JWT token generation & verification  
✅ Protected route middleware  
✅ Input validation (express-validator)  
✅ Error handling middleware  
✅ RESTful API design  

### Frontend
✅ Redux Toolkit state management  
✅ RTK Query for API calls  
✅ Token persistence (localStorage)  
✅ Protected routes  
✅ Form validation  
✅ Error handling  
✅ Loading states  
✅ Responsive design  

---

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_min_32_chars
JWT_EXPIRE=7d
NODE_ENV=development
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 📚 Resources

- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [JWT.io](https://jwt.io/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Socket.io Docs](https://socket.io/docs/)

---

**Happy Coding! 🎉**
