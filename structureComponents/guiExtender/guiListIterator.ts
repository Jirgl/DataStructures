module JirglStructures.GuiExtender {
    export class GuiListIterator<T> extends Lists.DoublyLinkedListIterator<GuiItem<T>> {
        private currentGuiItem: Lists.Item<GuiItem<T>>;
        orderOfItem: number;

        constructor(firstItem: Lists.Item<GuiItem<T>>, currentItem?: Lists.Item<GuiItem<T>>) {
            super(firstItem);
            this.currentGuiItem = currentItem;
            this.orderOfItem = 0;
        }

        next(): GuiItem<T> {
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