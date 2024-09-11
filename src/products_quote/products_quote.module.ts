import { Module } from '@nestjs/common';
import { ProductsQuoteService } from './products_quote.service';
import { ProductsQuoteController } from './products_quote.controller';
import { ProductsQuote } from './entities/products_quote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Quote } from 'src/quotes/entities/quote.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsQuote, Product, Quote]),
  ],
  controllers: [ProductsQuoteController],
  providers: [ProductsQuoteService],
})
export class ProductsQuoteModule {}
