import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPayLoad {
    sub: string;
}


export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new Error('Token missing');
    }

    const [, token] = authHeader.split(" ");
    
    try {
        const { sub: user_id } = verify(token, "007862c59146236ac7863f9e8b840f20") as IPayLoad;
        console.log(user_id);

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id)

        if(!user){
            throw new Error("User does not Exists");
        }
        
        next();
    
    } catch {
        throw new Error("invalid token")        
    }
    
}