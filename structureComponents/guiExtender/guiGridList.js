/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.media.d.ts"/>
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
        var GuiGridList = (function () {
            function GuiGridList(iterator) {
                this.widthReduction = 500;
                this.iterator = iterator;
            }
            GuiGridList.prototype.getArrowType = function () {
                return JirglStructures.ArrowType.SchemaTwoWay;
            };
            GuiGridList.prototype.getPosition = function () {
                return this.getItemPosition(this.iterator.orderOfItem);
            };
            GuiGridList.prototype.getPositionOfPreviousItem = function () {
                if (this.iterator.orderOfItem > 1) {
                    return this.getItemPosition(this.iterator.orderOfItem - 1);
                }
                else {
                    return undefined;
                }
            };
            GuiGridList.prototype.getItemPosition = function (orderOfItem) {
                var itemWidthWithMargin = (JirglStructures.Item.itemWidth + (JirglStructures.Item.itemMargin * 2));
                var itemsPerLine = Math.floor((b.getMedia().width - this.widthReduction) / itemWidthWithMargin);
                return {
                    x: ((orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                    y: Math.floor((orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
                };
            };
            GuiGridList.prototype.getArrowsPositions = function (previousPosition, position) {
                return [
                    {
                        start: {
                            x: previousPosition.x + JirglStructures.Item.itemWidth + JirglStructures.Item.itemMargin + JirglStructures.Item.arrowMargin,
                            y: previousPosition.y + JirglStructures.Item.itemHeight / 2 + JirglStructures.Item.itemMargin
                        },
                        end: {
                            x: position.x + JirglStructures.Item.itemMargin - JirglStructures.Item.arrowMargin,
                            y: position.y + JirglStructures.Item.itemHeight / 2 + JirglStructures.Item.itemMargin
                        }
                    }
                ];
            };
            GuiGridList.prototype.getWidth = function () {
                return b.getMedia().width - this.widthReduction;
            };
            return GuiGridList;
        })();
        GuiExtender.GuiGridList = GuiGridList;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiGridList.js.map