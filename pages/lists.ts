module JirglStructures.Page {
    export var listsPageComponent: IBobrilComponent = {
        id: "Lists",
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                //paragraph({ content: Resources.listOverview }),
                header({ content: "Arrays", type: HeaderType.PageHeader }),
                header({ content: "Linked lists", type: HeaderType.PageHeader }),
                //paragraph({ content: Resources.linkedListOverview }),
                header({ content: "Doubly linked list", type: HeaderType.TopicHeader }),
                View.doublyList({}),
                header({ content: "Queue", type: HeaderType.TopicHeader }),
                View.queue({}),
                header({ content: "Stack", type: HeaderType.TopicHeader }),
                View.stack({})
            ];
        }
    }
}
