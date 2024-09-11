import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnitMeasurementService } from './unit_measurement.service';
import { CreateUnitMeasurementDto } from './dto/create-unit_measurement.dto';
import { UpdateUnitMeasurementDto } from './dto/update-unit_measurement.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Unidad de Medida")
@Controller('unit-measurement')
export class UnitMeasurementController {
  constructor(private readonly unitMeasurementService: UnitMeasurementService) {}

  @Post()
  create(@Body() createUnitMeasurementDto: CreateUnitMeasurementDto) {
    return this.unitMeasurementService.create(createUnitMeasurementDto);
  }

  @Get()
  findAll() {
    return this.unitMeasurementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitMeasurementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnitMeasurementDto: UpdateUnitMeasurementDto) {
    return this.unitMeasurementService.update(+id, updateUnitMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitMeasurementService.remove(+id);
  }
}
