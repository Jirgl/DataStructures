import { DoublyLinkedList } from 'jirgl-data-structures';
import { ListIterator } from '../common/listIterator';

class EnrichedDoublyLinkedList extends DoublyLinkedList.Structure<string, string> {
    getFirst(): DoublyLinkedList.Item<string, string> | undefined {
        return this.firstItem;
    }
}

export class Structure {
    private doublyLinkedList: EnrichedDoublyLinkedList;

    constructor() {
        this.doublyLinkedList = new EnrichedDoublyLinkedList();
    }

    push(content: string): void {
        this.doublyLinkedList.addFirstItem(content, content);
    }

    pop(): void {
        this.doublyLinkedList.removeFirstItem();
    }

    getIterator(): ListIterator {
        return new ListIterator(this.doublyLinkedList.getFirst(), this.doublyLinkedList.getFirst());
    }
}
