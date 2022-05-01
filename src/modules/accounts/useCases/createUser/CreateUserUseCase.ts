import { inject } from "tsyringe";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}    
    
    async execute({name, driver_license, email, password, username}: ICreateUsersDTO): Promise<void>{
        await this.usersRepository.create({
            name,
            driver_license,
            email,
            password,
            username
        })
    }

}

export {CreateUserUseCase};