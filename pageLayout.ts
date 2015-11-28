module JirglStructures {
    export interface IPageLayoutData {
    }

    interface IPageLayoutCtx {
        data: IPageLayoutData;
    }

    var createNavItem = (left: number, top: number, content: string, routeName: string, isACtive: () => boolean): IBobrilNode => {
        return {
            tag: "div",
            style: { position: "absolute", left: left, top: top },
            children: navItem({
                content: content,
                routeParamName: routeName,
                isActive: isACtive()
            })
        };
    }

    var createNavigation = (): IBobrilNode => {
        return {
            tag: "div",
            style: { position: "absolute", top: 100, left: 0 },
            children: [
                createNavItem(100, 0, "Lists", "lists", () => {
                    return b.isRouteActive("lists") || (!b.isRouteActive("trees") && !b.isRouteActive("heaps"));
                }),
                createNavItem(300, 0, "Trees", "trees", () => {
                    return b.isRouteActive("trees");
                }),
                createNavItem(500, 0, "Heaps", "heaps", () => {
                    return b.isRouteActive("heaps");
                })
            ]
        };
    }

    var pageLayoutComponent: IBobrilComponent = {
        render(ctx: IPageLayoutCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                {
                    tag: "div",
                    style: { position: "absolute", top: 10, left: 100 },
                    children: header({ content: "Data structures", type: HeaderType.AppHeader })
                },
                createNavigation(),
                {
                    tag: "div",
                    style: { position: "absolute", top: 250, left: 100 },
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