import express from 'express';
// import { deleteUser } from '../../frontend/src/service/api.js';
// import { editUser } from '../../frontend/src/service/api.js';
import { addUser, deleteUser, editUser, getUser, getUsers } from '../controller/userController.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;