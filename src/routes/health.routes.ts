import { Router } from "express";
import express from 'express';


const router = Router();

router.get('/health', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
