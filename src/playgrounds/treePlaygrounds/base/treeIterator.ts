import { IIterator, BinaryTree, Queue } from 'jirgl-data-structures';
import { calculateDepth } from './depthHelper';

export interface INodePosition {
    depth: number;
    orderInLevel: number;
}

export interface IIteratorNode {
    content: string;
    isActive: boolean;
    currentNodePosition: INodePosition;
    previousNodePosition: INodePosition | undefined;
}

export class TreeIterator implements IIterator<IIteratorNode> {
    private que: Queue.Structure<BinaryTree.Node<string>>;
    private index: number = 0;

    constructor(
        private rootNode: BinaryTree.Node<string> | undefined,
        private currentNode: BinaryTree.Node<string> | undefined) {

        this.que = new Queue.Structure<BinaryTree.Node<string>>();
        this.rootNode && this.que.enqueue(this.rootNode);
    }

    hasNext(): boolean {
        return !this.que.isEmpty();
    }

    next(): IIteratorNode {
        const node = this.que.dequeue();
        if (!node || !this.currentNode)
            throw 'end of collection';

        if (node.leftChild) this.que.enqueue(node.leftChild);
        if (node.rightChild) this.que.enqueue(node.rightChild);

        const depth = calculateDepth(this.index);
        const orderInLevel = (this.index + 1) - Math.pow(2, depth);
        let previousNodePosition: INodePosition | undefined = undefined;
        if (this.index > 0) {
            const prevDepth = calculateDepth(this.index - 1);
            previousNodePosition = {
                depth: prevDepth,
                orderInLevel: (this.index) - Math.pow(2, prevDepth)
            };
        }

        this.index++;
        return {
            content: node.data,
            isActive: this.currentNode && this.currentNode === node,
            currentNodePosition: {
                depth,
                orderInLevel
            },
            previousNodePosition
        };
    }

    reset(): void {
        this.que.clear();
        this.rootNode && this.que.enqueue(this.rootNode);
        this.index = 0;
    }
}
