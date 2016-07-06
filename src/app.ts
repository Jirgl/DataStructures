import * as b from 'bobril';
import { create as pageComposition } from './compositions/page';
import { create as dataStructureComposition } from './compositions/dataStructure';
import { create as header, HeaderType } from './components/header';
import { doublyLinkedList } from './views/lists/doublyLinkedList';
import { queue } from './views/lists/queue';
import { stack } from './views/lists/stack';
import { binaryTree } from './views/trees/binaryTree';

let l = b.propi(0);
let l2 = b.propi(0);

//TODO temp solution
let commingSoon = {
    tag: 'div',
    style: {
        color: '#E1E1E1',
        fontFamily: 'Segoe UI Light',
        fontSize: 24
    },
    children: 'comming soon...'
}

let listsPage: b.IBobrilComponent = {
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            /*dataStructureComposition({
                title: 'Arrays',
                content: commingSoon
            }),*/
            dataStructureComposition({
                title: 'Linked lists',
                content: commingSoon,
                actions: ['add', 'remove'],
                onActionChange: l,
                options: ['first', 'predecessor', 'successor', 'last'],
                onOptionChange: l2,
                isValueDisabled: false,
                onValueChange: (s) => { },
                onExecuteClick: () => { }
            }),
            dataStructureComposition({
                title: 'Doubly linked list',
                content: doublyLinkedList({}),
                actions: ['add', 'remove'],
                onActionChange: l,
                options: ['first', 'predecessor', 'successor', 'last'],
                onOptionChange: l2,
                isValueDisabled: false,//ctx.action === 'remove'
                onValueChange: (s) => { },
                onExecuteClick: () => {
                    /*if (ctx.action === 'add') {
                        if (ctx.option === 'first') {
                            ctx.doublyLinkedList.addFirstItem(ctx.value);
                        } else if (ctx.option === 'predecessor') {
                            ctx.doublyLinkedList.addPreviousItem(ctx.value);
                        } else if (ctx.option === 'successor') {
                            ctx.doublyLinkedList.addNextItem(ctx.value);
                        } else if (ctx.option === 'last') {
                            ctx.doublyLinkedList.addLastItem(ctx.value);
                        }
                    } else if (ctx.action === 'remove') {
                        if (ctx.option === 'first') {
                            ctx.doublyLinkedList.removeFirstItem();
                        } else if (ctx.option === 'predecessor') {
                            ctx.doublyLinkedList.removePreviousItem();
                        } else if (ctx.option === 'current') {
                            ctx.doublyLinkedList.removeCurrentItem();
                        } else if (ctx.option === 'successor') {
                            ctx.doublyLinkedList.removeNextItem();
                        } else if (ctx.option === 'last') {
                            ctx.doublyLinkedList.removeLastItem();
                        }
                    }

                    b.invalidate(ctx);*/
                }
            }),
            dataStructureComposition({
                title: 'Queue',
                content: queue({}),
                actions: ['enqueue', 'dequeue'],
                onActionChange: l,
                isValueDisabled: false,//ctx.action === 'dequeue'
                onValueChange: (s) => { },
                onExecuteClick: () => {/*() => {
                        if (ctx.action === 'enqueue') {
                            ctx.que.enqueue(ctx.value);
                        } else if (ctx.action === 'dequeue') {
                            ctx.que.dequeue();
                        }

                        b.invalidate(ctx);
                    }*/ }
            }),
            dataStructureComposition({
                title: 'Stack',
                content: stack({}),
                actions: ['push', 'pop'],
                onActionChange: l,
                isValueDisabled: false,//ctx.action === 'pop'
                onValueChange: (s) => { },
                onExecuteClick: () => {
                    /*() => {
                        if (ctx.action === 'push') {
                            ctx.stack.push(ctx.value);
                        } else if (ctx.action === 'pop') {
                            ctx.stack.pop();
                        }

                        b.invalidate(ctx);
                    }*/
                }
            })
        ];
    }
}

let treesPage: b.IBobrilComponent = {
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            dataStructureComposition({
                title: 'Binary tree',
                content: binaryTree({}),
                actions: ['add', 'get', 'remove'],
                onActionChange: l,
                options: ['root', 'left child', 'right child'],
                onOptionChange: l2,
                isValueDisabled: false,//ctx.action === 'remove' || ctx.action === 'get'
                onValueChange: (s) => { },
                onExecuteClick: () => {/*if (ctx.action === 'add') {
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
                    } */ }
            }),
            /*dataStructureComposition({
                title: 'Binary search tree',
                content: commingSoon
            })*/
        ];
    }
}

let heapsPage: b.IBobrilComponent = {
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            header({ content: 'Heaps', type: HeaderType.PageHeader })
        ];
    }
}

b.routes(b.route({ handler: pageComposition }, [
    b.route({ name: 'lists', url: '/lists', handler: listsPage }),
    b.route({ name: 'trees', url: '/trees', handler: treesPage }),
    b.route({ name: 'heaps', url: '/heaps', handler: heapsPage }),
    b.routeDefault({ handler: listsPage })
]));
