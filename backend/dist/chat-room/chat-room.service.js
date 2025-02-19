"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_room_entity_1 = require("./chat-room.entity");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("../player/player.entity");
let ChatRoomService = class ChatRoomService {
    constructor(roomModel, playerModel) {
        this.roomModel = roomModel;
        this.playerModel = playerModel;
    }
    create(createChatRoomDto) {
        return 'This action adds a new chatRoom';
    }
    findAll() {
        return `This action returns all chatRoom`;
    }
    findOne(id) {
        return `This action returns a #${id} chatRoom`;
    }
    update(id, updateChatRoomDto) {
        return `This action updates a #${id} chatRoom`;
    }
    remove(id) {
        return `This action removes a #${id} chatRoom`;
    }
    async createRoom(roomData) {
        const room = this.roomModel.create(roomData);
        return await this.roomModel.save(room);
    }
    async joinRoom(roomId, playerId) {
        const player = await this.playerModel.findOne({ where: { id: playerId } });
        if (!player) {
            throw new common_1.NotFoundException('Player not found');
        }
        const room = await this.roomModel.findOne({ where: { id: roomId } });
        if (!room) {
            throw new common_1.NotFoundException('Room not found');
        }
        if (room.playerIds?.includes(playerId)) {
            throw new common_1.BadRequestException('Player already exists in this room');
        }
        if (room.playerIds?.length >= room.capacity) {
            throw new common_1.BadRequestException('Room is full');
        }
        room.playerIds.push(player.id);
        player.chatRoomIds.push(room.id);
        await this.roomModel.save(room);
        await this.playerModel.save(player);
        return {
            "message": "Player joined the room",
            "statusCode": 200
        };
    }
    async leaveRoom(roomId, playerId) {
        const room = await this.roomModel.findOne({ where: { id: roomId } });
        if (!room) {
            throw new common_1.NotFoundException('Room not found');
        }
        const player = await this.playerModel.findOne({ where: { id: playerId } });
        if (!player) {
            throw new common_1.NotFoundException('Player not found');
        }
        if (!room.playerIds?.includes(playerId)) {
            throw new common_1.BadRequestException('Player is not in this room');
        }
        room.playerIds = room.playerIds.filter(id => id !== player.id);
        player.chatRoomIds = player.chatRoomIds.filter(id => id !== room.id);
        await this.roomModel.save(room);
        await this.playerModel.save(player);
        return {
            "message": 'Player left the room',
            "statusCode": 200
        };
    }
};
exports.ChatRoomService = ChatRoomService;
exports.ChatRoomService = ChatRoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_room_entity_1.ChatRoom)),
    __param(1, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ChatRoomService);
//# sourceMappingURL=chat-room.service.js.map