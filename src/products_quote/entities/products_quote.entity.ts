import { AbstractEntity } from 'src/default/abstract.entity';
import { Product } from 'src/product/entities/product.entity';
import { Quote } from 'src/quotes/entities/quote.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ProductsQuote extends AbstractEntity {
  @Column()
  quantity: number;

  @Column()
  margen_percent: number;

  @Column()
  margen_price: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2 })
  cost: number;

  @Column()
  days: number;

  @ManyToOne(() => Quote, (quote) => quote.products)
  quote: Quote;

  @ManyToOne(() => Product, (product) => product.products)
  product: Product;
}
