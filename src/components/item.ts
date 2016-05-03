import * as b from 'bobril';
import { color } from '../constants';

export module itemProps {
    export let width = 80;
    export let height = 80;
    export let margin = 30;
    export let arrowMargin = 2;//REALLY HERE???
}

export interface IItemData {
    content: string;
    x: number;
    y: number;
    isCurrent: boolean;
}

interface IItemCtx extends b.IBobrilCtx {
    data: IItemData;
}

let itemComponent: b.IBobrilComponent = {
    render(ctx: IItemCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.style = {
            color: color.lightForeground,
            background: ctx.data.isCurrent ? color.majorColor : color.darkBackground,
            width: itemProps.width,
            height: itemProps.height,
            position: 'absolute',
            left: ctx.data.x,
            top: ctx.data.y,
            margin: itemProps.margin
        };
        me.children = ctx.data.content;
    }
}

export function create(data: IItemData): b.IBobrilNode {
    return { component: itemComponent, data: data };
}
