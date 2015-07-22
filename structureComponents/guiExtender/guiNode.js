var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JirglStructures;
(function (JirglStructures) {
    var GuiExtender;
    (function (GuiExtender) {
        var GuiNode = (function (_super) {
            __extends(GuiNode, _super);
            function GuiNode(content) {
                _super.call(this, content);
            }
            GuiNode.prototype.getContent = function () {
                return this.data;
            };
            return GuiNode;
        })(JirglStructures.Trees.Node);
        GuiExtender.GuiNode = GuiNode;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiNode.js.map