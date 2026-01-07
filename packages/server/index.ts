import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Lamdouy !');
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hi, lamdouy user! ' });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
