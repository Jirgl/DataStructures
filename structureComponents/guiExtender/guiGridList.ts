module JirglStructures.GuiExtender {
    export enum GuiListType {
        LinkedList,
        Queue,
        Stack
    }

    export class GuiGridList implements IGrid {
        private iterator: GuiDoublyLinkedListIterator;

        constructor(iterator: GuiDoublyLinkedListIterator) {
            this.iterator = iterator;
        }

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
    }
}