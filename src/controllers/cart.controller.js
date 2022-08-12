import HttpStatus from 'http-status-codes'
import * as cartService from '../services/cart.service'

export const addCart = async (req, res, next) => {
    try {
      const data = await cartService.addCart(req.params._id,req.body.email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const getCartItems = async (req, res, next) => {
    try {
      const data = await cartService.getCartItems(req.body.email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Cart items fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const removeBookFromCart = async (req, res, next) => {
    try {
      const data = await cartService.removeBookFromCart(req.params._id,req.body.email);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book Removed from cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };