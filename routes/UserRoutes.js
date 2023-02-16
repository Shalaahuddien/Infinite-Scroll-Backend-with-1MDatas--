import Express from "express";
import {getUsers} from "../controllers/UserController.js";

const router = Express.Router();

router.get('/users', getUsers);

export default router;

