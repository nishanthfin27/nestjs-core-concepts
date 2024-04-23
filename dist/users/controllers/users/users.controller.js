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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const CreateUser_dto_1 = require("../../dtos/CreateUser.dto");
const auth_guard_1 = require("../../guards/auth/auth.guard");
const validate_create_user_pipe_1 = require("../../pipe/validate-create-user/validate-create-user.pipe");
const users_service_1 = require("../../services/users/users.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return this.userService.fetchUsers();
    }
    getUser(sortByDesc) {
        console.log(sortByDesc);
        return [{ username: 'nishanth', email: 'nishanth@gmail.com' }];
    }
    getUsersPosts() {
        return [
            {
                username: 'nishanth',
                email: 'nishanth@gmail.com',
                posts: [
                    { id: 1, title: 'post1' },
                    { id: 2, title: 'post2' },
                ],
            },
        ];
    }
    getUsersPostsComments() {
        return [{ id: 1, title: 'post1', comments: [] }];
    }
    createUser(userData) {
        console.log(userData.age.toPrecision(), '*****userData userData****');
        return this.userService.createUser(userData);
    }
    getUserById(id) {
        const user = this.userService.fetchUserById(id);
        if (!user)
            throw new common_1.HttpException('User is not found', common_1.HttpStatus.BAD_REQUEST);
        return user;
    }
    updateUser(userData) {
        console.log(userData, '****update*****');
        return {};
    }
    deleteUser(id) {
        console.log(id, '****delete*****');
        return {};
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sortByDesc', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsersPosts", null);
__decorate([
    (0, common_1.Get)('posts/comments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsersPostsComments", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(validate_create_user_pipe_1.ValidateCreateUserPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map