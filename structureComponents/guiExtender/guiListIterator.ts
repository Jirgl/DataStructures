/// <reference path="../../models/iterator.ts" />
/// <reference path="../../models/lists/queue.ts" />
/// <reference path="guiItem.ts" />

module JirglStructures.GuiExtender {
    export class GuiListIterator extends Lists.DoublyLinkedList.Iterator<GuiItem> {
        previousGuiItem: Lists.DoublyLinkedList.Item<GuiItem>;
        currentGuiItem: Lists.DoublyLinkedList.Item<GuiItem>;
        orderOfItem: number;

        constructor(firstItem: Lists.DoublyLinkedList.Item<GuiItem>, currentItem?: Lists.DoublyLinkedList.Item<GuiItem>) {
            super(firstItem);
            this.previousGuiItem = undefined;
            this.currentGuiItem = currentItem;
            this.orderOfItem = 0;
        }

        next(): GuiItem {
            //check isCurrent is important here, next() changes currentItem
            var isCurrent = false;
            if (this.currentGuiItem !== undefined) {
                isCurrent = this.currentItem === this.currentGuiItem;
            }

            this.previousGuiItem = this.currentItem;
            var item = super.next();
            item.isCurrent = isCurrent;
            this.orderOfItem++;

            return item;
        }

        reset(): void {
            super.reset();
            this.orderOfItem = 0;
        }
    }
}