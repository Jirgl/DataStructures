import * as b from 'bobril';
import * as m from 'bobril-m';
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

function getContentNode(content: string): b.IBobrilNode {
    return {
        tag: 'div',
        style: {
            textAlign: 'center',
            paddingTop: 30
        },
        children: content
    };
}

let itemComponent: b.IBobrilComponent = {
    render(ctx: IItemCtx, me: b.IBobrilNode) {
        me.tag = 'div';

        me.children = m.Paper({
            zDepth: 2, style: {
                width: itemProps.width,
                height: itemProps.height,
                position: 'absolute', left:
                ctx.data.x,
                top: ctx.data.y,
                color: ctx.data.isCurrent ? m.white : m.grey600,
                background: ctx.data.isCurrent ? m.primary1Color : m.transparent,
                margin: itemProps.margin
            }
        }, getContentNode(ctx.data.content));
    }
}

export function create(data: IItemData): b.IBobrilNode {
    return { component: itemComponent, data: data };
}
