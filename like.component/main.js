"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_component_1 = require("./like.component");
let likeComponent = new like_component_1.LikeComponent(6, true);
likeComponent.onClick();
console.log(`likesCount: ${likeComponent.likesCount}, isSelected: ${likeComponent.isSelected}`);
