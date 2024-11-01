import mongoose from "mongoose";
import Question from "./models/question.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const questionsData = [
    {
        question: "What is the primary purpose of React.js?",
        options: [
            "To build user interfaces",
            "To manage databases",
            "To handle server-side logic",
            "To enhance network security"
        ],
    },
    {
        question: "Which company developed React?",
        options: [
            "Google",
            "Facebook",
            "Twitter",
            "Microsoft"
        ],
    },
    {
        question: "What is JSX in React?",
        options: [
            "A syntax extension for JavaScript",
            "A styling library",
            "A database management system",
            "A state management tool"
        ],
    },
    {
        question: "Which hook is used to manage state in functional components?",
        options: [
            "useEffect",
            "useState",
            "useReducer",
            "useMemo"
        ],
    },
    {
        question: "What command is used to create a new React application?",
        options: [
            "npm create react-app",
            "npx create-react-app",
            "npm start react",
            "npx start react-app"
        ],
    },
    {
        question: "Which of the following are popular JavaScript frameworks/libraries?\n(Multiple options can be selected)",
        options: [
            "React",
            "Vue",
            "Angular",
            "Django"
        ],
        multipleCorrect: true
    },
    {
        question: "Identify this JavaScript logo.",
        options: [
            "React",
            "JavaScript",
            "Node.js",
            "TypeScript"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" // Replace with actual path or URL
    },
];

const answersData = [0, 1, 0, 0, 1, [0, 1, 2], 1, 1, 0]; // Answer indices for each question, with array for multiple correct answers

// Connect to MongoDB and insert data
async function seedQuestions() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");

        // Clear existing questions to prevent duplicates
        await Question.deleteMany();

        // Insert new questions
        await Question.create({ questions: questionsData, answers: answersData });

        console.log("Questions seeded successfully!");
    } catch (error) {
        console.error("Error seeding questions:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedQuestions();
