module JirglStructures.GuiExtender {
    export class GuiTreeIterator implements IIterator<Trees.Node<GuiNode>> {
        private que: Lists.Queue<Trees.Node<GuiNode>>;
        private rootNode: Trees.Node<GuiNode>;
        private currentNode: Trees.Node<GuiNode>;
        private orderInLevel: number;
        private depth: number;

        constructor(rootNode: Trees.Node<GuiNode>, currentNode: Trees.Node<GuiNode>) {
            this.rootNode = rootNode;
            this.currentNode = currentNode;
            this.orderInLevel = 0;
            this.depth = 0;

            this.que = new Lists.Queue<Trees.Node<GuiNode>>();
            this.que.enqueue(rootNode);
        }

        hasNext(): boolean {
            return !this.que.isEmpty();
        }

        next(): Trees.Node<GuiNode> {
            var node = this.que.dequeue();

            if (node.leftChild !== undefined) {
                this.que.enqueue(node.leftChild);
            }

            if (node.rightChild !== undefined) {
                this.que.enqueue(node.rightChild);
            }

            node.data.isCurrent = node === this.currentNode;

            return node;
        }

        reset(): void {
            this.que.clear();
            this.orderInLevel = 0;
            this.depth = 0;
        }
    }
}