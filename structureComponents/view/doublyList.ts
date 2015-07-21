﻿/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../structureComponents/grid.ts" />

module JirglStructures.View {
    export interface IDoublyListData {
        
    }

    export interface IDoublyListCtx {
        doublyLinkedList: GuiExtender.GuiDoublyLinkedList<string>;
        option: string;
        action: string;
        value: string;
        data: IDoublyListData;
    }

    var doublyListComponent: IBobrilComponent = {
        init(ctx: IDoublyListCtx, me: IBobrilNode): void {
            ctx.doublyLinkedList = new GuiExtender.GuiDoublyLinkedList<string>();
            ctx.doublyLinkedList.addFirstItem({ content: "init item", isCurrent: true });
            ctx.option = "first";
            ctx.action = "add";
        },
        render(ctx: IDoublyListCtx, me: IBobrilNode): void {
            var iterator = ctx.doublyLinkedList.getIterator();
            var options = ["first", "predecessor", "successor", "last"];
            if (ctx.action === "remove") {
                options.push("current");
            }

            me.children = [
                controlPanel({
                    actions: combobox({
                        options: ["add", "remove"],
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
                    valueBox: textbox({
                        onChange: (value: string) => {
                            ctx.value = value;
                        },
                        isDisabled: ctx.action === "remove"
                    }),
                    submitButton: button({
                        content: "Execute",
                        onClick: () => {
                            if (ctx.action === "add") {
                                if (ctx.option === "first") {
                                    ctx.doublyLinkedList.addFirstItem({ content: ctx.value, isCurrent: true });
                                } else if (ctx.option === "predecessor") {
                                    ctx.doublyLinkedList.addPreviousItem({ content: ctx.value, isCurrent: true });
                                } else if (ctx.option === "successor") {
                                    ctx.doublyLinkedList.addNextItem({ content: ctx.value, isCurrent: true });
                                } else if (ctx.option === "last") {
                                    ctx.doublyLinkedList.addLastItem({ content: ctx.value, isCurrent: true });
                                }
                            } else if (ctx.action === "remove") {
                                if (ctx.option === "first") {
                                    ctx.doublyLinkedList.removeFirstItem();
                                } else if (ctx.option === "predecessor") {
                                    ctx.doublyLinkedList.removePreviousItem();
                                } else if (ctx.option === "current") {
                                    ctx.doublyLinkedList.removeCurrentItem();
                                } else if (ctx.option === "successor") {
                                    ctx.doublyLinkedList.removeNextItem();
                                } else if (ctx.option === "last") {
                                    ctx.doublyLinkedList.removeLastItem();
                                }
                            }

                            b.invalidate(ctx);
                        }
                    })
                }),
                canvas({
                    contentIterator: iterator,
                    grid: new GuiExtender.GuiGridList<string>(iterator)
                })
            ];
        }
    }

    export function doublyList(data: IDoublyListData): IBobrilNode {
        return { component: doublyListComponent, data: data };
    }
}