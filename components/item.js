/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Item;
    (function (Item) {
        Item.itemWidth = 80;
        Item.itemHeight = 80;
        Item.itemMargin = 30;
        Item.arrowMargin = 2;
    })(Item = JirglStructures.Item || (JirglStructures.Item = {}));
    var itemComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.style = {
                color: JirglStructures.Color.lightForeground,
                background: ctx.data.isCurrent ? JirglStructures.Color.majorColor : JirglStructures.Color.darkBackground,
                width: Item.itemWidth,
                height: Item.itemHeight,
                position: "absolute",
                left: ctx.data.x,
                top: ctx.data.y,
                margin: Item.itemMargin
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