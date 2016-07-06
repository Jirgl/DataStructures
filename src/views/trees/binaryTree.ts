import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as controlPanel } from '../../compositions/controlPanel';
import { create as textfield } from '../../components/textfield';
import { Structure as BinaryTree } from './graphicalEnricher/binaryTree';
import { TreeGrid } from './treeGrid';

export interface IBinaryTreeData {

}

interface IBinaryTreeCtx extends b.IBobrilCtx {
    binaryTree: BinaryTree;
    option: string;
    action: string;
    value: string;
    data: IBinaryTreeData;
}

let binaryTreeComponent: b.IBobrilComponent = {
    init(ctx: IBinaryTreeCtx): void {
        ctx.binaryTree = new BinaryTree();
        ctx.binaryTree.addRoot('root node');
        ctx.binaryTree.addLeftChild('left node');
        ctx.binaryTree.addRightChild('right node');
        ctx.binaryTree.getLeftChild();
        ctx.binaryTree.addLeftChild('0');
        ctx.binaryTree.addRightChild('1');
        ctx.binaryTree.getRoot();
        ctx.binaryTree.getRightChild();
        ctx.binaryTree.addLeftChild('2');
        ctx.binaryTree.addRightChild('3');
        ctx.action = 'add';
        ctx.option = 'left child';
    },
    render(ctx: IBinaryTreeCtx, me: b.IBobrilNode): void {
        let iterator = ctx.binaryTree.getIterator();

        /*if (ctx.action === 'get') {
            options.push('parent');
            options.push('current');
        }*/

        me.children = canvas({
            contentIterator: iterator,
            grid: new TreeGrid(ctx.binaryTree.getDepth(), iterator)
        });
    }
}

export function binaryTree(data: IBinaryTreeData): b.IBobrilNode {
    return { component: binaryTreeComponent, data: data };
}
