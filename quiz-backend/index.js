const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mock API routes
app.post("/api/quiz/start", (req, res) => {
  res.json({ message: "Quiz started", quizId: 1 });
});

app.post("/api/quiz/submit", (req, res) => {
  res.json({ message: "Response submitted", questionId: req.body.questionId });
});

app.post("/api/quiz/finish", (req, res) => {
  res.json({ message: "Quiz finished", score: 8 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
