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
                var pos = this.getItemPosition(parentOrderInLevel, this.iterator.depth - 1);
                return pos;
            };
            GuiGridTree.prototype.getItemPosition = function (orderInLevel, depth) {
                var countInLevel = Math.pow(2, depth);
                var itemWidthWithMargin = JirglStructures.itemWidth + (JirglStructures.itemMargin * 2);
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
                return [
                    {
                        start: { x: previousPosition.x + JirglStructures.itemWidth / 2 + JirglStructures.itemMargin, y: previousPosition.y + JirglStructures.itemHeight + JirglStructures.itemMargin },
                        end: { x: position.x + JirglStructures.itemWidth / 2 + JirglStructures.itemMargin, y: position.y + JirglStructures.itemMargin }
                    }
                ];
            };
            GuiGridTree.prototype.getWidth = function () {
                var baseWidth = b.getMedia().width - this.widthReduction;
                var treeWidth = Math.pow(2, this.depth) * (JirglStructures.itemWidth + (2 * JirglStructures.itemMargin));
                return Math.max(baseWidth, treeWidth);
            };
            return GuiGridTree;
        })();
        GuiExtender.GuiGridTree = GuiGridTree;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiGridTree.js.map