/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.router.d.ts"/>

module JirglStructures {
    export interface IPageLayoutData {
    }

    interface IPageLayoutCtx {
        data: IPageLayoutData;
    }

    var pageLayoutComponent: IBobrilComponent = {
        render(ctx: IPageLayoutCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                {
                    tag: "div",
                    style: { position: "absolute", width: "100%", height: 300, top: 0, left: 0, overflow: "hidden" },
                    children: pageHeader({ content: "Data structures" })
                },
                {
                    tag: "div",
                    style: { position: "absolute", height: 100, top: 300, left: 0 },
                    children:
                    {
                        tag: "nav",
                        children: [
                            b.link({ tag: "a", children: "Lists" }, "lists"),
                            b.link({ tag: "a", children: "Trees" }, "trees"),
                            b.link({ tag: "a", children: "Heaps" }, "heaps")
                        ]
                    }
                },
                {
                    tag: "div",
                    style: { position: "absolute", top: 400, left: 0 },
                    children: me.data.activeRouteHandler()
                }
            ];
        }
    }

    b.routes(b.route({ handler: pageLayoutComponent }, [
        b.route({ name: "lists", handler: Page.listsPageComponent }),
        b.route({ name: "trees", handler: Page.treesPageComponent }),
        b.route({ name: "heaps", handler: Page.heapsPageComponent })
    ]));

    export function pageLayout(data: IPageLayoutData): IBobrilNode {
        return { component: pageLayoutComponent, data: data };
    }
}