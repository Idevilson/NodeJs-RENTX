import { Router } from "express";
import { Category } from "../model/Category";


const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    

    return response.status(201).send();
});


export { categoriesRoutes };