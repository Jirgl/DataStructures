import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as textfield } from '../../components/textfield';
import { create as combobox } from '../../components/combobox';
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
        const options = ['first', 'predecessor', 'successor', 'last'];
        if (ctx.action === 'remove') {
            options.push('current');
        }

        me.children = [
            controlPanel({
                actions: combobox({
                    options: ['add', 'remove'],
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
                valueBox: textfield({
                    isDisabled: ctx.action === 'remove',
                    onChange: (value) => { ctx.value = value; },
                    maxLength: 5
                }),
                submitButton: m.Button({
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    children: 'execute',
                    action: () => {
                        if (ctx.action === 'add') {
                            if (ctx.option === 'first') {
                                ctx.linkedList.addFirstItem(ctx.value);
                            } else if (ctx.option === 'predecessor') {
                                ctx.linkedList.addPreviousItem(ctx.value);
                            } else if (ctx.option === 'successor') {
                                ctx.linkedList.addNextItem(ctx.value);
                            } else if (ctx.option === 'last') {
                                ctx.linkedList.addLastItem(ctx.value);
                            }
                        } else if (ctx.action === 'remove') {
                            if (ctx.option === 'first') {
                                ctx.linkedList.removeFirstItem();
                            } else if (ctx.option === 'predecessor') {
                                ctx.linkedList.removePreviousItem();
                            } else if (ctx.option === 'current') {
                                ctx.linkedList.removeCurrentItem();
                            } else if (ctx.option === 'successor') {
                                ctx.linkedList.removeNextItem();
                            } else if (ctx.option === 'last') {
                                ctx.linkedList.removeLastItem();
                            }
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

export function linkedList(data: ILinkedListData): b.IBobrilNode {
    return { component: linkedListComponent, data: data };
}
