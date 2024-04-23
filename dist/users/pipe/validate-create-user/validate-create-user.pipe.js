"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCreateUserPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateCreateUserPipe = class ValidateCreateUserPipe {
    transform(value, metadata) {
        console.log('inside the validateCreateUserPipe!');
        console.log(value);
        console.log(metadata);
        const parseAgeToInt = parseInt(value.age.toString());
        if (isNaN(parseAgeToInt)) {
            console.log(`${value.age} is not a number!`);
            throw new common_1.HttpException('Invalid Data type for property age. Expected number', common_1.HttpStatus.BAD_REQUEST);
        }
        console.log(`${value.age} is a number! and returning...`);
        return { ...value, age: parseAgeToInt };
    }
};
exports.ValidateCreateUserPipe = ValidateCreateUserPipe;
exports.ValidateCreateUserPipe = ValidateCreateUserPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateCreateUserPipe);
//# sourceMappingURL=validate-create-user.pipe.js.map