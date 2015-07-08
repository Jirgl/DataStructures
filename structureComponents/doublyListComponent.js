/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.mouse.d.ts" />
/// <reference path="../components/button.ts" />
/// <reference path="../models/grid.ts" />
var JirglStructures;
(function (JirglStructures) {
    var doublyListComponent = {
        init: function (ctx, me) {
            ctx.doublyLinkedList = new Lists.DoublyLinkedList();
            this.data = ctx.data;
        },
        render: function (ctx, me) {
            console.log("render");
            me.children = [
                JirglStructures.button({
                    content: "Add last",
                    onClick: function () {
                        b.invalidate(ctx);
                        console.log("click");
                        ctx.doublyLinkedList.addFirstItem("first");
                    }
                }),
                JirglStructures.canvas({ content: ctx.doublyLinkedList.getIterator(), grid: undefined })
            ];
        }
    };
    function doublyList(data) {
        return { component: doublyListComponent, data: data };
    }
    JirglStructures.doublyList = doublyList;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=doublylistcomponent.js.map