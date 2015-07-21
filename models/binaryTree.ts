/// <reference path="iterator.ts" />

module JirglStructures.Trees {
    export class Node<T> {
        data: T;
        parent: Node<T>;
        leftChild: Node<T>;
        rightChild: Node<T>;
    }

    export enum BaseTreeTraversal {
        DepthFirst,
        BreadthFirst
    }

    export class BinaryTree<T> {
        protected rootNode: Node<T>;
        protected currentNode: Node<T>;

        clear(): void {
            this.rootNode = this.currentNode = undefined;
        }

        isEmpty(): boolean {
            return this.rootNode === undefined;
        }

        addRoot(t: T): void {
            if (this.rootNode === undefined) {
                this.rootNode = this.currentNode = new Node<T>();
                this.rootNode.data = t;
            }
        }

        addLeftChild(t: T): void {
            if (this.currentNode !== undefined && this.currentNode.leftChild === undefined) {
                var node = new Node<T>();
                node.data = t;
                this.currentNode.leftChild = node;
                node.parent = this.currentNode;
            }
        }

        addRightChild(t: T): void {
            if (this.currentNode !== undefined && this.currentNode.rightChild === undefined) {
                var node = new Node<T>();
                node.data = t;
                this.currentNode.rightChild = node;
                node.parent = this.currentNode;
            }
        }

        getCurrentNode(): T {
            if (this.currentNode === undefined) {
                return undefined;
            }

            return this.currentNode.data;
        }

        getRootNode(): T {
            if (this.rootNode === undefined) {
                return undefined;
            }

            this.currentNode = this.rootNode;
            return this.rootNode.data;
        }

        getParentNode(): T {
            if (this.currentNode === this.rootNode) {
                return undefined;
            }

            this.currentNode = this.currentNode.parent;
            return this.currentNode.data;
        }

        getLeftChildNode(): T {
            if (this.currentNode === undefined ||
                this.currentNode.leftChild === undefined) {
                return undefined;
            }

            this.currentNode = this.currentNode.leftChild;
            return this.currentNode.data;
        }

        getRightChildNode(): T {
            if (this.currentNode === undefined ||
                this.currentNode.rightChild === undefined) {
                return undefined;
            }

            this.currentNode = this.currentNode.rightChild;
            return this.currentNode.data;
        }

        removeRootNode(): T {
            if (this.rootNode === undefined) {
                return undefined;
            } else if (this.rootNode.leftChild === undefined
                && this.rootNode.rightChild === undefined) {
                var nodeData = this.currentNode.data;
                this.rootNode = this.currentNode = undefined;

                return nodeData;
            }

            return undefined;
        }

        removeLeftChildNode(): T {
            if (this.currentNode.leftChild === undefined) {
                return undefined;
            } else if (this.currentNode.leftChild.leftChild === undefined
                && this.currentNode.leftChild.rightChild === undefined) {
                var nodeData = this.currentNode.leftChild.data;
                this.currentNode.leftChild.parent = undefined;
                this.currentNode.leftChild = undefined;

                return nodeData;
            }

            return undefined;
        }

        removeRightChildNode(): T {
            if (this.currentNode.rightChild === undefined) {
                return undefined;
            } else if (this.currentNode.rightChild.leftChild === undefined
                && this.currentNode.rightChild.rightChild === undefined) {
                var nodeData = this.currentNode.rightChild.data;
                this.currentNode.rightChild.parent = undefined;
                this.currentNode.rightChild = undefined;

                return nodeData;
            }

            return undefined;
        }

        getIterator(traversal: BaseTreeTraversal): IIterator<T> {
            return new BinaryTreeIterator<T>(this.rootNode, traversal);
        }
    }

    export class BinaryTreeIterator<T> implements IIterator<T> {
        protected rootNode: Node<T>;
        private traversal: BaseTreeTraversal;
        private que: Lists.Queue<Node<T>>;
        private stack: Lists.Stack<Node<T>>;

        constructor(rootNode: Node<T>, traversal: BaseTreeTraversal) {
            this.rootNode = rootNode;
            this.traversal = traversal;

            if (traversal === BaseTreeTraversal.BreadthFirst) {
                this.que = new Lists.Queue<Node<T>>();
                this.que.enqueue(rootNode);
            } else if (traversal === BaseTreeTraversal.DepthFirst) {
                this.stack = new Lists.Stack<Node<T>>();
                this.stack.push(rootNode);
            }
        }

        hasNext(): boolean {
            if (this.traversal === BaseTreeTraversal.BreadthFirst) {
                return !this.que.isEmpty();
            } else if (this.traversal === BaseTreeTraversal.DepthFirst) {
                return !this.stack.isEmpty();
            }

            return false;
        }

        next(): T {
            var node: Node<T>;
            if (this.traversal === BaseTreeTraversal.BreadthFirst) {
                node = this.que.dequeue();

                if (node.leftChild !== undefined) {
                    this.que.enqueue(node.leftChild);
                }

                if (node.rightChild !== undefined) {
                    this.que.enqueue(node.rightChild);
                }

                return node.data;
            } else if (this.traversal === BaseTreeTraversal.DepthFirst) {
                node = this.stack.pop();

                if (node.rightChild !== undefined) {
                    this.stack.push(node.rightChild);
                }

                if (node.leftChild !== undefined) {
                    this.stack.push(node.leftChild);
                }

                return node.data;
            }

            return undefined;
        }

        reset(): void {
            if (this.traversal === BaseTreeTraversal.BreadthFirst) {
                this.que.clear();
                this.que.enqueue(this.rootNode);
            } else if (this.traversal === BaseTreeTraversal.DepthFirst) {
                this.stack.clear();
                this.stack.push(this.rootNode);
            }
        }
    }
}