var JirglStructures;
(function (JirglStructures) {
    function getItem(ctx) {
        var item = {
            tag: "div",
            children: b.link({
                tag: "a",
                style: {
                    fontFamily: JirglStructures.Font.baseFontFamily,
                    color: JirglStructures.Color.navItemForeground,
                    textDecoration: "none",
                    fontSize: 28,
                    position: "absolute",
                    left: 70,
                    top: -15
                },
                children: ctx.data.content
            }, ctx.data.routeParamName)
        };
        b.style(item, b.sprite(ctx.data.backgroundUrl), {
            position: "absolute",
            left: ctx.data.leftPosition,
            top: ctx.data.topPosition,
            textAlign: "center"
        });
        return item;
    }
    function getHighlightedBar(ctx) {
        return {
            tag: "div",
            style: {
                position: "absolute",
                left: ctx.data.leftPosition,
                top: ctx.data.topPosition + 30,
                textAlign: "center",
                backgroundColor: ctx.data.isActive ? "#080" : "#CCC",
                width: 200,
                height: 3
            }
        };
    }
    var navItemComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children =
                [
                    getItem(ctx),
                    getHighlightedBar(ctx)
                ];
        }
    };
    function navItem(data) {
        return { component: navItemComponent, data: data };
    }
    JirglStructures.navItem = navItem;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=navItem.js.map