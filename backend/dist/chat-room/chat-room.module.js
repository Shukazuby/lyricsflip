"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomModule = void 0;
const common_1 = require("@nestjs/common");
const chat_room_service_1 = require("./chat-room.service");
const chat_room_controller_1 = require("./chat-room.controller");
const typeorm_1 = require("@nestjs/typeorm");
const player_entity_1 = require("../player/player.entity");
const chat_room_entity_1 = require("./chat-room.entity");
let ChatRoomModule = class ChatRoomModule {
};
exports.ChatRoomModule = ChatRoomModule;
exports.ChatRoomModule = ChatRoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([chat_room_entity_1.ChatRoom, player_entity_1.Player])
        ],
        controllers: [chat_room_controller_1.ChatRoomController],
        providers: [chat_room_service_1.ChatRoomService],
        exports: [chat_room_service_1.ChatRoomService],
    })
], ChatRoomModule);
//# sourceMappingURL=chat-room.module.js.map