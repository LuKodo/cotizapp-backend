import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxesModule } from './taxes/taxes.module';
import { ProductTypesModule } from './product_types/product_types.module';
import { ProviderModule } from './provider/provider.module';
import { UnitMeasurementModule } from './unit_measurement/unit_measurement.module';
import { QuotesModule } from './quotes/quotes.module';
import { ProductsQuoteModule } from './products_quote/products_quote.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    UserModule,
    ClientModule,
    TaxesModule,
    ProductTypesModule,
    ProviderModule,
    UnitMeasurementModule,
    QuotesModule,
    ProductsQuoteModule,
  ],
})
export class AppModule {}
