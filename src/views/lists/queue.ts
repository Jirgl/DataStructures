import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as textfield } from '../../components/textfield';
import { create as controlPanel } from '../../compositions/controlPanel';
import { Structure as Queue } from './graphicalEnricher/queue';
import { ListGrid } from './listGrid';

export interface IQueueData {

}

interface IQueueCtx extends b.IBobrilCtx {
    que: Queue;
    action: string;
    value: string;
    data: IQueueData;
}

let queueComponent: b.IBobrilComponent = {
    init(ctx: IQueueCtx): void {
        ctx.que = new Queue();
        ctx.que.enqueue('init item');
        ctx.action = 'enqueue';
    },
    render(ctx: IQueueCtx, me: b.IBobrilNode): void {
        const iterator = ctx.que.getIterator();
        me.children = canvas({
            contentIterator: iterator,
            grid: new ListGrid(iterator)
        });
    }
}

export function queue(data: IQueueData): b.IBobrilNode {
    return { component: queueComponent, data: data };
}
