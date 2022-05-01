import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { getRepository, Repository } from 'typeorm';


class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    
    async create({ name, email, username,password, driver_license}: ICreateUsersDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            username,
            password,
            driver_license,
        });

        await this.repository.save(user);
    }

}

export {UsersRepository}