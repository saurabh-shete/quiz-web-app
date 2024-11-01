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

export async function saveScore(req, res) {
    try {
        const { userAnswers } = req.body;
        if (!userAnswers) throw new Error("Invalid data provided");

        // Fetch the correct answers from the database
        const questions = await Questions.findOne();
        if (!questions) throw new Error("No questions found");

        const correctAnswers = questions.answers;

        // Calculate total points and initialize attempts and earned points
        const totalPoints = correctAnswers.length * 10;
        const attempts = userAnswers.filter(answer => answer !== undefined).length;

        // Calculate earned points by comparing user answers with correct answers
        const earnedPoints = userAnswers.reduce((sum, answer, index) => {
            const correctAnswer = correctAnswers[index];
            
            // Ensure both answer and correctAnswer are arrays
            const normalizedUserAnswer = Array.isArray(answer) ? answer : [answer];
            const normalizedCorrectAnswer = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];

            // Sort and compare as strings to ensure they match regardless of order
            const isCorrect = normalizedUserAnswer.sort().join(',') === normalizedCorrectAnswer.sort().join(',');

            // Add points if the answer is correct
            return isCorrect ? sum + 10 : sum;
        }, 0);

        // Determine pass/fail status
        const achieved = earnedPoints >= totalPoints * 0.5 ? "Passed" : "Failed";

        // Send the calculated score back to the frontend
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
