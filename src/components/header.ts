import * as b from 'bobril';
import { color, font } from '../constants';

export enum HeaderType {
    AppHeader,
    PageHeader,
    TopicHeader
}

export interface IHeaderData {
    content: string;
    type: HeaderType;
}

interface IHeaderCtx extends b.IBobrilCtx {
    data: IHeaderData;
}

function toSize(type: HeaderType): number {
    switch (type) {
        case HeaderType.AppHeader:
            return 40;
        default:
            return 26;
    }
}

function toStyle(type: HeaderType): any {
    let style: any = {};
    switch (type) {
        case HeaderType.AppHeader:
            style.fontSize = toSize(type);
            style.fontFamily = font.baseFontFamily;
            style.fontWeight = 'bold';
            style.color = color.lightForeground;
            break;
        default:
            style.fontSize = toSize(type);
            style.fontFamily = font.baseFontFamily;
            style.color = color.darkForeground;
    }

    return style;
}

let headerComponent: b.IBobrilComponent = {
    render(ctx: IHeaderCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.style = toStyle(ctx.data.type);
        me.children = ctx.data.content;
    }
}

export function create(data: IHeaderData): b.IBobrilNode {
    return { component: headerComponent, data: data };
}
