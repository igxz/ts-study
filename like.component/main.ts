import { LikeComponent } from "./like.component";

let likeComponent = new LikeComponent(6, true);
likeComponent.onClick();
console.log(`likesCount: ${likeComponent.likesCount}, isSelected: ${likeComponent.isSelected}`);