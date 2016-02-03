/// <reference path="../../bobril/bobril.media.d.ts" />
/// <reference path="../../components/item.ts" />
/// <reference path="../grid.ts" />
/// <reference path="guiTreeIterator.ts" />
var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiGridTree = (function () {
            function GuiGridTree(depth, iterator) {
                this.widthReduction = 500;
                this.levelHeight = 80;
                this.depth = depth;
                this.iterator = iterator;
            }
            GuiGridTree.prototype.getArrowType = function () {
                return JirglStructures.ArrowType.DirectTwoWay;
            };
            GuiGridTree.prototype.getPosition = function () {
                return this.getItemPosition(this.iterator.orderInLevel, this.iterator.depth);
            };
            GuiGridTree.prototype.getPositionOfPreviousItem = function () {
                if (this.iterator.depth === 0) {
                    return undefined;
                }
                var parentIndex = Math.floor((this.iterator.indexOfCurrentNode - 1) / 2);
                var parentOrderInLevel = (parentIndex + 1) - Math.pow(2, this.iterator.depth - 1);
                var position = this.getItemPosition(parentOrderInLevel, this.iterator.depth - 1);
                return position;
            };
            GuiGridTree.prototype.getItemPosition = function (orderInLevel, depth) {
                var countInLevel = Math.pow(2, depth);
                var itemWidthWithMargin = JirglStructures.Item.itemWidth + (JirglStructures.Item.itemMargin * 2);
                var widthPerItem = Math.max(this.getWidth() / countInLevel, itemWidthWithMargin);
                var height = 0;
                for (var i = depth; i > 0; i--) {
                    height += (this.depth - i) * this.levelHeight;
                }
                return {
                    x: orderInLevel * widthPerItem + widthPerItem / 2 - itemWidthWithMargin / 2,
                    y: depth * itemWidthWithMargin + height
                };
            };
            GuiGridTree.prototype.getArrowsPositions = function (previousPosition, position) {
                var childArrowOffset = position.x < previousPosition.x
                    ? -JirglStructures.Item.arrowMargin
                    : JirglStructures.Item.arrowMargin;
                return [
                    {
                        start: {
                            x: previousPosition.x + JirglStructures.Item.itemWidth / 2 + JirglStructures.Item.itemMargin + childArrowOffset,
                            y: previousPosition.y + JirglStructures.Item.itemHeight + JirglStructures.Item.itemMargin + JirglStructures.Item.arrowMargin
                        },
                        end: {
                            x: position.x + JirglStructures.Item.itemWidth / 2 + JirglStructures.Item.itemMargin,
                            y: position.y + JirglStructures.Item.itemMargin - JirglStructures.Item.arrowMargin
                        }
                    }
                ];
            };
            GuiGridTree.prototype.getWidth = function () {
                var baseWidth = b.getMedia().width - this.widthReduction;
                var treeWidth = Math.pow(2, this.depth) * (JirglStructures.Item.itemWidth + (2 * JirglStructures.Item.itemMargin));
                return Math.max(baseWidth, treeWidth);
            };
            return GuiGridTree;
        })();
        GuiExtender.GuiGridTree = GuiGridTree;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiGridTree.js.map