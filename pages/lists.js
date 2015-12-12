var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.listsPageComponent = {
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.paragraph({ content: b.t(9) }),
                    JirglStructures.header({ content: b.t(4), type: JirglStructures.HeaderType.PageHeader }),
                    JirglStructures.header({ content: b.t(5), type: JirglStructures.HeaderType.PageHeader }),
                    JirglStructures.paragraph({ content: b.t(10) }),
                    JirglStructures.header({ content: b.t(6), type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.doublyList({}),
                    JirglStructures.header({ content: b.t(7), type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.queue({}),
                    JirglStructures.header({ content: b.t(8), type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.stack({})
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=lists.js.map