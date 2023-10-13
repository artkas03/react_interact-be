import { Request, Response } from "express";
import { getUserByLoginData } from "../services/users";
import { LoginData } from "../types/LoginData";

export const loginUser = async(req: Request, res: Response) => {
  const loginData: LoginData = req.body;

  try {
    const user = await getUserByLoginData(loginData);

    res.statusCode = 200;
    res.send(user);
  } catch(err) {
    res.statusCode = 422;
    res.send('Data is invalid!');
  }
}