import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AuthEntity {
  constructor(obj: Partial<AuthEntity>) {
    Object.assign(this, obj);
  }

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public username: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column()
  public fullname: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;
}
