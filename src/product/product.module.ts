import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ProductType } from 'src/product_types/entities/product_type.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, User, ProductType, Provider]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
