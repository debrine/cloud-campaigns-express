import express, { Request, Response, Router } from 'express';
import UserAccountService from '../../services/user-account-service/user-account.service';
import { UserAccount } from '../../database/models/user-account.model';

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
    console.error(error);
    res.status(500).send(error);
  }
});

UserAccountRouter.post('/register', async (req: Request, res: Response) => {
  const userAccountToCreate = UserAccount.parse(req.body);
  console.log('userAccountToCreate', userAccountToCreate);

  try {
    const userAccount = await userAccountService.registerUser(
      userAccountToCreate
    );
    console.log('user account to return', userAccount);
    res.send(userAccount);
  } catch (error) {
    res.status(500).send(error);
  }
});
