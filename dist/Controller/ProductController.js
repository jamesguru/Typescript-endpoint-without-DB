"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = exports.createProduct = void 0;
const crypto_1 = require("crypto");
const product_1 = require("../Model/product");
const products = [];
const createProduct = (req, res) => {
    const id = crypto_1.randomUUID.toString();
    const { name, description } = req.body;
    // const {name,description} = req.body as {name:string, description:string}
    const newProduct = new product_1.Product(id, name, description);
    products.push(newProduct);
    res.status(201).json({
        message: "request is successful",
        products: products
    });
};
exports.createProduct = createProduct;
const getProducts = (req, res) => {
    res.status(200).json(products);
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((item) => item.id = id);
    if (index < 0) {
        throw new Error("product not found");
    }
    res.status(200).json({ product: products[index] });
};
exports.getProduct = getProduct;
