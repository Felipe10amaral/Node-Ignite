import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuidV4} from 'uuid';

@Entity()
class Category {
    
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_At: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }

}


export {Category }