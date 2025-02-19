import { ChatRoomService } from './chat-room.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
export declare class ChatRoomController {
    private readonly chatRoomService;
    constructor(chatRoomService: ChatRoomService);
    create(createChatRoomDto: CreateChatRoomDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChatRoomDto: UpdateChatRoomDto): string;
    remove(id: string): string;
    createRoom(player: CreateChatRoomDto): Promise<import("./chat-room.entity").ChatRoom>;
    joinRoom(roomId: string, playerId: string): Promise<{
        message: string;
        statusCode: number;
    }>;
    leaveRoom(roomId: string, playerId: string): Promise<{
        message: string;
        statusCode: number;
    }>;
}
