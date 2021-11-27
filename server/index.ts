import express from 'express';
import { Request, Response } from 'express';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (_req: Request, res: Response) => res.send('root endpoint'));
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
