declare global {
  namespace Express {
    interface Request {
      id: string
    }
  }
  namespace types {}
}
export {}