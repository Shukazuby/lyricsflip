import { ApiProperty } from "@nestjs/swagger";

export class CreateChatRoomDto {
@ApiProperty()
name: string;
    
@ApiProperty()
capacity: number;
    
@ApiProperty()
code: string;
}
     