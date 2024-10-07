import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { queryClientSelect } from 'src/shared/options/client.options';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private usersRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      return this.usersRepository.save(createClientDto);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.usersRepository.find(queryClientSelect);
  }

  findOne(id: string) {
    return this.usersRepository.findOne({
      where: { id },
      ...queryClientSelect,
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: string) {
    return this.usersRepository.softDelete(id);
  }
}
