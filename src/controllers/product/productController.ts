import { Request, Response } from "express";
import { productModel } from "../../models/productModel";

import { z } from "zod";

export const getProductList = (req: Request, res: Response) => {
    res.send("done");
};



export const updateProduct = (req: Request, res: Response) => {
    res.send("done");
};

export const deleteProduct = (req: Request, res: Response) => {
    res.send("done");
};
