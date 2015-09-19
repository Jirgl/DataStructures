/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    (function (HeaderSize) {
        HeaderSize[HeaderSize["H1"] = 0] = "H1";
        HeaderSize[HeaderSize["H2"] = 1] = "H2";
        HeaderSize[HeaderSize["H3"] = 2] = "H3";
        HeaderSize[HeaderSize["H4"] = 3] = "H4";
        HeaderSize[HeaderSize["H5"] = 4] = "H5";
        HeaderSize[HeaderSize["H6"] = 5] = "H6";
    })(JirglStructures.HeaderSize || (JirglStructures.HeaderSize = {}));
    var HeaderSize = JirglStructures.HeaderSize;
    (function (HeaderEffect) {
        HeaderEffect[HeaderEffect["Dented"] = 0] = "Dented";
    })(JirglStructures.HeaderEffect || (JirglStructures.HeaderEffect = {}));
    var HeaderEffect = JirglStructures.HeaderEffect;
    function toTag(size) {
        switch (size) {
            case HeaderSize.H1:
                return "h1";
            case HeaderSize.H2:
                return "h2";
            case HeaderSize.H3:
                return "h3";
            case HeaderSize.H4:
                return "h4";
            case HeaderSize.H5:
                return "h5";
            case HeaderSize.H6:
                return "h6";
            default:
                return "h2";
        }
    }
    function toStyle(effect) {
        switch (effect) {
            case HeaderEffect.Dented:
                return {
                    color: "#EEE",
                    fontSize: 80,
                    fontFamily: "Segoe UI semibold",
                    textShadow: "0 1px 1px #666, -1px -2px 1px #000"
                };
            default:
                return {};
        }
    }
    var headerComponent = {
        render: function (ctx, me) {
            me.tag = toTag(ctx.data.size);
            me.style = toStyle(ctx.data.effect);
            me.children = ctx.data.content;
        }
    };
    function header(data) {
        return { component: headerComponent, data: data };
    }
    JirglStructures.header = header;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=header.js.map