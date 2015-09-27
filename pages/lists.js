var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.listsPageComponent = {
            id: "Lists",
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.header({ content: "Lists", type: JirglStructures.HeaderType.PageHeader }),
                    JirglStructures.header({ content: "Doubly linked list", type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.doublyList({}),
                    JirglStructures.header({ content: "Queue", type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.queue({}),
                    JirglStructures.header({ content: "Stack", type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.stack({})
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=lists.js.map