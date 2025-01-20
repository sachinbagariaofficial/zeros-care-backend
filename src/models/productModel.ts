import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    batchId: {
        type: String,
        unique: true,
        required: true
    },
    yearOfManufacture: {
        type: Date,
        require: true
    },
    expire: {
        type: Date,
        require: true
    },
    company: {
        type: String,
        require: true
    },

    packing: {
        type: String,
        require: true
    },
    packingType: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,

    },
    tax: {
        type: Number,

    },
    mrp: {
        type: Number,
        require: true
    },
    rate: {
        type: Number,
        require: true
    }


}, { timestamps: true });

export const productModel = mongoose.model("product", productSchema) 