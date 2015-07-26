var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.treesPageComponent = {
            id: "Trees",
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.header({ content: "Trees", size: JirglStructures.HeaderSize.H2 }),
                    JirglStructures.header({ content: "Binary tree", size: JirglStructures.HeaderSize.H3 }),
                    JirglStructures.View.binaryTree({}),
                    JirglStructures.header({ content: "Binary search tree", size: JirglStructures.HeaderSize.H3 })
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=trees.js.map