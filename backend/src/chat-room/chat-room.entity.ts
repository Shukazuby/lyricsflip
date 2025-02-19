import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Player } from "../player/player.entity";

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @Column()
  code: string;

  @CreateDateColumn({default: new Date()})
  createdAt: Date;

  @UpdateDateColumn({default: new Date()})
  updatedAt: Date;

  @OneToMany(() => Player, player => player.chatRoom)
  players: Player[];

  @Column({ type: 'text', array: true, default: [] })
  playerIds: string[]; 

}