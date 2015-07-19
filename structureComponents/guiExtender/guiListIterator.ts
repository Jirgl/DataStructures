module JirglStructures.GuiExtender {
    export class GuiListIterator extends Lists.DoublyLinkedListIterator<GuiItem> {
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