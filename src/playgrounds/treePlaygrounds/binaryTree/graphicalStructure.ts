import { BinaryTree } from 'jirgl-data-structures';
import { TreeIterator } from '../base/treeIterator';

class EnrichedBinaryTree extends BinaryTree.Structure<string> {
    getRootNode(): BinaryTree.Node<string> | undefined {
        return this.rootNode;
    }

    getCurrentNode(): BinaryTree.Node<string> | undefined {
        return this.currentNode;
    }
}

export class Structure {
    private binaryTree: EnrichedBinaryTree;

    constructor() {
        this.binaryTree = new EnrichedBinaryTree();
    }

    clear(): void {
        this.binaryTree.clear();
    }

    addRoot(content: string): void {
        this.binaryTree.addRoot(content);
    }

    addLeftChild(content: string): void {
        const isAvailableForAdding = this.binaryTree.getCurrent() && !this.binaryTree.getLeftChild();
        if (!isAvailableForAdding) this.binaryTree.getParent();

        this.binaryTree.addLeftChild(content);
    }

    addRightChild(content: string): void {
        const isAvailableForAdding = this.binaryTree.getCurrent() && !this.binaryTree.getRightChild();
        if (!isAvailableForAdding) this.binaryTree.getParent();

        this.binaryTree.addRightChild(content);
    }

    getCurrentNode(): string | undefined {
        return this.binaryTree.getCurrent() || undefined;
    }

    getRoot(): string | undefined {
        return this.binaryTree.getRoot();
    }

    getParent(): string | undefined {
        return this.binaryTree.getParent();
    }

    getLeftChild(): string | undefined {
        return this.binaryTree.getLeftChild();
    }

    getRightChild(): string | undefined {
        return this.binaryTree.getRightChild();
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
