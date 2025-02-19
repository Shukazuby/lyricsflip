import { Player } from "../player/player.entity";
export declare class ChatRoom {
    id: string;
    name: string;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
    players: Player[];
    playerIds: string[];
}
