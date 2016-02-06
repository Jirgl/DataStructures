var JirglStructures;
(function (JirglStructures) {
    (function (HeaderType) {
        HeaderType[HeaderType["AppHeader"] = 0] = "AppHeader";
        HeaderType[HeaderType["PageHeader"] = 1] = "PageHeader";
        HeaderType[HeaderType["TopicHeader"] = 2] = "TopicHeader";
    })(JirglStructures.HeaderType || (JirglStructures.HeaderType = {}));
    var HeaderType = JirglStructures.HeaderType;
    function toSize(type) {
        switch (type) {
            case HeaderType.AppHeader:
                return 40;
            default:
                return 26;
        }
    }
    function toStyle(type) {
        var style = {};
        switch (type) {
            case HeaderType.AppHeader:
                style.fontSize = toSize(type);
                style.fontFamily = JirglStructures.Font.baseFontFamily;
                style.fontWeight = "bold";
                style.color = JirglStructures.Color.lightForeground;
                break;
            default:
                style.fontSize = toSize(type);
                style.fontFamily = JirglStructures.Font.baseFontFamily;
                style.color = JirglStructures.Color.darkForeground;
        }
        return style;
    }
    var headerComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.style = toStyle(ctx.data.type);
            me.children = ctx.data.content;
        }
    };
    function header(data) {
        return { component: headerComponent, data: data };
    }
    JirglStructures.header = header;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=header.js.map