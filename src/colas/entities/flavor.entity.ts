import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cola } from "./colas.entity";

@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @ManyToMany(type => Cola, cola => cola.flavors)
    colas: Cola[];
}
