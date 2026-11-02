# ChatApp

WhatsApp-inspired real-time messaging — JWT auth, MongoDB, Socket.io presence, and a Next.js + Redux client.

## Live demo

- Frontend: [https://chat-app-gamma-mocha.vercel.app](https://chat-app-gamma-mocha.vercel.app)
- Backend: deploy the `backend/` API (and Socket.io) separately; set `NEXT_PUBLIC_API_URL` / `FRONTEND_URL`

## Screenshots

| Login | Contacts | Chat |
| --- | --- | --- |
| ![Login](docs/screenshots/login.png) | ![Contacts](docs/screenshots/contacts.png) | ![Chat](docs/screenshots/chat.png) |

## Key features

- JWT register/login with bcrypt password hashing
- Protected routes and auth middleware
- User search / contacts and profile updates
- Real-time messaging via Socket.io (JWT on socket handshake)
- Online user presence (`getOnlineUsers`)
- Redux Toolkit + RTK Query on the client
- Tailwind + shadcn-style UI, mobile-friendly layout
- Multer-ready uploads on the API

## Tech stack

| Layer | Choice |
| --- | --- |
| Frontend | Next.js 16, React 19, TypeScript, Redux Toolkit, Tailwind, Socket.io client |
| Backend | Express 5, MongoDB/Mongoose, JWT, Socket.io, express-validator |
| Hosting | Vercel (frontend); API needs a Node host that supports WebSockets |

## Architecture (brief)

```
Next.js (frontend/)  ←→  REST /api/*  ←→  Express (backend/)
         ↕ Socket.io (JWT auth middleware)
              MongoDB (User, Message)
```

Monorepo layout: `frontend/` + `backend/` with root `README.md`.

## Getting started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

### Backend

```bash
git clone https://github.com/hafizabdullah1/chat-app.git
cd chat-app/backend
npm install
create/edit `.env` with your values
npm run server         # nodemon, or: npm start
```

### Frontend

```bash
cd ../frontend
npm install
# create .env.local (do not commit secrets)
npm run dev
```

### Environment

**Backend** (`.env`):

| Variable | Required | Description |
| --- | --- | --- |
| `PORT` | No | API port (default 5000) |
| `NODE_ENV` | No | `development` / `production` |
| `MONGO_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | JWT signing secret |
| `JWT_EXPIRE` | No | Token lifetime (e.g. `7d`) |
| `FRONTEND_URL` | Yes (prod) | Allowed CORS / socket origin |

**Frontend:**

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Yes | API base, e.g. `http://localhost:5000/api` |

## Deployment

- Frontend → Vercel with `NEXT_PUBLIC_API_URL` pointing at the public API.
- Backend → Render/Railway/Fly (WebSocket-capable); set `FRONTEND_URL` to the Vercel domain.
- Do not commit `.env.local`; rotate any keys that were ever pushed.

## Roadmap

- [ ] Rename frontend package from `my-v0-project`
- [ ] Typing indicators, read receipts, media messages
- [ ] Docker Compose for API + Mongo
- [ ] Tests + CI + MIT license + OG image

## Author

**Hafiz Abdullah** — [GitHub](https://github.com/hafizabdullah1) · [hafizabdullah.site](https://hafizabdullah.site)
