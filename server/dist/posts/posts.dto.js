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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostsDto = void 0;
const class_validator_1 = require("class-validator");
var PostTagEnum;
(function (PostTagEnum) {
    PostTagEnum["html"] = "html";
    PostTagEnum["css"] = "css";
    PostTagEnum["js"] = "js";
    PostTagEnum["react"] = "react";
    PostTagEnum["next"] = "next";
    PostTagEnum["node"] = "node";
    PostTagEnum["nest"] = "nest";
    PostTagEnum["prisma"] = "prisma";
    PostTagEnum["git"] = "git";
})(PostTagEnum || (PostTagEnum = {}));
class CreatePostsDto {
}
exports.CreatePostsDto = CreatePostsDto;
__decorate([
    (0, class_validator_1.IsEnum)(PostTagEnum),
    __metadata("design:type", String)
], CreatePostsDto.prototype, "tag", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: '"name" is not a string'
    }),
    __metadata("design:type", String)
], CreatePostsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: '"description" is not a string'
    }),
    __metadata("design:type", String)
], CreatePostsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: '"content" is not a string'
    }),
    __metadata("design:type", String)
], CreatePostsDto.prototype, "content", void 0);
//# sourceMappingURL=posts.dto.js.map