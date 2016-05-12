import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as canvas } from '../../components/canvas';
import { create as combobox } from '../../components/combobox';
import { create as controlPanel } from '../../compositions/controlPanel';
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
                valueBox: m.TextField({
                    value: ctx.value,
                    onChange: (value: string) => {
                        ctx.value = value;
                    },
                    disabled: ctx.action === 'remove',
                    labelText: 'content'
                }),
                submitButton: m.Button({
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    children: 'execute',
                    action: () => {
                        if (ctx.action === 'add') {
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

export function doublyLinkedList(data: IDoublyLinkedListData): b.IBobrilNode {
    return { component: doublyLinkedListComponent, data: data };
}
