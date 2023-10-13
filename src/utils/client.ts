'use strict';
import { Sequelize } from 'sequelize';
require('dotenv').config();

const DB_NAME = process.env.DB_NAME as string;
const DB_USERNAME = process.env.DB_USERNAME as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});