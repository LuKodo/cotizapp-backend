import { Client } from "src/client/entities/client.entity";
import { AbstractEntity } from "src/default/abstract.entity";
import { Product } from "src/product/entities/product.entity";
import { ProductsQuote } from "src/products_quote/entities/products_quote.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity('quotes')
export class Quote extends AbstractEntity {
    @ManyToOne(() => Client, client => client.quotes)
    client: Client;

    @ManyToOne(() => User, user => user.quotes)
    user: User;

    @Column({ type: 'enum', enum: ['Pendiente', 'Preparada', 'Enviada'], default: 'Pendiente'})
    status: string;

    @Column()
    budget?: number;

    @Column()
    profitability?: number

    @Column()
    total?: number

    @OneToMany(() => ProductsQuote, productsQuote => productsQuote.quote)
    products: ProductsQuote[]
}
