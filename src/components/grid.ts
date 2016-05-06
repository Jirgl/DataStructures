import { ArrowType } from './arrow';

export class Position {
    x: number;
    y: number;
}

export class ArrowPosition {
    start: Position;
    end: Position;
}

export interface IGrid {
    getArrowType(): ArrowType;
    getPosition(): Position;
    getPositionOfPreviousItem(): Position;
    getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[];
    getWidth(): number;
}
