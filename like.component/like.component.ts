export class LikeComponent {

    constructor(private _likesCount: number, private _isSelected: boolean){
    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }


    get likesCount(): number {
        return this._likesCount;
    }

    get isSelected(): boolean {
        return this._isSelected;
    }

/*    set likesCount(value: number) {
        this._likesCount = value;
    }

    set isSelected(value: boolean) {
        this._isSelected = value;
    }*/
}