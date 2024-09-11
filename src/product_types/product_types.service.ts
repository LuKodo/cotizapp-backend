import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from './entities/product_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectRepository(ProductType)
    private productTypesRepository: Repository<ProductType>,
  ) {}
  async create(createProductTypeDto: CreateProductTypeDto) {
    const { name } = createProductTypeDto;
    const exist = await this.productTypesRepository.findOne({
      where: { name },
    });

    if (exist) {
      throw new Error('El tipo de producto ya existe');
    }

    return this.productTypesRepository.save({
      name,
    });
  }

  async createMasive(createProductTypeDto: CreateProductTypeDto[]) {
    createProductTypeDto.map(async (productType) => {
      await this.create(productType);
    })
  }

  findAll() {
    return this.productTypesRepository.find();
  }

  findOne(id: number) {
    return this.productTypesRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return this.productTypesRepository.update(id, updateProductTypeDto);
  }

  remove(id: number) {
    return this.productTypesRepository.delete(id);
  }
}
