import 'mocha';
import { expect } from 'chai';
import { Structure } from '../../../../src/playgrounds/treePlaygrounds/binaryTree/graphicalStructure';

describe('Tree iterator', () => {
    let treeScenario1: Structure;
    let treeScenario2: Structure;

    beforeEach(() => {
        treeScenario1 = new Structure();
        treeScenario1.addRoot('root');
        treeScenario1.addLeftChild('leftChild');
        treeScenario1.addRightChild('rightChild');
        treeScenario1.getLeftChild();
        treeScenario1.addLeftChild('leftChildOfLeftChild');
        treeScenario1.getRoot();
        treeScenario1.getRightChild();
        treeScenario1.addLeftChild('leftChildOfRightChild');

        treeScenario2 = new Structure();
        treeScenario2.addRoot('root');
        treeScenario2.addLeftChild('leftChild');
        treeScenario2.getLeftChild();
        treeScenario2.addLeftChild('leftChildOfLeftChild');
    });

    it('check current node position I', () => {
        const iterator = treeScenario1.getIterator();

        const root = iterator.next();
        expect(root.content).to.equal('root');
        expect(root.currentNodePosition.depth).to.equal(0);
        expect(root.currentNodePosition.orderInLevel).to.equal(0);

        const leftChild = iterator.next();
        expect(leftChild.content).to.equal('leftChild');
        expect(leftChild.currentNodePosition.depth).to.equal(1);
        expect(leftChild.currentNodePosition.orderInLevel).to.equal(0);

        const rightChild = iterator.next();
        expect(rightChild.content).to.equal('rightChild');
        expect(rightChild.currentNodePosition.depth).to.equal(1);
        expect(rightChild.currentNodePosition.orderInLevel).to.equal(1);

        const leftChildOfLeftChild = iterator.next();
        expect(leftChildOfLeftChild.content).to.equal('leftChildOfLeftChild');
        expect(leftChildOfLeftChild.currentNodePosition.depth).to.equal(2);
        expect(leftChildOfLeftChild.currentNodePosition.orderInLevel).to.equal(0);

        const leftChildOfRightChild = iterator.next();
        expect(leftChildOfRightChild.content).to.equal('leftChildOfRightChild');
        expect(leftChildOfRightChild.currentNodePosition.depth).to.equal(2);
        expect(leftChildOfRightChild.currentNodePosition.orderInLevel).to.equal(2);
    });

    it('check current node position II', () => {
        const iterator = treeScenario2.getIterator();

        const root = iterator.next();
        expect(root.content).to.equal('root');
        expect(root.currentNodePosition.depth).to.equal(0);
        expect(root.currentNodePosition.orderInLevel).to.equal(0);

        const leftChild = iterator.next();
        expect(leftChild.content).to.equal('leftChild');
        expect(leftChild.currentNodePosition.depth).to.equal(1);
        expect(leftChild.currentNodePosition.orderInLevel).to.equal(0);

        const leftChildOfLeftChild = iterator.next();
        expect(leftChildOfLeftChild.content).to.equal('leftChildOfLeftChild');
        expect(leftChildOfLeftChild.currentNodePosition.depth).to.equal(2);
        expect(leftChildOfLeftChild.currentNodePosition.orderInLevel).to.equal(0);
    });

    it('check previous node position I', () => {
        const iterator = treeScenario1.getIterator();

        const root = iterator.next();
        expect(root.content).to.equal('root');
        expect(root.previousNodePosition).to.equal(undefined);

        const leftChild = iterator.next();
        expect(leftChild.previousNodePosition).to.not.equal(undefined);
        if (!leftChild.previousNodePosition) return;
        expect(leftChild.content).to.equal('leftChild');
        expect(leftChild.previousNodePosition.depth).to.equal(0);
        expect(leftChild.previousNodePosition.orderInLevel).to.equal(0);

        const rightChild = iterator.next();
        expect(rightChild.previousNodePosition).to.not.equal(undefined);
        if (!rightChild.previousNodePosition) return;
        expect(rightChild.content).to.equal('rightChild');
        expect(rightChild.previousNodePosition.depth).to.equal(0);
        expect(rightChild.previousNodePosition.orderInLevel).to.equal(0);

        const leftChildOfLeftChild = iterator.next();
        expect(leftChildOfLeftChild.previousNodePosition).to.not.equal(undefined);
        if (!leftChildOfLeftChild.previousNodePosition) return;
        expect(leftChildOfLeftChild.content).to.equal('leftChildOfLeftChild');
        expect(leftChildOfLeftChild.previousNodePosition.depth).to.equal(1);
        expect(leftChildOfLeftChild.previousNodePosition.orderInLevel).to.equal(0);

        const leftChildOfRightChild = iterator.next();
        expect(leftChildOfRightChild.previousNodePosition).to.not.equal(undefined);
        if (!leftChildOfRightChild.previousNodePosition) return;
        expect(leftChildOfRightChild.content).to.equal('leftChildOfRightChild');
        expect(leftChildOfRightChild.previousNodePosition.depth).to.equal(1);
        expect(leftChildOfRightChild.previousNodePosition.orderInLevel).to.equal(1);
    });

    it('check previous node position II', () => {
        const iterator = treeScenario2.getIterator();

        const root = iterator.next();
        expect(root.content).to.equal('root');
        expect(root.previousNodePosition).to.equal(undefined);

        const leftChild = iterator.next();
        expect(leftChild.previousNodePosition).to.not.equal(undefined);
        if (!leftChild.previousNodePosition) return;
        expect(leftChild.content).to.equal('leftChild');
        expect(leftChild.previousNodePosition.depth).to.equal(0);
        expect(leftChild.previousNodePosition.orderInLevel).to.equal(0);

        const leftChildOfLeftChild = iterator.next();
        expect(leftChildOfLeftChild.previousNodePosition).to.not.equal(undefined);
        if (!leftChildOfLeftChild.previousNodePosition) return;
        expect(leftChildOfLeftChild.content).to.equal('leftChildOfLeftChild');
        expect(leftChildOfLeftChild.previousNodePosition.depth).to.equal(1);
        expect(leftChildOfLeftChild.previousNodePosition.orderInLevel).to.equal(0);
    });

});
