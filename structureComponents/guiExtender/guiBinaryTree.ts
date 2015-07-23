module JirglStructures.GuiExtender {
    export class GuiBinaryTree extends Trees.BinaryTree<GuiNode> {
        private depth: number;

        constructor() {
            super();
            this.depth = 0;
        }

        clear(): void {
            super.clear();
            this.depth = 0;
        }

        addRoot(node: GuiNode): void {
            node.indexOfNode = 0;
            super.addRoot(node);
        }

        addLeftChild(node: GuiNode): void {
            var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.leftChild === undefined;
            node.indexOfNode = this.currentNode.data.indexOfNode * 2 + 1;
            super.addLeftChild(node);
            if (isAvailableToAdd && this.currentNode.rightChild === undefined &&
                GuiBinaryTree.calculateDepth(node) > this.depth) {
                this.depth++;
            }
        }

        addRightChild(node: GuiNode): void {
            var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.rightChild === undefined;
            node.indexOfNode = this.currentNode.data.indexOfNode * 2 + 2;
            super.addRightChild(node);
            if (isAvailableToAdd && this.currentNode.leftChild === undefined &&
                GuiBinaryTree.calculateDepth(node) > this.depth) {
                this.depth++;
            }
        }

        static calculateDepth(guiNode: GuiNode): number {
            var depth = 0;
            var index = guiNode.indexOfNode;

            while (index > 0) {
                index = Math.floor((index - 1) / 2);
                depth++;
            }

            return depth;
        }

        getDepth(): number {
            return this.depth;
        }

        getIterator(): GuiTreeIterator {
            return new GuiTreeIterator(this.rootNode, this.currentNode);
        }
    }
}