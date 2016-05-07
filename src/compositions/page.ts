import * as b from 'bobril';
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
        children: {
            tag: 'div',
            style: {
                paddingTop: 5,
                paddingBottom: 40
            },
            children: [
                createNavItem('Lists', 'lists'),
                createNavItem('Trees', 'trees'),
                createNavItem('Heaps', 'heaps')
            ]
        }
    };
};

let pageComposition: b.IBobrilComponent = {
    render(ctx: IPageCompositionCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.style = { paddingLeft: PagePadding, paddingRight: PagePadding };
        me.children = [
            header({ content: 'Data Structures', type: HeaderType.AppHeader }),
            createNavigation(),
            me.data.activeRouteHandler()
        ];
    }
};

export function create(data: IPageCompositionData): b.IBobrilNode {
    return { component: pageComposition, data: data };
};
