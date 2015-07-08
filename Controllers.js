/// <reference path="bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Item = (function () {
        function Item(width, height, color) {
            this.color = color;
            this.width = width;
            this.height = height;
        }
        Item.prototype.toVg = function () {
            return {
                data: {
                    path: ["rect", 0, 0, this.width, this.height],
                    fill: this.color
                }
            };
        };
        return Item;
    })();
    JirglStructures.Item = Item;
    var ListController = (function () {
        function ListController() {
        }
        ListController.init = function (ctx, me) {
            ctx.item = new Item(200, 200, "#00AA11");
        };
        ListController.render = function (ctx, me, oldMe) {
            me.tag = "div";
            me.children = [
                {
                    component: b.vg,
                    data: { width: 1000 + "px", height: 500 + "px" },
                    children: [
                        ctx.item.toVg()
                    ]
                }
            ];
        };
        return ListController;
    })();
    JirglStructures.ListController = ListController;
    b.init(function () {
        b.invalidate();
        return [
            {
                tag: "div",
                style: { width: 200 + "px", height: 200 + "px" },
                component: ListController,
                data: { width: 200, height: 200, color: "#00AA11" }
            }
        ];
    });
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=controllers.js.map