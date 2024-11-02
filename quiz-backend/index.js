import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes/index.js";
import connect from "./database/db.js";
import https from "https";

const app = express();

// Initialize dotenv
config();

// Middleware
app.use(morgan("tiny"));
app.use(cors({ origin: "*" }));
app.use(express.json());

// Server port
const port = process.env.PORT || 8080;

// Self-ping every 14 minutes (840,000 milliseconds)
const SELF_PING_INTERVAL = 14 * 60 * 1000;
function selfPing() {
    https.get("https://quiz-web-app-ukz9.onrender.com", (res) => {
        console.log("Self-ping successful");
    }).on("error", (err) => {
        console.log("Error in self-ping:", err.message);
    });
}

// Connect to MongoDB and start the server
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
        // Start self-pinging after server starts
        setInterval(selfPing, SELF_PING_INTERVAL);
    });
}).catch((error) => {
    console.log("Invalid database connection:", error);
});

// Routes
app.use("/api", router);
app.get("/", (req, res) => {
    res.json("Welcome to the Quiz API");
});
