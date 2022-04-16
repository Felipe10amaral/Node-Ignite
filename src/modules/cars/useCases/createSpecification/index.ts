import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "../createSpecification/CreateSpecificationUseCase";
import { CreateSpecificationController } from "./createSpecificationController";


const createSpecificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(createSpecificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export {createSpecificationController};