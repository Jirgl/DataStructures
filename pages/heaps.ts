/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../components/header.ts" />

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
