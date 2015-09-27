/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    (function (HeaderType) {
        HeaderType[HeaderType["AppHeader"] = 0] = "AppHeader";
        HeaderType[HeaderType["PageHeader"] = 1] = "PageHeader";
        HeaderType[HeaderType["TopicHeader"] = 2] = "TopicHeader";
    })(JirglStructures.HeaderType || (JirglStructures.HeaderType = {}));
    var HeaderType = JirglStructures.HeaderType;
    (function (HeaderEffect) {
        HeaderEffect[HeaderEffect["Dented"] = 0] = "Dented";
    })(JirglStructures.HeaderEffect || (JirglStructures.HeaderEffect = {}));
    var HeaderEffect = JirglStructures.HeaderEffect;
    function toStyle(size, effect) {
        var style = {
            fontSize: size,
            fontFamily: JirglStructures.Font.baseFontFamily
        };
        switch (effect) {
            case HeaderEffect.Dented:
                style["color"] = JirglStructures.Color.appHeaderForeground;
                style["fontFamily"] = JirglStructures.Font.semiboldFontFamily;
                style["textShadow"] = "0 1px 1px #666, -1px -2px 1px #000";
                break;
        }
        return style;
    }
    function toSize(type) {
        switch (type) {
            case HeaderType.AppHeader:
                return 50;
            default:
                return 24;
        }
    }
    var headerComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.style = toStyle(toSize(ctx.data.type), ctx.data.effect);
            me.children = ctx.data.content;
        }
    };
    function header(data) {
        return { component: headerComponent, data: data };
    }
    JirglStructures.header = header;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=header.js.map