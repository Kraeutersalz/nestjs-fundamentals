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

    @Column({nullable: true})
    description: string;

    @Column({default: 0})
    recommendations:number;

    @JoinTable()
    @ManyToMany(type => Flavor, flavor => flavor.colas,
    {
        cascade: true,
    })
    flavors: Flavor[];
}