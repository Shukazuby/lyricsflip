"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./providers/admin.service");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../auth/authConfig/jwt.config");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./admin.entity");
const auth_service_1 = require("../auth/providers/auth.service");
const user_service_1 = require("../user/providers/user.service");
const song_service_1 = require("../song/providers/song.service");
const create_admin_services_1 = require("./providers/create-admin.services");
const find_one_user_by_email_provider_1 = require("../user/providers/find-one-user-by-email.provider");
const user_entity_1 = require("../user/user.entity");
const create_user_services_1 = require("../user/providers/create-user.services");
const hashing_provider_1 = require("../user/providers/hashing.provider");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        controllers: [admin_controller_1.AdminController],
        providers: [
            admin_service_1.AdminService,
            auth_service_1.AuthService,
            user_service_1.UserService,
            song_service_1.SongService,
            create_admin_services_1.CreateAdminProvider,
            find_one_user_by_email_provider_1.FindOneUserByEmailProvider,
            create_user_services_1.CreateUserProvider,
            hashing_provider_1.HashingProvider,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_entity_1.Admin, user_entity_1.User]),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map