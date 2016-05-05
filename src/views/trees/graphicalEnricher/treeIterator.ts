import { calculateDepth } from './depthHelper';
import { IIterator } from '../../../models/iterator';
import { Structure as Queue } from '../../../models/lists/queue';
import { Node } from '../../../models/trees/binaryTree';

export interface IEnrichedContent {
    content: string;
    indexOfNode: number;
    isCurrent: boolean;
}

export class TreeIterator implements IIterator<IEnrichedContent> {
    que: Queue<Node<IEnrichedContent>>;
    rootNode: Node<IEnrichedContent>;
    currentNode: Node<IEnrichedContent>;
    indexOfCurrentNode: number;
    orderInLevel: number;
    depth: number;

    constructor(rootNode: Node<IEnrichedContent>, currentNode: Node<IEnrichedContent>) {
        this.rootNode = rootNode;
        this.currentNode = currentNode;
        this.rootNode.data.indexOfNode = this.orderInLevel = this.depth = 0;

        this.que = new Queue<Node<IEnrichedContent>>();
        this.que.enqueue(this.rootNode);
    }

    hasNext(): boolean {
        return !this.que.isEmpty();
    }

    next(): IEnrichedContent {
        let node = this.que.dequeue();
        if (node.leftChild) this.que.enqueue(node.leftChild);
        if (node.rightChild) this.que.enqueue(node.rightChild);

        node.data.isCurrent = node === this.currentNode;
        this.depth = calculateDepth(node.data.indexOfNode);
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
