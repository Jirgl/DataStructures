/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var controlPanelComoponent = {
        render: function (ctx, me) {
            me.tag = "table";
            me.children = [
                { tag: "td", children: ctx.data.actions },
                { tag: "td", children: ctx.data.options },
                { tag: "td", children: ctx.data.valueBox },
                { tag: "td", children: ctx.data.submitButton }
            ];
        }
    };
    function controlPanel(data) {
        return { component: controlPanelComoponent, data: data };
    }
    JirglStructures.controlPanel = controlPanel;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=controlpanel.js.map