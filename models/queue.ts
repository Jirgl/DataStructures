module JirglStructures.Lists {
    export class Queue<T> implements IIterable<T> {
        protected list: DoublyLinkedList<T>;

        constructor() {
            this.list = new DoublyLinkedList<T>();
        }

        enqueue(t: T): void {
            this.list.addLastItem(t);
        }

        dequeue(): T {
            return this.list.removeFirstItem();
        }

        getIterator(): IIterator<T> {
            return this.list.getIterator();
        }
    }
}