import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    batchID: {
        type: String,
        unique: true,
        required: true,
        // toUpperCase: true
    },
    yearOfManufacture: {
        type: String,
        required: true
    },
    expire: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },

    packing: {
        type: String,
        required: true
    },
    packingType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,

    },
    tax: {
        type: Number,

    },
    MRP: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }


}, { timestamps: true });

export const productModel = mongoose.model("product", productSchema) 