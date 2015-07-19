var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiStack = (function () {
            function GuiStack() {
                this.guiList = new GuiExtender.GuiDoublyLinkedList();
            }
            GuiStack.prototype.getFirstGuiItem = function () {
                return this.guiList.getFirstGuiItem();
            };
            GuiStack.prototype.push = function (item) {
                this.guiList.addFirstItem(item);
            };
            GuiStack.prototype.pop = function () {
                return this.guiList.removeFirstItem();
            };
            GuiStack.prototype.getIterator = function () {
                return new GuiExtender.GuiListIterator(this.getFirstGuiItem());
            };
            return GuiStack;
        })();
        GuiExtender.GuiStack = GuiStack;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiStack.js.map