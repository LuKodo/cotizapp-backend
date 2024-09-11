import { AbstractEntity } from "src/default/abstract.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('product_type')
export class ProductType extends AbstractEntity {
    @Column()
    name: string;

    @OneToMany(() => Product, product => product.productType)
    products?: Product[]
}
