import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema(
    {
        userId: {
          type: String
        },
        books: [{
          productId: {
            type: String
          },
          description: {
            type: String
          },
          discountPrice: {
            type: Number
          },
          bookName: {
            type: String
          },
          bookImage: {
            type: String
          },
          author: {
            type: String
          },
          quantity: {
            type: Number
          },
          price: {
            type: Number
          }
        }]
    }
)

export default model('wishlist', wishlistSchema);