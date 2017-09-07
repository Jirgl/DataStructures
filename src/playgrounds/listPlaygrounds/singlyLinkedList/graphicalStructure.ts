import { SinglyLinkedList } from 'jirgl-data-structures';
import { ListIterator, IEnrichedContent } from '../listIterator';

class GraphicalSinglyLinkedList extends SinglyLinkedList.Structure<string, IEnrichedContent> {
    getFirst(): SinglyLinkedList.Item<string, IEnrichedContent> | undefined {
        return this.firstItem;
    }

    getCurrent(): SinglyLinkedList.Item<string, IEnrichedContent> | undefined {
        return this.currentItem;
    }
}

export class Structure {
    private linkedList: GraphicalSinglyLinkedList;

    constructor() {
        this.linkedList = new GraphicalSinglyLinkedList();
    }

    addFirstItem(content: string): void {
        this.linkedList.addFirstItem(content, { content: content, isActive: false });
    }

    addLastItem(content: string): void {
        this.linkedList.addLastItem(content, { content: content, isActive: false });
    }

    addNextItem(content: string): void {
        this.linkedList.addNextItem(content, { content: content, isActive: false });
    }

    addPreviousItem(content: string): void {
        this.linkedList.addPreviousItem(content, { content: content, isActive: false });
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
