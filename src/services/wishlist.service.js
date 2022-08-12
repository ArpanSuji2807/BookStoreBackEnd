import book from '../models/books.model'
import wishlist from '../models/wishlist.model'

export const addWishList = async (_id, userId) => {
    const findBook = await book.findById({ _id:_id })
    let bookDetails = {
        productId: findBook._id,
        description: findBook.description,
        discountPrice: findBook.discountPrice,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        quantity:1,
        price:findBook.price
    }
    if (findBook) {
        const bookWishList = await wishlist.findOne({ userId: userId })
        if (bookWishList == null) {
            const createWishList = await wishlist.create({ userId: userId, books:[bookDetails],new: true })
            return createWishList;
        }
        else {
            let isTrue = false
            bookWishList.books.filter(bookData => {
                if (bookData.productId == _id) {
                    isTrue = true;
                    throw new Error('Book is already in the wish list')
                }
            })
            if(isTrue == false){
                bookWishList.books.push(bookDetails)
            }
            const updateWishList = await wishlist.findOneAndUpdate({ userId: userId }, { books: bookWishList.books }, { new: true })
            return updateWishList;
        }
    }
    else {
        console.log('Book is not present');
    }
}

export const removeBookFromWishList = async(_id,userId) =>{
    const findWishList = await wishlist.findOne({userId:userId})
    let isTrue = false
    if(findWishList){
        findWishList.books.filter(wishListItem =>{
            if(wishListItem.productId == _id){
                const indexValue = findWishList.books.indexOf(wishListItem)
                findWishList.books.splice(indexValue,1)
                isTrue = true
                console.log('Book removed from wish List');
            }
        })
        if(isTrue = false){
            console.log('Book is not available in wishList');
        }
        const updatedWishList = await wishlist.findOneAndUpdate({ userId: userId }, { books: findWishList.books}, { new: true });
        return updatedWishList;
    }
    else{
        console.log('No any wishList is Available');
    }
}

export const getAllList = async(userId) =>{
    const data = await wishlist.findOne({userId:userId})
    if(data){
        return data;
    }
    else{
        console.log('Could not find the wish list');
    }
}