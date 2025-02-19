import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { ChatRoomController } from './chat-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/player/player.entity';
import { ChatRoom } from './chat-room.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ChatRoom, Player])
  ],
  controllers: [ChatRoomController],
  providers: [ChatRoomService],
  exports: [ChatRoomService],
})
export class ChatRoomModule {}
