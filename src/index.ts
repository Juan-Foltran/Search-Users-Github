import express, { type Express } from 'express';
import route from './routes.js';
const app: Express = express();
const port = 3333;

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
