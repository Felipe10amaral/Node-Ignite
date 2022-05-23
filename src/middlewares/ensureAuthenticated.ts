import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { AppErrors } from '../errors/AppErros';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayLoad {
    sub: string;
}


export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppErrors('Token missing', 401);
    }

    const [, token] = authHeader.split(" ");
    
    try {
        const { sub: user_id } = verify(token, "007862c59146236ac7863f9e8b840f20") as IPayLoad;
        console.log(user_id);

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id)

        if(!user){
            throw new AppErrors("User does not Exists", 401);
        }

        request.user = {
            id: user_id
        }

        next();
    
    } catch {
        throw new AppErrors("invalid token", 401)        
    }
    
}