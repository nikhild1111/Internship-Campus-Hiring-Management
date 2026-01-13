# 🎓 Internship & Campus Hiring Management Platform

A comprehensive **MERN Stack** web application designed to streamline the internship and campus placement process for students, companies, and college administrators. This platform bridges the gap between recruiters and students, eliminating the hassle of managing applications through spreadsheets and emails.

**GitHub Repository:** [https://github.com/nikhild1111/Internship-Campus-Hiring-Management](https://github.com/nikhild1111/Internship-Campus-Hiring-Management)

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Team](#-team---thecoders)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🚀 About the Project

### The Problem
Traditional campus hiring processes are:
- **Disorganized** - Applications scattered across emails and spreadsheets
- **Time-Consuming** - Manual tracking of hundreds of applicants
- **Error-Prone** - High chance of losing application data
- **Inefficient** - No centralized system for students and recruiters

### Our Solution
A unified platform that provides:
- ✅ **For Students**: Browse jobs, apply with one click, track application status in real-time
- ✅ **For Recruiters**: Post jobs, manage applications, shortlist/reject candidates, send automated emails
- ✅ **For Colleges**: Centralized placement management with analytics

---

## ✨ Features

### 👨‍🎓 Student Portal
- 🔐 User authentication (Email/Password & Google OAuth)
- 📝 Profile creation with resume upload (PDF)
- 🔍 Job search with filters (Role, Location, Stipend, Tech Stack)
- 📤 One-click job application
- 📊 Application dashboard (Track status: Applied → Shortlisted → Interview → Hired/Rejected)
- 📧 Email notifications for status updates

### 🏢 Admin/Company Portal
- 📝 Job posting (Create/Edit/Delete internship listings)
- 👥 Applicant management (View all applications for each job)
- ✅ Workflow actions (Shortlist, Reject, Schedule Interview)
- 📄 Resume viewer (View PDF resumes directly in browser)
- 📊 Analytics dashboard (Application statistics, hiring metrics)
- ✉️ Automated email system (Interview invitations, status updates)

### 🔒 Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control (Student/Admin)
- Secure file storage (Cloudinary integration)

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React.js** | UI Library for building interactive interfaces |
| **Tailwind CSS** | Utility-first CSS framework for rapid styling |
| **Lucide React** | Modern icon library |
| **Axios** | HTTP client for API requests |
| **React Router** | Client-side routing |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database for data storage |
| **Mongoose** | ODM (Object Data Modeling) library for MongoDB |

### Additional Tools
| Tool | Purpose |
|------|---------|
| **JWT** | Secure token-based authentication |
| **bcryptjs** | Password hashing |
| **Multer** | File upload handling |
| **Cloudinary** | Cloud-based file storage for resumes |
| **Nodemailer** | Email notifications |
| **Joi/Zod** | Data validation |

---

## 🏗 System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  React Frontend │ ◄─────► │  Express API    │ ◄─────► │  MongoDB        │
│                 │         │                 │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
       │                            │                            │
       │                            │                            │
       ▼                            ▼                            ▼
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│  Tailwind CSS   │         │  JWT Auth       │         │  3 Collections: │
│  Lucide Icons   │         │  Middleware     │         │  - Users        │
└─────────────────┘         └─────────────────┘         │  - Jobs         │
                                    │                    │  - Applications │
                                    ▼                    └─────────────────┘
                            ┌─────────────────┐
                            │  Cloudinary     │ (Resume Storage)
                            │  Nodemailer     │ (Email Service)
                            └─────────────────┘
```



## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn package manager
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/nikhild1111/Internship-Campus-Hiring-Management.git
cd Internship-Campus-Hiring-Management
```

### Step 2: Frontend Setup

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env file in frontend folder
touch .env
```

**Add the following to frontend `.env`:**
```env
VITE_API_URL=http://localhost:5000/api
```

**Start the frontend development server:**
```bash
npm run dev
# Frontend will run on http://localhost:5173
```

### Step 3: Access the Application

Open your browser and navigate to:
- **Frontend:** [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
Internship-Campus-Hiring-Management/
│
├── frontend/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Student/
│   │   │   │   ├── JobList.jsx
│   │   │   │   ├── JobCard.jsx
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Admin/
│   │   │   │   ├── AdminPanel.jsx
│   │   │   │   └── JobPostForm.jsx
│   │   │   └── Shared/
│   │   │       ├── Navbar.jsx
│   │   │       ├── Login.jsx
│   │   │       └── Signup.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---











## 👥 Team - TheCoders

**Project Team:**
- **Nikhil Domade** - [GitHub](https://github.com/nikhild1111) - Full Stack Intern
- **Sarthak Keche** - Full Stack Intern
- **Niraj Tapase** - Full Stack Intern
- **Ekta Nanavare** - QA Intern

---

## 📞 Contact

**Project Link:** [https://github.com/nikhild1111/Internship-Campus-Hiring-Management](https://github.com/nikhild1111/Internship-Campus-Hiring-Management)

**Email:** domadenikhil05@gmail.com

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [MongoDB University](https://university.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">
  <p>⭐ Star this repo if you find it helpful!</p>
  <p>Made with ❤️ by the Team</p>
</div>
