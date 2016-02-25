/// <reference path="../iterator.ts" />
/// <reference path="../lists/stack.ts" />
/// <reference path="../lists/queue.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Trees;
    (function (Trees) {
        var BinaryTree;
        (function (BinaryTree) {
            var Node = (function () {
                function Node(data) {
                    this.data = data;
                }
                return Node;
            })();
            BinaryTree.Node = Node;
            (function (TreeTraversal) {
                TreeTraversal[TreeTraversal["DepthFirst"] = 0] = "DepthFirst";
                TreeTraversal[TreeTraversal["BreadthFirst"] = 1] = "BreadthFirst";
            })(BinaryTree.TreeTraversal || (BinaryTree.TreeTraversal = {}));
            var TreeTraversal = BinaryTree.TreeTraversal;
            var Structure = (function () {
                function Structure() {
                }
                Structure.prototype.clear = function () {
                    this.rootNode = this.currentNode = undefined;
                };
                Structure.prototype.isEmpty = function () {
                    return this.rootNode === undefined;
                };
                Structure.prototype.addRoot = function (t) {
                    if (this.rootNode === undefined) {
                        this.rootNode = this.currentNode = new Node(t);
                    }
                };
                Structure.prototype.addLeftChild = function (t) {
                    if (this.currentNode !== undefined && this.currentNode.leftChild === undefined) {
                        var node = new Node(t);
                        this.currentNode.leftChild = node;
                        node.parent = this.currentNode;
                    }
                };
                Structure.prototype.addRightChild = function (t) {
                    if (this.currentNode !== undefined && this.currentNode.rightChild === undefined) {
                        var node = new Node(t);
                        this.currentNode.rightChild = node;
                        node.parent = this.currentNode;
                    }
                };
                Structure.prototype.getCurrentNode = function () {
                    if (this.currentNode === undefined) {
                        return undefined;
                    }
                    return this.currentNode.data;
                };
                Structure.prototype.getRootNode = function () {
                    if (this.rootNode === undefined) {
                        return undefined;
                    }
                    this.currentNode = this.rootNode;
                    return this.rootNode.data;
                };
                Structure.prototype.getParentNode = function () {
                    if (this.currentNode === this.rootNode) {
                        return undefined;
                    }
                    this.currentNode = this.currentNode.parent;
                    return this.currentNode.data;
                };
                Structure.prototype.getLeftChildNode = function () {
                    if (this.currentNode === undefined ||
                        this.currentNode.leftChild === undefined) {
                        return undefined;
                    }
                    this.currentNode = this.currentNode.leftChild;
                    return this.currentNode.data;
                };
                Structure.prototype.getRightChildNode = function () {
                    if (this.currentNode === undefined ||
                        this.currentNode.rightChild === undefined) {
                        return undefined;
                    }
                    this.currentNode = this.currentNode.rightChild;
                    return this.currentNode.data;
                };
                Structure.prototype.removeRootNode = function () {
                    if (this.rootNode === undefined) {
                        return undefined;
                    }
                    else if (this.rootNode.leftChild === undefined
                        && this.rootNode.rightChild === undefined) {
                        var nodeData = this.currentNode.data;
                        this.rootNode = this.currentNode = undefined;
                        return nodeData;
                    }
                    return undefined;
                };
                Structure.prototype.removeLeftChildNode = function () {
                    if (this.currentNode.leftChild === undefined) {
                        return undefined;
                    }
                    else if (this.currentNode.leftChild.leftChild === undefined
                        && this.currentNode.leftChild.rightChild === undefined) {
                        var nodeData = this.currentNode.leftChild.data;
                        this.currentNode.leftChild.parent = undefined;
                        this.currentNode.leftChild = undefined;
                        return nodeData;
                    }
                    return undefined;
                };
                Structure.prototype.removeRightChildNode = function () {
                    if (this.currentNode.rightChild === undefined) {
                        return undefined;
                    }
                    else if (this.currentNode.rightChild.leftChild === undefined
                        && this.currentNode.rightChild.rightChild === undefined) {
                        var nodeData = this.currentNode.rightChild.data;
                        this.currentNode.rightChild.parent = undefined;
                        this.currentNode.rightChild = undefined;
                        return nodeData;
                    }
                    return undefined;
                };
                Structure.prototype.getIterator = function (traversal) {
                    return new Iterator(this.rootNode, traversal);
                };
                return Structure;
            })();
            BinaryTree.Structure = Structure;
            var Iterator = (function () {
                function Iterator(rootNode, traversal) {
                    this.rootNode = rootNode;
                    this.traversal = traversal;
                    if (traversal === TreeTraversal.BreadthFirst) {
                        this.que = new JirglStructures.Lists.Queue.Structure();
                        this.que.enqueue(rootNode);
                    }
                    else if (traversal === TreeTraversal.DepthFirst) {
                        this.stack = new JirglStructures.Lists.Stack.Structure();
                        this.stack.push(rootNode);
                    }
                }
                Iterator.prototype.hasNext = function () {
                    if (this.traversal === TreeTraversal.BreadthFirst) {
                        return !this.que.isEmpty();
                    }
                    else if (this.traversal === TreeTraversal.DepthFirst) {
                        return !this.stack.isEmpty();
                    }
                    return false;
                };
                Iterator.prototype.next = function () {
                    var node;
                    if (this.traversal === TreeTraversal.BreadthFirst) {
                        node = this.que.dequeue();
                        if (node.leftChild !== undefined) {
                            this.que.enqueue(node.leftChild);
                        }
                        if (node.rightChild !== undefined) {
                            this.que.enqueue(node.rightChild);
                        }
                        return node.data;
                    }
                    else if (this.traversal === TreeTraversal.DepthFirst) {
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
                };
                Iterator.prototype.reset = function () {
                    if (this.traversal === TreeTraversal.BreadthFirst) {
                        this.que.clear();
                        this.que.enqueue(this.rootNode);
                    }
                    else if (this.traversal === TreeTraversal.DepthFirst) {
                        this.stack.clear();
                        this.stack.push(this.rootNode);
                    }
                };
                return Iterator;
            })();
            BinaryTree.Iterator = Iterator;
        })(BinaryTree = Trees.BinaryTree || (Trees.BinaryTree = {}));
    })(Trees = JirglStructures.Trees || (JirglStructures.Trees = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=binaryTree.js.map