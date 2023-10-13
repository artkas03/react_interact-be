'use strict';

import User from '../models/User';
import { LoginData } from '../types/LoginData';
import { TUser } from '../types/User';
import { sequelize } from '../utils/client';

const { v4: uuid } = require('uuid');

export async function getAll() {
  return await User.findAll({
    order: [
      ['created_at', 'ASC'],
    ],
  });
}

export async function getUserByEmail(userEmail: string) {
  return await User.findOne({
    where: {
      email: userEmail,
    }
  });
}

export async function getUserByLoginData (loginData: LoginData) {
  return await User.findOne({
    where: {
      username: loginData.username,
      password: loginData.password,
    }
  });
}

export async function addUser(userData: Omit<TUser, 'id'>) {
  const id = uuid();

  const { name, email, username, password } = userData;

  return await User.create({
    id,
    name,
    email,
    username,
    password
  }, {
    returning: ['id', 'name', 'email', 'username', 'password'],
  });
}