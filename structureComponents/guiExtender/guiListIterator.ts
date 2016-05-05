/// <reference path="../../models/iterator.ts" />
/// <reference path="../../models/lists/queue.ts" />
/// <reference path="guiItem.ts" />

module JirglStructures.GuiExtender {
    export class GuiListIterator extends Lists.DoublyLinkedList.Iterator<string, GuiItem> {
        previousGuiItem: Lists.DoublyLinkedList.Item<string, GuiItem>;
        currentGuiItem: Lists.DoublyLinkedList.Item<string, GuiItem>;
        orderOfItem: number;

        constructor(firstItem: Lists.DoublyLinkedList.Item<string, GuiItem>, currentItem?: Lists.DoublyLinkedList.Item<string, GuiItem>) {
            super(firstItem);
            this.previousGuiItem = undefined;
            this.currentGuiItem = currentItem;
            this.orderOfItem = 0;
        }

        next(): IGuiItem {
            //check isCurrent is important here, next() changes currentItem
            let isCurrent = false;
            if (this.currentGuiItem !== undefined) {
                isCurrent = this.currentItem === this.currentGuiItem;
            }

            this.previousGuiItem = this.currentItem;
            const item = super.next();
            item.isCurrent = isCurrent;
            this.orderOfItem++;

            return {
                key: this.previousGuiItem.key,
                data: item.data,
                isCurrent: item.isCurrent
            };
        }

        reset(): void {
            super.reset();
            this.orderOfItem = 0;
        }
    }
}