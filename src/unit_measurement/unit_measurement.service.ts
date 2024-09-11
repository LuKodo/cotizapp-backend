import { Injectable } from '@nestjs/common';
import { CreateUnitMeasurementDto } from './dto/create-unit_measurement.dto';
import { UpdateUnitMeasurementDto } from './dto/update-unit_measurement.dto';

@Injectable()
export class UnitMeasurementService {
  create(createUnitMeasurementDto: CreateUnitMeasurementDto) {
    return 'This action adds a new unitMeasurement';
  }

  findAll() {
    return `This action returns all unitMeasurement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unitMeasurement`;
  }

  update(id: number, updateUnitMeasurementDto: UpdateUnitMeasurementDto) {
    return `This action updates a #${id} unitMeasurement`;
  }

  remove(id: number) {
    return `This action removes a #${id} unitMeasurement`;
  }
}
