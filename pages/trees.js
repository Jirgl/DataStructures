var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.treesPageComponent = {
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.header({ content: "Trees", type: JirglStructures.HeaderType.PageHeader }),
                    JirglStructures.header({ content: "Binary tree", type: JirglStructures.HeaderType.TopicHeader }),
                    JirglStructures.View.binaryTree({}),
                    JirglStructures.header({ content: "Binary search tree", type: JirglStructures.HeaderType.TopicHeader })
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=trees.js.map