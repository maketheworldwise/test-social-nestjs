export {};

declare global {
  namespace Express {
    interface Request {
      tokenUser: any;
    }
  }
}
