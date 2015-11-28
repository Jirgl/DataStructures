var JirglStructures;
(function (JirglStructures) {
    var View;
    (function (View) {
        var doublyListComponent = {
            init: function (ctx, me) {
                ctx.doublyLinkedList = new JirglStructures.GuiExtender.GuiDoublyLinkedList();
                ctx.doublyLinkedList.addFirstItem(new JirglStructures.GuiExtender.GuiItem("init item"));
                ctx.option = "first";
                ctx.action = "add";
            },
            render: function (ctx, me) {
                var iterator = ctx.doublyLinkedList.getIterator();
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
                                        ctx.doublyLinkedList.addFirstItem(new JirglStructures.GuiExtender.GuiItem(ctx.value));
                                    }
                                    else if (ctx.option === "predecessor") {
                                        ctx.doublyLinkedList.addPreviousItem(new JirglStructures.GuiExtender.GuiItem(ctx.value));
                                    }
                                    else if (ctx.option === "successor") {
                                        ctx.doublyLinkedList.addNextItem(new JirglStructures.GuiExtender.GuiItem(ctx.value));
                                    }
                                    else if (ctx.option === "last") {
                                        ctx.doublyLinkedList.addLastItem(new JirglStructures.GuiExtender.GuiItem(ctx.value));
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
                        contentIterator: iterator,
                        grid: new JirglStructures.GuiExtender.GuiGridList(iterator)
                    })
                ];
            }
        };
        function doublyList(data) {
            return { component: doublyListComponent, data: data };
        }
        View.doublyList = doublyList;
    })(View = JirglStructures.View || (JirglStructures.View = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=doublyList.js.map