var JirglStructures;
(function (JirglStructures) {
    var toStyle = function (isActive) {
        var style = {
            fontFamily: JirglStructures.Font.baseFontFamily,
            color: JirglStructures.Color.baseForeground,
            textAlign: "center",
            cursor: "pointer",
            fontSize: 28,
            width: 150,
            height: 41
        };
        if (isActive) {
            style.background = JirglStructures.Color.darkBackground;
            style.borderColor = JirglStructures.Color.darkBackgroundBorder;
            style.borderStyle = "solid";
            style.borderWidth = 1;
            style.borderRadius = 3;
        }
        return style;
    };
    var navItemComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = b.link({
                tag: "div",
                style: toStyle(ctx.data.isActive),
                children: ctx.data.content
            }, ctx.data.routeParamName);
        }
    };
    function navItem(data) {
        return { component: navItemComponent, data: data };
    }
    JirglStructures.navItem = navItem;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=navItem.js.map