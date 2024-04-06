import { Router } from "express";
import { sendMail } from "../controllers/sendMail.controller.js";

const router = Router();

router.post("/sendMail", sendMail);

export default router;
