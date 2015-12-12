module JirglStructures.Lists {
    export class Item<T> {
        data: T;
        next: Item<T>;
        previous: Item<T>;

        constructor(data: T) {
            this.data = data;
        }
    }

    export class DoublyLinkedList<T> implements IIterable<T> {
        protected currentItem: Item<T>;
        protected firstItem: Item<T>;
        protected lastItem: Item<T>;

        clear(): void {
            this.currentItem = this.firstItem = this.lastItem = undefined;
        }

        isEmpty(): boolean {
            return this.firstItem === undefined;
        }

        addFirstItem(t: T): void {
            var item = new Item<T>(t);

            if (this.firstItem === undefined) {
                this.firstItem = this.lastItem = this.currentItem = item;
            } else {
                item.next = this.firstItem;
                this.firstItem.previous = item;
                this.firstItem = item;
                this.currentItem = this.firstItem;
            }
        }

        addLastItem(t: T): void {
            var item = new Item<T>(t);

            if (this.lastItem === undefined) {
                this.firstItem = this.lastItem = this.currentItem = item;
            } else {
                item.previous = this.lastItem;
                this.lastItem.next = item;
                this.lastItem = item;
                this.currentItem = this.lastItem;
            }
        }

        addNextItem(t: T): void {
            var item = new Item<T>(t);

            if (this.currentItem === undefined) {
                this.firstItem = this.lastItem = this.currentItem = item;
            } else if (this.currentItem === this.lastItem) {
                this.addLastItem(t);
            } else {
                item.next = this.currentItem.next;
                item.previous = this.currentItem;
                this.currentItem.next.previous = item;
                this.currentItem.next = item;
                this.currentItem = item;
            }
        }

        addPreviousItem(t: T): void {
            var item = new Item<T>(t);

            if (this.currentItem == null) {
                this.firstItem = this.lastItem = this.currentItem = item;
            } else if (this.currentItem === this.firstItem) {
                this.addFirstItem(t);
            } else {
                item.next = this.currentItem;
                item.previous = this.currentItem.previous;
                this.currentItem.previous.next = item;
                this.currentItem.previous = item;
                this.currentItem = item;
            }
        }

        getCurrentItem(): T {
            return this.currentItem.data;
        }

        getFirstItem(): T {
            return this.firstItem.data;
        }

        getLastItem(): T {
            return this.lastItem.data;
        }

        getNextItem(): T {
            return this.currentItem.next.data;
        }

        getPreviousItem(): T {
            return this.currentItem.previous.data;
        }

        removeCurrentItem(): T {
            if (this.currentItem === undefined) {
                return undefined;
            }

            if (this.currentItem === this.firstItem) {
                return this.removeFirstItem();
            } else if (this.currentItem === this.lastItem) {
                return this.removeLastItem();
            } else {
                var itemData = this.currentItem.data;
                this.currentItem.previous.next = this.currentItem.next;
                this.currentItem.next.previous = this.currentItem.previous;
                this.currentItem.previous = undefined;
                this.currentItem.next = undefined;
                this.currentItem = this.firstItem;

                return itemData;
            }
        }

        removeFirstItem(): T {
            if (this.firstItem === undefined) {
                return undefined;
            }

            var itemData = this.firstItem.data;
            if (this.firstItem === this.lastItem) {
                this.firstItem = this.lastItem = this.currentItem = undefined;
            } else {
                var newFirstItem = this.firstItem.next;
                this.firstItem.next.previous = undefined;
                this.firstItem.next = undefined;

                if (this.firstItem === this.currentItem) {
                    this.currentItem = newFirstItem;
                }

                this.firstItem = newFirstItem;
            }

            return itemData;
        }

        removeLastItem(): T {
            if (this.lastItem === undefined) {
                return undefined;
            }

            var itemData = this.lastItem.data;
            if (this.lastItem === this.firstItem) {
                this.firstItem = this.lastItem = this.currentItem = undefined;
            } else {
                var newLastItem = this.lastItem.previous;
                this.lastItem.previous.next = undefined;
                this.lastItem.previous = undefined;

                if (this.lastItem === this.currentItem) {
                    this.currentItem = this.firstItem;
                }

                this.lastItem = newLastItem;
            }

            return itemData;
        }

        removeNextItem(): T {
            if (this.currentItem === undefined || this.currentItem.next === undefined) {
                return undefined;
            } else if (this.currentItem.next === this.lastItem) {
                return this.removeLastItem();
            } else {
                var itemData = this.currentItem.next.data;
                var newNextItem = this.currentItem.next.next;
                this.currentItem.next.next.previous = this.currentItem;
                this.currentItem.next.next = undefined;
                this.currentItem.next.previous = undefined;
                this.currentItem.next = newNextItem;

                return itemData;
            }
        }

        removePreviousItem(): T {
            if (this.currentItem == undefined || this.currentItem.previous === undefined) {
                return undefined;
            } else if (this.currentItem.previous === this.firstItem) {
                return this.removeFirstItem();
            } else {
                var itemData = this.currentItem.previous.data;
                var newPreviousItem = this.currentItem.previous.previous;
                this.currentItem.previous.previous.next = this.currentItem;
                this.currentItem.previous.previous = undefined;
                this.currentItem.previous.next = undefined;
                this.currentItem.previous = newPreviousItem;

                return itemData;
            }
        }

        getIterator(): IIterator<T> {
            return new DoublyLinkedListIterator<T>(this.firstItem);
        }
    }

    export class DoublyLinkedListIterator<T> implements IIterator<T> {
        protected currentItem: Item<T>;
        protected firstItem: Item<T>;

        constructor(firstItem: Item<T>) {
            this.firstItem = this.currentItem = firstItem;
        }

        hasNext(): boolean {
            return this.currentItem != undefined;
        }

        next(): T {
            var current = this.currentItem;
            this.currentItem = this.currentItem.next;
            return current.data;
        }

        reset(): void {
            this.currentItem = this.firstItem;
        }
    }
}