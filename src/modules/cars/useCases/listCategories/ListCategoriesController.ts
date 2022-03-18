import { Request,Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {

    constructor( private listCategory: ListCategoriesUseCase ) {}

    handle( request: Request, response:Response): Response {
        const all = this.listCategory.execute()

        return response.json(all)
    }
}

export {ListCategoriesController}