import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Client } from './entities';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'The client was successfully saved.',
  })
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    console.log(createClientDto);

    return this.clientService.create(createClientDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description:
      'При корректно отправленном запросе приходит в ответ прихотит массив существуещих клиентов либо пустой массив если клиентов в базе нет',
    type: Client,
  })
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
