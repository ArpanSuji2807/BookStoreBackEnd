import express from 'express';
import * as BookController from '../controllers/book.controller'
//import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router()

//Router for Getting all books
router.get('',BookController.GetAllBooks)

//Router for getting book by Id
router.get('/:_id',BookController.GetBookById)

export default router;