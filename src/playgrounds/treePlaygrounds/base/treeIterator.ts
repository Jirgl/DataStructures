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

interface IteratorNode {
    index: number;
    baseNode: BinaryTree.Node<string>;
}

export class TreeIterator implements IIterator<IIteratorNode> {
    private que: Queue.Structure<IteratorNode>;

    constructor(
        private rootNode: BinaryTree.Node<string> | undefined,
        private currentNode: BinaryTree.Node<string> | undefined) {

        this.que = new Queue.Structure<IteratorNode>();
        this.rootNode && this.que.enqueue({ index: 1, baseNode: this.rootNode });
    }

    hasNext(): boolean {
        return !this.que.isEmpty();
    }

    next(): IIteratorNode {
        const node = this.que.dequeue();
        if (!node || !this.currentNode)
            throw 'end of collection';

        if (node.baseNode.leftChild)
            this.que.enqueue({ index: node.index * 2, baseNode: node.baseNode.leftChild });

        if (node.baseNode.rightChild)
            this.que.enqueue({ index: node.index * 2 + 1, baseNode: node.baseNode.rightChild });

        const depth = calculateDepth(node.index - 1);
        const orderInLevel = node.index - Math.pow(2, depth);
        let previousNodePosition: INodePosition | undefined = undefined;
        if (node.index > 1) {
            const prevDepth = calculateDepth(Math.floor(node.index / 2) - 1);
            previousNodePosition = {
                depth: prevDepth,
                orderInLevel: Math.floor(node.index / 2) - Math.pow(2, prevDepth)
            };
        }

        return {
            content: node.baseNode.data,
            isActive: this.currentNode && this.currentNode === node.baseNode,
            currentNodePosition: {
                depth,
                orderInLevel
            },
            previousNodePosition
        };
    }

    reset(): void {
        this.que.clear();
        this.rootNode && this.que.enqueue({ index: 1, baseNode: this.rootNode });
    }
}
