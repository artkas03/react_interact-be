'use strict';

import loginRouter from "./routers/login";
import userRouter from "./routers/users";

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/users', userRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`)
})
