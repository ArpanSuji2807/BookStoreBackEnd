import book from '../models/books.model'


export const GetAllBooks = async() =>{
    const data = await book.find();
    return data;
}

export const GetBookById = async(_id) =>{
    const data = await book.findOne({_id:_id})
    return data;
}