# Enterprise HelpDesk System

## About the Project

Enterprise HelpDesk System is a full-stack web application developed to manage employee support tickets. Users can register, log in securely, create support tickets, view existing tickets, and monitor ticket statistics through a dashboard.

This project was developed using React for the frontend and Node.js with Express and Prisma ORM for the backend.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Dashboard
- Create Ticket
- View Tickets
- Delete Ticket
- User Profile
- PostgreSQL Database

---

## Technology Used

### Frontend
- React.js
- React Router
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- PostgreSQL

### Authentication
- JWT
- Bcrypt

---

## Project Structure

```
Enterprise-HelpDesk-System
│
├── backend
├── frontend
├── database
├── docs
├── screenshot
└── README.md
```

---

## Screenshots

### Login

![Login](screenshot/login.png)

### Register

![Register](screenshot/register.png)

### Dashboard

![Dashboard](screenshot/dashboard.png)

### Tickets

![Tickets](screenshot/ticket.png)

### Create Ticket

![Create Ticket](screenshot/createticket.png)

### Profile

![Profile](screenshot/profile.png)

---

## How to Run

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Future Improvements

- Update Ticket
- Search Tickets
- Filter Tickets
- Admin Module
- Email Notifications

---

## Developed By

**Divya PR**

B.Tech Information Technology

Christ University