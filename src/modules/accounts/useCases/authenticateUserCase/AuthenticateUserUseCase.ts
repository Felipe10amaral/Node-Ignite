import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../errors/AppErros";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}
    async execute({email, password}: IRequest): Promise<IResponse>{
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new AppErrors("email or password incorrect", 403);
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppErrors("email or password incorrect", 403);
        }

        const token = sign({}, "007862c59146236ac7863f9e8b840f20", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            },
        };

        return tokenReturn;
    }
}

export {AuthenticateUserUseCase}