import { Request, Response } from "express";
import { addUser, getUserByEmail } from "../services/users";
import { isUserDataValid } from "../utils/functions";
import { TUser } from "../types/User";

export const getUser = async (req: Request, res: Response) => {
  const { userEmail } = req.query;

  try {
    const user = await getUserByEmail(userEmail as string);

    if (!user) {
      throw new Error();
    }

    res.statusCode = 200;
    res.send(user.dataValues);
  } catch (err) {
    res.statusCode = 404;
    res.send('There is no user with such email!');
  }
}

export const createUser = async(req: Request, res: Response) => {
  const userData: Omit<TUser, 'id'> = req.body;

  try {
    if (!isUserDataValid(userData)) {
      throw new Error();
    } 

    const newUser = await addUser(userData);

    res.statusCode = 200;
    res.send(newUser);
  } catch (err) {
    res.statusCode = 422;
    res.send('Data is invalid! No user has been created!');
  }
}