import { Client } from "src/client/entities/client.entity";
import { AbstractEntity } from "src/default/abstract.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity('tax')
export class Tax extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    value: number;
}
