import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { Structure as DoublyLinkedList } from './graphicalEnricher/doublyLinkedList';
import { ListGrid } from './listGrid';

export interface IDoublyLinkedListData {

}

interface IDoublyLinkedListCtx extends b.IBobrilCtx {
    doublyLinkedList: DoublyLinkedList;
    option: string;
    action: string;
    value: string;
    data: IDoublyLinkedListData;
}

let doublyLinkedListComponent: b.IBobrilComponent = {
    init(ctx: IDoublyLinkedListCtx, me: b.IBobrilNode): void {
        ctx.doublyLinkedList = new DoublyLinkedList();
        ctx.doublyLinkedList.addFirstItem('init item');
        ctx.option = 'first';
        ctx.action = 'add';
    },
    render(ctx: IDoublyLinkedListCtx, me: b.IBobrilNode): void {
        const iterator = ctx.doublyLinkedList.getIterator();
        /*if (ctx.action === 'remove') {
            options.push('current');
        }*/

        me.children = [
            ,
            canvas({
                contentIterator: iterator,
                grid: new ListGrid(iterator)
            })
        ];
    }
}

export function doublyLinkedList(data: IDoublyLinkedListData): b.IBobrilNode {
    return { component: doublyLinkedListComponent, data: data };
}
