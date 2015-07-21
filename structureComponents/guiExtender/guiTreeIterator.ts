module JirglStructures.GuiExtender {
    export class GuiTreeIterator implements IIterator<Trees.Node<GuiItem<string>>> {
        private que: Lists.Queue<Trees.Node<GuiItem<string>>>;
        private rootNode: Trees.Node<GuiItem<string>>;
        private currentNode: Trees.Node<GuiItem<string>>;
        private orderInLevel: number;
        private depth: number;

        constructor(rootNode: Trees.Node<GuiItem<string>>, currentNode: Trees.Node<GuiItem<string>>) {
            this.rootNode = rootNode;
            this.currentNode = currentNode;
            this.orderInLevel = 0;
            this.depth = 0;

            this.que = new Lists.Queue<Trees.Node<GuiItem<string>>>();
            this.que.enqueue(rootNode);
        }

        hasNext(): boolean {
            return !this.que.isEmpty();
        }

        next(): Trees.Node<GuiItem<string>> {
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