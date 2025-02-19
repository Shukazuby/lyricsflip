import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom } from './chat-room.entity';
import { Repository } from 'typeorm';
import { Player } from 'src/player/player.entity';
export declare class ChatRoomService {
    private readonly roomModel;
    private readonly playerModel;
    constructor(roomModel: Repository<ChatRoom>, playerModel: Repository<Player>);
    create(createChatRoomDto: CreateChatRoomDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatRoomDto: UpdateChatRoomDto): string;
    remove(id: number): string;
    createRoom(roomData: CreateChatRoomDto): Promise<ChatRoom>;
    joinRoom(code: string, playerId: string): Promise<{
        message: string;
        statusCode: number;
    }>;
    leaveRoom(code: string, playerId: string): Promise<{
        message: string;
        statusCode: number;
    }>;
}
