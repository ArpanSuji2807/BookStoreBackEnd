import HttpStatus from 'http-status-codes'
import * as CustomerService from '../services/customer.service'

export const customerDetails = async (req, res, next) => {
    try {
      const data = await CustomerService.customerDetails(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Customer details added'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };