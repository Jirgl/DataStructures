/// <reference path="guiDoublyLinkedList.ts" />

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

        getFirstGuiItem(): Lists.DoublyLinkedList.Item<string, GuiItem> {
            return this.guiList.getFirstGuiItem();
        }

        enqueue(item: GuiItem): void {
            this.guiList.addLastItem(item.data, item);
        }

        dequeue(): GuiItem {
            return this.guiList.removeFirstItem();
        }

        getIterator(): GuiListIterator {
            return new GuiListIterator(this.getFirstGuiItem());
        }
    }
}