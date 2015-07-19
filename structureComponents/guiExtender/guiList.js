var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        (function (GuiListType) {
            GuiListType[GuiListType["LinkedList"] = 0] = "LinkedList";
            GuiListType[GuiListType["Queue"] = 1] = "Queue";
            GuiListType[GuiListType["Stack"] = 2] = "Stack";
        })(GuiExtender.GuiListType || (GuiExtender.GuiListType = {}));
        var GuiListType = GuiExtender.GuiListType;
        var GuiList = (function () {
            function GuiList(iterator) {
                this.iterator = iterator;
            }
            GuiList.prototype.getArrowType = function () {
                return 3 /* SchemaTwoWay */;
            };
            GuiList.prototype.getItemPosition = function (maxWidth) {
                var itemWidthWithMargin = (JirglStructures.itemWidth + (JirglStructures.itemMargin * 2));
                var itemsPerLine = Math.floor(maxWidth / itemWidthWithMargin);
                return {
                    x: ((this.iterator.orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                    y: Math.floor((this.iterator.orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
                };
            };
            GuiList.prototype.getArrowsPositions = function (previousPosition, position) {
                return [
                    {
                        start: { x: previousPosition.x + JirglStructures.itemWidth + JirglStructures.itemMargin, y: previousPosition.y + JirglStructures.itemHeight / 2 + JirglStructures.itemMargin },
                        end: { x: position.x + JirglStructures.itemMargin, y: position.y + JirglStructures.itemHeight / 2 + JirglStructures.itemMargin }
                    }
                ];
            };
            return GuiList;
        })();
        GuiExtender.GuiList = GuiList;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiList.js.map