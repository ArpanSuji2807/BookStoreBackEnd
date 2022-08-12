import book from '../models/books.model'
import cart from '../models/cart.model'

export const addCart = async (_id, userId) => {
    const bookCheck = await book.findById({ _id:_id });
    if (bookCheck == null) {
        console.log('Book is not available');
    }
    else {
        const checkCart = await cart.findOne({ userId: userId })
        let book = {
            productId: bookCheck._id,
            description: bookCheck.description,
            discountPrice: bookCheck.discountPrice,
            bookName: bookCheck.bookName,
            bookImage: bookCheck.bookImage,
            author: bookCheck.author,
            price:bookCheck.price,
            quantity: 1
        }
        
        if (checkCart == null) {
            const createCart = await cart.create({ userId: userId, books: [book], cart_total: bookCheck.price })
            return createCart;
        }
        else {
            let totalPrice = 0;
            let isTrue = false
            checkCart.books.filter(bookData => {
                if (bookData.productId == _id) {
                    bookData.quantity = bookData.quantity + 1;
                    isTrue = true;
                    totalPrice = totalPrice + (bookData.price * bookData.quantity);
                }
                else{
                    totalPrice = totalPrice + (bookData.price * bookData.quantity);
                }
            })
            if(isTrue == false){
                    totalPrice = totalPrice + bookCheck.price;
                    checkCart.books.push(book)
            }
            const addBooks = await cart.findOneAndUpdate({ userId: userId }, { books: checkCart.books, cart_total:totalPrice }, { new: true });
            return addBooks;
        }
    }
}

export const getCartItems = async(userId) =>{
    const data = await cart.findOne({userId:userId})
    if(data){
        return data;
    }else{
        console.log('No any items found in the Cart');
    }
}

export const removeBookFromCart = async(_id,userId) =>{
    const findCart = await cart.findOne({userId:userId})
    console.log('findCart-->>',findCart);
    let isTrue = false
    if(findCart){
        findCart.books.filter(cartItem =>{
            if(cartItem.productId == _id){
                const indexValue = findCart.books.indexOf(cartItem)
                findCart.books.splice(indexValue,1)
                isTrue = true
                console.log('Book removed from the cart');
            }
        })
        if(isTrue = false){
            console.log('Book is not available in the Cart');
        }
        const updatedCart = await cart.findOneAndUpdate({ userId: userId }, { books: findCart.books}, { new: true });
        return updatedCart;
    }
    else{
        console.log('No any Cart Available');
    }
}

export const placeOrder = async(userId) => {
    const data = await cart.findOneAndUpdate({userId:userId},{isPurchased:true},{new:true})
    if(data){
        return data;
    }
    else{
        throw new Error('No any cart found');
    }
}

export const cancelOrder = async(userId) => {
    const data = await cart.findOneAndUpdate({userId:userId},{isPurchased:false},{new:true})
    if(data){
        return data;
    }
    else{
        throw new Error('No any cart found');
    }
}