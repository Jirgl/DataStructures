/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.l10n.d.ts" />
/// <reference path="../layouts/dataStructureLayout.ts" />
/// <reference path="../structureComponents/view/doublyList.ts" />
/// <reference path="../structureComponents/view/queue.ts" />
/// <reference path="../structureComponents/view/stack.ts" />

module JirglStructures.Page {
    export var listsPageComponent: IBobrilComponent = {
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                dataStructureLayout({
                    title: b.t(4),
                    description: b.t(9),
                    content: undefined
                }),
                dataStructureLayout({
                    title: b.t(5),
                    description: b.t(10),
                    content: undefined
                }),
                dataStructureLayout({
                    title: b.t(6),
                    description: b.t(11),
                    content: View.doublyList({})
                }),
                dataStructureLayout({
                    title: b.t(7),
                    description: b.t(12),
                    content: View.queue({})
                }),
                dataStructureLayout({
                    title: b.t(8),
                    description: b.t(13),
                    content: View.stack({})
                })
            ];
        }
    }
}
