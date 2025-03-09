# 🏡 Propertex - Real Estate Investment Platform

Propertex is a real estate investment platform that allows users to invest in pre-listed properties. It provides real-time stock tracking for land investments in India, offering a seamless experience for investors.

## 🚀 Features
- 📊 **Investment Dashboard** – Track investments, portfolio, and real-time market data
- 🏠 **Pre-Listed Properties** – Users can invest in curated real estate assets
- 📈 **Live Stock Data** – Fetches real-time land prices using market APIs
- 🔐 **Secure Transactions** – (Planned) Firebase authentication & Google APIs for safe transactions
- 💬 **Real-Time Updates & Chat** – (Future) Socket.io integration for seamless communication

## 🛠 Technologies Used
- **Frontend:** React.js, Vite, TypeScript, Tailwind CSS, ShadCN-UI
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Live Data:** Stock Market API (Alpha Vantage, Yahoo Finance, IEX Cloud)
- **Security:** Helmet.js, CORS, Morgan, Cookie-parser
- **Authentication & Payments:** (Future) Firebase Authentication, Google APIs
- **Real-Time:** (Future) Socket.io for chat and updates

## 📂 Folder Structure
```
📂 propertex-backend/
┣ 📂 config/          # Database configuration
┃┣ 📜 db.js
┣ 📂 controllers/     # API logic and business rules
┃┣ 📜 investmentController.js
┣ 📂 models/          # Mongoose Schemas
┃┣ 📜 User.js
┃┣ 📜 Investment.js
┃┣ 📜 Property.js
┃┣ 📜 Transaction.js
┣ 📂 routes/          # API Endpoints
┃┣ 📜 investmentRoutes.js
┃┣ 📜 propertyRoutes.js
┃┣ 📜 transactionRoutes.js
┣ 📂 utils/           # Helper functions
┃┣ 📜 generateToken.js
┣ 📜 server.js        # Main entry point
┣ 📜 .env             # Environment variables
┣ 📜 package.json     # Dependencies & scripts
```

## ⚙️ Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/OwnTogether/Propertex.git
   cd propertex-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory and add:
4. Start the backend server:
   ```sh
   npm run dev
   ```

## 🚧 Challenges Faced
- Initial difficulties in setting up MongoDB connections
- Handling real-time stock data updates
- Structuring the backend efficiently

## 📌 Future Enhancements
- 🔑 Implement Firebase authentication
- 💳 Secure transaction processing
- 💬 Add real-time chat & notifications
- 📊 Enhance data visualization with advanced charts

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ for the Hackathon 🚀