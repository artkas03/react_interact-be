import { loginUser } from "../controllers/login";

const express = require('express');

const loginRouter = express.Router();

loginRouter.post('/', express.json(), loginUser);

export default loginRouter;