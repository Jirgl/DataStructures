import { IIterator, SinglyLinkedList } from 'jirgl-data-structures';

export interface IIteratorItem {
    content: string;
    isActive: boolean;
    index: number;
    previousIndex: number;
}

export class ListIterator implements IIterator<IIteratorItem> {
    private index: number = -1;
    private iteratorCurrent: SinglyLinkedList.Item<string, string> | undefined;

    constructor(
        private firstItem: SinglyLinkedList.Item<string, string> | undefined,
        private currentItem: SinglyLinkedList.Item<string, string> | undefined) {
        this.iteratorCurrent = firstItem;
    }

    hasNext(): boolean {
        return !!this.iteratorCurrent;
    }

    next(): IIteratorItem {
        if (!this.iteratorCurrent || !this.currentItem)
            throw 'end of collection';

        const current = this.iteratorCurrent;
        this.iteratorCurrent = this.iteratorCurrent.next;
        this.index++;
        return {
            content: current.key,
            isActive: this.currentItem && this.currentItem === current,
            index: this.index,
            previousIndex: this.index - 1
        };
    }

    reset() {
        this.iteratorCurrent = this.firstItem;
        this.index = -1;
    }
}
