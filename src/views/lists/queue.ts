import * as b from 'bobril';
import { create as button } from '../../components/button';
import { create as canvas } from '../../components/canvas';
import { create as combobox } from '../../components/combobox';
import { create as controlPanel } from '../../components/controlPanel';
import { create as textbox } from '../../components/textbox';
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
        me.children = [
            controlPanel({
                actions: combobox({
                    options: ['enqueue', 'dequeue'],
                    onChange: (value: string) => {
                        ctx.action = value;
                    }
                }),
                valueBox: textbox({
                    onChange: (value: string) => {
                        ctx.value = value;
                    },
                    isDisabled: ctx.action === 'dequeue'
                }),
                submitButton: button({
                    content: 'Execute',
                    onClick: () => {
                        if (ctx.action === 'enqueue') {
                            ctx.que.enqueue(ctx.value);
                        } else if (ctx.action === 'dequeue') {
                            ctx.que.dequeue();
                        }

                        b.invalidate(ctx);
                    }
                })
            }),
            canvas({
                contentIterator: iterator,
                grid: new ListGrid(iterator)
            })
        ];
    }
}

export function queue(data: IQueueData): b.IBobrilNode {
    return { component: queueComponent, data: data };
}
