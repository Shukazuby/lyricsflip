import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { ChatRoom } from '../chat-room/chat-room.entity';
import { GameSession } from '../game-session/game-session.entity';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn({default: new Date()})
  createdAt: Date;

  @UpdateDateColumn({default: new Date()})
  updatedAt: Date;

  @ManyToOne(() => ChatRoom, chatRoom => chatRoom.players)
  chatRoom: ChatRoom;

  @Column({ type: 'text', array: true, default: [] })
  chatRoomIds: string[]; 

  @ManyToMany(() => GameSession, gameSession => gameSession.players)
  @JoinTable()
  gameSessions: GameSession[];
}