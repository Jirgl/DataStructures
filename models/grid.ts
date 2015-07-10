module JirglStructures {
    export class Position {
        x: number;
        y: number;
    }

    export interface IGrid
    {
        getPosition(maxWidth: number) : Position;
    }
}