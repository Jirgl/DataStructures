module JirglStructures.Page {
    export var treesPageComponent: IBobrilComponent = {
        id: "Trees",
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                header({ content: "Trees", type: HeaderType.PageHeader }),
                header({ content: "Binary tree", type: HeaderType.TopicHeader }),
                View.binaryTree({}),
                header({ content: "Binary search tree", type: HeaderType.TopicHeader })
            ];
        }
    }
}
