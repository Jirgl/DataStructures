/// <reference path="bobril/bobril.d.ts" />

module JirglStructures {
    var app: IBobrilComponent = {
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                pageLayout({})
            ];
        }
    }
}