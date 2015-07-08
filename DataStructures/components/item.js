/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    JirglStructures.itemWidth = 100;
    JirglStructures.itemHeight = 100;
    JirglStructures.itemMargin = 20;
    var itemComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.style = {
                background: ctx.data.isCurrent ? "green" : "red",
                width: JirglStructures.itemWidth,
                height: JirglStructures.itemHeight,
                position: "absolute",
                left: ctx.data.x,
                top: ctx.data.y,
                margin: JirglStructures.itemMargin
            };
            me.children = ctx.data.content;
        }
    };
    function item(data) {
        return { component: itemComponent, data: data };
    }
    JirglStructures.item = item;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=item.js.map