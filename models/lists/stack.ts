/// <reference path="doublyLinkedList.ts" />

module JirglStructures.Lists.Stack {
    export class Structure<T> implements IIterable<T> {
        protected list: DoublyLinkedList.Structure<T>;

        constructor() {
            this.list = new DoublyLinkedList.Structure<T>();
        }

        clear(): void {
            this.list.clear();
        }

        isEmpty(): boolean {
            return this.list.isEmpty();
        }

        push(t: T): void {
            this.list.addFirstItem(t);
        }

        pop(): T {
            return this.list.removeFirstItem();
        }

        getIterator(): IIterator<T> {
            return this.list.getIterator();
        }
    }
}