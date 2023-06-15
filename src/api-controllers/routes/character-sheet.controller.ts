import express, { Request, Response, Router } from 'express';
import CharacterSheetService from '../../services/character-sheet-service/character-sheet.service';
// TODO fix error status codes

export const CharacterSheetRouter = express.Router();
const characterSheetService = new CharacterSheetService();

CharacterSheetRouter.get('/', (req: Request, res: Response) => {
  console.log('Request', req);
  res.send('Hello world!');
});

CharacterSheetRouter.get('/:id', async (req: Request, res: Response) => {
  console.log('Request', req);
  const { id } = req.params;

  try {
    const characterSheet = await characterSheetService.getCharacterSheet(id);
    res.send(characterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

CharacterSheetRouter.post('/', async (req: Request, res: Response) => {
  console.log('Request', req);
  const characterSheet = req.body;

  try {
    const createdCharacterSheet =
      await characterSheetService.createCharacterSheet(characterSheet);
    res.send(createdCharacterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

CharacterSheetRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const characterSheet = req.body;

  try {
    const updatedCharacterSheet =
      await characterSheetService.updateCharacterSheet(id, characterSheet);
    res.send(updatedCharacterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// CharacterSheetRouter.patch('/:id', (req: Request, res: Response) => {
//   console.log('Request', req);
//   res.send('Hello world!');
// });

// CharacterSheetRouter.delete('/:id', (req: Request, res: Response) => {
//   console.log('Request', req);
//   res.send('Hello world!');
// });
