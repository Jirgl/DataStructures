///<reference path="../jasmine/jasmine.js"/>
///<reference path="../models/binaryTree.js"/>

describe("Binary tree - add methods", function () {
    var binaryTree;

    beforeEach(function () {
        binaryTree = new JirglStructures.Trees.BinaryTree();
    });

    it("add root node", function () {
        binaryTree.addRoot("root");

        var iterator = binaryTree.getIterator(JirglStructures.Trees.BaseTreeTraversal.BreadthFirst);
        expect(iterator.next()).toBe("root");
        expect(binaryTree.currentNode).toBe(binaryTree.rootNode);

        iterator.reset();
        binaryTree.addRoot("root2");
        expect(iterator.next()).toBe("root");
    });

    it("add left child node", function () {
        binaryTree.addRoot("root");
        binaryTree.addLeftChild("leftChild");
        expect(binaryTree.currentNode).toBe(binaryTree.rootNode);
        expect(binaryTree.currentNode.leftChild.parent).toBe(binaryTree.rootNode);

        var iterator = binaryTree.getIterator(JirglStructures.Trees.BaseTreeTraversal.BreadthFirst);
        expect(iterator.next()).toBe("root");
        expect(iterator.next()).toBe("leftChild");

        iterator.reset();
        binaryTree.addLeftChild("leftChild2");
        expect(iterator.next()).toBe("root");
        expect(iterator.next()).toBe("leftChild");
    });

    it("add right child node", function () {
        binaryTree.addRoot("root");
        binaryTree.addRightChild("rightChild");
        expect(binaryTree.currentNode).toBe(binaryTree.rootNode);
        expect(binaryTree.currentNode.rightChild.parent).toBe(binaryTree.rootNode);

        var iterator = binaryTree.getIterator(JirglStructures.Trees.BaseTreeTraversal.BreadthFirst);
        expect(iterator.next()).toBe("root");
        expect(iterator.next()).toBe("rightChild");

        iterator.reset();
        binaryTree.addRightChild("rightChild2");
        expect(iterator.next()).toBe("root");
        expect(iterator.next()).toBe("rightChild");
    });
});

describe("Binary tree - remove methods", function () {
    var binaryTree;

    beforeEach(function () {
        binaryTree = new JirglStructures.Trees.BinaryTree();
        binaryTree.addRoot("root");
    });

    it("remove root node", function () {
        binaryTree.addLeftChild("leftChild");
        var removedItem = binaryTree.removeRootNode();
        expect(removedItem).toEqual(undefined);

        binaryTree.removeLeftChildNode();
        removedItem = binaryTree.removeRootNode();
        expect(removedItem).toEqual("root");
    });

    it("remove left child node", function () {
        binaryTree.addLeftChild("leftChild");
        binaryTree.getLeftChildNode();
        binaryTree.addLeftChild("leftChild2");
        binaryTree.getParentNode();

        var removedItem = binaryTree.removeRightChildNode();
        expect(removedItem).toEqual(undefined);

        binaryTree.getLeftChildNode();
        binaryTree.removeLeftChildNode();
        binaryTree.getParentNode();
        removedItem = binaryTree.removeLeftChildNode();
        expect(removedItem).toEqual("leftChild");
    });

    it("remove right child node", function () {
        binaryTree.addRightChild("rightChild");
        binaryTree.getRightChildNode();
        binaryTree.addRightChild("rightChild2");
        binaryTree.getParentNode();

        var removedItem = binaryTree.removeRightChildNode();
        expect(removedItem).toEqual(undefined);

        binaryTree.getRightChildNode();
        binaryTree.removeRightChildNode();
        binaryTree.getParentNode();
        removedItem = binaryTree.removeRightChildNode();
        expect(removedItem).toEqual("rightChild");
    });
});

describe("Binary tree - other functions", function () {
    var binaryTree;

    beforeEach(function () {
        binaryTree = new JirglStructures.Trees.BinaryTree();
    });

    it("clear binary tree", function () {
        binaryTree.addRoot("root");
        expect(binaryTree.rootNode.data).toBe("root");

        binaryTree.clear();
        expect(binaryTree.rootNode).toEqual(undefined);
    });

    it("is binary tree empty", function () {
        expect(binaryTree.isEmpty()).toBeTruthy();

        binaryTree.addRoot("root");
        expect(binaryTree.isEmpty()).toBeFalsy();
    });
});

describe("Binary tree - iterator", function () {
    var binaryTree;

    beforeEach(function () {
        binaryTree = new JirglStructures.Trees.BinaryTree();
    });

    it("iterate by iterator", function () {
        binaryTree.addRoot("root");
        binaryTree.addLeftChild("leftChild");
        binaryTree.addRightChild("rightChild");
        binaryTree.getLeftChildNode();
        binaryTree.addLeftChild("1");
        binaryTree.addRightChild("2");
        binaryTree.getParentNode();
        binaryTree.getRightChildNode();
        binaryTree.addLeftChild("3");
        binaryTree.addRightChild("4");

        var iterator = binaryTree.getIterator(JirglStructures.Trees.BaseTreeTraversal.BreadthFirst);
        expect(iterator.next()).toBe("root");
        expect(iterator.next()).toBe("leftChild");
        expect(iterator.next()).toBe("rightChild");
        expect(iterator.next()).toBe("1");
        expect(iterator.next()).toBe("2");
        expect(iterator.next()).toBe("3");
        expect(iterator.next()).toBe("4");

        iterator = binaryTree.getIterator(JirglStructures.Trees.BaseTreeTraversal.DepthFirst);
        expect(iterator.next()).toBe("root");
        expect(iterator.next()).toBe("leftChild");
        expect(iterator.next()).toBe("1");
        expect(iterator.next()).toBe("2");
        expect(iterator.next()).toBe("rightChild");
        expect(iterator.next()).toBe("3");
        expect(iterator.next()).toBe("4");

        iterator.reset();
        expect(iterator.next()).toBe("root");
    });
});
