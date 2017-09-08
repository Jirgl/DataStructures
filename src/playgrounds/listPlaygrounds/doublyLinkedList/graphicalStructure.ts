import { DoublyLinkedList } from 'jirgl-data-structures';
import { ListIterator } from '../base/listIterator';

class EnrichedDoublyLinkedList extends DoublyLinkedList.Structure<string, string> {
    getFirst(): DoublyLinkedList.Item<string, string> | undefined {
        return this.firstItem;
    }

    getCurrent(): DoublyLinkedList.Item<string, string> | undefined {
        return this.currentItem;
    }
}

export class Structure {
    private doublyLinkedList: EnrichedDoublyLinkedList;

    constructor() {
        this.doublyLinkedList = new EnrichedDoublyLinkedList();
    }

    addFirstItem(content: string): void {
        this.doublyLinkedList.addFirstItem(content, content);
    }

    addLastItem(content: string): void {
        this.doublyLinkedList.addLastItem(content, content);
    }

    addNextItem(content: string): void {
        this.doublyLinkedList.addNextItem(content, content);
    }

    addPreviousItem(content: string): void {
        this.doublyLinkedList.addPreviousItem(content, content);
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
