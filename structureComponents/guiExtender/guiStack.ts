/// <reference path="guiDoublyLinkedList.ts" />

module JirglStructures.GuiExtender {
    export class GuiStack {
        private guiList: GuiDoublyLinkedList;

        constructor() {
            this.guiList = new GuiDoublyLinkedList();
        }

        getFirstGuiItem(): Lists.DoublyLinkedList.Item<GuiItem> {
            return this.guiList.getFirstGuiItem();
        }

        push(item: GuiItem): void {
            this.guiList.addFirstItem(item);
        }

        pop(): GuiItem {
            return this.guiList.removeFirstItem();
        }

        getIterator(): GuiListIterator {
            return new GuiListIterator(this.getFirstGuiItem());
        }
    }
}