# Backend Authentication API - Testing Guide

## Setup

1. Make sure MongoDB is running on `mongodb://localhost:27017/chatapp`
2. Check `.env` file has correct values (use `.env.example` as reference)
3. Start server: `npm run server` (or `npm start`)

## API Endpoints

### Base URL: `http://localhost:5000/api`

---

### 1. **Signup** (Register New User)

**POST** `/auth/signup`

**Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "...",
    "username": "john_doe",
    "email": "john@example.com",
    "profilePic": "https://avatar.iran.liara.run/public",
    "bio": "",
    "createdAt": "..."
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 2. **Login**

**POST** `/auth/login`

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "...",
    "username": "john_doe",
    "email": "john@example.com",
    "profilePic": "...",
    "bio": "",
    "phone": "",
    "isOnline": false,
    "lastSeen": "..."
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 3. **Get Current User** (Protected)

**GET** `/auth/me`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response (200):**
```json
{
  "success": true,
  "user": {
    "id": "...",
    "username": "john_doe",
    "email": "john@example.com",
    ...
  }
}
```

---

### 4. **Logout** (Protected)

**POST** `/auth/logout`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### 5. **Get All Users** (Protected - for Contacts page)

**GET** `/users`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response (200):**
```json
{
  "success": true,
  "count": 5,
  "users": [
    {
      "id": "...",
      "username": "alice",
      "email": "alice@example.com",
      "profilePic": "...",
      "isOnline": false,
      "lastSeen": "..."
    },
    ...
  ]
}
```

---

### 6. **Search Users** (Protected)

**GET** `/users/search?q=john`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response (200):**
```json
{
  "success": true,
  "count": 2,
  "users": [...]
}
```

---

### 7. **Get User by ID** (Protected)

**GET** `/users/:id`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 8. **Update Profile** (Protected)

**PUT** `/users/profile`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Body:**
```json
{
  "username": "john_updated",
  "bio": "Hello, I'm John!",
  "phone": "+1234567890",
  "profilePic": "https://example.com/avatar.jpg"
}
```

---

## Testing with Postman/Thunder Client

### Step 1: Signup
1. POST to `http://localhost:5000/api/auth/signup`
2. Copy the `token` from response

### Step 2: Test Protected Route
1. GET to `http://localhost:5000/api/users`
2. Add header: `Authorization: Bearer YOUR_TOKEN`
3. Should return list of users

### Step 3: Login
1. POST to `http://localhost:5000/api/auth/login`
2. Use same credentials
3. Should get new token

---

## Error Responses

**400 Bad Request:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [...]
}
```

**401 Unauthorized:**
```json
{
  "success": false,
  "message": "Not authorized, no token"
}
```

**404 Not Found:**
```json
{
  "success": false,
  "message": "User not found"
}
```

**500 Server Error:**
```json
{
  "success": false,
  "message": "Server error",
  "error": "..."
}
```
