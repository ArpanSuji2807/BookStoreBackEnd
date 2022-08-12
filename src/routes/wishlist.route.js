import express from "express";
import * as WishlistController from '../controllers/wishlist.controller'
import { userAuth } from "../middlewares/auth.middleware";

const router = express.Router()

//Router to add wishList
router.post('/:_id',userAuth,WishlistController.addWishList);

//Router to remove book from wish list
router.put('/:_id',userAuth,WishlistController.removeBookFromWishList);

//Router to fetch all books from wish list
router.get('',userAuth,WishlistController.getAllList);

export default router;