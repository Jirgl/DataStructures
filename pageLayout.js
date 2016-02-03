/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.router.d.ts" />
/// <reference path="bobril/bobril.l10n.d.ts" />
/// <reference path="bobril/bobril.media.d.ts" />
/// <reference path="components/navItem.ts" />
/// <reference path="components/header.ts" />
/// <reference path="components/languageTile.ts" />
/// <reference path="pages/lists.ts" />
/// <reference path="pages/trees.ts" />
/// <reference path="pages/heaps.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Language;
    (function (Language) {
        Language[Language["English"] = 0] = "English";
        Language[Language["Czech"] = 1] = "Czech";
    })(Language || (Language = {}));
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
            tag: "nav",
            style: { position: "absolute", top: 100, left: 0 },
            children: [
                createNavItem(100, 0, b.t(1), "lists", function () {
                    return b.isRouteActive("lists") || (!b.isRouteActive("trees") && !b.isRouteActive("heaps"));
                }),
                createNavItem(300, 0, b.t(2), "trees", function () {
                    return b.isRouteActive("trees");
                }),
                createNavItem(500, 0, b.t(3), "heaps", function () {
                    return b.isRouteActive("heaps");
                })
            ]
        };
    };
    var createLanguage = function (top, right, leftRadius, rightRadius, data) {
        return {
            tag: "div",
            style: {
                position: "absolute",
                top: top,
                left: b.getMedia().width - right,
                overflow: "hidden",
                borderBottomLeftRadius: leftRadius,
                borderBottomRightRadius: rightRadius
            },
            children: JirglStructures.langTile(data)
        };
    };
    var pageLayoutComponent = {
        init: function (ctx) {
            ctx.activeLang = Language.English;
        },
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                {
                    tag: "div",
                    style: { position: "absolute", top: 10, left: 100 },
                    children: JirglStructures.header({ content: b.t(0), type: JirglStructures.HeaderType.AppHeader })
                },
                createNavigation(),
                createLanguage(0, 200, 10, 0, {
                    isActive: ctx.activeLang === Language.English,
                    activeImageUrl: "assets/en.png",
                    hoverImageUrl: "assets/en_hover.png",
                    inactiveImageUrl: "assets/en_inactive.png",
                    setLang: function () {
                        ctx.activeLang = Language.English;
                        b.setLocale("en-US");
                        b.invalidate();
                    }
                }),
                createLanguage(0, 150, 0, 10, {
                    isActive: ctx.activeLang === Language.Czech,
                    activeImageUrl: "assets/cs.png",
                    hoverImageUrl: "assets/cs_hover.png",
                    inactiveImageUrl: "assets/cs_inactive.png",
                    setLang: function () {
                        ctx.activeLang = Language.Czech;
                        b.setLocale("cs-CZ");
                        b.invalidate();
                    }
                }),
                {
                    tag: "div",
                    style: {
                        position: "absolute",
                        marginBottom: 100,
                        top: 180,
                        left: 100
                    },
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