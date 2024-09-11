import { Controller, Post, Body, Param, Delete, Patch, Get } from '@nestjs/common';
import { ProductsQuoteService } from './products_quote.service';
import { DeepPartial } from 'typeorm';
import { ProductsQuote } from './entities/products_quote.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ProductsQuote')
@Controller('ProductsQuote')
export class ProductsQuoteController {
  constructor(private readonly productsQuoteService: ProductsQuoteService) {}

  @Post()
  create(@Body() createProductsQuoteDto: DeepPartial<ProductsQuote>) {
    return this.productsQuoteService.create(createProductsQuoteDto);
  }

  @Get()
  findAll() {
    return this.productsQuoteService.readAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsQuoteDto: DeepPartial<ProductsQuote>) {
    return this.productsQuoteService.update(+id, updateProductsQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsQuoteService.remove(+id);
  }
}
