/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../components/combobox.ts" />
/// <reference path="../../components/controlPanel.ts" />
/// <reference path="../../components/textbox.ts" />
/// <reference path="../../structureComponents/grid.ts" />
/// <reference path="../guiExtender/guiQueue.ts" />
/// <reference path="../guiExtender/guiGridList.ts" />

module JirglStructures.View {
    export interface IQueueData {

    }

    export interface IQueueCtx {
        que: GuiExtender.GuiQueue;
        action: string;
        value: string;
        data: IQueueData;
    }

    var queueComponent: IBobrilComponent = {
        init(ctx: IQueueCtx): void {
            ctx.que = new GuiExtender.GuiQueue();
            ctx.que.enqueue(new GuiExtender.GuiItem("init item"));
            ctx.action = "enqueue";
        },
        render(ctx: IQueueCtx, me: IBobrilNode): void {
            const iterator = ctx.que.getIterator();
            me.children = [
                controlPanel({
                    actions: combobox({
                        options: ["enqueue", "dequeue"],
                        onChange: (value: string) => {
                            ctx.action = value;
                        }
                    }),
                    valueBox: textbox({
                        onChange: (value: string) => {
                            ctx.value = value;
                        },
                        isDisabled: ctx.action === "dequeue"
                    }),
                    submitButton: button({
                        content: "Execute",
                        onClick: () => {
                            if (ctx.action === "enqueue") {
                                ctx.que.enqueue(new GuiExtender.GuiItem(ctx.value));
                            } else if (ctx.action === "dequeue") {
                                ctx.que.dequeue();
                            }

                            b.invalidate(ctx);
                        }
                    })
                }),
                canvas({
                    contentIterator: iterator,
                    grid: new GuiExtender.GuiGridList(iterator)
                })
            ];
        }
    }

    export function queue(data: IQueueData): IBobrilNode {
        return { component: queueComponent, data: data };
    }
}