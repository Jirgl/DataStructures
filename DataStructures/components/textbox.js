/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var textboxComoponent = {
        render: function (ctx, me) {
            me.tag = "input";
            if (ctx.data.isDisabled) {
                me.attrs = { disabled: "true" };
            }
            me.data = { onChange: ctx.data.onChange };
        },
        onChange: function (ctx, value) {
            ctx.data.onChange(value);
        }
    };
    function textbox(data) {
        return { component: textboxComoponent, data: data };
    }
    JirglStructures.textbox = textbox;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=textbox.js.map