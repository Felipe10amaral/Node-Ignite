import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryUseCase } from "../CreateCategory";
import { CreateSpecificationController } from "./createSpecificationController";


const createSpecificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateCategoryUseCase(createSpecificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export {createSpecificationController};