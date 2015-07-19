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
                return new GuiExtender.GuiListIterator(this.firstItem, this.currentItem);
            };
            return GuiDoublyLinkedList;
        })(JirglStructures.Lists.DoublyLinkedList);
        GuiExtender.GuiDoublyLinkedList = GuiDoublyLinkedList;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiDoublyLinkedList.js.map