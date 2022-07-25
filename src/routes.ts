import { Router } from "express";
import { CreateCategoryController } from "./controllers/create-category-controller";
import { CreateProductController } from "./controllers/create-product-controller";

const router = Router();

const productController = new CreateProductController();
const categoryController = new CreateCategoryController();

router.post("/products", productController.handle);
router.post("/categories", categoryController.handle);

export { router };
