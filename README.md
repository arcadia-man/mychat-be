# mychat-be

TypeScript backend for a real-time chat application. Provides REST auth routes and a Socket.io server for live messaging.

## Tech Stack

TypeScript · Node.js · Express · Socket.io · MongoDB (Mongoose) · cookie-parser · dotenv

## Features

- REST auth routes (register, login)
- Socket.io server for real-time connections
- MongoDB connection via Mongoose
- CORS configured for a separate frontend origin
- Cookie-based session support

## Getting Started

### Prerequisites

Node.js 18+ · MongoDB instance

### Setup

```bash
git clone https://github.com/arcadia-man/mychat-be.git
cd mychat-be
cp .env.example .env   # fill in your values
npm install
npm run dev
```

Server starts on port `5000` (or `PORT` from env).

## Project Structure

```
mychat-be/
├── src/
│   ├── app.ts          # Express app + Socket.io server setup
│   ├── server.ts       # Entry point — connects DB and starts server
│   └── config/
│       └── db.ts       # MongoDB connection
└── tsconfig.json
```

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `CLIENT_URL` | Frontend origin for CORS |
| `PORT` | Server port (default 5000) |
