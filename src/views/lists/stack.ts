﻿import * as b from 'bobril';
import { create as button } from '../../components/button';
import { create as canvas } from '../../components/canvas';
import { create as combobox } from '../../components/combobox';
import { create as controlPanel } from '../../components/controlPanel';
import { create as textbox } from '../../components/textbox';
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
        me.children = [
            controlPanel({
                actions: combobox({
                    options: ['push', 'pop'],
                    onChange: (value: string) => {
                        ctx.action = value;
                    }
                }),
                valueBox: textbox({
                    onChange: (value: string) => {
                        ctx.value = value;
                    },
                    isDisabled: ctx.action === 'pop'
                }),
                submitButton: button({
                    content: 'Execute',
                    onClick: () => {
                        if (ctx.action === 'push') {
                            ctx.stack.push(ctx.value);
                        } else if (ctx.action === 'pop') {
                            ctx.stack.pop();
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

export function stack(data: IStackData): b.IBobrilNode {
    return { component: queueComponent, data: data };
}