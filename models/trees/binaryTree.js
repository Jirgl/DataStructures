var JirglStructures;
(function (JirglStructures) {
    var Trees;
    (function (Trees) {
        var Node = (function () {
            function Node(data) {
                this.data = data;
            }
            return Node;
        })();
        Trees.Node = Node;
        (function (BaseTreeTraversal) {
            BaseTreeTraversal[BaseTreeTraversal["DepthFirst"] = 0] = "DepthFirst";
            BaseTreeTraversal[BaseTreeTraversal["BreadthFirst"] = 1] = "BreadthFirst";
        })(Trees.BaseTreeTraversal || (Trees.BaseTreeTraversal = {}));
        var BaseTreeTraversal = Trees.BaseTreeTraversal;
        var BinaryTree = (function () {
            function BinaryTree() {
            }
            BinaryTree.prototype.clear = function () {
                this.rootNode = this.currentNode = undefined;
            };
            BinaryTree.prototype.isEmpty = function () {
                return this.rootNode === undefined;
            };
            BinaryTree.prototype.addRoot = function (t) {
                if (this.rootNode === undefined) {
                    this.rootNode = this.currentNode = new Node(t);
                }
            };
            BinaryTree.prototype.addLeftChild = function (t) {
                if (this.currentNode !== undefined && this.currentNode.leftChild === undefined) {
                    var node = new Node(t);
                    this.currentNode.leftChild = node;
                    node.parent = this.currentNode;
                }
            };
            BinaryTree.prototype.addRightChild = function (t) {
                if (this.currentNode !== undefined && this.currentNode.rightChild === undefined) {
                    var node = new Node(t);
                    this.currentNode.rightChild = node;
                    node.parent = this.currentNode;
                }
            };
            BinaryTree.prototype.getCurrentNode = function () {
                if (this.currentNode === undefined) {
                    return undefined;
                }
                return this.currentNode.data;
            };
            BinaryTree.prototype.getRootNode = function () {
                if (this.rootNode === undefined) {
                    return undefined;
                }
                this.currentNode = this.rootNode;
                return this.rootNode.data;
            };
            BinaryTree.prototype.getParentNode = function () {
                if (this.currentNode === this.rootNode) {
                    return undefined;
                }
                this.currentNode = this.currentNode.parent;
                return this.currentNode.data;
            };
            BinaryTree.prototype.getLeftChildNode = function () {
                if (this.currentNode === undefined ||
                    this.currentNode.leftChild === undefined) {
                    return undefined;
                }
                this.currentNode = this.currentNode.leftChild;
                return this.currentNode.data;
            };
            BinaryTree.prototype.getRightChildNode = function () {
                if (this.currentNode === undefined ||
                    this.currentNode.rightChild === undefined) {
                    return undefined;
                }
                this.currentNode = this.currentNode.rightChild;
                return this.currentNode.data;
            };
            BinaryTree.prototype.removeRootNode = function () {
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
            BinaryTree.prototype.removeLeftChildNode = function () {
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
            BinaryTree.prototype.removeRightChildNode = function () {
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
            BinaryTree.prototype.getIterator = function (traversal) {
                return new BinaryTreeIterator(this.rootNode, traversal);
            };
            return BinaryTree;
        })();
        Trees.BinaryTree = BinaryTree;
        var BinaryTreeIterator = (function () {
            function BinaryTreeIterator(rootNode, traversal) {
                this.rootNode = rootNode;
                this.traversal = traversal;
                if (traversal === BaseTreeTraversal.BreadthFirst) {
                    this.que = new JirglStructures.Lists.Queue();
                    this.que.enqueue(rootNode);
                }
                else if (traversal === BaseTreeTraversal.DepthFirst) {
                    this.stack = new JirglStructures.Lists.Stack();
                    this.stack.push(rootNode);
                }
            }
            BinaryTreeIterator.prototype.hasNext = function () {
                if (this.traversal === BaseTreeTraversal.BreadthFirst) {
                    return !this.que.isEmpty();
                }
                else if (this.traversal === BaseTreeTraversal.DepthFirst) {
                    return !this.stack.isEmpty();
                }
                return false;
            };
            BinaryTreeIterator.prototype.next = function () {
                var node;
                if (this.traversal === BaseTreeTraversal.BreadthFirst) {
                    node = this.que.dequeue();
                    if (node.leftChild !== undefined) {
                        this.que.enqueue(node.leftChild);
                    }
                    if (node.rightChild !== undefined) {
                        this.que.enqueue(node.rightChild);
                    }
                    return node.data;
                }
                else if (this.traversal === BaseTreeTraversal.DepthFirst) {
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
            BinaryTreeIterator.prototype.reset = function () {
                if (this.traversal === BaseTreeTraversal.BreadthFirst) {
                    this.que.clear();
                    this.que.enqueue(this.rootNode);
                }
                else if (this.traversal === BaseTreeTraversal.DepthFirst) {
                    this.stack.clear();
                    this.stack.push(this.rootNode);
                }
            };
            return BinaryTreeIterator;
        })();
        Trees.BinaryTreeIterator = BinaryTreeIterator;
    })(Trees = JirglStructures.Trees || (JirglStructures.Trees = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=binaryTree.js.map