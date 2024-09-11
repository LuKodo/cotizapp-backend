import { PartialType } from '@nestjs/swagger';
import { CreateUnitMeasurementDto } from './create-unit_measurement.dto';

export class UpdateUnitMeasurementDto extends PartialType(CreateUnitMeasurementDto) {}
