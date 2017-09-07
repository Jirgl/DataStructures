import { IIterator, SinglyLinkedList } from 'jirgl-data-structures';

export interface IEnrichedContent {
    content: string;
    isActive: boolean;
}

export class ListIterator implements IIterator<IEnrichedContent> {
    indexOfItem: number;
    firstItem: SinglyLinkedList.Item<string, IEnrichedContent> | undefined;
    currentItem: SinglyLinkedList.Item<string, IEnrichedContent> | undefined;
    iteratorCurrent: SinglyLinkedList.Item<string, IEnrichedContent> | undefined;

    constructor(
        firstItem: SinglyLinkedList.Item<string, IEnrichedContent> | undefined,
        currentItem: SinglyLinkedList.Item<string, IEnrichedContent> | undefined) {
        this.firstItem = this.iteratorCurrent = firstItem;
        this.currentItem = currentItem;
        this.indexOfItem = 0;
    }

    hasNext(): boolean {
        return !!this.iteratorCurrent;
    }

    next(): IEnrichedContent {
        if (!this.iteratorCurrent || !this.currentItem)
            throw 'end of collection';

        const current = this.iteratorCurrent;
        this.iteratorCurrent = this.iteratorCurrent.next;
        return {
            content: current.key,
            isActive: this.currentItem && this.currentItem === current
        };
    }

    reset() {
        this.iteratorCurrent = this.firstItem;
        this.indexOfItem = 0;
    }
}
