/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.l10n.d.ts" />
/// <reference path="../components/header.ts" />
/// <reference path="../components/paragraph.ts" />
/// <reference path="../structureComponents/view/doublyList.ts" />
/// <reference path="../structureComponents/view/queue.ts" />
/// <reference path="../structureComponents/view/stack.ts" />

module JirglStructures.Page {
    export var listsPageComponent: IBobrilComponent = {
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                paragraph({ content: b.t(9) }),
                header({ content: b.t(4), type: HeaderType.PageHeader }),
                header({ content: b.t(5), type: HeaderType.PageHeader }),
                paragraph({ content: b.t(10) }),
                header({ content: b.t(6), type: HeaderType.TopicHeader }),
                View.doublyList({}),
                header({ content: b.t(7), type: HeaderType.TopicHeader }),
                View.queue({}),
                header({ content: b.t(8), type: HeaderType.TopicHeader }),
                View.stack({})
            ];
        }
    }
}
