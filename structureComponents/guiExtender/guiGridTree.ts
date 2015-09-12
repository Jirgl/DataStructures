module JirglStructures.GuiExtender {
    export class GuiGridTree implements IGrid {
        private depth: number;
        private iterator: GuiTreeIterator;
        private widthReduction = 500;
        private levelHeight = 80;

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
            var position = this.getItemPosition(parentOrderInLevel, this.iterator.depth - 1);

            return position;
        }

        private getItemPosition(orderInLevel: number, depth: number): Position {
            var countInLevel = Math.pow(2, depth);
            var itemWidthWithMargin = Item.itemWidth + (Item.itemMargin * 2);
            var widthPerItem = Math.max(this.getWidth() / countInLevel, itemWidthWithMargin);

            var height = 0;
            for (var i = depth; i > 0; i--) {
                height += (this.depth - i) * this.levelHeight;
            }

            return {
                x: orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
                y: depth * itemWidthWithMargin + height
            };
        }

        getArrowsPositions(previousPosition: Position, position: Position): ArrowPosition[] {
            var childArrowOffset = position.x < previousPosition.x
                ? -Item.arrowMargin
                : Item.arrowMargin;

            return [
                {
                    start: {
                        x: previousPosition.x + Item.itemWidth / 2 + Item.itemMargin + childArrowOffset,
                        y: previousPosition.y + Item.itemHeight + Item.itemMargin + Item.arrowMargin
                    },
                    end: {
                        x: position.x + Item.itemWidth / 2 + Item.itemMargin,
                        y: position.y + Item.itemMargin - Item.arrowMargin
                    }
                }
            ];
        }

        getWidth(): number {
            var baseWidth = b.getMedia().width - this.widthReduction;
            var treeWidth = Math.pow(2, this.depth) * (Item.itemWidth + (2 * Item.itemMargin));

            return Math.max(baseWidth, treeWidth);
        }
    }
}