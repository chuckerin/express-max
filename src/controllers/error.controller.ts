import { ErrorRequestHandler } from 'express';

export const getErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message, stack: err.stack });
};
