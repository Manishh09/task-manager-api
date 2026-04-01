// This utility function is used to wrap asynchronous route handlers in Express.js applications.
// It allows you to write your route handlers using async/await syntax without having to manually catch errors and pass them to the next middleware.
export const asyncHandler =
  (fn: any) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);