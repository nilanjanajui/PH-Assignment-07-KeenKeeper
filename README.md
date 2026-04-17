# 🌿 KeenKeeper

> Keep your friendships alive — your personal shelf of meaningful connections.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge\&logo=tailwind-css\&logoColor=38BDF8)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge)
![Context API](https://img.shields.io/badge/Context_API-000000?style=for-the-badge\&logo=react)
![Lucide](https://img.shields.io/badge/Lucide_Icons-000000?style=for-the-badge)

[![Netlify Status](https://api.netlify.com/api/v1/badges/keenkeeper22/deploy-status)](https://keenkeeper22.netlify.app/)

KeenKeeper is a friendship management web app that helps you stay in touch with the people who matter most. Track when you last connected, log interactions, and get a visual overview of your relationship health — all in one place.

---

## 🛠️ Technologies Used

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| React.js        | UI library                 |
| React Router v6 | Client-side navigation     |
| Tailwind CSS v4 | Styling and responsiveness |
| Context API     | Global state management    |
| Recharts        | Pie chart visualization    |
| Vite            | Build tool and dev server  |
| Lucide React    | Icons                      |

---

## ✨ Key Features

### 1. 👫 Friend Tracking Dashboard

View all your friends in a responsive 4-column grid. Each card shows the friend's photo, days since last contact, tags, and a color-coded status — **Overdue**, **Almost Due**, or **On Track** — so you always know who needs attention.

### 2. ⚡ Quick Check-In with Timeline Logging

From any friend's detail page, log a **Call**, **Text**, or **Video** interaction in one click. A toast notification confirms the action, and the entry is instantly added to your Timeline — powered by React Context API for real-time updates across pages.

### 3. 📊 Friendship Analytics

The Stats page displays a live **Recharts pie chart** showing the breakdown of your interactions by type (Call, Text, Video). The chart updates in real time as you log new check-ins, giving you a clear picture of how you're staying connected.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/
│   ├── friendsDetails/
│   ├── Timeline/
│   ├── stats/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── NotFound.jsx
├── context/
│   └── TimelineContext.jsx
└── main.jsx
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/nilanjanajui/PH-Assignment-07-KeenKeeper.git

# Navigate to the project
cd PH-Assignment-07-KeenKeeper

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 🌐 Live Demo

[View Live] [https://keenkeeper22.netlify.app/](https://keenkeeper22.netlify.app/)

