import { Injectable } from '@nestjs/common';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tax } from './entities/tax.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxesService {
  constructor(
    @InjectRepository(Tax)
    private readonly taxRepository: Repository<Tax>,
  ) {}

  async create(createTaxDto: CreateTaxDto) {
    const exist = await this.taxRepository.findOne({
      where: { name: createTaxDto.name },
    });

    if (exist) {
      throw new Error('Tax already exists');
    }

    return this.taxRepository.save(createTaxDto);
  }

  findAll() {
    return this.taxRepository.find();
  }

  findOne(id: number) {
    return this.taxRepository.findOne({ where: { id } });
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return this.taxRepository.update(id, updateTaxDto);
  }

  remove(id: number) {
    return this.taxRepository.delete(id);
  }
}
