import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as textfield } from '../../components/textfield';
import { create as controlPanel } from '../../compositions/controlPanel';
import { Structure as LinkedList } from './graphicalEnricher/linkedList';
import { ListGrid } from './listGrid';

export interface ILinkedListData {

}

interface ILinkedListCtx extends b.IBobrilCtx {
    linkedList: LinkedList;
    option: string;
    action: string;
    value: string;
    data: ILinkedListData;
}

let linkedListComponent: b.IBobrilComponent = {
    init(ctx: ILinkedListCtx, me: b.IBobrilNode): void {
        ctx.linkedList = new LinkedList();
        ctx.linkedList.addFirstItem('init item');
        ctx.option = 'first';
        ctx.action = 'add';
    },
    render(ctx: ILinkedListCtx, me: b.IBobrilNode): void {
        const iterator = ctx.linkedList.getIterator();
        /*if (ctx.action === 'remove') {
            options.push('current');
        }*/

        me.children = canvas({
            contentIterator: iterator,
            grid: new ListGrid(iterator)
        });
    }
}

export function linkedList(data: ILinkedListData): b.IBobrilNode {
    return { component: linkedListComponent, data: data };
}
