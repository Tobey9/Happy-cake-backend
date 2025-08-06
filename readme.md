# HappyCake Backend 🎂

This is the backend for the **HappyCake** web application, built with Node.js and Express, and connected to a cloud-based MongoDB database.

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime for server-side development
- **Express** – Web framework for building RESTful APIs
- **SQLITE** – SQL database for storing data
- **Sequelize** – SQL ORM
- **Dotenv** – Loads environment variables from `.env`
- **Cloudflare Tunnel** – Used for exposing the backend server securely without port forwarding
- **PM2** – Process manager for running the backend in production

## 📦 Setup

### 1. Clone the repository

```bash
git clone <https://github.com/Tobey9/Happy-cake-backend>
cd <https://github.com/Tobey9/Happy-cake-backend>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create a `.env` file in the root folder:

```env
PORT=3000
```

### 4. Run the server

For development:

```bash
npm run dev
```

For production (with PM2):

```bash
pm2 start src/index.js
```

### 5. (Optional) Set up Cloudflare Tunnel

If you're using Cloudflare Tunnel to expose the backend:

```bash
cloudflared tunnel run <tunnel-name>
```
