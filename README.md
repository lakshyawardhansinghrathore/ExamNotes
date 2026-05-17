# 🧠 NoteForge AI

> **Create Smart AI Notes in Seconds.**
> Generate exam-focused notes, project documents, flow diagrams, and revision-ready content using AI—faster, cleaner, and more efficient than ever before.

🌐 **Live Client:** [https://noteforge-aiclient.onrender.com](https://noteforge-aiclient.onrender.com)  
⚙️ **Live API:** [https://noteforge-aiserver.onrender.com](https://noteforge-aiserver.onrender.com)

---

## ✨ Features

* **🤖 AI Note Generation:** Instantly convert prompts and PDFs into structured, exam-ready study materials.
* **💳 Credit-Based Billing:** Integrated Stripe checkout system where users can purchase credits (Starter, Popular, Pro Learner).
* **🔄 Secure Webhooks:** Backend fully synced with Stripe webhooks to instantly update user credit balances upon successful payment.
* **🔐 User Authentication:** Secure login and registration system protecting user data and purchase history.
* **📜 History Tracking:** Users can view previously generated notes and access them anytime.
* **🎨 Modern UI/UX:** Responsive, highly animated interface built with Tailwind CSS and Framer Motion.

---

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework:** React.js (via Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **State Management:** Redux Toolkit
* **Routing:** React Router v6
* **Icons:** React Icons
* **HTTP Client:** Axios

### Backend (Server)
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **Payments:** Stripe API
* **Authentication:** JSON Web Tokens (JWT) & Cookie Parser

---

## 🚀 Running Locally

Follow these steps to get a local copy up and running on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/lakshyawardhansinghrathore/ExamNotes


```

### 2. Set up Environment Variables

You will need to create two `.env` files—one in the `Client` folder and one in the `Server` folder.

**Client (`Client/.env`):**

```env
VITE_BACKEND_URL=http://localhost:8000

```

**Server (`Server/.env`):**

```env
PORT=8000
CLIENT_URL=http://localhost:5173
MONGO_URI
JWT_SECRET
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET

```

### 3. Install Dependencies

Open two terminal windows/tabs to run the client and server simultaneously.

**In Terminal 1 (Server):**

```bash
cd Server
npm install
npm run dev

```

**In Terminal 2 (Client):**

```bash
cd Client
npm install
npm run dev

```

### 4. Test Webhooks Locally (Stripe CLI)

To test the payment system locally, you must forward Stripe webhooks to your local server:

```bash
stripe listen --forward-to localhost:8000/api/credits/webhook

```

*(Copy the webhook secret provided in the terminal and add it to your Server's `.env` file as `STRIPE_WEBHOOK_SECRET`, then restart your server).*

---

## 📂 Folder Structure Overview

```text
📦 NoteForge-AI
 ┣ 📂 Client                  # React Frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 pages             # Home, Auth, Pricing, PaymentSuccess, etc.
 ┃ ┃ ┣ 📂 components        # Reusable UI components
 ┃ ┃ ┣ 📂 services          # Axios API calls
 ┃ ┃ ┗ 📜 App.jsx           # Main Router
 ┃ ┗ 📜 .env                
 ┗ 📂 Server                  # Express Backend
   ┣ 📂 controllers         # Logic for auth, notes, credits, pdfs
   ┣ 📂 models              # Mongoose database schemas
   ┣ 📂 routes              # Express API routes
   ┣ 📂 middleware          # Auth protection
   ┣ 📜 index.js            # Server entry point & Webhook configuration
   ┗ 📜 .env                

```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 



```

```
