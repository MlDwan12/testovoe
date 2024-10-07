import { IsDate, IsString } from 'class-validator';
import { Account } from 'src/moduls/account/entities/account.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  document: string;

  @Column()
  @IsDate()
  birth_date: Date;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne((type) => Account, (account) => account.client)
  account: Account;
}
