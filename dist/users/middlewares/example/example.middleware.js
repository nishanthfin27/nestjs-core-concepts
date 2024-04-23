"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ExampleMiddleware = class ExampleMiddleware {
    use(req, res, next) {
        console.log('Example Middleware');
        console.log(req.headers.authorization);
        const { authorization } = req.headers;
        if (!authorization)
            throw new common_1.HttpException('No Authorization Token', common_1.HttpStatus.FORBIDDEN);
        if (authorization === 'abcdefghij')
            next();
        else
            throw new common_1.HttpException('Invalid Authorization Token', common_1.HttpStatus.FORBIDDEN);
    }
};
exports.ExampleMiddleware = ExampleMiddleware;
exports.ExampleMiddleware = ExampleMiddleware = __decorate([
    (0, common_1.Injectable)()
], ExampleMiddleware);
//# sourceMappingURL=example.middleware.js.map