/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    (function (Size) {
        Size[Size["H1"] = 0] = "H1";
        Size[Size["H2"] = 1] = "H2";
        Size[Size["H3"] = 2] = "H3";
        Size[Size["H4"] = 3] = "H4";
        Size[Size["H5"] = 4] = "H5";
        Size[Size["H6"] = 5] = "H6";
    })(JirglStructures.Size || (JirglStructures.Size = {}));
    var Size = JirglStructures.Size;
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