module JirglStructures.Page {
    export var listsPageComponent: IBobrilComponent = {
        id: "Lists",
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                header({ content: "Lists", size: HeaderSize.H2 }),
                header({ content: "Doubly linked list", size: HeaderSize.H3 }),
                View.doublyList({}),
                header({ content: "Queue", size: HeaderSize.H3 }),
                View.queue({}),
                header({ content: "Stack", size: HeaderSize.H3 }),
                View.stack({})
            ];
        }
    }
}
