/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../components/combobox.ts" />
/// <reference path="../../components/controlPanel.ts" />
/// <reference path="../../components/textbox.ts" />
/// <reference path="../../structureComponents/grid.ts" />
/// <reference path="../guiExtender/guiStack.ts" />
/// <reference path="../guiExtender/guiItem.ts" />
/// <reference path="../guiExtender/guiGridList.ts" />
var JirglStructures;
(function (JirglStructures) {
    var View;
    (function (View) {
        var queueComponent = {
            init: function (ctx, me) {
                ctx.stack = new JirglStructures.GuiExtender.GuiStack();
                ctx.stack.push(new JirglStructures.GuiExtender.GuiItem("init item"));
                ctx.action = "push";
            },
            render: function (ctx, me) {
                var iterator = ctx.stack.getIterator();
                me.children = [
                    JirglStructures.controlPanel({
                        actions: JirglStructures.combobox({
                            options: ["push", "pop"],
                            onChange: function (value) {
                                ctx.action = value;
                            }
                        }),
                        valueBox: JirglStructures.textbox({
                            onChange: function (value) {
                                ctx.value = value;
                            },
                            isDisabled: ctx.action === "pop"
                        }),
                        submitButton: JirglStructures.button({
                            content: "Execute",
                            onClick: function () {
                                if (ctx.action === "push") {
                                    ctx.stack.push(new JirglStructures.GuiExtender.GuiItem(ctx.value));
                                }
                                else if (ctx.action === "pop") {
                                    ctx.stack.pop();
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
        function stack(data) {
            return { component: queueComponent, data: data };
        }
        View.stack = stack;
    })(View = JirglStructures.View || (JirglStructures.View = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=stack.js.map