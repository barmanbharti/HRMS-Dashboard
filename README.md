# 🏢 HRMS Dashboard

A simple **Human Resource Management System (HRMS)** dashboard built with **React (Vite)** and **Tailwind CSS**.  
It includes features like **employee directory**, **leave requests management**, and a **profile section** with mock authentication.

---

## 🚀 Features

- 🔐 **Mock Authentication** (No real backend, using `dummyAuth.js`)
- 📋 **Employee Directory** (Add, Edit, Delete, Search Employees)
- 🗓 **Leave Requests** (Add, Edit, Delete Requests)
- 🙍 **User Profile** (View and update basic details)
- 📱 **Responsive UI** (Mobile-friendly with collapsible sidebar)
- 🎨 **Tailwind CSS Styling** (Modern and clean design)

---

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/barmanbharti/HRMS-Dashboard.git

2. **Navigate to the project folder**
   cd HRMS-Dashboard
   
3. **Install dependencies**
    npm install
   
4. **Run the development server**
    npm run dev

5. **Open the app in your browser**
    Vite will give you a local development link like:
    http://localhost:5173


## 🔑 Login Credentials
 **Use the following credentials to log in:**
   Email: admin@example.com
   Password: 123456


## 📂 Project Structure
 src/
 ├── assets/           # JSON data files for employees & leaves
 ├── components/       # Navbar, Sidebar, etc.
 ├── context/          # AuthContext for login/logout state
 ├── pages/            # Employees, Leaves, Profile, Login
 ├── dummyAuth.js      # Mock login authentication function
 ├── App.jsx           # App routes & structure
 └── main.jsx          # Entry point


## ⚠️ Known Issues
  1.Authentication is mocked — no real backend API.
  2.Data is stored in-memory — changes will reset on page reload.

## 📜 License
   
---




