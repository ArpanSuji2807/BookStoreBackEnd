import { Schema, model } from 'mongoose';

const CustomerSchema = new Schema(
    {
        userId: {
            type: String
        },
        Name: {
            type: String,
            require: true
        },
        PhoneNumber: {
            type: Number,
            require: true
        },
        Pincode: {
            type: Number,
            require: true
        },
        Locality: {
            type: String,
            require: true
        },
        Address: {
            type: String,
            require: true
        },
        City: {
            type: String,
            require: true
        },
        Landmark: {
            type: String,
            require: true
        },
        Type: {
            type: String,
            require: true
        }

    },
    {
        timestamps: true
    }
);

export default model('customerdetail', CustomerSchema);