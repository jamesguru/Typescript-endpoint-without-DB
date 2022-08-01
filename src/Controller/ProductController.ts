import { randomUUID } from "crypto";
import express, {Request,RequestHandler,Response} from "express";
import { Product } from "../Model/product";

const products: Product[] = [];


interface CustomRequest extends Request{

    body:{

        name:string;

        description:string;
    }
}


export const createProduct = (req:CustomRequest,res:Response) => {


const id  = randomUUID.toString();

const {name,description} = req.body;

// const {name,description} = req.body as {name:string, description:string}


const newProduct = new Product(id,name,description);

products.push(newProduct);


res.status(201).json({


    message:"request is successful",

    products: products
})


}


export const getProducts:RequestHandler = (req,res) => {

res.status(200).json(products);

}



export const getProduct:RequestHandler<{id:string}> = (req,res) => {

const id = req.params.id;

const index = products.findIndex((item) => item.id = id);

if(index < 0){

    throw new Error("product not found");

}


res.status(200).json({product:products[index]});

}