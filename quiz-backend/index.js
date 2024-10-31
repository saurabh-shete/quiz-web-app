import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes/route.js";
import connect from "./database/db.js";

const app = express();

// Initialize dotenv
config(); 

// Middleware
app.use(morgan("tiny"));
app.use(cors({ origin: "*" }));
app.use(express.json());

// Server port
const port = process.env.PORT || 8080;

// Connect to MongoDB and start the server
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.log("Invalid database connection:", error);
});

// Routes
app.use("/api", router);
app.get("/", (req, res) => {
    res.json("Welcome to the Quiz API");
});
