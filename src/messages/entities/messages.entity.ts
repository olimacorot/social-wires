import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class MessagesEntity {
  constructor(obj: Partial<MessagesEntity>) {
    Object.assign(this, obj);
  } 

  @PrimaryGeneratedColumn()
  public id: number;
  
  @Column()
  public user: string;
  
  @Column()
  public title: string;
  
  @Column()
  public text: string;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  public reactions!: Array<{ reaction: string, author: string }>;

  @Column({
    type: 'jsonb',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  public comments!: Array<{ comment: string, author: string }>;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
}

export default MessagesEntity;