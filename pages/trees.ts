/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../components/header.ts" />
/// <reference path="../structureComponents/view/binaryTree.ts" />

module JirglStructures.Page {
    export var treesPageComponent: IBobrilComponent = {
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
