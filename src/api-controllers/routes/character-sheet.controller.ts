import express, { Request, Response, Router } from 'express';

export const CharacterSheetRouter = express.Router();

CharacterSheetRouter.get('/', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});

CharacterSheetRouter.get('/:id', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});

CharacterSheetRouter.post('/', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});

CharacterSheetRouter.put('/:id', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});

CharacterSheetRouter.patch('/:id', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});

CharacterSheetRouter.delete('/:id', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});
