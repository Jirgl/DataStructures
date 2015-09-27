module JirglStructures.Page {
    export var heapsPageComponent: IBobrilComponent = {
        id: "Heaps",
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                header({ content: "Heaps", type: HeaderType.PageHeader })
            ];
        }
    }
}
