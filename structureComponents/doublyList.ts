/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.mouse.d.ts" />
/// <reference path="../components/button.ts" />
/// <reference path="../components/canvas.ts" />
/// <reference path="../models/grid.ts" />

module JirglStructures {
    export interface IDoublyListData {
        
    }

    export interface IDoublyListCtx {
        doublyLinkedList: GuiDoublyLinkedList;
        option: string;
        action: string;
        value: string;
        data: IDoublyListData;
    }

    export class GuiDoublyLinkedList extends Lists.DoublyLinkedList<GuiItem> implements IGrid {
        private iterator: GuiDoublyLinkedListIterator;

        constructor() {
            super();
            this.iterator = new GuiDoublyLinkedListIterator(this);
        }

        getPosition(maxWidth: number): Position {
            var itemWidthWithMargin = (itemWidth + (itemMargin * 2));
            var itemsPerLine = Math.floor(maxWidth / itemWidthWithMargin);
            return {
                x: ((this.iterator.orderOfItem - 1) % itemsPerLine) * itemWidthWithMargin,
                y: Math.floor((this.iterator.orderOfItem - 1) / itemsPerLine) * itemWidthWithMargin
            };
        }

        getIterator(): IIterator<GuiItem> {
            return this.iterator;
        }
    }

    class GuiDoublyLinkedListIterator extends Lists.DoublyLinkedListIterator<GuiItem> implements IIterator<GuiItem> {
        orderOfItem: number;

        constructor(doublyLinkedList: Lists.DoublyLinkedList<GuiItem>) {
            super(doublyLinkedList);
            this.orderOfItem = 0;
        }

        next(): GuiItem {
            var isCurrent = this.doublyLinkedList.currentItem === this.iteratorCurrentItem;
            var item = super.next();
            item.isCurrent = isCurrent;
            this.orderOfItem++;

            return item;
        }

        reset(): void {
            super.reset();
            this.orderOfItem = 0;
        }
    }

    var doublyListComponent: IBobrilComponent = {
        init(ctx: IDoublyListCtx, me: IBobrilNode): void {
            ctx.doublyLinkedList = new GuiDoublyLinkedList();
            ctx.doublyLinkedList.addFirstItem({ content: "init item", isCurrent: true });
            ctx.option = "first";
            ctx.action = "add";
        },
        render(ctx: IDoublyListCtx, me: IBobrilNode): void {
            var options = ["first", "predecessor"];
            if (ctx.action === "remove") {
                options.push("current");
            }

            options.push("successor");
            options.push("last");

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
                    contentIterator: ctx.doublyLinkedList.getIterator(),
                    grid: ctx.doublyLinkedList
                })
            ];
        }
    }

    export function doublyList(data: IDoublyListData): IBobrilNode {
        return { component: doublyListComponent, data: data };
    }
}