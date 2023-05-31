import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const DEFAULT_PORT = 3002;

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = process.env.PORT
  ? parseInt(process.env.PORT)
  : DEFAULT_PORT;

// use body parser middleware to parse json and urlencoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

// Serve the application at the given port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});