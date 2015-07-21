var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiGridTree = (function () {
            function GuiGridTree(depth, iterator) {
                this.widthReduction = 500;
                this.depth = depth;
                this.iterator = iterator;
            }
            GuiGridTree.prototype.getArrowType = function () {
                return JirglStructures.ArrowType.DirectTwoWay;
            };
            GuiGridTree.prototype.getPosition = function () {
                var itemWidthWithMargin = (JirglStructures.itemWidth + (JirglStructures.itemMargin * 2));
                //var itemsPerLine = Math.floor(maxWidth / itemWidthWithMargin);
                return null; /*{
                    x: ((this.iterator.orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                    y: Math.floor((this.iterator.orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
                };*/
            };
            GuiGridTree.prototype.getArrowsPositions = function (previousPosition, position) {
                return [
                    {
                        start: { x: previousPosition.x + JirglStructures.itemWidth + JirglStructures.itemMargin, y: previousPosition.y + JirglStructures.itemHeight / 2 + JirglStructures.itemMargin },
                        end: { x: position.x + JirglStructures.itemMargin, y: position.y + JirglStructures.itemHeight / 2 + JirglStructures.itemMargin }
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