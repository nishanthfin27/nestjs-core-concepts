"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./controllers/users/users.controller");
const users_service_1 = require("./services/users/users.service");
const example_middleware_1 = require("./middlewares/example/example.middleware");
const another_middleware_1 = require("./middlewares/another/another.middleware");
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer
            .apply(example_middleware_1.ExampleMiddleware)
            .forRoutes({
            path: 'users',
            method: common_1.RequestMethod.GET,
        }, {
            path: 'users/:id',
            method: common_1.RequestMethod.GET,
        })
            .apply(another_middleware_1.AnotherMiddleware)
            .forRoutes({
            path: 'users',
            method: common_1.RequestMethod.GET,
        }, {
            path: 'users/:id',
            method: common_1.RequestMethod.GET,
        });
    }
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map