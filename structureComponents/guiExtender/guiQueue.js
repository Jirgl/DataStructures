var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiQueue = (function () {
            function GuiQueue() {
                this.guiList = new GuiExtender.GuiDoublyLinkedList();
            }
            GuiQueue.prototype.clear = function () {
                this.guiList.clear();
            };
            GuiQueue.prototype.isEmpty = function () {
                return this.guiList.isEmpty();
            };
            GuiQueue.prototype.getFirstGuiItem = function () {
                return this.guiList.getFirstGuiItem();
            };
            GuiQueue.prototype.enqueue = function (item) {
                this.guiList.addLastItem(item);
            };
            GuiQueue.prototype.dequeue = function () {
                return this.guiList.removeFirstItem();
            };
            GuiQueue.prototype.getIterator = function () {
                return new GuiExtender.GuiListIterator(this.getFirstGuiItem());
            };
            return GuiQueue;
        })();
        GuiExtender.GuiQueue = GuiQueue;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiQueue.js.map