# 🧩 REST API with Express & Mongoose

This project is a simple **RESTful API** built with **Node.js**, **Express**, and **Mongoose** to perform CRUD operations on a MongoDB database.  
It allows managing a collection of users with operations to create, read, update, and delete user records.

---

## 🚀 Features

- Create, read, update, and delete users
- Uses **MongoDB Atlas** or local MongoDB connection
- Organized folder structure for scalability
- Environment variables with `.env`
- Tested with REST Client or Postman

---

## 📁 Project Structure

```markdown
Rest Api/
│
├── config/
│ └── .env
│
├── models/
│ └── User.js
│
├── server.js
│
└── API_TEST.rest (i'm using REST Client pluging for vscode)
│
└── README.md
```

## Initialize and install dependencies

```bash
npm init -y
npm install express mongoose dotenv nodemon
```

Replace <username> and <password> with your MongoDB Atlas credentials.
The database name users will be created automatically if it doesn’t exist.

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/users?retryWrites=true&w=majority
```

## 🧠 Run the Server

```bash
npx nodemon server.js
```

## 🧱 API Endpoints

```bash
Base URL : http://localhost:5000/api/users

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| POST   | `/api/users`     | Add a new user    |
| PUT    | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |
```

## 🧪 Testing the API

You can use Postman or REST Client (VS Code extension).
Example REST Client file (API_TEST.rest)

## 📸 Screenshots

### Create

![post request](/screenshots/post.jpg)

### read

![get request](/screenshots/get.jpg)

### Update

![put request](/screenshots/put.jpg)

### Delete

![delete request](/screenshots/delete.jpg)
