<div align="center">

# 🏠 RYT - Rent Your Things

<img src="https://res.cloudinary.com/sun-light/image/upload/v1748157983/localhost_3000-React_App-fpscreenshot_ntftt7_d01ad8.jpg" alt="RYT Banner" width="800"/>

### *Share What You Own, Borrow What You Need*

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)

</div>

<div align="center">
  <h3><i>"Why Buy When You Can Rent?"</i></h3>
</div>

---

## 🌟 Overview

**RYT (Rent Your Things)** is a full-stack web application that transforms how people access and share resources. Our platform enables users to:

- 🔄 Rent out their belongings to others
- 🛒 Rent items from other users
- 💰 Earn passive income from underutilized possessions
- 💸 Save money by renting instead of buying

The platform facilitates the entire rental process from listing items to payment processing and rental management.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🔌 API Endpoints](#-api-endpoints)
- [🔐 Authentication](#-authentication)
- [💳 Payment Processing](#-payment-processing)
- [👥 Contributors](#-contributors)

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🔒 User Authentication</h3>
      <ul>
        <li>Secure registration and login</li>
        <li>Profile management</li>
        <li>Password reset functionality</li>
        <li>JWT-based authentication</li>
      </ul>
    </td>
    <td width="50%">
      <h3>📦 Product Management</h3>
      <ul>
        <li>Add and edit your items</li>
        <li>Browse available products</li>
        <li>Advanced search and filtering</li>
        <li>Image uploads with preview</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🤝 Rental System</h3>
      <ul>
        <li>Request rentals</li>
        <li>Approve/reject rental requests</li>
        <li>Track rental status</li>
        <li>Rental history</li>
      </ul>
    </td>
    <td width="50%">
      <h3>💰 Payment Processing</h3>
      <ul>
        <li>Secure payment handling</li>
        <li>Stripe integration</li>
        <li>Payment history</li>
        <li>Refund management</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📊 User Dashboard</h3>
      <ul>
        <li>Track rentals as renter</li>
        <li>Manage rentals as owner</li>
        <li>Analytics and insights</li>
        <li>Notification center</li>
      </ul>
    </td>
    <td width="50%">
      <h3>📱 Responsive Design</h3>
      <ul>
        <li>Mobile-friendly interface</li>
        <li>Tailwind CSS styling</li>
        <li>Consistent UX across devices</li>
        <li>Optimized performance</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">
  <h3>🖥️ Frontend</h3>
</div>

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| React | v19.1.0 | UI Library |
| React Router | v7.6.0 | Routing |
| Tailwind CSS | v3.3.0 | Styling |
| Axios | v1.3.4 | API Requests |
| JWT | v9.0.0 | Authentication |
| Stripe JS | v1.52.0 | Payments |

</div>

<div align="center">
  <h3>⚙️ Backend</h3>
</div>

<div align="center">

| Technology | Purpose |
|------------|---------|
| Node.js & Express | Server Framework |
| MongoDB & Mongoose | Database & ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Multer | File Uploads |
| Stripe API | Payment Processing |

</div>

---

## 📂 Project Structure

```
RYT/
├── backend/                # Backend Node.js application
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   │   ├── authController.js
│   │   ├── paymentController.js
│   │   ├── productController.js
│   │   ├── rentalController.js
│   │   └── uploadController.js
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   │   ├── Product.js
│   │   ├── Rental.js
│   │   └── User.js
│   ├── routes/            # API routes
│   ├── uploads/           # File upload directory
│   ├── utils/             # Utility functions
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Entry point
│
├── frontend/              # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── assets/        # Images and other assets
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context
│   │   ├── pages/         # Application pages
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main component
│   │   └── index.js       # Entry point
│   ├── .env               # Environment variables
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind CSS configuration
```

---

## ⚙️ Installation

### 📋 Prerequisites

<div align="center">

| Requirement | Version |
|-------------|---------|
| Node.js | v14 or higher |
| MongoDB | Latest |
| npm/yarn | Latest |

</div>

### 🔧 Backend Setup

<div class="steps">
  <div class="step">
    <h4>1. Navigate to the backend directory:</h4>
    
```bash
cd backend
```
  </div>
  
  <div class="step">
    <h4>2. Install dependencies:</h4>
    
```bash
npm install
```
  </div>
  
  <div class="step">
    <h4>3. Create a `.env` file with the following variables:</h4>
    
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
STRIPE_SECRET_KEY=your_stripe_secret_key
```
  </div>
  
  <div class="step">
    <h4>4. Start the server:</h4>
    
```bash
npm run dev
```
  </div>
</div>

### 🔧 Frontend Setup

<div class="steps">
  <div class="step">
    <h4>1. Navigate to the frontend directory:</h4>
    
```bash
cd frontend
```
  </div>
  
  <div class="step">
    <h4>2. Install dependencies:</h4>
    
```bash
npm install
```
  </div>
  
  <div class="step">
    <h4>3. Create a `.env` file with the following variables:</h4>
    
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```
  </div>
  
  <div class="step">
    <h4>4. Start the development server:</h4>
    
```bash
npm start
```
  </div>
</div>

---

## 🚀 Usage

<div class="usage-guide">
  <div class="usage-step">
    <h3>🌐 Step 1: Access the Application</h3>
    <p>Open your browser and navigate to <code>http://localhost:3000</code></p>
  </div>
  
  <div class="usage-step">
    <h3>📝 Step 2: Create Your Account</h3>
    <p>Register a new account or login with existing credentials</p>
  </div>
  
  <div class="usage-step">
    <h3>🔍 Step 3: Explore Available Items</h3>
    <p>Browse available products or list your own items for rent</p>
  </div>
  
  <div class="usage-step">
    <h3>📦 Step 4: Request Rentals</h3>
    <p>Find items you need and request to rent them from other users</p>
  </div>
  
  <div class="usage-step">
    <h3>📊 Step 5: Manage Your Rentals</h3>
    <p>Use the dashboard to track and manage your rental activities</p>
  </div>
  
  <div class="usage-step">
    <h3>💳 Step 6: Process Payments</h3>
    <p>Complete transactions using the integrated Stripe payment system</p>
  </div>
</div>

---

## 🔌 API Endpoints

<details>
<summary><h3>🔐 Authentication</h3></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login a user |
| GET | `/api/auth/me` | Get current user profile |
| PUT | `/api/auth/updateprofile` | Update user profile |
| POST | `/api/auth/forgotpassword` | Request password reset |
| PUT | `/api/auth/resetpassword/:resettoken` | Reset password with token |

</details>

<details>
<summary><h3>📦 Products</h3></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

</details>

<details>
<summary><h3>🤝 Rentals</h3></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/rentals` | Get all rentals for current user |
| GET | `/api/rentals/:id` | Get a single rental |
| POST | `/api/rentals` | Create a new rental request |
| PUT | `/api/rentals/:id` | Update rental status |

</details>

<details>
<summary><h3>💳 Payments</h3></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments/create-payment-intent` | Create a payment intent |
| POST | `/api/payments/confirm-payment` | Confirm a payment |

</details>

<details>
<summary><h3>📁 Uploads</h3></summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/uploads` | Upload product images |

</details>

---

## 🔐 Authentication

<div align="center">
  <img src="https://img.shields.io/badge/Security-Enhanced-brightgreen" alt="Security Enhanced"/>
</div>

The application uses **JWT (JSON Web Tokens)** for authentication. When a user logs in, a token is generated and stored in localStorage. This token is included in the Authorization header for all subsequent API requests.

### 🔑 Password Reset Flow

<div align="center">
  <table>
    <tr>
      <td align="center">📧</td>
      <td>User requests password reset with email</td>
    </tr>
    <tr>
      <td align="center">🔒</td>
      <td>System generates and stores a hashed token (SHA-256)</td>
    </tr>
    <tr>
      <td align="center">📨</td>
      <td>Reset link is sent to user's email</td>
    </tr>
    <tr>
      <td align="center">🔏</td>
      <td>User submits new password with token</td>
    </tr>
    <tr>
      <td align="center">✅</td>
      <td>System verifies token and updates password</td>
    </tr>
  </table>
</div>

---

## 💳 Payment Processing

<div align="center">
  <img src="https://img.shields.io/badge/Payments-Secure-blue" alt="Secure Payments"/>
</div>
1. 🛒 When a user initiates a rental, a payment intent is created   <br/>
2. 💳 User enters payment details securely through Stripe Elements  <br/> 
3. ✅ Payment is processed and confirmed                            <br/>
4. 📝 Rental status is updated based on payment confirmation        <br/>



## 👥 Contributors

### 🌟 Development Team

- **Suraj Prakash** - *Lead Developer* 👨‍💻 <br/>
   Roll No. 22303
  
  - 🔗 LinkedIn: [Solis-Singh](https://www.linkedin.com/in/solis-singh/)
  - 🐦 Twitter: [Solis-Singh](https://twitter.com/Solis_Singh)

- **Vijeta** - *Founder & CEO* 👑 <br/>
   Roll No. 22307

  - 🔗 LinkedIn: [Vijeta](https://www.linkedin.com/in/vijetaagupta/)
  - 🐦 Twitter: [...](links)
  - 💻 GitHub: [Vijeta](https://github.com/vijetas11)

- **Suraj Gupta** - *Lead Designer* 🎨 <br/>
   Roll No. 22302
  
  - 🔗 LinkedIn: [ProfGupta](https://www.linkedin.com/in/profsguptaji/)
  - 🐦 Twitter: [...](links)
  - 💻 GitHub: [ProfGupta](https://github.com/ProfSGuptaJi)

- **Alpna** - *Manager* 📊 <br/>
   Roll No. 22301
  
  - 🔗 LinkedIn: [Alpna Kumari](https://github.com/AlpnaKumari123)
  - 📧 Email: alpna1510kumari@gmail.com

- **Amit** - *Binding Baba* 📚 <br/>
   Roll No. 22305
 
  - 🔗 LinkedIn: [Amit-Baba](links)
  - 📧 Email: amitkumarmunna000@gmail.com

---

<p align="center">Made with ❤️ by the RYT Team</p>
