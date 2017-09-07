import { DoublyLinkedList } from 'jirgl-data-structures';
import { ListIterator, IEnrichedContent } from '../listIterator';

class EnrichedDoublyLinkedList extends DoublyLinkedList.Structure<string, IEnrichedContent> {
    getFirst(): DoublyLinkedList.Item<string, IEnrichedContent> | undefined {
        return this.firstItem;
    }
}

export class Structure {
    private doublyLinkedList: EnrichedDoublyLinkedList;

    constructor() {
        this.doublyLinkedList = new EnrichedDoublyLinkedList();
    }

    clear(): void {
        this.doublyLinkedList.clear();
    }

    isEmpty(): boolean {
        return this.doublyLinkedList.isEmpty();
    }

    enqueue(content: string): void {
        this.doublyLinkedList.addLastItem(content, {
            content: content,
            isActive: false
        });
    }

    dequeue(): void {
        this.doublyLinkedList.removeFirstItem();
    }

    getIterator(): ListIterator {
        return new ListIterator(this.doublyLinkedList.getFirst(), this.doublyLinkedList.getFirst());
    }
}
