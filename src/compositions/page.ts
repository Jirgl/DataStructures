import * as b from 'bobril';
import { color } from '../constants';
import { create as header, HeaderType } from '../components/header';

/// <reference path='../components/navItem.ts' />
/// <reference path='../components/header.ts' />
/// <reference path='../components/languageTile.ts' />
/// <reference path='../constants.ts' />

export interface IPageCompositionData {
    headerContent: string;
}

enum Language {
    English, Czech
}

interface IPageCompositionCtx extends b.IBobrilCtx {
    data: IPageCompositionData;
    activeLang: Language;
}

var createHeader = (): b.IBobrilNode => {
    /*return {
        tag: 'div',
        style: { width: '100%', height: 50, background: color.majorColor },
        children: {
            tag: 'div',
            style: { position: 'absolute', marginTop: -4, left: 100 },
            children: header({ content: b.t(0), type: HeaderType.AppHeader })
        }
    };*/
    return null;
};

/*var createNavItem = (left: number, top: number, content: string, routeName: string, isACtive: () => boolean): IBobrilNode => {
    return {
        tag: 'div',
        style: { position: 'absolute', left: left, top: top },
        children: navItem({
            content: content,
            routeParamName: routeName,
            isActive: isACtive()
        })
    };
};*/

var createNavigation = (): b.IBobrilNode => {
    return {
        tag: 'nav',
        style: { position: 'absolute', top: 100, left: 0 },
        children: [
            /*createNavItem(100, 0, b.t(1), 'lists', () => {
                return b.isRouteActive('lists') || (!b.isRouteActive('trees') && !b.isRouteActive('heaps'));
            }),
            createNavItem(300, 0, b.t(2), 'trees', () => {
                return b.isRouteActive('trees');
            }),
            createNavItem(500, 0, b.t(3), 'heaps', () => {
                return b.isRouteActive('heaps');
            })*/
        ]
    };
};

/*var createLanguage = (top: number, right: number, leftRadius: number,
    rightRadius: number, data: ILangTileData): IBobrilNode => {
    return {
        tag: 'div',
        style: {
            position: 'absolute',
            top: top,
            left: b.getMedia().width - right,
            overflow: 'hidden',
            borderBottomLeftRadius: leftRadius,
            borderBottomRightRadius: rightRadius
        },
        children: langTile(data)
    }
};*/

var pageCompositionComponent: b.IBobrilComponent = {
    init(ctx: IPageCompositionCtx) {
        //ctx.activeLang = Language.English;
    },
    render(ctx: IPageCompositionCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            createHeader(),
            createNavigation(),
            /*createLanguage(0, 200, 10, 0, {
                isActive: ctx.activeLang === Language.English,
                activeImageUrl: 'assets/en.png',
                hoverImageUrl: 'assets/en.png',
                inactiveImageUrl: 'assets/en.png',
                setLang: () => {
                    ctx.activeLang = Language.English;
                    b.setLocale('en-US');
                    b.invalidate();
                }
            }),
            createLanguage(0, 150, 0, 10, {
                isActive: ctx.activeLang === Language.Czech,
                activeImageUrl: 'assets/cs.png',
                hoverImageUrl: 'assets/cs.png',
                inactiveImageUrl: 'assets/cs.png',
                setLang: () => {
                    ctx.activeLang = Language.Czech;
                    b.setLocale('cs-CZ');
                    b.invalidate();
                }
            }),*/
            {
                tag: 'div',
                style: {
                    position: 'absolute',
                    width: b.getMedia().width,// - (PageLayout.sidePadding * 2),
                    top: 180,
                    //left: PageLayout.sidePadding
                },
                children: me.data.activeRouteHandler()
            }
        ];
    }
};

export function create(data: IPageCompositionData): b.IBobrilNode {
    return { component: pageCompositionComponent, data: data };
};
