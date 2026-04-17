# KeenKeeper 🌿

> Keep your friendships alive — your personal shelf of meaningful connections.

KeenKeeper is a friendship management web app that helps you stay in touch with the people who matter most. Track when you last connected, log interactions, and get a visual overview of your relationship health — all in one place.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | UI library |
| React Router v6 | Client-side navigation |
| Tailwind CSS v4 | Styling and responsiveness |
| Context API | Global state management |
| Recharts | Pie chart visualization |
| Vite | Build tool and dev server |
| Lucide React | Icons |

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

[View Live →](https://keenkeeper22.netlify.app/)

---

## 📄 License

This project was built as part of a web development assignment.
