var JirglStructures;
(function (JirglStructures) {
    (function (GuiListType) {
        GuiListType[GuiListType["LinkedList"] = 0] = "LinkedList";
        GuiListType[GuiListType["Queue"] = 1] = "Queue";
        GuiListType[GuiListType["Stack"] = 2] = "Stack";
    })(JirglStructures.GuiListType || (JirglStructures.GuiListType = {}));
    var GuiListType = JirglStructures.GuiListType;
    var GuiList = (function () {
        function GuiList(type) {
            this.type = type;
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
        GuiList.prototype.getIterator = function () {
            var list = new JirglStructures.GuiDoublyLinkedList();
            if (this.type === 0 /* LinkedList */) {
                this.iterator = new JirglStructures.GuiDoublyLinkedListIterator(list.getFirstGuiItem(), list.getCurrentGuiItem());
            }
            else {
                this.iterator = new JirglStructures.GuiDoublyLinkedListIterator(list.getFirstGuiItem());
            }
            return this.iterator;
        };
        return GuiList;
    })();
    JirglStructures.GuiList = GuiList;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiList.js.map