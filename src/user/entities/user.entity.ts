import { AbstractEntity } from "src/default/abstract.entity";
import { Product } from "src/product/entities/product.entity";
import { Quote } from "src/quotes/entities/quote.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'users' })
export class User extends AbstractEntity {
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Product, product => product.user)
    products: Product[];

    @OneToMany(() => Quote, quote => quote.user)
    quotes: Quote[];
}
