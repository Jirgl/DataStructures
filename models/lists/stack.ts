module JirglStructures.Lists {
    export class Stack<T> implements IIterable<T> {
        protected list: DoublyLinkedList<T>;

        constructor() {
            this.list = new DoublyLinkedList<T>();
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