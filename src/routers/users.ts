import { createUser, getUser } from "../controllers/users";

const express = require('express');

const userRouter = express.Router();

userRouter.get('/', getUser);

userRouter.post('/', express.json(), createUser);

export default userRouter;