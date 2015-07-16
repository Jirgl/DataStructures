module JirglStructures {
    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList<GuiItem> implements IGrid {
        private iterator: GuiDoublyLinkedListIterator;

        getArrowType(): ArrowType {
            return ArrowType.SchemaTwoWay;
        }

        getItemPosition(maxWidth: number): Position {
            var itemWidthWithMargin = (itemWidth + (itemMargin * 2));
            var itemsPerLine = Math.floor(maxWidth / itemWidthWithMargin);
            return {
                x: ((this.iterator.orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                y: Math.floor((this.iterator.orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
            };
        }

        getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[] {
            return [
                {
                    start: { x: previousPosition.x + itemWidth + itemMargin, y: previousPosition.y + itemHeight / 2 + itemMargin },
                    end: { x: position.x + itemMargin, y: position.y + itemHeight / 2 + itemMargin }
                }
            ];
        }

        getIterator(): IIterator<GuiItem> {
            this.iterator = new GuiDoublyLinkedListIterator(this.firstItem, this.currentItem);
            return this.iterator;
        }
    }

    class GuiDoublyLinkedListIterator extends Lists.DoublyLinkedListIterator<GuiItem> implements IIterator<GuiItem> {
        private currentItem: Lists.Item<GuiItem>;
        orderOfItem: number;

        constructor(firstItem: Lists.Item<GuiItem>, currentItem: Lists.Item<GuiItem>) {
            super(firstItem);
            this.currentItem = currentItem;
            this.orderOfItem = 0;
        }

        next(): GuiItem {
            //check isCurrent is important here, next() changes iteratorCurrentItem
            var isCurrent = this.currentItem === this.iteratorCurrentItem;
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