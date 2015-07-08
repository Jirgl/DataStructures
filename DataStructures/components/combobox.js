/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var comboboxComoponent = {
        render: function (ctx, me) {
            var children = [];
            for (var i = 0; i < ctx.data.options.length; i++) {
                children.push({ tag: "option", children: ctx.data.options[i] });
            }
            me.tag = "select";
            me.data = { onChange: ctx.data.onChange };
            me.children = children;
        },
        onChange: function (ctx, value) {
            ctx.data.onChange(value);
            b.invalidate();
        }
    };
    function combobox(data) {
        return { component: comboboxComoponent, data: data };
    }
    JirglStructures.combobox = combobox;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=combobox.js.map