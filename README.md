# Amazon Product Analysis & Competitive Intelligence Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0-green.svg)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org/)

## 🚀 Overview

An AI-powered solution that provides comprehensive Amazon product analysis by scraping product data and customer reviews, then using advanced machine learning to generate detailed competitive insights. The system automatically identifies competitor products, analyzes strengths/weaknesses, and delivers actionable recommendations for product improvement and market positioning.

## ✨ Key Features

- **🔍 Automated Product Analysis**: Scrapes Amazon product data and reviews
- **🤖 AI-Powered Insights**: Uses LangChain + Google Gemini AI for intelligent analysis
- **📊 Competitive Intelligence**: Identifies and analyzes competitor products
- **📈 Visual Analytics**: Interactive charts and competitive strength analysis
- **📄 Automated Reports**: Generates detailed PDF reports automatically
- **👤 User Management**: Complete authentication and user preference system
- **🌙 Dark Mode**: Modern UI with light/dark theme support
- **📱 Responsive Design**: Mobile-friendly interface

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │     Server      │    │  AI Analysis    │
│   (React.js)    │◄──►│   (Node.js)     │◄──►│   (Python)      │
│                 │    │                 │    │                 │
│ • User Interface│    │ • API Endpoints │    │ • LangChain     │
│ • State Mgmt    │    │ • Authentication│    │ • Google Gemini │
│ • PDF Export    │    │ • Database      │    │ • FAISS Vectors │
│ • Charts        │    │ • Data Storage  │    │ • NLP Analysis  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │    MongoDB      │
                    │   Database      │
                    │                 │
                    │ • Product Data  │
                    │ • Reviews       │
                    │ • User Data     │
                    │ • Analysis      │
                    └─────────────────┘
```

## 🛠️ Technology Stack

### Frontend

- **React.js** - UI library with hooks and context
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Data visualization
- **React Router** - Client-side routing
- **jsPDF** - PDF generation
- **Axios** - HTTP client

### Backend

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### AI/ML Components

- **Python** - Core analysis engine
- **LangChain** - LLM framework
- **Google Gemini AI** - Language model
- **FAISS** - Vector similarity search
- **HuggingFace Embeddings** - Text embeddings
- **LangGraph** - Workflow orchestration

## 📁 Project Structure

```
4SemProject/
├── Frontend/                   # React.js application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── contexts/          # React contexts for state management
│   │   ├── hooks/             # Custom React hooks
│   │   ├── pages/             # Main application pages
│   │   ├── services/          # API communication services
│   │   └── utils/             # Utility functions
│   ├── public/
│   └── package.json
├── server/                     # Node.js backend
│   ├── config/                # Database configuration
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Authentication middleware
│   ├── models/                # Database schemas
│   ├── routes/                # API route definitions
│   └── server.js              # Main server file
├── AI_analysis/               # Python AI analysis engine
│   ├── src/
│   │   ├── utils/             # Utility functions
│   │   └── RAG.py             # Main analysis script
│   ├── data/                  # Vector embeddings storage
│   └── requirements.txt
├── adbms-project/             # Data scraping component
│   └── src/
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- Python (v3.8 or higher)
- MongoDB (v5.0 or higher)
- Google API Key (for Gemini AI)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/amazon-product-analysis.git
   cd amazon-product-analysis
   ```

2. **Setup Backend**

   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**

   ```bash
   cd ../Frontend
   npm install
   ```

4. **Setup AI Analysis**

   ```bash
   cd ../AI_analysis
   pip install -r requirements.txt
   ```

5. **Environment Configuration**

   Create `.env` files in respective directories:

   **Server (.env)**:

   ```env
   MONGODB_URI=mongodb://localhost:27017/amazon_analysis
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

   **AI Analysis (.env)**:

   ```env
   GOOGLE_API_KEY=your_google_gemini_api_key
   ```

### Running the Application

1. **Start MongoDB**

   ```bash
   mongod
   ```

2. **Start Backend Server**

   ```bash
   cd server
   npm start
   ```

3. **Start Frontend**

   ```bash
   cd Frontend
   npm start
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 🔧 Configuration

### API Keys Setup

1. **Google Gemini AI**:

   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Add to `AI_analysis/src/.env`

2. **MongoDB**:
   - Install locally or use MongoDB Atlas
   - Update connection string in `server/.env`

### User Preferences

The application supports various user preferences:

- **Auto PDF Export**: Automatically generate reports
- **Dark Mode**: Toggle between light/dark themes
- **Data Retention**: Control how long analysis data is stored
- **Competitor Display**: Set number of competitors to show

## 📊 Sample Analysis Output

The system generates comprehensive reports including:

- **Product Summary**: Key features and main problems
- **Strengths & Weaknesses**: Detailed pros and cons analysis
- **Competitive Comparison**: Side-by-side competitor analysis
- **Strategic Recommendations**: Actionable improvement suggestions
- **Visual Analytics**: Charts showing competitive positioning

## 🔌 API Endpoints

### Authentication

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User authentication
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user preferences

### Analysis

- `GET /api/analysis` - Get user's analyses
- `POST /api/analysis` - Request new analysis
- `GET /api/analysis/:id` - Get specific analysis
- `GET /api/analysis/check/:asin/:keyword` - Check if analysis exists

## 🤖 AI Analysis Workflow

1. **Data Collection**: Scrapes Amazon product and review data
2. **Vector Embeddings**: Converts text data to numerical representations
3. **Product Analysis**: Analyzes main product features and reviews
4. **Competitor Analysis**: Identifies and analyzes competitor products
5. **Strategic Recommendations**: Generates actionable insights
6. **Report Generation**: Creates structured JSON and PDF reports

## 🧪 Testing

### Frontend Testing

```bash
cd Frontend
npm test
```

### Backend Testing

```bash
cd server
npm test
```

## 📦 Deployment

### Frontend (Vercel/Netlify)

```bash
cd Frontend
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)

```bash
cd server
# Set environment variables
# Deploy to your preferred platform
```

### Database (MongoDB Atlas)

- Create cluster on MongoDB Atlas
- Update connection string in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [LangChain](https://langchain.com/) for the ML framework
- [Google Gemini AI](https://ai.google.dev/) for language processing
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [MongoDB](https://mongodb.com/) for data storage

---

**Built with ❤️ for Amazon sellers and product managers**
