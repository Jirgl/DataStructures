/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var controlPanelComoponent = {
        render: function (ctx, me) {
            me.tag = "table";
            var children = [{ tag: "td", children: ctx.data.actions }];
            if (ctx.data.options) {
                children.push({ tag: "td", children: ctx.data.options });
            }
            children.push({ tag: "td", children: ctx.data.valueBox });
            children.push({ tag: "td", children: ctx.data.submitButton });
            me.children = children;
        }
    };
    function controlPanel(data) {
        return { component: controlPanelComoponent, data: data };
    }
    JirglStructures.controlPanel = controlPanel;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=controlpanel.js.map