import { ListIterator, IEnrichedContent } from './listIterator';
import { Structure as DoublyLinkedList, Item } from '../../../models/lists/doublyLinkedList';

class EnrichedDoublyLinkedList extends DoublyLinkedList<string, IEnrichedContent> {
    getFirst(): Item<string, IEnrichedContent> {
        return this.firstItem;
    }

    getCurrent(): Item<string, IEnrichedContent> {
        return this.currentItem;
    }
}

export class Structure {
    private doublyLinkedList: EnrichedDoublyLinkedList;

    constructor() {
        this.doublyLinkedList = new EnrichedDoublyLinkedList();
    }

    addFirstItem(content: string): void {
        this.doublyLinkedList.addFirstItem(content, {
            content: content,
            isHighlighted: false
        });
    }

    addLastItem(content: string): void {
        this.doublyLinkedList.addLastItem(content, {
            content: content,
            isHighlighted: false
        });
    }

    addNextItem(content: string): void {
        this.doublyLinkedList.addNextItem(content, {
            content: content,
            isHighlighted: false
        });
    }

    addPreviousItem(content: string): void {
        this.doublyLinkedList.addPreviousItem(content, {
            content: content,
            isHighlighted: false
        });
    }

    removeCurrentItem(): void {
        this.doublyLinkedList.removeCurrentItem();
    }

    removeFirstItem(): void {
        this.doublyLinkedList.removeFirstItem();
    }

    removeLastItem(): void {
        this.doublyLinkedList.removeLastItem();
    }

    removeNextItem(): void {
        this.doublyLinkedList.removeNextItem();
    }

    removePreviousItem(): void {
        this.doublyLinkedList.removePreviousItem();
    }

    getIterator(): ListIterator {
        return new ListIterator(this.doublyLinkedList.getFirst(), this.doublyLinkedList.getCurrent());
    }
}
