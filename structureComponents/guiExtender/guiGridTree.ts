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
            var countInLevel = Math.pow(2, this.iterator.depth);
            var itemWidthWithMargin = itemWidth + (itemMargin * 2);
            var widthPerItem = Math.max(this.getWidth() / countInLevel, itemWidthWithMargin);

            return {
                x: this.iterator.orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
                y: this.iterator.depth * itemWidthWithMargin
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
            var baseWidth = b.getMedia().width - this.widthReduction;
            var treeWidth = Math.pow(2, this.depth) * (itemWidth + (2 * itemMargin));

            return Math.max(baseWidth, treeWidth);
        }
    }
}