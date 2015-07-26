/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.router.d.ts"/>
/// <reference path="components/header.ts" />

module JirglStructures {
    var app: IBobrilComponent = {
        render(ctx: any, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                header({ content: "Data structures", size: HeaderSize.H1 }),
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
    }

    b.routes(b.route({ handler: app }, [
        b.route({ name: "lists", handler: Page.listsPageComponent }),
        b.route({ name: "trees", handler: Page.treesPageComponent }),
        b.route({ name: "heaps", handler: Page.heapsPageComponent })
    ]));
}