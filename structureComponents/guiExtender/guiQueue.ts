﻿module JirglStructures.GuiExtender {
    export class GuiQueue {
        private guiList: GuiDoublyLinkedList;

        constructor() {
            this.guiList = new GuiDoublyLinkedList();
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