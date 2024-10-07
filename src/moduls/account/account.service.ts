import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ClientService, CreateClientDto } from '../client';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    private readonly clientService: ClientService,

    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}
  async create(createAccountDto: CreateClientDto): Promise<void> {
    const { birth_date, ...accInfo } = createAccountDto;
    // console.log(birth_date);

    // const [day, month, year] = String(birth_date).split('.');
    // const date = `${year}-${month}-${day}T00:00:00.000Z`;

    const newClient = await this.clientService.create(createAccountDto);

    await this.accountRepository.save({ person_id: newClient.id });
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
