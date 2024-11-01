# Quiz Application Backend

This is the backend service for the Quiz Application, built using **Node.js**, **Express**, and **MongoDB**. It provides APIs for managing quiz questions, calculating scores, and handling user responses.

---

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
  - [Get All Questions](#get-all-questions)
  - [Submit Answers and Calculate Score](#submit-answers-and-calculate-score)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Requirements

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud-based)

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/saurabh-shete/quiz-web-app
    cd quiz-backend
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
MONGODB_URI=<your-mongodb-uri>
```

- `MONGODB_URI`: The connection URI for your MongoDB instance.
- `PORT`: Port number for the backend server (default is `5000` if not specified).

---

## Database Setup

The backend will automatically create and seed quiz questions in the MongoDB database if they are not already present. This includes questions with single and multiple correct answers.

1. command to seed data
    ```bash
    node seeder.js
    ```
---

## Available Scripts

- **Start the server**:
    ```bash
    npm run start
    ```
- **Run in development mode** (with [Nodemon](https://nodemon.io/)):
    ```bash
    npm run dev
    ```

---

## API Endpoints

### Get All Questions

**Endpoint**: `GET /api/questions`

Fetches a list of quiz questions.

- **Response**:
    ```json
    {
      "questions": [
        {
          "question": "What is the primary purpose of React.js?",
          "options": ["To build user interfaces", "To manage databases", ...],
          "multipleCorrect": false,
          "image": "<optional-image-url>"
        },
        ...
      ]
    }
    ```

### Submit Answers and Calculate Score

**Endpoint**: `POST /api/score`

Calculates the user's score based on their answers.

- **Request Body**:
    ```json
    {
      "userAnswers": [[0], [1], [3], ...]
    }
    ```

- **Response**:
    ```json
    {
      "totalPoints": 90,
      "attempts": 8,
      "earnedPoints": 10,
      "achieved": "Failed"
    }
    ```

---

## Folder Structure

```plaintext
backend
├── models
│   └── question.js         # Question model
├── controllers
│   └── quizController.js   # Controller for handling quiz logic
├── routes
│   └── quizRoutes.js       # API routes for quiz endpoints
├── .env                    # Environment variables
├── server.js               # Entry point for the backend server
└── README.md               # Documentation file
```

---

## License

This project is licensed under the MIT License.

