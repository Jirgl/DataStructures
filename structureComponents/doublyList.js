/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.mouse.d.ts" />
/// <reference path="../components/button.ts" />
/// <reference path="../components/canvas.ts" />
/// <reference path="../structureComponents/grid.ts" />
var JirglStructures;
(function (JirglStructures) {
    var doublyListComponent = {
        init: function (ctx, me) {
            ctx.doublyLinkedList = new JirglStructures.GuiDoublyLinkedList();
            ctx.doublyLinkedList.addFirstItem({ content: "init item", isCurrent: true });
            ctx.option = "first";
            ctx.action = "add";
        },
        render: function (ctx, me) {
            var options = ["first", "predecessor", "successor", "last"];
            if (ctx.action === "remove") {
                options.push("current");
            }
            me.children = [
                JirglStructures.controlPanel({
                    actions: JirglStructures.combobox({
                        options: ["add", "remove"],
                        onChange: function (value) {
                            ctx.action = value;
                        }
                    }),
                    options: JirglStructures.combobox({
                        options: options,
                        onChange: function (value) {
                            ctx.option = value;
                        }
                    }),
                    valueBox: JirglStructures.textbox({
                        onChange: function (value) {
                            ctx.value = value;
                        },
                        isDisabled: ctx.action === "remove"
                    }),
                    submitButton: JirglStructures.button({
                        content: "Execute",
                        onClick: function () {
                            if (ctx.action === "add") {
                                if (ctx.option === "first") {
                                    ctx.doublyLinkedList.addFirstItem({ content: ctx.value, isCurrent: true });
                                }
                                else if (ctx.option === "predecessor") {
                                    ctx.doublyLinkedList.addPreviousItem({ content: ctx.value, isCurrent: true });
                                }
                                else if (ctx.option === "successor") {
                                    ctx.doublyLinkedList.addNextItem({ content: ctx.value, isCurrent: true });
                                }
                                else if (ctx.option === "last") {
                                    ctx.doublyLinkedList.addLastItem({ content: ctx.value, isCurrent: true });
                                }
                            }
                            else if (ctx.action === "remove") {
                                if (ctx.option === "first") {
                                    ctx.doublyLinkedList.removeFirstItem();
                                }
                                else if (ctx.option === "predecessor") {
                                    ctx.doublyLinkedList.removePreviousItem();
                                }
                                else if (ctx.option === "current") {
                                    ctx.doublyLinkedList.removeCurrentItem();
                                }
                                else if (ctx.option === "successor") {
                                    ctx.doublyLinkedList.removeNextItem();
                                }
                                else if (ctx.option === "last") {
                                    ctx.doublyLinkedList.removeLastItem();
                                }
                            }
                            b.invalidate(ctx);
                        }
                    })
                }),
                JirglStructures.canvas({
                    contentIterator: ctx.doublyLinkedList.getIterator(),
                    grid: ctx.doublyLinkedList
                })
            ];
        }
    };
    function doublyList(data) {
        return { component: doublyListComponent, data: data };
    }
    JirglStructures.doublyList = doublyList;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=doublyList.js.map