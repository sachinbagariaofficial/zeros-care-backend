import { Router } from "express";
import {

    deleteProduct,
    getProductList,
    updateProduct,
} from "../controllers/product/productController";
import { addProductController } from "../controllers/product/addProductController";

const productRouter = Router();

productRouter.get("/list", getProductList);
productRouter.post("/add", addProductController);
productRouter.patch("/update", updateProduct);
productRouter.delete("/delete", deleteProduct);


export default productRouter;
