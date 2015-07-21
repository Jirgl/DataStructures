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
        var GuiBinaryTree = (function (_super) {
            __extends(GuiBinaryTree, _super);
            function GuiBinaryTree() {
                _super.call(this);
                this.depth = 0;
            }
            GuiBinaryTree.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this.depth = 0;
            };
            GuiBinaryTree.prototype.addLeftChild = function (node) {
                var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.leftChild === undefined;
                _super.prototype.addLeftChild.call(this, node);
                if (isAvailableToAdd && this.currentNode.rightChild === undefined) {
                    this.depth++;
                }
            };
            GuiBinaryTree.prototype.addRightChild = function (node) {
                var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.rightChild === undefined;
                _super.prototype.addRightChild.call(this, node);
                if (isAvailableToAdd && this.currentNode.leftChild === undefined) {
                    this.depth++;
                }
            };
            GuiBinaryTree.prototype.getDepth = function () {
                return this.depth;
            };
            GuiBinaryTree.prototype.getGuiIterator = function () {
                return new GuiExtender.GuiTreeIterator(this.rootNode, this.currentNode);
            };
            return GuiBinaryTree;
        })(JirglStructures.Trees.BinaryTree);
        GuiExtender.GuiBinaryTree = GuiBinaryTree;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiBinaryTree.js.map