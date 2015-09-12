/// <reference path="bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var app = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                JirglStructures.pageLayout({})
            ];
        }
    };
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=app.js.map