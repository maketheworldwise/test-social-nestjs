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
  token: {
    secret: process.env.JWT_SECRET,
    expire: {
      default: 60000, // 1 minutes
      access: 7200000, // 2 hours
      refresh: 1209600000, // 14 days
    },
  },
  social: {
    naver: {
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URL,
    },
  },
};
