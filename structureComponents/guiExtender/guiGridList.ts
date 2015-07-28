/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.media.d.ts"/>

module JirglStructures.GuiExtender {
    export enum GuiListType {
        LinkedList,
        Queue,
        Stack
    }

    export class GuiGridList implements IGrid {
        private iterator: GuiListIterator;
        private widthReduction = 500;

        constructor(iterator: GuiListIterator) {
            this.iterator = iterator;
        }

        getArrowType(): ArrowType {
            return ArrowType.SchemaTwoWay;
        }

        getPosition(): Position {
            return this.getItemPosition(this.iterator.orderOfItem);
        }

        getPositionOfPreviousItem(): Position {
            if (this.iterator.orderOfItem > 1) {
                return this.getItemPosition(this.iterator.orderOfItem - 1);
            } else {
                return undefined;
            }
        }

        private getItemPosition(orderOfItem: number): Position {
            var itemWidthWithMargin = (itemWidth + (itemMargin * 2));
            var itemsPerLine = Math.floor(b.getMedia().width - this.widthReduction / itemWidthWithMargin);

            return {
                x: ((orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
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

        getWidth(): number {
            return b.getMedia().width - this.widthReduction;
        }
    }
}