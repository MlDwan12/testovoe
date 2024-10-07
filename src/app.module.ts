import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './moduls/client/client.module';
import { AccountModule } from './moduls/account/account.module';
import { TransactionModule } from './moduls/transaction/transaction.module';
import { DataSource } from 'typeorm';
import { Account } from './moduls/account/entities/account.entity';
import { Client } from './moduls/client';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'testovoe',
      synchronize: true,
      autoLoadEntities: true,
      // logging: true,
    }),
    ClientModule,
    AccountModule,
    TransactionModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
