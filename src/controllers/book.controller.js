import HttpStatus from 'http-status-codes'
import * as BookService from '../services/book.service'

export const GetAllBooks = async (req, res, next) => {
    try {
      const data = await BookService.GetAllBooks();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Books fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const GetBookById = async (req, res, next) => {
    try {
      const data = await BookService.GetBookById(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };