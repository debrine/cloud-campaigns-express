import express, { Request, Response, Router } from 'express';
import { UserAccountService } from '../../services/user-account.service';

export const UserAccountRouter = express.Router();
const userAccountService = new UserAccountService();

UserAccountRouter.get('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const userAccount = await userAccountService.authenticateUser(
      username,
      password
    );
    res.send(userAccount);
  } catch (error) {
    res.status(500).send(error);
  }
});

UserAccountRouter.post('/register', async (req: Request, res: Response) => {
    
