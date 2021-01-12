import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';
@Entity() // sql table === 'colas'
export class Cola{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(type => Flavor, (flavor) => flavor.colas,)
    flavors: string[];
}