import { IIterator } from '../../../models/iterator';
import { Item } from '../../../models/lists/linkedList';

export interface IEnrichedContent {
    content: string;
    isCurrent: boolean;
    orderOfItem?: number;
}

export class ListIterator implements IIterator<IEnrichedContent> {
    orderOfItem: number;
    firstItem: Item<string, IEnrichedContent>;
    currentItem: Item<string, IEnrichedContent>;
    iteratorCurrent: Item<string, IEnrichedContent>;

    constructor(firstItem: Item<string, IEnrichedContent>, currentItem?: Item<string, IEnrichedContent>) {
        this.firstItem = this.iteratorCurrent = firstItem;
        this.currentItem = currentItem;
        this.orderOfItem = 0;
    }

    hasNext(): boolean {
        return !!this.iteratorCurrent;
    }

    next(): IEnrichedContent {
        let current = this.iteratorCurrent;
        this.iteratorCurrent = this.iteratorCurrent.next;
        return {
            content: current.key,
            isCurrent: this.currentItem && this.currentItem === current,
            orderOfItem: this.orderOfItem++
        };
    }

    reset(): void {
        this.iteratorCurrent = this.firstItem;
        this.orderOfItem = 0;
    }
}
