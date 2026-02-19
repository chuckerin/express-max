import express from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos.route';
import { getErrorHandler } from './controllers/error.controller';

const app = express();
const port = 3005;

app.use(json());

app.use('/todos', todoRoutes);

app.use(getErrorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
