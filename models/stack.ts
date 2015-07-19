module JirglStructures.Lists {
    export class Stack<T> implements IIterable<T> {
        protected list: DoublyLinkedList<T>;

        constructor() {
            this.list = new DoublyLinkedList<T>();
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