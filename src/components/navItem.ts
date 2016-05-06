import * as b from 'bobril';
import { color, font } from '../constants';

export interface INavItemData {
    content: string;
    isActive: boolean;
    routeParamName: string;
}

interface INavItemCtx extends b.IBobrilCtx {
    data: INavItemData;
}

let toStyle = (isActive: boolean): any => {
    const style: any = {
        fontFamily: font.lightFontFamily,
        color: color.grayForeground,
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: 28
    }

    if (isActive) style.color = color.darkForeground;

    return style;
}

let navItemComponent: b.IBobrilComponent = {
    render(ctx: INavItemCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.style = {
            paddingLeft: 4,
            paddingRight: 50,
            display: "inline-block"
        };
        me.children = b.link({
            tag: 'div',
            style: toStyle(ctx.data.isActive),
            children: ctx.data.content
        }, ctx.data.routeParamName);
    }
}

export function create(data: INavItemData): b.IBobrilNode {
    return { component: navItemComponent, data: data };
}
