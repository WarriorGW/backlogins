import { Router } from "express";
import {
	getUsers,
	getOneUser,
	createUser,
	updateUser,
	deleteUser,
	changePass,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getUsers);

router.post("/user/", getOneUser);

router.post("/changePass", changePass);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
