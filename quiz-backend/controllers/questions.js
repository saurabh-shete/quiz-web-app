import Questions from "../models/question.js";
import Results from "../models/result.js";

// GET all questions
export async function getQuestions(req, res) {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving questions" });
    }
}

// POST new questions
export async function addQuestions(req, res) {
    try {
        const { questions, answers } = req.body;
        await Questions.insertMany([{ questions, answers }]);
        res.json({ msg: "Questions saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving questions" });
    }
}

// GET score results
export async function getScore(req, res) {
    try {
        const results = await Results.find();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving scores" });
    }
}

// POST new score
export async function saveScore(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) throw new Error("Invalid data provided");

        await Results.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Score saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
