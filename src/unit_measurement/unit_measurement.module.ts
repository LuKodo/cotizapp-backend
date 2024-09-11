import { Module } from '@nestjs/common';
import { UnitMeasurementService } from './unit_measurement.service';
import { UnitMeasurementController } from './unit_measurement.controller';

@Module({
  controllers: [UnitMeasurementController],
  providers: [UnitMeasurementService],
})
export class UnitMeasurementModule {}
