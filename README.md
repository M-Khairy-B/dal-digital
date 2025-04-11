
# React + TypeScript + Vite

# 🐎 Horse Management App

A simple web application to manage and display horse data, with authentication and a clean UI.

---

## 🔐 Login Functionality

- A login page is provided for user authentication.
- User credentials are verified before granting access to the app.
- All internal routes are **protected** and inaccessible without login.

---

## 📄 Main Page - `/horses`

- Displays a **list of horses** with the following details:
  - 🖼️ Image
  - 🐴 Name
  - 📅 Age
  - 🧬 Breed
- Features:
  - 🔍 **Live search** by horse name
  - 📄 **Pagination** to manage horse listing per page
  - 📱 **Responsive** and clean design for all devices

---

## 📋 Horse Details Page - `/horses/:id`

- Shows **full information** about a selected horse.
- Data is loaded dynamically based on the `id` from the URL.

---

📁 Project Structure  
The project is structured to ensure scalability and maintainability:  
src/  
├── assets/         # Static files like images, icons, and other resources  
├── components/     # Reusable UI components (e.g., Card, Pagination, SearchBar)  
├── store/          # Global state management (e.g., auth store, horse store)  
├── utilities/      # Helper functions and API utilities  
├── App.css         # Global styles for the app  
├── App.tsx         # Main application component  
├── index.css       # Base CSS for the project  
├── main.tsx        # Entry point for React app  
.env                # Environment variables  
.gitignore          # Git ignore configuration  
eslint.config.js    # ESLint configuration file  
index.html          # Main HTML file for the app  
package-lock.json   # Lock file for npm dependencies  
package.json        # Project metadata and npm scripts  
README.md           # Project documentation  
tsconfig.json       # TypeScript configuration  
vite.config.ts      # Vite build tool configuration  

---

🔑 Environment Variables  
VITE_API_URL=http://localhost:3000/api        # Replace with your backend API URL  

---

## 🛠️ Project Setup

### 📦 Installation

To get started, install the required dependencies:

```bash
npm install
```

### 🧪 Run the app locally

After installation, you can start the development server with:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

