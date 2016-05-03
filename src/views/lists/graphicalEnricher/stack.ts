import { ListIterator, IEnrichedContent } from './listIterator';
import { Structure as DoublyLinkedList, Item } from '../../../models/lists/doublyLinkedList';

class EnrichedDoublyLinkedList extends DoublyLinkedList<string, IEnrichedContent> {
    getFirst(): Item<string, IEnrichedContent> {
        return this.firstItem;
    }
}

export class Structure {
    private doublyLinkedList: EnrichedDoublyLinkedList;

    constructor() {
        this.doublyLinkedList = new EnrichedDoublyLinkedList();
    }

    push(content: string): void {
        this.doublyLinkedList.addFirstItem(content, {
            content: content,
            isCurrent: false
        });
    }

    pop(): void {
        this.doublyLinkedList.removeFirstItem();
    }

    getIterator(): ListIterator {
        return new ListIterator(this.doublyLinkedList.getFirst());
    }
}
