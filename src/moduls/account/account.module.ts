import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account } from './entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from '../client';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), ClientModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
