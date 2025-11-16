# 🐶 Dogs API – React Version  
### A React + Vite project that fetches and displays dog images using the Dog CEO Public API

---

## 📌 Project Overview
This project is a React-based implementation of the “Lions, Tigers, and Bears, Oh My!” assignment from Lewis University.  
It uses the **Dog CEO Public API** to fetch dog breed images and display them in a modern, animated slideshow interface.

The application demonstrates:

- API fetching with **async/await**
- Dynamic image rendering
- React component design
- State management
- Auto-slideshow functionality
- Play/Pause controls
- Loading spinner
- Responsive UI
- Azure Static Web App deployment with CI/CD

---

## 🚀 Live Demo (Azure Static Web App)
👉 **https://icy-grass-01445351e.3.azurestaticapps.net**

---

## 🛠️ Technologies Used
- **React.js (Vite)**
- **JavaScript (ES6+)**
- **Dog CEO Public API**
- **Azure Static Web Apps**
- **GitHub Actions (CI/CD)**
- **HTML5 & CSS3**

---

## 📂 Features
### ✔️ Fetch dog breeds dynamically  
The dropdown list loads all available dog breeds from the API.

### ✔️ View images as a modern slideshow  
Selected breed images are displayed with smooth fade animation.

### ✔️ Autoplay functionality  
Automatically cycles through images every 3 seconds.

### ✔️ Play / Pause controls  
User can start or stop autoplay.

### ✔️ Previous / Next navigation  
Manual navigation through images.

### ✔️ Loading spinner  
Displayed while images are being fetched.

### ✔️ Responsive UI  
Fully optimized for mobile, tablet, and desktop.

### ✔️ Gradient background + modern styling  
Clean, visually appealing UI with animations and hover effects.

---

## 📦 Installation & Local Development

# Clone the repository
git clone https://github.com/Abhirekha2000/dogs-api-app
cd dogs-api-app

# Install dependencies
npm install

# Run development server
npm run dev 
---
### The app will run at:

http://localhost:5173

🌐 Deployment (Azure Static Web Apps)

This project is deployed using Azure Static Web Apps with an automated GitHub Actions workflow.

Deployment Steps:

Push project to GitHub

Create Azure Static Web App

Connect GitHub repository

Azure automatically creates a CI/CD YAML pipeline

Every push redeploys the app automatically 🎉

📁 Project Structure
dogs-api-app/
│── public/
│── src/
│   ├── App.jsx
│   ├── DogViewer.jsx
│   ├── App.css
│   ├── main.jsx
│── index.html
│── package.json
│── vite.config.js

👩‍💻 Developer

Abhirekha Thimmasani
Lewis University – Software Architecture & Design

📜 License

This project is for academic and educational use only.
Inspired by Brad Schiff’s Dog API tutorial.

