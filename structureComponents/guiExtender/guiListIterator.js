/// <reference path="../../models/iterator.ts" />
/// <reference path="../../models/lists/queue.ts" />
/// <reference path="guiItem.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiListIterator = (function (_super) {
            __extends(GuiListIterator, _super);
            function GuiListIterator(firstItem, currentItem) {
                _super.call(this, firstItem);
                this.previousGuiItem = undefined;
                this.currentGuiItem = currentItem;
                this.orderOfItem = 0;
            }
            GuiListIterator.prototype.next = function () {
                //check isCurrent is important here, next() changes currentItem
                var isCurrent = false;
                if (this.currentGuiItem !== undefined) {
                    isCurrent = this.currentItem === this.currentGuiItem;
                }
                this.previousGuiItem = this.currentItem;
                var item = _super.prototype.next.call(this);
                item.isCurrent = isCurrent;
                this.orderOfItem++;
                return {
                    key: this.previousGuiItem.key,
                    data: item.data,
                    isCurrent: item.isCurrent
                };
            };
            GuiListIterator.prototype.reset = function () {
                _super.prototype.reset.call(this);
                this.orderOfItem = 0;
            };
            return GuiListIterator;
        })(JirglStructures.Lists.DoublyLinkedList.Iterator);
        GuiExtender.GuiListIterator = GuiListIterator;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiListIterator.js.map