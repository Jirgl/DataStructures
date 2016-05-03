import { TreeIterator, IEnrichedContent } from './treeIterator';
import { calculateDepth } from './depthHelper';
import { Structure as BinaryTree, Node } from '../../../models/trees/binaryTree';

class EnrichedBinaryTree extends BinaryTree<IEnrichedContent> {
    getRootNode(): Node<IEnrichedContent> {
        return this.rootNode;
    }

    getCurrentNode(): Node<IEnrichedContent> {
        return this.currentNode;
    }
}

export class Structure {
    private binaryTree: EnrichedBinaryTree;
    private depth: number;

    constructor() {
        this.binaryTree = new EnrichedBinaryTree();
        this.depth = 0;
    }

    clear(): void {
        this.binaryTree.clear();
        this.depth = 0;
    }

    addRoot(content: string): void {
        this.binaryTree.addRoot({
            content: content,
            indexOfNode: 0,
            isCurrent: false
        });
    }

    private incrementDepth(isAvailableToAdd: boolean, indexOfNode: number): void {
        if (this.binaryTree.getRightChild()) {
            this.binaryTree.getParent();

            if (isAvailableToAdd && calculateDepth(indexOfNode) > this.depth) {
                this.depth++;
            }
        }
    }

    addLeftChild(content: string): void {
        let isAvailableForAdding = this.binaryTree.getCurrent() && !this.binaryTree.getLeftChild();
        if (!isAvailableForAdding) this.binaryTree.getParent();

        let indexOfNode = this.binaryTree.getCurrent().indexOfNode * 2 + 1;
        this.binaryTree.addLeftChild({
            content: content,
            indexOfNode: indexOfNode,
            isCurrent: false
        });
        this.incrementDepth(isAvailableForAdding, indexOfNode);
    }

    addRightChild(content: string): void {
        let isAvailableForAdding = this.binaryTree.getCurrent() && !this.binaryTree.getRightChild();
        if (!isAvailableForAdding) this.binaryTree.getParent();

        let indexOfNode = this.binaryTree.getCurrent().indexOfNode * 2 + 2;
        this.binaryTree.addRightChild({
            content: content,
            indexOfNode: indexOfNode,
            isCurrent: false
        });
        this.incrementDepth(isAvailableForAdding, indexOfNode);
    }

    getDepth(): number {
        return this.depth;
    }

    getCurrentNode(): IEnrichedContent {
        return this.binaryTree.getCurrent() || undefined;
    }

    getRoot(): string {
        let root = this.binaryTree.getRoot();
        return root ? root.content : undefined;
    }

    getParent(): string {
        let parent = this.binaryTree.getParent();
        return parent ? parent.content : undefined;
    }

    getLeftChild(): string {
        let left = this.binaryTree.getLeftChild();
        return left ? left.content : undefined;
    }

    getRightChild(): string {
        let right = this.binaryTree.getRightChild();
        return right ? right.content : undefined;
    }

    removeRoot(): void {
        this.binaryTree.removeRoot();
    }

    removeLeftChild(): void {
        this.binaryTree.removeLeftChild();
    }

    removeRightChild(): void {
        this.binaryTree.removeRightChild();
    }

    getIterator(): TreeIterator {
        return new TreeIterator(this.binaryTree.getRootNode(), this.binaryTree.getCurrentNode());
    }
}
