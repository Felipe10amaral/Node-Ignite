import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe';
import { hash } from 'bcrypt';

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, password, driver_license } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const passwordHash = await hash(password, 8);

        await createUserUseCase.execute({
            name,
            email,
            password: passwordHash,
            driver_license
        });

        return response.status(201).send()
    }
}

export {CreateUserController}