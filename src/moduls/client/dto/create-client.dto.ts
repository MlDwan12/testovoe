import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { IsDateStringCustom } from 'src/common/validators/dataString.validator';

export class CreateClientDto {
  @ApiProperty({ description: 'Имя клиента', type: String, example: 'Ivan' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Наименование документа',
    type: String,
    example: 'passport',
  })
  @IsString()
  @IsNotEmpty()
  document: string;

  @ApiProperty({
    description: 'Дата рождения клиента',
    type: Date,
    example: '29.06.1999',
  })
  // @IsDateStringCustom({
  //   message: 'Date of birth must be in the format dd.MM.yyyy',
  // })
  // @IsDate()
  @IsNotEmpty()
  birth_date: Date;
}
 