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

module JirglStructures {
    export interface IPageLayoutData {
    }

    enum Language {
        English, Czech
    }

    interface IPageLayoutCtx {
        data: IPageLayoutData;
        activeLang: Language;
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
            tag: "nav",
            style: { position: "absolute", top: 100, left: 0 },
            children: [
                createNavItem(100, 0, b.t(1), "lists", () => {
                    return b.isRouteActive("lists") || (!b.isRouteActive("trees") && !b.isRouteActive("heaps"));
                }),
                createNavItem(300, 0, b.t(2), "trees", () => {
                    return b.isRouteActive("trees");
                }),
                createNavItem(500, 0, b.t(3), "heaps", () => {
                    return b.isRouteActive("heaps");
                })
            ]
        };
    }

    var createLanguage = (top: number, right: number, leftRadius: number,
        rightRadius: number, data: ILangTileData): IBobrilNode => {
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
            children: langTile(data)
        }
    }

    var pageLayoutComponent: IBobrilComponent = {
        init(ctx: IPageLayoutCtx) {
            ctx.activeLang = Language.English;
        },
        render(ctx: IPageLayoutCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                {
                    tag: "div",
                    style: { position: "absolute", top: 10, left: 100 },
                    children: header({ content: b.t(0), type: HeaderType.AppHeader })
                },
                createNavigation(),
                createLanguage(0, 200, 10, 0, {
                    isActive: ctx.activeLang === Language.English,
                    activeImageUrl: "assets/en.png",
                    hoverImageUrl: "assets/en_hover.png",
                    inactiveImageUrl: "assets/en_inactive.png",
                    setLang: () => {
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
                    setLang: () => {
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