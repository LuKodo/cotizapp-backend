import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsQuote } from './entities/products_quote.entity';
import { DeepPartial, Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Quote } from 'src/quotes/entities/quote.entity';

@Injectable()
export class ProductsQuoteService {
  constructor(
    @InjectRepository(ProductsQuote) private productsQuoteRepository: Repository<ProductsQuote>,
    @InjectRepository(Product) private readonly products: Repository<Product>,
    @InjectRepository(Quote) private readonly quotes: Repository<Quote>,
  ) {}
  async create(createProductsQuoteDto: DeepPartial<ProductsQuote>) {
    const quote = await this.quotes.findOne({ where: { id: createProductsQuoteDto.quote.id } });
    const product = await this.products.findOne({ where: { id: createProductsQuoteDto.product.id } });
    createProductsQuoteDto.quote = quote;
    createProductsQuoteDto.product = product;
    return this.productsQuoteRepository.save(createProductsQuoteDto);
  }

  readAll() {
    return this.productsQuoteRepository.find({
      relations: ['product', 'quote'],
    });
  }

  update(id: number, updateProductsQuoteDto: DeepPartial<ProductsQuote>) {
    return this.productsQuoteRepository.update(id, updateProductsQuoteDto);
  }

  remove(id: number) {
    return this.productsQuoteRepository.delete(id);
  }
}
