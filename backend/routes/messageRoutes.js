import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.use(protect);

router.post("/send/:id", sendMessage);
router.post("/:id", getMessages);


export default router;
