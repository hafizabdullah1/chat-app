import express from "express";
import {
    getAllUsers,
    getUserById,
    updateProfile,
    searchUsers,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected
router.use(protect);

// Routes
router.get("/", getAllUsers);
router.get("/search", searchUsers);
router.get("/:id", getUserById);
router.put("/profile", updateProfile);

export default router;
