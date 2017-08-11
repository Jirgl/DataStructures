import * as f from 'bobflux';
import { Structure as BinaryTree } from '../graphicalEnricher/binaryTree';

export const Actions = {
    add: 0,
    get: 1,
    remove: 2
}

export const Parameters = {
    root: 0,
    leftChild: 1,
    rightChild: 2,
    parent: 3,
    current: 4
}

export interface IBinaryTreeState extends f.IState {
    binaryTree: BinaryTree;
    content: string;
    actions: string[];
    selectedAction: number;
    parameters: string[];
    selectedParameter: number;
    indexOfCurrentItem: number;
}

function initTree(binaryTree: BinaryTree): void {
    binaryTree.addRoot('root node');
    binaryTree.addLeftChild('left node');
    binaryTree.addRightChild('right node');
    binaryTree.getLeftChild();
    binaryTree.addLeftChild('0');
    binaryTree.addRightChild('1');
    binaryTree.getRoot();
    binaryTree.getRightChild();
    binaryTree.addLeftChild('2');
    binaryTree.addRightChild('3');
}

export const createDefaultBinaryTreeState = (): IBinaryTreeState => {
    const binaryTree = new BinaryTree();
    let params = Object.keys(Parameters);
    params.splice(3, 2);
    initTree(binaryTree);
    return {
        binaryTree: binaryTree,
        content: '',
        actions: Object.keys(Actions),
        selectedAction: 0,
        parameters: params,
        selectedParameter: 1,
        indexOfCurrentItem: -1
    };
}
