import { Request, Response } from "express"
import { productModel } from "../../models/productModel";
import { productSchemaTypes } from "./types";
import { z } from "zod";

export const getProductList = ((req: Request, res: Response) => {
    res.send("done")
})

export const addProduct = async (req: Request, res: Response) => {

    try {

        const parsedData = productSchemaTypes.parse(req.body);
        console.log("parsedData", parsedData)
        const product = new productModel(req.body);

        const newProduct = await product.save()


        res.status(201).send({
            success: true,
            message: "Product added successfully",
            data: newProduct
        });
    } catch (err: any) {
        if (err instanceof z.ZodError) {
            const errorMessages = err.errors
                .map((e) => `${e.path.join(".")} - ${e.message}`)
                .join(", ");
            console.log("errorMessages", errorMessages)
            return res.status(400).json({
                success: false,
                message: errorMessages,
            });
        }
        if (err.code === 11000) {
            const duplicateField = Object.keys(err.keyValue)[0];
            const duplicateValue = Object.values(err.keyValue)[0];
            return res.status(400).json({
                success: false,
                message: `Duplicate entry: ${duplicateField} "${duplicateValue}" already exists.`,
            });
        }
        else {
            console.log("error", err)
            res.status(500).send("there is an error while adding")
        }

    }


};

export const updateProduct = ((req: Request, res: Response) => {
    res.send("done")
});

export const deleteProduct = ((req: Request, res: Response) => {
    res.send("done")
});
