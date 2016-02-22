/// <reference path="../../bobril/bobril.media.d.ts" />
/// <reference path="../../components/item.ts" />
/// <reference path="../../constants.ts" />
/// <reference path="../grid.ts" />
/// <reference path="guiListIterator.ts" />

module JirglStructures.GuiExtender {
    export enum GuiListType {
        LinkedList,
        Queue,
        Stack
    }

    export class GuiGridList implements IGrid {
        private iterator: GuiListIterator;

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
            const itemWidthWithMargin = (Item.itemWidth + (Item.itemMargin * 2));
            const itemsPerLine = Math.floor(this.getWidth() / itemWidthWithMargin);

            return {
                x: ((orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                y: Math.floor((orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
            };
        }

        getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[] {
            return [
                {
                    start: {
                        x: previousPosition.x + Item.itemWidth + Item.itemMargin + Item.arrowMargin,
                        y: previousPosition.y + Item.itemHeight / 2 + Item.itemMargin
                    },
                    end: {
                        x: position.x + Item.itemMargin - Item.arrowMargin,
                        y: position.y + Item.itemHeight / 2 + Item.itemMargin
                    }
                }
            ];
        }

        getWidth(): number {
            const contentWidth = b.getMedia().width - (PageLayout.sidePadding * 2);
            const percentOfLeftContent = DataStructureLayout.leftContentWidth / 100;
            const percentOfRightContent = DataStructureLayout.rightContentWidth / 100;
            const widthOfLeftContent = percentOfLeftContent * percentOfRightContent;
            return contentWidth * widthOfLeftContent - 25;
        }
    }
}