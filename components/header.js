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
    var headerComponent = {
        toTag: function (size) {
            switch (size) {
                case 0 /* H1 */:
                    return "h1";
                case 1 /* H2 */:
                    return "h2";
                case 2 /* H3 */:
                    return "h3";
                case 3 /* H4 */:
                    return "h4";
                case 4 /* H5 */:
                    return "h5";
                case 5 /* H6 */:
                    return "h6";
                default:
                    return "h2";
            }
        },
        render: function (ctx, me) {
            me.tag = this.toTag(ctx.data.size);
            me.children = ctx.data.content;
        }
    };
    function header(data) {
        return { component: headerComponent, data: data };
    }
    JirglStructures.header = header;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=header.js.map