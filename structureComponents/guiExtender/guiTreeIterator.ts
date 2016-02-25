/// <reference path="../../models/iterator.ts" />
/// <reference path="../../models/lists/queue.ts" />
/// <reference path="../../models/trees/binaryTree.ts" />
/// <reference path="guiNode.ts" />
/// <reference path="guiBinaryTree.ts" />

module JirglStructures.GuiExtender {
    export class GuiTreeIterator implements IIterator<GuiNode> {
        private que: Lists.Queue.Structure<Trees.Node<GuiNode>>;
        rootNode: Trees.Node<GuiNode>;
        currentGuiNode: Trees.Node<GuiNode>;
        indexOfCurrentNode: number;
        orderInLevel: number;
        depth: number;

        constructor(rootNode: Trees.Node<GuiNode>, currentNode: Trees.Node<GuiNode>) {
            this.rootNode = rootNode;
            this.currentGuiNode = currentNode;
            this.rootNode.data.indexOfNode = this.orderInLevel = this.depth = 0;

            this.que = new Lists.Queue.Structure<Trees.Node<GuiNode>>();
            this.que.enqueue(this.rootNode);
        }

        hasNext(): boolean {
            return !this.que.isEmpty();
        }

        next(): GuiNode {
            var node = this.que.dequeue();

            if (node.leftChild !== undefined) {
                this.que.enqueue(node.leftChild);
            }

            if (node.rightChild !== undefined) {
                this.que.enqueue(node.rightChild);
            }

            node.data.isCurrent = node === this.currentGuiNode;
            this.depth = GuiBinaryTree.calculateDepth(node.data.indexOfNode);
            this.orderInLevel = (node.data.indexOfNode + 1) - Math.pow(2, this.depth);
            this.indexOfCurrentNode = node.data.indexOfNode;

            return node.data;
        }
        reset(): void {
            this.que.clear();
            this.orderInLevel = 0;
            this.depth = 0;
        }
    }
}