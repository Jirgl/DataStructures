var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiDoublyLinkedList = (function (_super) {
            __extends(GuiDoublyLinkedList, _super);
            function GuiDoublyLinkedList() {
                _super.apply(this, arguments);
            }
            GuiDoublyLinkedList.prototype.getCurrentGuiItem = function () {
                return this.currentItem;
            };
            GuiDoublyLinkedList.prototype.getFirstGuiItem = function () {
                return this.firstItem;
            };
            GuiDoublyLinkedList.prototype.getIterator = function () {
                return new GuiDoublyLinkedListIterator(this.firstItem, this.currentItem);
            };
            return GuiDoublyLinkedList;
        })(JirglStructures.Lists.DoublyLinkedList);
        GuiExtender.GuiDoublyLinkedList = GuiDoublyLinkedList;
        var GuiDoublyLinkedListIterator = (function (_super) {
            __extends(GuiDoublyLinkedListIterator, _super);
            function GuiDoublyLinkedListIterator(firstItem, currentItem) {
                _super.call(this, firstItem);
                this.currentGuiItem = currentItem;
                this.orderOfItem = 0;
            }
            GuiDoublyLinkedListIterator.prototype.next = function () {
                //check isCurrent is important here, next() changes currentItem
                var isCurrent = false;
                if (this.currentGuiItem !== undefined) {
                    isCurrent = this.currentItem === this.currentGuiItem;
                }
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
        GuiExtender.GuiDoublyLinkedListIterator = GuiDoublyLinkedListIterator;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiDoublyLinkedList.js.map