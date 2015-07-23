module JirglStructures.GuiExtender {
    export class GuiTreeIterator implements IIterator<GuiNode> {
        private que: Lists.Queue<Trees.Node<GuiNode>>;
        private rootNode: Trees.Node<GuiNode>;
        private currentNode: Trees.Node<GuiNode>;
        orderInLevel: number;
        depth: number;

        constructor(rootNode: Trees.Node<GuiNode>, currentNode: Trees.Node<GuiNode>) {
            this.rootNode = rootNode;
            this.currentNode = currentNode;
            this.rootNode.data.indexOfNode = this.orderInLevel = this.depth = 0;

            this.que = new Lists.Queue<Trees.Node<GuiNode>>();
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

            node.data.isCurrent = node === this.currentNode;
            this.depth = GuiBinaryTree.calculateDepth(node.data);
            this.orderInLevel = (node.data.indexOfNode + 1) - Math.pow(2, this.depth);

            return node.data;
        }

        

        reset(): void {
            this.que.clear();
            this.orderInLevel = 0;
            this.depth = 0;
        }
    }
}