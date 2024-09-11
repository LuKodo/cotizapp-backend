import { AbstractEntity } from 'src/default/abstract.entity';
import { ProductType } from 'src/product_types/entities/product_type.entity';
import { ProductsQuote } from 'src/products_quote/entities/products_quote.entity';
import { Provider } from 'src/provider/entities/provider.entity';
import { Quote } from 'src/quotes/entities/quote.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Product extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Provider, (provider) => provider.products)
  provider: Provider;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => ProductType, (productType) => productType.products)
  productType: ProductType;

  @OneToMany(() => ProductsQuote, (productsQuote) => productsQuote.product)
  products: ProductsQuote[];
}
