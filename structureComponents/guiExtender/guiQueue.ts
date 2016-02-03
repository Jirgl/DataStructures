/// <reference path="guiDoublyLinkedList.ts" />
/// <reference path="guiListIterator.ts" />

module JirglStructures.GuiExtender {
    export class GuiQueue {
        private guiList: GuiDoublyLinkedList;

        constructor() {
            this.guiList = new GuiDoublyLinkedList();
        }

        clear(): void {
            this.guiList.clear();
        }

        isEmpty(): boolean {
            return this.guiList.isEmpty();
        }

        getFirstGuiItem(): Lists.Item<GuiItem> {
            return this.guiList.getFirstGuiItem();
        }

        enqueue(item: GuiItem): void {
            this.guiList.addLastItem(item);
        }

        dequeue(): GuiItem {
            return this.guiList.removeFirstItem();
        }

        getIterator(): GuiListIterator {
            return new GuiListIterator(this.getFirstGuiItem());
        }
    }
}