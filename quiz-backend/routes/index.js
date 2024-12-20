import { Router } from "express";
import * as controller from "../controllers/questions.js";

const router = Router();

// Routes for questions
router.route("/questions").get(controller.getQuestions).post(controller.addQuestions);

// Routes for scores
router.route("/score").post(controller.saveScore);

export default router;
