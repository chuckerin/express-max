import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from '../controllers/todos.controller';

const router = Router();

router.post('/', createTodo);
router.get('/:id?', getTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
