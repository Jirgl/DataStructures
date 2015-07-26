var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.listsPageComponent = {
            id: "Lists",
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.header({ content: "Lists", size: JirglStructures.HeaderSize.H2 }),
                    JirglStructures.header({ content: "Doubly linked list", size: JirglStructures.HeaderSize.H3 }),
                    JirglStructures.View.doublyList({}),
                    JirglStructures.header({ content: "Queue", size: JirglStructures.HeaderSize.H3 }),
                    JirglStructures.View.queue({}),
                    JirglStructures.header({ content: "Stack", size: JirglStructures.HeaderSize.H3 }),
                    JirglStructures.View.stack({})
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=lists.js.map