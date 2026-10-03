import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: Error & { status?: number; statusCode?: number },
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const status = err.status ?? err.statusCode ?? 500;
  const message = err.message ?? 'Internal Server Error';
  console.error(`[Error ${status}]`, message);
  res.status(status).json({ success: false, message });
}
