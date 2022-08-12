import express from 'express'
import * as CustomerController from '../controllers/customer.controller'
import { userAuth } from '../middlewares/auth.middleware'

const router = express.Router()

//Router to create customer details
router.post('', userAuth, CustomerController.customerDetails)

export default router;