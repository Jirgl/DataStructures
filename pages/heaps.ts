module JirglStructures.Page {
    export var heapsPageComponent: IBobrilComponent = {
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                header({ content: "Heaps", type: HeaderType.PageHeader })
            ];
        }
    }
}
