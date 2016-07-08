import { ListIterator, IEnrichedContent } from './listIterator';
import { Structure as LinkedList, Item } from '../../../models/lists/linkedList';

class EnrichedLinkedList extends LinkedList<string, IEnrichedContent> {
    getFirst(): Item<string, IEnrichedContent> {
        return this.firstItem;
    }

    getCurrent(): Item<string, IEnrichedContent> {
        return this.currentItem;
    }
}

export class Structure {
    private linkedList: EnrichedLinkedList;

    constructor() {
        this.linkedList = new EnrichedLinkedList();
    }

    addFirstItem(content: string): void {
        this.linkedList.addFirstItem(content, { content: content, isHighlighted: false });
    }

    addLastItem(content: string): void {
        this.linkedList.addLastItem(content, { content: content, isHighlighted: false });
    }

    addNextItem(content: string): void {
        this.linkedList.addNextItem(content, { content: content, isHighlighted: false });
    }

    addPreviousItem(content: string): void {
        this.linkedList.addPreviousItem(content, { content: content, isHighlighted: false });
    }

    removeCurrentItem(): void {
        this.linkedList.removeCurrentItem();
    }

    removeFirstItem(): void {
        this.linkedList.removeFirstItem();
    }

    removeLastItem(): void {
        this.linkedList.removeLastItem();
    }

    removeNextItem(): void {
        this.linkedList.removeNextItem();
    }

    removePreviousItem(): void {
        this.linkedList.removePreviousItem();
    }

    getIterator(): ListIterator {
        return new ListIterator(this.linkedList.getFirst(), this.linkedList.getCurrent());
    }
}
