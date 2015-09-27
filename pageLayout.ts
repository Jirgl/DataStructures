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
                    children: appHeader({ content: "Data structures", leftPosition: 150, topPosition: -120 })
                },
                {
                    tag: "div",
                    style: { position: "absolute", height: 100, top: 150, left: 0 },
                    children:
                    {
                        tag: "nav",
                        children: [
                            navItem({
                                content: "Lists",
                                routeParamName: "lists",
                                topPosition: 0,
                                leftPosition: 100,
                                isActive: b.isRouteActive("lists") || (!b.isRouteActive("trees") && !b.isRouteActive("heaps")),
                                backgroundUrl: "assets/listsTab.jpg"
                            }),
                            navItem({
                                content: "Trees",
                                routeParamName: "trees",
                                topPosition: 0,
                                leftPosition: 300,
                                isActive: b.isRouteActive("trees"),
                                backgroundUrl: "assets/treesTab.jpg"
                            }),
                            navItem({
                                content: "Heaps",
                                routeParamName: "heaps",
                                topPosition: 0,
                                leftPosition: 500,
                                isActive: b.isRouteActive("heaps"),
                                backgroundUrl: "assets/heapsTab.jpg"
                            })
                        ]
                    }
                },
                {
                    tag: "div",
                    style: { position: "absolute", top: 250, left: 0 },
                    children: me.data.activeRouteHandler()
                }
            ];
        }
    }

    b.routes(b.route({ handler: pageLayoutComponent }, [
        b.route({ name: "lists", url: "lists", handler: Page.listsPageComponent }),
        b.route({ name: "trees", url: "trees", handler: Page.treesPageComponent }),
        b.route({ name: "heaps", url: "heaps", handler: Page.heapsPageComponent }),
        b.routeDefault({ handler: Page.listsPageComponent })
    ]));

    export function pageLayout(data: IPageLayoutData): IBobrilNode {
        return { component: pageLayoutComponent, data: data };
    }
}