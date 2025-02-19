import { Module, forwardRef } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './providers/admin.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/auth/authConfig/jwt.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { AuthService } from 'src/auth/providers/auth.service';
import { UserService } from 'src/user/providers/user.service';
import { SongService } from 'src/song/providers/song.service';
import { CreateAdminProvider } from './providers/create-admin.services';
import { FindOneUserByEmailProvider } from 'src/user/providers/find-one-user-by-email.provider';
import { User } from 'src/user/user.entity';
import { CreateUserProvider } from 'src/user/providers/create-user.services';
import { HashingProvider } from 'src/user/providers/hashing.provider';

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
    AuthService,
    UserService,
    SongService,
    CreateAdminProvider,
    FindOneUserByEmailProvider,
    CreateUserProvider,
    HashingProvider,
  ],
  imports: [
    TypeOrmModule.forFeature([Admin, User]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
})
export class AdminModule {}
