import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsUUID } from 'class-validator';
import { CreateClientDto } from 'src/moduls/client';

export class CreateAccountDto extends CreateClientDto {
  @ApiProperty({
    description: 'Id клиента к которому привязан аккаунт',
    type: String,
    example: 'b90b071a-28ef-40dc-bd3b-6ac69aa03871',
  })
  @IsUUID()
  person_id: string;

  @ApiProperty({
    description: 'Баланс на аккаунте клиента',
    type: Number,
    example: 1000.0,
  })
  @IsNumber()
  balance: number;

  @ApiProperty({
    description: 'Количество ежедневных выводов средств',
    type: Number,
    example: 10,
  })
  @IsNumber()
  daily_withdrawal_limit: number;

  @ApiProperty({
    description: 'Обозначение, является ли аккаунт заблокированным',
    type: Boolean,
    example: true,
  })
  @IsBoolean()
  active: boolean;

  @ApiProperty({
    description: 'Указатель типа аккаунта',
    type: Number,
    example: 1,
  })
  @IsNumber()
  account_type: number;
}
