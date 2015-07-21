module JirglStructures.GuiExtender {
    export class GuiBinaryTree extends Trees.BinaryTree<GuiItem<string>> {
        private depth: number;

        constructor() {
            super();
            this.depth = 0;
        }

        clear(): void {
            super.clear();
            this.depth = 0;
        }

        addLeftChild(node: GuiItem<string>): void {
            var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.leftChild === undefined;
            super.addLeftChild(node);
            if (isAvailableToAdd && this.currentNode.rightChild === undefined) {
                this.depth++;
            }
        }

        addRightChild(node: GuiItem<string>): void {
            var isAvailableToAdd = this.currentNode !== undefined && this.currentNode.rightChild === undefined;
            super.addRightChild(node);
            if (isAvailableToAdd && this.currentNode.leftChild === undefined) {
                this.depth++;
            }
        }

        getDepth(): number {
            return this.depth;
        }

        getGuiIterator(): GuiTreeIterator {
            return new GuiTreeIterator(this.rootNode, this.currentNode);
        }
    }
}