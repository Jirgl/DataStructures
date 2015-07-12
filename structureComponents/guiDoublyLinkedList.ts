module JirglStructures {
    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList<GuiItem> implements IGrid {
        private iterator: GuiDoublyLinkedListIterator;

        constructor() {
            super();
            this.iterator = new GuiDoublyLinkedListIterator(this);
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
            return this.iterator;
        }
    }

    class GuiDoublyLinkedListIterator extends Lists.DoublyLinkedListIterator<GuiItem> implements IIterator<GuiItem> {
        orderOfItem: number;

        constructor(doublyLinkedList: Lists.DoublyLinkedList<GuiItem>) {
            super(doublyLinkedList);
            this.orderOfItem = 0;
        }

        next(): GuiItem {
            var isCurrent = this.doublyLinkedList.currentItem === this.iteratorCurrentItem;
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