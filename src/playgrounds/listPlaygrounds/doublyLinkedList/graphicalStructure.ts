import { DoublyLinkedList } from 'jirgl-data-structures';
import { ListIterator, IEnrichedContent } from '../listIterator';

class EnrichedDoublyLinkedList extends DoublyLinkedList.Structure<string, IEnrichedContent> {
    getFirst(): DoublyLinkedList.Item<string, IEnrichedContent> | undefined {
        return this.firstItem;
    }

    getCurrent(): DoublyLinkedList.Item<string, IEnrichedContent> | undefined {
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
            isActive: false
        });
    }

    addLastItem(content: string): void {
        this.doublyLinkedList.addLastItem(content, {
            content: content,
            isActive: false
        });
    }

    addNextItem(content: string): void {
        this.doublyLinkedList.addNextItem(content, {
            content: content,
            isActive: false
        });
    }

    addPreviousItem(content: string): void {
        this.doublyLinkedList.addPreviousItem(content, {
            content: content,
            isActive: false
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
