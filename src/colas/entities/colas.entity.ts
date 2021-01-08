import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity() // sql table === 'colas'
export class Cola{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', {nullable: true})
    flavors: string[];
}