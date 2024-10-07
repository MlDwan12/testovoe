import { Client } from 'src/moduls/client/entities';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  person_id: string;

  @OneToOne(() => Client, (client) => client.account)
  @JoinColumn({ name: 'person_id' })
  client: Client;

  @Column({ default: 0.0 })
  balance: number;

  @Column({ default: 10 })
  daily_withdrawal_limit: number;

  @Column({ default: true })
  active: boolean;

  @Column({ default: 1 })
  account_type: number;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
