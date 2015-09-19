/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.router.d.ts"/>
var JirglStructures;
(function (JirglStructures) {
    var pageLayoutComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                {
                    tag: "div",
                    style: { position: "absolute", width: "100%", height: 300, top: 0, left: 0, overflow: "hidden" },
                    children: JirglStructures.pageHeader({ content: "Data structures", leftPosition: 100, topPosition: -280 })
                },
                {
                    tag: "div",
                    style: { position: "absolute", height: 100, top: 300, left: 0 },
                    children: {
                        tag: "nav",
                        children: [
                            JirglStructures.navItem({
                                content: "Lists",
                                routeParamName: "lists",
                                topPosition: 0,
                                leftPosition: 100,
                                isActive: b.isRouteActive("lists"),
                                backgroundUrl: "assets/listsTab.jpg"
                            }),
                            JirglStructures.navItem({
                                content: "Trees",
                                routeParamName: "trees",
                                topPosition: 0,
                                leftPosition: 300,
                                isActive: b.isRouteActive("trees"),
                                backgroundUrl: "assets/treesTab.jpg"
                            }),
                            JirglStructures.navItem({
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
                    style: { position: "absolute", top: 400, left: 0 },
                    children: me.data.activeRouteHandler()
                }
            ];
        }
    };
    b.routes(b.route({ handler: pageLayoutComponent }, [
        b.route({ name: "lists", handler: JirglStructures.Page.listsPageComponent }),
        b.route({ name: "trees", handler: JirglStructures.Page.treesPageComponent }),
        b.route({ name: "heaps", handler: JirglStructures.Page.heapsPageComponent })
    ]));
    function pageLayout(data) {
        return { component: pageLayoutComponent, data: data };
    }
    JirglStructures.pageLayout = pageLayout;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=pageLayout.js.map