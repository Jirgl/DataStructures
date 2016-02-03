/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../components/combobox.ts" />
/// <reference path="../../components/controlPanel.ts" />
/// <reference path="../../components/textbox.ts" />
/// <reference path="../../structureComponents/grid.ts" />
/// <reference path="../guiExtender/guiQueue.ts" />
/// <reference path="../guiExtender/guiItem.ts" />
/// <reference path="../guiExtender/guiGridList.ts" />
var JirglStructures;
(function (JirglStructures) {
    var View;
    (function (View) {
        var queueComponent = {
            init: function (ctx, me) {
                ctx.que = new JirglStructures.GuiExtender.GuiQueue();
                ctx.que.enqueue(new JirglStructures.GuiExtender.GuiItem("init item"));
                ctx.action = "enqueue";
            },
            render: function (ctx, me) {
                var iterator = ctx.que.getIterator();
                me.children = [
                    JirglStructures.controlPanel({
                        actions: JirglStructures.combobox({
                            options: ["enqueue", "dequeue"],
                            onChange: function (value) {
                                ctx.action = value;
                            }
                        }),
                        valueBox: JirglStructures.textbox({
                            onChange: function (value) {
                                ctx.value = value;
                            },
                            isDisabled: ctx.action === "dequeue"
                        }),
                        submitButton: JirglStructures.button({
                            content: "Execute",
                            onClick: function () {
                                if (ctx.action === "enqueue") {
                                    ctx.que.enqueue(new JirglStructures.GuiExtender.GuiItem(ctx.value));
                                }
                                else if (ctx.action === "dequeue") {
                                    ctx.que.dequeue();
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
        function queue(data) {
            return { component: queueComponent, data: data };
        }
        View.queue = queue;
    })(View = JirglStructures.View || (JirglStructures.View = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=queue.js.map