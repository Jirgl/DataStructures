/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.l10n.d.ts" />
/// <reference path="../layouts/dataStructureLayout.ts" />
/// <reference path="../structureComponents/view/doublyList.ts" />
/// <reference path="../structureComponents/view/queue.ts" />
/// <reference path="../structureComponents/view/stack.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Page;
    (function (Page) {
        Page.listsPageComponent = {
            render: function (ctx, me) {
                me.tag = "div";
                me.children = [
                    JirglStructures.dataStructureLayout({
                        title: b.t(4),
                        description: b.t(9),
                        content: undefined
                    }),
                    JirglStructures.dataStructureLayout({
                        title: b.t(5),
                        description: b.t(10),
                        content: undefined
                    }),
                    JirglStructures.dataStructureLayout({
                        title: b.t(6),
                        description: b.t(11),
                        content: JirglStructures.View.doublyList({})
                    }),
                    JirglStructures.dataStructureLayout({
                        title: b.t(7),
                        description: b.t(12),
                        content: JirglStructures.View.queue({})
                    }),
                    JirglStructures.dataStructureLayout({
                        title: b.t(8),
                        description: b.t(13),
                        content: JirglStructures.View.stack({})
                    })
                ];
            }
        };
    })(Page = JirglStructures.Page || (JirglStructures.Page = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=lists.js.map