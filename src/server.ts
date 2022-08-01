import { Console } from 'console';
import express, { NextFunction,Request,Response,json } from 'express';

import router from './Routes/productRoutes';


// Middleware change the response or the request






const app = express();

app.use(json());

app.use("/api/products", router);

app.use((err:Error,req:Request,res:Response, next: NextFunction) => {


    console.log(err.message);

})

app.listen(5000, () => {


    console.log('Server is running on port 5000');
})