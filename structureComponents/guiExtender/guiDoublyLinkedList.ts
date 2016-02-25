/// <reference path="guiListIterator.ts" />

module JirglStructures.GuiExtender {
    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList.Structure<GuiItem> {
        getCurrentGuiItem(): Lists.DoublyLinkedList.Item<GuiItem> {
            return this.currentItem;
        }

        getFirstGuiItem(): Lists.DoublyLinkedList.Item<GuiItem> {
            return this.firstItem;
        }

        getIterator(): GuiListIterator {
            return new GuiListIterator(this.firstItem, this.currentItem);
        }
    }
}