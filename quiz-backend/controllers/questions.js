import Questions from "../models/question.js";

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

// POST score calculation without storing in the database
export async function saveScore(req, res) {
    try {
        const { userAnswers } = req.body;
        if (!userAnswers) throw new Error("Invalid data provided");

        // Fetch the correct answers from the database
        const questions = await Questions.findOne();
        if (!questions) throw new Error("No questions found");

        const correctAnswers = questions.answers;

        // Calculate score
        const totalPoints = correctAnswers.length * 10;
        const attempts = userAnswers.filter(answer => answer !== undefined).length;
        const earnedPoints = userAnswers
            .map((answer, index) => answer === correctAnswers[index])
            .filter(correct => correct)
            .length * 10;
        const achieved = earnedPoints >= totalPoints * 0.5 ? "Passed" : "Failed";

        // Send score calculation back to the frontend
        res.json({
            totalPoints,
            attempts,
            earnedPoints,
            achieved
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
