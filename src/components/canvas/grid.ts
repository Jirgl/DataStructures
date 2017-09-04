export interface IPosition {
    x: number;
    y: number;
}

export interface IArrowPosition {
    start: IPosition;
    end: IPosition;
}

export interface IGrid {
    getPositionOfItemAtIndex(index: number): IPosition;
    getArrowsPositions(previousPosition: IPosition, position: IPosition): IArrowPosition[];
}
