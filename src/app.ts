import * as b from 'bobril';
import { create as pageComposition } from './compositions/page';
import { create as dataStructureComposition } from './compositions/dataStructure';
import { create as header, HeaderType } from './components/header';
import { doublyLinkedList } from './views/lists/doublyLinkedList';
import { queue } from './views/lists/queue';
import { stack } from './views/lists/stack';
import { binaryTree } from './views/trees/binaryTree';

let listsPage: b.IBobrilComponent = {
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            dataStructureComposition({
                title: 'Arrays',
                description: '',
                content: undefined
            }),
            dataStructureComposition({
                title: 'Linked lists',
                description: '',
                content: undefined
            }),
            dataStructureComposition({
                title: 'Doubly linked list',
                description: '',
                content: doublyLinkedList({})
            }),
            dataStructureComposition({
                title: 'Queue',
                description: '',
                content: queue({})
            }),
            dataStructureComposition({
                title: 'Stack',
                description: '',
                content: stack({})
            })
        ];
    }
}

let treesPage: b.IBobrilComponent = {
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            header({ content: 'Trees', type: HeaderType.PageHeader }),
            header({ content: 'Binary tree', type: HeaderType.TopicHeader }),
            binaryTree({}),
            header({ content: 'Binary search tree', type: HeaderType.TopicHeader })
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
    b.routeDefault({ handler: treesPage })
]));
