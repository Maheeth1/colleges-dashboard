# AspireNext College Dashboard

A full-stack web application designed to help students discover, filter, and review colleges. This dashboard provides a clean, responsive interface for users to search for institutions based on various criteria, save their favorites, and read community-sourced reviews.

## 🚀 Live Demo

* **Frontend (Deployed on Vercel):** `[https://colleges-dashboard.vercel.app/]`
* **Backend API (Deployed on Render):** `[https://colleges-dashboard.onrender.com]`

### 🎬 Demo Video

A short video walkthrough of the application's features can be found here:
* **Watch the Demo Video:** `[https://drive.google.com/file/d/1Au-P8FpjEsJYgmMvNk62oFvIzFf0E9I7/view?usp=drive_link]`

---
## ✨ Features

* **Dynamic Search:** Instantly search for colleges by name.
* **Multi-Filter System:** Combine filters for **Location**, **Course**, and **Fee Range** to narrow down results.
* **Sorting:** Sort colleges by fee (Low to High or High to Low).
* **Favorites:** Users can add or remove colleges from a persistent list of favorites.
* **Reviews:** A dedicated page where users can submit and view ratings and comments for colleges.
* **Dark Mode:** A sleek, user-friendly dark mode for comfortable nighttime browsing.
* **Fully Responsive:** A clean and modern UI that works seamlessly on desktop and mobile devices.

---
## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/greenSock-%2388CE02.svg?style=for-the-badge&logo=greensock&logoColor=white)
![Axios](https://img.shields.io/badge/axios-black.svg?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Database & ORM
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Sequelize](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

### Deployment
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

---
## ⚙️ Getting Started: Local Setup

To run this project on your local machine, follow these steps.

### Prerequisites
* Node.js (v18 or later recommended)
* Git

### 1. Clone the Repository
```bash
git clone https://github.com/Maheeth1/colleges-dashboard.git
cd colleges-dashboard
```
### 2. Backend Setup
```Bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create the database and populate it with sample data
npm run seed

# Start the backend server
npm run dev
```
The backend server will be running on http://localhost:5001.

### 3. Frontend Setup
```Bash
# Open a new terminal and navigate to the client directory
cd client

# Install dependencies
npm install

# Create a local environment file.
# Create a new file named .env.local and add the following line:
# VITE_API_URL=http://localhost:5001/api

# Start the frontend development server
npm run dev
```
The frontend application will be available at http://localhost:5173 (or another port if 5173 is in use).

## ↔️ API Endpoints
The backend exposes the following REST API endpoints:

| Method | Endpoint | Description |
| :----- | :---------------- | :-------------------------- |
| GET | /api/colleges | Fetches all colleges with optional filters. |
| GET | /api/reviews | Fetches all reviews. | 
| POST | /api/reviews | Adds a new review. |
| GET | /api/favorites | Fetches all favorite colleges. | 
| POST | /api/favorites | Adds a college to favorites. |
| DELETE | /api/favorites/:id | Removes a college from favorites by its ID. |


## 📄 License
This project is licensed under the MIT License.
