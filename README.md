Real Estate Investment Platform

A full-stack web application that allows users to invest in pre-listed properties across India. The platform provides real-time investment tracking, portfolio insights, and stock market data integration to help users make informed investment decisions.

🚀 Features

Investment Dashboard – Displays portfolio overview, holdings, and recent transactions.

Real-Time Stock Data – Fetches live stock prices for investment tracking.

Secure Transactions – Planned integration with Firebase authentication.

Scalable Backend – Built with Node.js, Express.js, and MongoDB.

Future Enhancements – Real-time chat and updates using Socket.io.

🛠 Technologies Used

Frontend:

React.js (Vite, TypeScript)

Tailwind CSS & ShadCN-UI

Backend:

Node.js, Express.js

MongoDB, Mongoose

Stock Market API (e.g., Alpha Vantage, Yahoo Finance)

Firebase (for authentication & transactions) (Planned)

Socket.io (Future Feature)



🔧 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/OwnTogether/Propertex.git
cd investment-platform

2️⃣ Install Dependencies

Frontend

cd frontend
npm install

Backend

cd backend
npm install

3️⃣ Setup Environment Variables

Create a .env file in the backend directory and add:

MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/
CLIENT_URL=http://localhost:5173

4️⃣ Run the Development Server

Backend

cd backend
npm run dev

Frontend

cd frontend
npm run dev

🛤 API Endpoints

Endpoint

Method

Description

/api/investments

GET

Get all investments

/api/investments/:id

GET

Get investment by ID

/api/investments

POST

Create a new investment

/api/stocks

GET

Fetch real-time stock data

🏆 Challenges We Faced

Live Stock Data Integration – Selecting the best API for Indian land investments.

Database Structuring – Ensuring efficient storage of investment transactions.

Scalability Considerations – Planning real-time updates and authentication.

📌 Future Improvements

🔹 Implement Firebase authentication & secure transactions.

🔹 Add real-time investment notifications via Socket.io.

🔹 Expand stock tracking to multiple asset classes.

🤝 Contribution

Feel free to contribute to this project! Fork the repo, make changes, and submit a PR. 🚀

