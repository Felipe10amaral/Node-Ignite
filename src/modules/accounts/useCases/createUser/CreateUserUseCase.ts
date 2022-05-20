import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../errors/AppErros";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from 'bcrypt';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}    
    
    async execute({name, driver_license, email, password}: ICreateUsersDTO): Promise<void>{
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppErrors("User already exists!")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            password: passwordHash,
            driver_license,
            email,          
        })
    }

}

export {CreateUserUseCase};