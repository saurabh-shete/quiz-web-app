# Quiz Application Frontend

This is the frontend of the Quiz Application, built using **React**. It provides an interactive user interface for taking quizzes, submitting answers, and displaying the user's score.

Hosted Application: [Quiz Web App](https://quiz-web-app-la3m.onrender.com)

---

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [License](#license)

---

## Requirements

- **Node.js** (v14 or higher)

---

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables (see below).

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
REACT_APP_BACKEND_URL=<backend-server-url>
```

- `REACT_APP_BACKEND_URL`: The URL of the backend server to connect to (e.g., `http://localhost:5000`).

---

## Available Scripts

- **Start the development server**:
    ```bash
    npm start
    ```
- **Build for production**:
    ```bash
    npm run build
    ```
- **Run tests**:
    ```bash
    npm test
    ```

---

## Folder Structure

```plaintext
frontend
├── public
│   └── index.html           # HTML template
├── src
│   ├── components           # Reusable UI components
│   ├── hooks                # Custom hooks for state management
│   ├── pages                # Application pages (e.g., Quiz, Result)
│   ├── redux                # State management using Redux
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point for React
│   └── assets               # Images and other static assets
├── .env                     # Environment variables
└── README.md                # Documentation file
```

---

## Features

- **Responsive Design**: The quiz app works seamlessly on both mobile and desktop devices.
- **Single and Multiple Correct Answers**: Questions can have either single or multiple correct answers, with appropriate user feedback.
- **Progress Tracking**: Users can see their progress throughout the quiz.
- **Interactive Scorecard**: The result page displays the user's score, correct/incorrect answers, and a visual representation of the result.

---

## License

This project is licensed under the MIT License.

