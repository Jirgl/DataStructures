import * as b from 'bobril';
import * as f from 'bobflux';
import * as s from './state';
import { create as pageComposition } from './compositions/page';
import { DoublyLinkedList } from './views/lists/doublyLinkedList/doublyLinkedList';
import { LinkedList } from './views/lists/linkedList/linkedList';
import { Queue } from './views/lists/queue/queue';
import { Stack } from './views/lists/stack/stack';
import { BinaryTree } from './views/trees/binaryTree/binaryTree';

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
            LinkedList(),
            DoublyLinkedList(),
            Queue(),
            Stack()
        ];
    }
}

let treesPage: b.IBobrilComponent = {
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            BinaryTree(),
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
        me.children = commingSoon
    }
}

f.bootstrap(s.createDefaultAppState());

b.routes(b.route({ handler: pageComposition }, [
    b.route({ name: 'lists', url: '/lists', handler: listsPage }),
    b.route({ name: 'trees', url: '/trees', handler: treesPage }),
    b.route({ name: 'heaps', url: '/heaps', handler: heapsPage }),
    b.routeDefault({ handler: listsPage })
]));
