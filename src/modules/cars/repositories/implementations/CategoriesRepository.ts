import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { ICategoriesRepository,ICreateRepositoryDTO } from '../ICategoriesRepository';



class CategoriesRepository implements ICategoriesRepository{
    private repository: Repository<Category>;

    constructor(){
        this.repository = getRepository(Category);
    }

    // public static getInstance(): CategoriesRepository{
    //     if(!CategoriesRepository.INSTANCE){
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }

    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ name, description}: ICreateRepositoryDTO): Promise<void> {
        const categories = this.repository.create({
            description,
            name
        })

        await this.repository.save(categories);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName( name: string): Promise<Category>{
        const category = this.repository.findOne({ name });
        return category;
    }
}

export {CategoriesRepository};