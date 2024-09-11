import { AbstractEntity } from "src/default/abstract.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('provider')
export class Provider extends AbstractEntity {
    @Column()
    name: string;

    @OneToMany(() => Product, product => product.provider)
    products?: Product[]
}
