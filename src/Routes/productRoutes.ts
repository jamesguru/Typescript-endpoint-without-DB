import { Router } from "express";
import {createProduct, getProduct, getProducts} from "../Controller/ProductController"
const router = Router();



router.get("/all",getProducts);

router.get("/:id",getProduct);

router.patch("/:id");


router.delete("/:id");

router.post("/", createProduct);



export default router;