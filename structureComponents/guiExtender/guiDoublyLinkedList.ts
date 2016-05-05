/// <reference path="guiListIterator.ts" />

module JirglStructures.GuiExtender {
    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList.Structure<string, GuiItem> {
        getCurrentGuiItem(): Lists.DoublyLinkedList.Item<string, GuiItem> {
            return this.currentItem;
        }

        getFirstGuiItem(): Lists.DoublyLinkedList.Item<string, GuiItem> {
            return this.firstItem;
        }

        getIterator(): GuiListIterator {
            return new GuiListIterator(this.firstItem, this.currentItem);
        }
    }
}