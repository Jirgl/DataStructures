import * as b from 'bobril';
import * as m from 'bobril-m';
import { color } from '../constants';
import { create as header, HeaderType } from '../components/header';
import { create as navItem } from '../components/navItem';

export const PagePadding = 100;

export interface IPageCompositionData {
    headerContent: string;
}

interface IPageCompositionCtx extends b.IBobrilCtx {
    data: IPageCompositionData;
}

function createNavItem(content: string, routeName: string): b.IBobrilNode {
    let isActive;
    if (b.getActiveRoutes()[0].name === 'root' && routeName === 'lists') {
        isActive = true;
    } else {
        isActive = b.getActiveRoutes().filter((route) => {
            return route.name === routeName
        }).length > 0;
    }

    return navItem({
        content: content,
        routeParamName: routeName,
        isActive: isActive
    });
};

function createNavigation(): b.IBobrilNode {
    return {
        tag: 'nav',
        children: b.styledDiv([
            createNavItem('Lists', 'lists'),
            createNavItem('Trees', 'trees'),
            createNavItem('Heaps', 'heaps')
        ], { paddingTop: 5, paddingBottom: 10 })
    };
}

let pageComposition: b.IBobrilComponent = {
    render(ctx: IPageCompositionCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = [
            m.Paper({
                zDepth: 2,
                round: false,
                style: {
                    background: m.white,
                    paddingLeft: PagePadding,
                    paddingRight: PagePadding,
                    marginBottom: 30
                }
            }, [header({ content: 'Data Structures', type: HeaderType.AppHeader }), createNavigation()]
            ),
            b.styledDiv([
                me.data.activeRouteHandler()
            ], { paddingLeft: PagePadding - 5, paddingRight: PagePadding - 5 })
        ];
    }
};

export function create(data: IPageCompositionData): b.IBobrilNode {
    return { component: pageComposition, data: data };
};
