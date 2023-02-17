import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsEntity } from './products.entity';
import { SalesHistoryModule } from 'src/sales-history/sales-history.module';

@Module({
  imports: [SalesHistoryModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: "ProductsEntity",
      useValue: ProductsEntity
    }
  ],
  exports: ["ProductsEntity", ProductsService]
})
export class ProductsModule { }
