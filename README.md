# Product Listing and Filtering App 📱✨

A comprehensive React project designed to showcase the **DaisyUI** plugin for **Tailwind CSS**, with advanced features such as dynamic filtering using range sliders, pagination, and optimized performance with a **debounce function**. 🌟🎛️

## Table of Contents 📋

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Contact](#contact)

---

## Features 🌐

- **Dynamic Filtering**: Easily filter products by price and year using intuitive range sliders. 📉📅
- **Pagination**: Seamless navigation through product lists with a responsive pagination system. 📖➡️
- **Debounced Filters**: Reduce unnecessary API calls with smooth debounced filtering functionality. 🕒🔄
- **Product Details**: Access detailed information for individual products on a dedicated page. 🔍📄
- **Responsive Design**: Leverages **Tailwind CSS** and **DaisyUI** for a clean and adaptable user interface. 🎨📱

---

## Tech Stack 🛠️

- **Frontend**: React, React Router, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (managed with Mongoose)
- **Additional Libraries**: Axios, Lodash, HeroIcons 💻🌍

---

## Installation ⚙️

### Prerequisites 📝

Ensure the following are installed on your system:

- **Node.js** (v16 or higher) 🟢
- **MongoDB** (local instance or cloud-hosted) 🗂️

### Steps 🚀

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/product-filtering-app.git
   cd product-filtering-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure the database:**

   - Create a MongoDB database. 🛢️
   - Update the connection string in `/config/mongoDB.js` to point to your database.

4. **Start the server:**

   ```bash
   npm start
   ```

5. **Start the React application:**

   ```bash
   cd frontend
   npm start
   ```

---

## Usage 🖥️

1. Open the app in your browser by navigating to:

   ```
   http://localhost:3000
   ```

2. Use the intuitive sidebar to filter products by price or year. 🎚️

3. Browse through the paginated product list. 📜

4. Click on any product to view its detailed information. 🛍️

---

## Project Structure 🗂️

```
project-root/
│
├── src/
│   ├── backend/
│   │   ├── config/
│   │   │   └── mongoDB.js          # MongoDB connection setup
│   │   ├── controllers/
│   │   │   ├── oneProduct.js       # Controller for fetching a single product
│   │   │   └── productFetch.js     # Controller for fetching and filtering products
│   │   ├── models/
│   │   │   └── Product.js          # Mongoose schema for product data
│   │   └── routes/
│   │       └── productsRoute.js    # Product-related API routes
│   └── frontend/
│       ├── components/             # Reusable React components
│       ├── pages/                  # Primary React pages
│       └── App.js                  # React Router setup
│
└── package.json                    # Project dependencies and scripts
```

---

## Endpoints 🔗

### Products API

#### **GET** `/api/products`

Fetch paginated and filtered product data. 📦

**Query Parameters:**

- `page`: Current page (default: 1)
- `limit`: Number of items per page (default: 10)
- `sort`: Sorting field (default: `year`)
- `order`: Sorting order (`asc` or `desc`)
- `minYear`, `maxYear`: Year range for filtering 📆
- `minPrice`, `maxPrice`: Price range for filtering 💵

#### **GET** `/api/products/:id`

Retrieve detailed information for a specific product by its ID. 🆔

---

## Contact 📬

For questions, suggestions, or collaboration, feel free to reach out:

- **Email**: [barspin4499@gmail.com](mailto\:barspin4499@gmail.com)
- **GitHub**: [FoxerBN](https://github.com/FoxerBN) 🌟

