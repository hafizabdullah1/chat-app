# ChatApp - Complete Authentication System

## 🎯 Overview

Complete JWT-based authentication system for a WhatsApp-style chat application. This implementation includes:
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

## 🧪 Testing

### Backend (Postman/Thunder Client)

1. **Signup:**
   ```
   POST http://localhost:5000/api/auth/signup
   Body: {
     "username": "testuser",
     "email": "test@example.com",
     "password": "password123"
   }
   ```

2. **Login:**
   ```
   POST http://localhost:5000/api/auth/login
   Body: {
     "email": "test@example.com",
     "password": "password123"
   }
   ```

3. **Get Users (Protected):**
   ```
   GET http://localhost:5000/api/users
   Headers: {
     "Authorization": "Bearer YOUR_JWT_TOKEN"
   }
   ```

### Frontend

1. Open `http://localhost:3000`
2. Click "Sign up" → Create account
3. Should redirect to Contacts page
4. Click on a user → Opens chat
5. Test logout → Should redirect to login
6. Login again → Token should persist

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

## 🚧 Next Steps (Socket.io Implementation)

The authentication system is complete! Now you can add Socket.io:

### Backend
1. Install: `npm install socket.io`
2. Create `config/socket.js` for Socket.io setup
3. Create `socket/socketHandlers.js` for events
4. Update `server.js` to initialize Socket.io
5. Implement events: `user:online`, `message:send`, `typing:start`, etc.

### Frontend
1. Install: `npm install socket.io-client`
2. Create `lib/socket/socketClient.ts`
3. Connect socket on login
4. Listen for events and update Redux state
5. Emit events for messages, typing, etc.

**Refer to the original `implementation_plan.md` for detailed Socket.io setup!**

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

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`

### CORS Error
- Backend has `cors()` middleware enabled
- Check frontend API URL in `.env.local`

### Token Not Persisting
- Check browser localStorage
- Ensure ReduxProvider wraps app in `layout.tsx`
- Check `restoreAuth()` is called in ReduxProvider

### 401 Unauthorized
- Check token is being sent in headers
- Verify JWT_SECRET matches between signup and login
- Check token hasn't expired

---

## 📚 Resources

- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [JWT.io](https://jwt.io/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Socket.io Docs](https://socket.io/docs/) ← For your next step!

---

## ✅ Checklist

- [x] Backend authentication API
- [x] User model with validation
- [x] JWT token system
- [x] Protected routes
- [x] Redux Toolkit setup
- [x] Signup page
- [x] Login page
- [x] Contacts page
- [x] Settings page
- [x] Token persistence
- [ ] Socket.io integration (Your turn! 🚀)

---

**Happy Coding! 🎉**

Ab aap Socket.io implement kar sakte hain. Saari authentication ready hai!
