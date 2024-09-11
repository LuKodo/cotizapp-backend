import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { ProductType } from 'src/product_types/entities/product_type.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(ProductType)
    private readonly productTypesRepository: Repository<ProductType>,
    @InjectRepository(Provider)
    private readonly providersRepository: Repository<Provider>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.findOne({
      where: { code: createProductDto.code },
    });

    if (product) {
      throw new BadRequestException('Product already exists');
    }

    console.log(await this.productTypesRepository.findOneBy({ id: createProductDto.productTypeId }));
    console.log(await this.providersRepository.findOneBy({ id: createProductDto.providerId }));

    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.price = createProductDto.price;
    newProduct.code = createProductDto.code;
    newProduct.description = createProductDto.description;
    newProduct.productType = await this.productTypesRepository.findOneBy({ id: createProductDto.productTypeId });
    newProduct.provider = await this.providersRepository.findOneBy({ id: createProductDto.providerId });
    newProduct.quantity = createProductDto.quantity;

    return this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find({
      relations: ['user', 'productType'],
    });
  }

  findOne(id: number) {
    return this.productRepository.findOne({ where: { id }, relations: ['user', 'productType', 'provider'] });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
