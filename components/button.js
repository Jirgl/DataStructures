/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.mouse.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var buttonComoponent = {
        render: function (ctx, me) {
            me.tag = "button";
            me.children = ctx.data.content;
        },
        onClick: function (ctx, event) {
            ctx.data.onClick();
            return true;
        }
    };
    function button(data) {
        return { component: buttonComoponent, data: data };
    }
    JirglStructures.button = button;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=button.js.map