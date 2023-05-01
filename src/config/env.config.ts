import dotenv from 'dotenv';

dotenv.config();

export const env = {
  db: {
    connectionLimit: 3,
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USERNAME,
    pass: process.env.MYSQL_PASSWORD,
    name: process.env.MYSQL_DATABASE,
  },
};
