var JirglStructures;
(function (JirglStructures) {
    var createNavItem = function (left, top, content, routeName, isACtive) {
        return {
            tag: "div",
            style: { position: "absolute", left: left, top: top },
            children: JirglStructures.navItem({
                content: content,
                routeParamName: routeName,
                isActive: isACtive()
            })
        };
    };
    var createNavigation = function () {
        return {
            tag: "div",
            style: { position: "absolute", top: 100, left: 0 },
            children: [
                createNavItem(100, 0, "Lists", "lists", function () {
                    return b.isRouteActive("lists") || (!b.isRouteActive("trees") && !b.isRouteActive("heaps"));
                }),
                createNavItem(300, 0, "Trees", "trees", function () {
                    return b.isRouteActive("trees");
                }),
                createNavItem(500, 0, "Heaps", "heaps", function () {
                    return b.isRouteActive("heaps");
                })
            ]
        };
    };
    var pageLayoutComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                {
                    tag: "div",
                    style: { position: "absolute", top: 10, left: 100 },
                    children: JirglStructures.header({ content: "Data structures", type: JirglStructures.HeaderType.AppHeader })
                },
                createNavigation(),
                {
                    tag: "div",
                    style: { position: "absolute", top: 250, left: 100 },
                    children: me.data.activeRouteHandler()
                }
            ];
        }
    };
    b.routes(b.route({ handler: pageLayoutComponent }, [
        b.route({ name: "lists", url: "lists", handler: JirglStructures.Page.listsPageComponent }),
        b.route({ name: "trees", url: "trees", handler: JirglStructures.Page.treesPageComponent }),
        b.route({ name: "heaps", url: "heaps", handler: JirglStructures.Page.heapsPageComponent }),
        b.routeDefault({ handler: JirglStructures.Page.listsPageComponent })
    ]));
    function pageLayout(data) {
        return { component: pageLayoutComponent, data: data };
    }
    JirglStructures.pageLayout = pageLayout;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=pageLayout.js.map