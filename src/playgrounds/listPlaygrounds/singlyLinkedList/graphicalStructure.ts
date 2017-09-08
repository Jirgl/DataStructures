import { SinglyLinkedList } from 'jirgl-data-structures';
import { ListIterator } from '../base/listIterator';

class EnrichedSinglyLinkedList extends SinglyLinkedList.Structure<string, string> {
    getFirst(): SinglyLinkedList.Item<string, string> | undefined {
        return this.firstItem;
    }

    getCurrent(): SinglyLinkedList.Item<string, string> | undefined {
        return this.currentItem;
    }
}

export class Structure {
    private linkedList: EnrichedSinglyLinkedList;

    constructor() {
        this.linkedList = new EnrichedSinglyLinkedList();
    }

    addFirstItem(content: string): void {
        this.linkedList.addFirstItem(content, content);
    }

    addLastItem(content: string): void {
        this.linkedList.addLastItem(content, content);
    }

    addNextItem(content: string): void {
        this.linkedList.addNextItem(content, content);
    }

    addPreviousItem(content: string): void {
        this.linkedList.addPreviousItem(content, content);
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
