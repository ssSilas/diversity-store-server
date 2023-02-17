import { Module } from '@nestjs/common';
import { salesHistoryEntity } from './sales-history.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: "salesHistoryEntity",
      useValue: salesHistoryEntity
    }
  ],
  exports: ["salesHistoryEntity"]
})
export class SalesHistoryModule { }
