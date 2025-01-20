import { Router } from "express";
import {
    addProduct,
    deleteProduct,
    getProductList,
    updateProduct,
} from "../controllers/product/productController";

const productRouter = Router();

productRouter.get("/list", getProductList);
productRouter.post("/add", addProduct);
productRouter.patch("/update", updateProduct);
productRouter.delete("/delete", deleteProduct);


export default productRouter;
