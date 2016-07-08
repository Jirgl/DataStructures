import * as b from 'bobril';
import * as m from 'bobril-m';

export module itemProps {
    export let size = 80;
    export let margin = 30;
    export let arrowMargin = 2;//REALLY HERE???
}

export interface IItemData {
    content: string;
    x: number;
    y: number;
    scale?: number;
    isHighlighted: boolean;
}

interface IItemCtx extends b.IBobrilCtx {
    data: IItemData;
}

function getContentNode(content: string, scale: number, size: number): b.IBobrilNode {
    return b.styledDiv(b.styledDiv(content, {
        position: 'absolute',
        fontSize: 100 * scale + '%',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)'
    }), { position: 'relative', width: size, height: size });
}

let itemComponent: b.IBobrilComponent = {
    render(ctx: IItemCtx, me: b.IBobrilNode) {
        const d = ctx.data;
        const scale = d.scale ? d.scale : 1;
        const size = itemProps.size * scale;
        let diff = scale !== 1 ? Math.abs(itemProps.size - size) / 2 : 0;

        me.tag = 'div';
        me.children = m.Paper({
            zDepth: 2, style: {
                width: size,
                height: size,
                position: 'absolute',
                left: d.x + (scale > 1 ? -diff : diff),
                top: d.y + (scale > 1 ? -diff : diff),
                color: d.isHighlighted ? m.white : m.grey600,
                background: d.isHighlighted ? m.primary1Color : m.white,
                margin: itemProps.margin
            }
        }, getContentNode(d.content, scale, size));
    }
}

export function create(data: IItemData): b.IBobrilNode {
    return { component: itemComponent, data: data };
}
