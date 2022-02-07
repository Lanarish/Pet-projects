import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RestModule } from '@shop-rest/rest.module';
import { SeedingModule } from '@shop-storage/seeding/seeding.module';
import { SeedingService } from '@shop-storage/seeding/seeding.service';
import { Product } from 'entity/product.entity';
import { AllExceptionFilter } from 'products/http-exception.filter';
import { ProductsModule } from 'products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'shop',
      entities: [Product],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    RestModule,
    SeedingModule,
    ProductsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}

  async onApplicationBootstrap(): Promise<void> {
    await this.seedingService.seed();
  }
}
