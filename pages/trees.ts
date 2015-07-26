module JirglStructures.Page {
    export var treesPageComponent: IBobrilComponent = {
        id: "Trees",
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                header({ content: "Trees", size: HeaderSize.H2 }),
                header({ content: "Binary tree", size: HeaderSize.H3 }),
                View.binaryTree({}),
                header({ content: "Binary search tree", size: HeaderSize.H3 })
            ];
        }
    }
}
