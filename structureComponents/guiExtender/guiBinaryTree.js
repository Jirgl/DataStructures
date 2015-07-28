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
            GuiBinaryTree.prototype.addRoot = function (node) {
                node.indexOfNode = 0;
                _super.prototype.addRoot.call(this, node);
            };
            GuiBinaryTree.prototype.addLeftChild = function (node) {
                var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.leftChild === undefined;
                node.indexOfNode = this.currentNode.data.indexOfNode * 2 + 1;
                _super.prototype.addLeftChild.call(this, node);
                if (isAvailableToAdd && this.currentNode.rightChild === undefined &&
                    GuiBinaryTree.calculateDepth(node.indexOfNode) > this.depth) {
                    this.depth++;
                }
            };
            GuiBinaryTree.prototype.addRightChild = function (node) {
                var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.rightChild === undefined;
                node.indexOfNode = this.currentNode.data.indexOfNode * 2 + 2;
                _super.prototype.addRightChild.call(this, node);
                if (isAvailableToAdd && this.currentNode.leftChild === undefined &&
                    GuiBinaryTree.calculateDepth(node.indexOfNode) > this.depth) {
                    this.depth++;
                }
            };
            GuiBinaryTree.calculateDepth = function (indexOfNode) {
                var depth = 0;
                var currentIndex = indexOfNode;
                while (currentIndex > 0) {
                    currentIndex = Math.floor((currentIndex - 1) / 2);
                    depth++;
                }
                return depth;
            };
            GuiBinaryTree.prototype.getDepth = function () {
                return this.depth;
            };
            GuiBinaryTree.prototype.getIterator = function () {
                return new GuiExtender.GuiTreeIterator(this.rootNode, this.currentNode);
            };
            return GuiBinaryTree;
        })(JirglStructures.Trees.BinaryTree);
        GuiExtender.GuiBinaryTree = GuiBinaryTree;
    })(GuiExtender = JirglStructures.GuiExtender || (JirglStructures.GuiExtender = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=guiBinaryTree.js.map