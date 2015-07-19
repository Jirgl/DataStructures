﻿module JirglStructures.GuiExtender {
    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList<GuiItem> {
        getCurrentGuiItem(): Lists.Item<GuiItem> {
            return this.currentItem;
        }

        getFirstGuiItem(): Lists.Item<GuiItem> {
            return this.firstItem;
        }

        getIterator(): GuiDoublyLinkedListIterator {
            return new GuiDoublyLinkedListIterator(this.firstItem, this.currentItem);
        }
    }

    export class GuiDoublyLinkedListIterator extends Lists.DoublyLinkedListIterator<GuiItem> {
        private currentGuiItem: Lists.Item<GuiItem>;
        orderOfItem: number;

        constructor(firstItem: Lists.Item<GuiItem>, currentItem?: Lists.Item<GuiItem>) {
            super(firstItem);
            this.currentGuiItem = currentItem;
            this.orderOfItem = 0;
        }

        next(): GuiItem {
            //check isCurrent is important here, next() changes currentItem
            var isCurrent = false;
            if (this.currentGuiItem !== undefined) {
                isCurrent = this.currentItem === this.currentGuiItem;
            }

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