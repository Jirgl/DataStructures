var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JirglStructures;
(function (JirglStructures) {
    var GuiQueue = (function (_super) {
        __extends(GuiQueue, _super);
        function GuiQueue() {
            _super.apply(this, arguments);
        }
        GuiQueue.prototype.getFirstGuiItem = function () {
            return this.guiList.getFirstGuiItem();
        };
        return GuiQueue;
    })(JirglStructures.Lists.Queue);
    JirglStructures.GuiQueue = GuiQueue;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiQueue.js.map