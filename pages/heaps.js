var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.heapsPageComponent = {
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.header({ content: "Heaps", type: JirglStructures.HeaderType.PageHeader })
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=heaps.js.map