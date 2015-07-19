/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../structureComponents/grid.ts" />

module JirglStructures.View {
    export interface IStackData {

    }

    export interface IStackCtx {
        stack: GuiExtender.GuiStack;
        action: string;
        value: string;
        data: IStackData;
    }

    var queueComponent: IBobrilComponent = {
        init(ctx: IStackCtx, me: IBobrilNode): void {
            ctx.stack = new GuiExtender.GuiStack();
            ctx.stack.push({ content: "init item", isCurrent: true });
            ctx.action = "push";
        },
        render(ctx: IStackCtx, me: IBobrilNode): void {
            var iterator = ctx.stack.getIterator();
            me.children = [
                controlPanel({
                    actions: combobox({
                        options: ["push", "pop"],
                        onChange: (value: string) => {
                            ctx.action = value;
                        }
                    }),
                    valueBox: textbox({
                        onChange: (value: string) => {
                            ctx.value = value;
                        },
                        isDisabled: ctx.action === "pop"
                    }),
                    submitButton: button({
                        content: "Execute",
                        onClick: () => {
                            if (ctx.action === "push") {
                                ctx.stack.push({ content: ctx.value, isCurrent: true });
                            } else if (ctx.action === "pop") {
                                ctx.stack.pop();
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

    export function stack(data: IStackData): IBobrilNode {
        return { component: queueComponent, data: data };
    }
}