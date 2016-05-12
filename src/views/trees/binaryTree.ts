import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as controlPanel } from '../../components/controlPanel';
import { create as combobox } from '../../components/combobox';
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
        let options = ['root', 'left child', 'right child'];

        if (ctx.action === 'get') {
            options.push('parent');
            options.push('current');
        }

        me.children = [
            controlPanel({
                actions: combobox({
                    options: ['add', 'get', 'remove'],
                    onChange: (value: string) => {
                        ctx.action = value;
                    }
                }),
                options: combobox({
                    options: options,
                    onChange: (value: string) => {
                        ctx.option = value;
                    }
                }),
                valueBox: m.TextField({
                    value: ctx.value,
                    onChange: (value: string) => {
                        ctx.value = ctx.value;
                    },
                    disabled: ctx.action === 'remove' || ctx.action === 'get',
                    labelText: 'content'
                }),
                submitButton: m.Button({
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    children: 'execute',
                    action: () => {
                        if (ctx.action === 'add') {
                            if (ctx.option === 'root') {
                                ctx.binaryTree.addRoot(ctx.value);
                            } else if (ctx.option === 'left child') {
                                ctx.binaryTree.addLeftChild(ctx.value);
                            } else if (ctx.option === 'right child') {
                                ctx.binaryTree.addRightChild(ctx.value);
                            }
                        } else if (ctx.action === 'get') {
                            if (ctx.option === 'root') {
                                ctx.binaryTree.getRoot();
                            } else if (ctx.option === 'left child') {
                                ctx.binaryTree.getLeftChild();
                            } else if (ctx.option === 'right child') {
                                ctx.binaryTree.getRightChild();
                            } else if (ctx.option === 'parent') {
                                ctx.binaryTree.getParent();
                            } else if (ctx.option === 'current') {
                                ctx.binaryTree.getCurrentNode();
                            }
                        } else if (ctx.action === 'remove') {
                            if (ctx.option === 'root') {
                                ctx.binaryTree.removeRoot();
                            } else if (ctx.option === 'left child') {
                                ctx.binaryTree.removeLeftChild();
                            } else if (ctx.option === 'right child') {
                                ctx.binaryTree.removeRightChild();
                            }
                        }

                        b.invalidate(ctx);
                    }
                })
            }),
            canvas({
                contentIterator: iterator,
                grid: new TreeGrid(ctx.binaryTree.getDepth(), iterator)
            })
        ];
    }
}

export function binaryTree(data: IBinaryTreeData): b.IBobrilNode {
    return { component: binaryTreeComponent, data: data };
}
