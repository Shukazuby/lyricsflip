import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatRoom } from './chat-room.entity';
import { Repository } from 'typeorm';
import { Player } from 'src/player/player.entity';

@Injectable()
export class ChatRoomService {
constructor(
  @InjectRepository(ChatRoom) private readonly roomModel: Repository<ChatRoom>,
  @InjectRepository(Player) private readonly playerModel: Repository<Player>,
  ){}

  create(createChatRoomDto: CreateChatRoomDto) {
    return 'This action adds a new chatRoom';
  }

  findAll() {
    return `This action returns all chatRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatRoom`;
  }

  update(id: number, updateChatRoomDto: UpdateChatRoomDto) {
    return `This action updates a #${id} chatRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatRoom`;
  }

  async createRoom(roomData: CreateChatRoomDto) {
    const room = this.roomModel.create(roomData);  
    return await this.roomModel.save(room);        
  }

  async joinRoom(roomId: string, playerId: string) {
    const player = await this.playerModel.findOne({ where: { id: playerId } });
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    const room = await this.roomModel.findOne({ where: { id: roomId } });
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    if (room.playerIds?.includes(playerId)) {
      throw new BadRequestException('Player already exists in this room');
    }
     if (room.playerIds?.length >= room.capacity) {
      throw new BadRequestException('Room is full');
    }

    room.playerIds.push(player.id);
    player.chatRoomIds.push(room.id);
    await this.roomModel.save(room);  
    await this.playerModel.save(player);  
     return {
      "message": "Player joined the room",
      "statusCode": 200
    }      
  }
  
}
