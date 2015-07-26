/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.router.d.ts"/>
/// <reference path="components/header.ts" />
var JirglStructures;
(function (JirglStructures) {
    var app = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                JirglStructures.header({ content: "Data structures", size: JirglStructures.HeaderSize.H1 }),
                {
                    tag: "nav",
                    children: [
                        b.link({ tag: "a", children: "Lists" }, "lists"),
                        b.link({ tag: "a", children: "Trees" }, "trees"),
                        b.link({ tag: "a", children: "Heaps" }, "heaps")
                    ]
                },
                me.data.activeRouteHandler()
            ];
        }
    };
    b.routes(b.route({ handler: app }, [
        b.route({ name: "lists", handler: JirglStructures.Page.listsPageComponent }),
        b.route({ name: "trees", handler: JirglStructures.Page.treesPageComponent }),
        b.route({ name: "heaps", handler: JirglStructures.Page.heapsPageComponent })
    ]));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=app.js.map