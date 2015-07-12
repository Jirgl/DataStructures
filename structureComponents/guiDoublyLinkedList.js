var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JirglStructures;
(function (JirglStructures) {
    var GuiDoublyLinkedList = (function (_super) {
        __extends(GuiDoublyLinkedList, _super);
        function GuiDoublyLinkedList() {
            _super.call(this);
            this.iterator = new GuiDoublyLinkedListIterator(this);
        }
        GuiDoublyLinkedList.prototype.getItemPosition = function (maxWidth) {
            var itemWidthWithMargin = (JirglStructures.itemWidth + (JirglStructures.itemMargin * 2));
            var itemsPerLine = Math.floor(maxWidth / itemWidthWithMargin);
            return {
                x: ((this.iterator.orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                y: Math.floor((this.iterator.orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
            };
        };
        GuiDoublyLinkedList.prototype.getArrowsPositions = function (previousPosition, position) {
            return [
                {
                    start: { x: previousPosition.x + JirglStructures.itemWidth + JirglStructures.itemMargin, y: previousPosition.y + JirglStructures.itemHeight / 2 + JirglStructures.itemMargin },
                    end: { x: position.x + JirglStructures.itemMargin, y: position.y + JirglStructures.itemHeight / 2 + JirglStructures.itemMargin }
                }
            ];
        };
        GuiDoublyLinkedList.prototype.getIterator = function () {
            return this.iterator;
        };
        return GuiDoublyLinkedList;
    })(JirglStructures.Lists.DoublyLinkedList);
    JirglStructures.GuiDoublyLinkedList = GuiDoublyLinkedList;
    var GuiDoublyLinkedListIterator = (function (_super) {
        __extends(GuiDoublyLinkedListIterator, _super);
        function GuiDoublyLinkedListIterator(doublyLinkedList) {
            _super.call(this, doublyLinkedList);
            this.orderOfItem = 0;
        }
        GuiDoublyLinkedListIterator.prototype.next = function () {
            var isCurrent = this.doublyLinkedList.currentItem === this.iteratorCurrentItem;
            var item = _super.prototype.next.call(this);
            item.isCurrent = isCurrent;
            this.orderOfItem++;
            return item;
        };
        GuiDoublyLinkedListIterator.prototype.reset = function () {
            _super.prototype.reset.call(this);
            this.orderOfItem = 0;
        };
        return GuiDoublyLinkedListIterator;
    })(JirglStructures.Lists.DoublyLinkedListIterator);
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiDoublyLinkedList.js.map