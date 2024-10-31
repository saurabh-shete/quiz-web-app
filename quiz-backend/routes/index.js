import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

// Routes for questions
router.route("/questions")
    .get(controller.getQuestions)
    .post(controller.addQuestions);

// Routes for scores
router.route("/score")
    .get(controller.getScore)
    .post(controller.saveScore);

export default router;
