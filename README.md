# Enterprise HelpDesk System

## Features
- User Registration
- User Login
- JWT Authentication
- Ticket Management (CRUD)
- Dashboard Statistics
- PostgreSQL Database using Prisma
- REST API

## Tech Stack
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (Neon)
- JWT Authentication

## Installation

```bash
npm install
```

Create a `.env` file using `.env.example`.

Run:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Server:

```
http://localhost:5000
```