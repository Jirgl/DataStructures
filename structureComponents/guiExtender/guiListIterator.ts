module JirglStructures.GuiExtender {
    export class GuiListIterator extends Lists.DoublyLinkedListIterator<GuiItem> {
        previousGuiItem: Lists.Item<GuiItem>;
        currentGuiItem: Lists.Item<GuiItem>;
        orderOfItem: number;

        constructor(firstItem: Lists.Item<GuiItem>, currentItem?: Lists.Item<GuiItem>) {
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