import { ListIterator } from './lists/graphicalEnricher/listIterator';
import { TreeIterator } from './trees/graphicalEnricher/treeIterator';

export class IteratorManager {
    private intervalId: number;
    private changeIndex: (number) => void;

    start(iterator: ListIterator | TreeIterator, changeIndex: (number) => void): void {
        let index = 0;
        this.changeIndex = changeIndex;
        this.intervalId = setInterval(function () {
            if (iterator.hasNext()) {
                iterator.next();
            } else {
                clearTimeout(this.intervalId);
            }

            changeIndex(index++);
        }, 1000);
    }

    reset(): void {
        this.changeIndex(-1);
        clearTimeout(this.intervalId);
    }
}
