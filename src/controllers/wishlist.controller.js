import HttpStatus from 'http-status-codes'
import * as wishListService from '../services/wishlist.service'

export const addWishList = async (req, res, next) => {
    try {
      const data = await wishListService.addWishList(req.params._id,req.body.email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to wishlist successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const removeBookFromWishList = async (req, res, next) => {
    try {
      const data = await wishListService.removeBookFromWishList(req.params._id,req.body.email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book Removed from wishlist'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const getAllList = async (req, res, next) => {
    try {
      const data = await wishListService.getAllList(req.body.email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Books from the wishlist fetched successflly'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };