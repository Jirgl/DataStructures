module JirglStructures {
    export class Position {
        x: number;
        y: number;
    }

    export interface IGrid<T>
    {
        getPosition(maxWidth: number) : Position;
    }
}