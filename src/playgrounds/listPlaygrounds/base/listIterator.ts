import { IIterator, SinglyLinkedList } from 'jirgl-data-structures';

export interface IIteratorItem {
    content: string;
    isActive: boolean;
    index: number;
    previousIndex: number;
}

export class ListIterator implements IIterator<IIteratorItem> {
    private index: number = -1;
    private currentItemOfIterator: SinglyLinkedList.Item<string, string> | undefined;

    constructor(
        private firstItem: SinglyLinkedList.Item<string, string> | undefined,
        private currentItem: SinglyLinkedList.Item<string, string> | undefined) {
        this.currentItemOfIterator = firstItem;
    }

    hasNext(): boolean {
        return !!this.currentItemOfIterator;
    }

    next(): IIteratorItem {
        if (!this.currentItemOfIterator || !this.currentItem)
            throw 'end of collection';

        const current = this.currentItemOfIterator;
        this.currentItemOfIterator = this.currentItemOfIterator.next;
        this.index++;
        return {
            content: current.key,
            isActive: this.currentItem && this.currentItem === current,
            index: this.index,
            previousIndex: this.index - 1
        };
    }

    reset() {
        this.currentItemOfIterator = this.firstItem;
        this.index = -1;
    }
}
