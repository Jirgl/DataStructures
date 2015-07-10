module JirglStructures {
    export interface IIterator<T> {
        hasNext(): boolean;
        next(): T;
        reset(): void;
    }
}