import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as textfield } from '../../components/textfield';
import { create as controlPanel } from '../../compositions/controlPanel';
import { Structure as Stack } from './graphicalEnricher/stack';
import { ListGrid } from './listGrid';

export interface IStackData {

}

interface IStackCtx extends b.IBobrilCtx {
    stack: Stack;
    action: string;
    value: string;
    data: IStackData;
}

let queueComponent: b.IBobrilComponent = {
    init(ctx: IStackCtx): void {
        ctx.stack = new Stack();
        ctx.stack.push('init item');
        ctx.action = 'push';
    },
    render(ctx: IStackCtx, me: b.IBobrilNode): void {
        const iterator = ctx.stack.getIterator();
        me.children = canvas({
            contentIterator: iterator,
            grid: new ListGrid(iterator)
        });
    }
}

export function stack(data: IStackData): b.IBobrilNode {
    return { component: queueComponent, data: data };
}
