import { Request , Response} from "express";
import { CreateCategoryUseCase } from "../CreateCategory";


class CreateSpecificationController {

    constructor(private createSpecificationUseCase: CreateCategoryUseCase){}

    handle(request: Request, response: Response): Response {
      const {name, description} = request.body;
      

      this.createSpecificationUseCase.execute({name, description});

    return response.status(201).send();
    }
}

export {CreateSpecificationController}