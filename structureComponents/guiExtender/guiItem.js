/// <reference path="../../components/canvas.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiItem = (function (_super) {
            __extends(GuiItem, _super);
            function GuiItem(content) {
                _super.call(this, content);
            }
            GuiItem.prototype.getContent = function () {
                return this.data;
            };
            return GuiItem;
        })(JirglStructures.Lists.DoublyLinkedList.Item);
        GuiExtender.GuiItem = GuiItem;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiItem.js.map