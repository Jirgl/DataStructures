var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.heapsPageComponent = {
            id: "Heaps",
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.header({ content: "Heaps", size: JirglStructures.HeaderSize.H2 })
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=heaps.js.map