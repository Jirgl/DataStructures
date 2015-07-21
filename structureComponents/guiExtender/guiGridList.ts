﻿/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.media.d.ts"/>

module JirglStructures.GuiExtender {
    export enum GuiListType {
        LinkedList,
        Queue,
        Stack
    }

    export class GuiGridList<T> implements IGrid {
        private iterator: GuiListIterator<T>;
        private widthReduction = 500;

        constructor(iterator: GuiListIterator<T>) {
            this.iterator = iterator;
        }

        getArrowType(): ArrowType {
            return ArrowType.SchemaTwoWay;
        }

        getPosition(): Position {
            var itemWidthWithMargin = (itemWidth + (itemMargin * 2));
            var itemsPerLine = Math.floor(b.getMedia().width - this.widthReduction / itemWidthWithMargin);

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

        getWidth(): number {
            return b.getMedia().width - this.widthReduction;
        }
    }
}