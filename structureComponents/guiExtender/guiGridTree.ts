module JirglStructures.GuiExtender {
    export class GuiGridTree implements IGrid {
        private depth: number;
        private iterator: GuiTreeIterator;
        private widthReduction = 500;

        constructor(depth: number, iterator: GuiTreeIterator) {
            this.depth = depth;
            this.iterator = iterator;
        }

        getArrowType(): ArrowType {
            return ArrowType.DirectTwoWay;
        }

        getPosition(): Position {
            return this.getItemPosition(this.iterator.orderInLevel, this.iterator.depth);
        }

        getPositionOfPreviousItem(): Position {
            if (this.iterator.depth === 0) {
                return undefined;
            }

            var parentIndex = Math.floor((this.iterator.indexOfCurrentNode - 1) / 2);
            var parentOrderInLevel = (parentIndex + 1) - Math.pow(2, this.iterator.depth - 1);
            var pos = this.getItemPosition(parentOrderInLevel, this.iterator.depth - 1);

            return pos;
        }

        private getItemPosition(orderInLevel: number, depth: number): Position {
            var countInLevel = Math.pow(2, depth);
            var itemWidthWithMargin = itemWidth + (itemMargin * 2);
            var widthPerItem = Math.max(this.getWidth() / countInLevel, itemWidthWithMargin);

            return {
                x: orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
                y: depth * itemWidthWithMargin
            };
        }

        getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[]{
            return [
                {
                    start: { x: previousPosition.x + itemWidth / 2 + itemMargin, y: previousPosition.y + itemHeight + itemMargin },
                    end: { x: position.x + itemWidth / 2 + itemMargin, y: position.y + itemMargin }
                }
            ];
        }

        getWidth(): number {
            var baseWidth = b.getMedia().width - this.widthReduction;
            var treeWidth = Math.pow(2, this.depth) * (itemWidth + (2 * itemMargin));

            return Math.max(baseWidth, treeWidth);
        }
    }
}