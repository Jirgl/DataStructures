import * as b from 'bobril';
import { create as arrow } from './arrow';
import { IGrid } from './grid';
import { create as item, itemProps } from './item';
import { IIterable, IIterator } from '../models/iterator';

export interface IContent {
    content: string;
    isCurrent: boolean;
}

export interface ICanvasData {
    contentIterator: IIterator<IContent>;
    grid: IGrid;
}

interface ICanvasCtx extends b.IBobrilCtx {
    data: ICanvasData;
}

let canvasComponent: b.IBobrilComponent = {
    render(ctx: ICanvasCtx, me: b.IBobrilNode) {
        let iterator = ctx.data.contentIterator;
        let children: b.IBobrilNode[] = [];
        let arrows: b.IBobrilNode[] = [];
        let maxHeight = itemProps.height + (2 * itemProps.margin);

        while (iterator.hasNext()) {
            let guiItem = iterator.next();
            let position = ctx.data.grid.getPosition();
            let previousPosition = ctx.data.grid.getPositionOfPreviousItem();
            children.push(item({
                content: guiItem.content,
                x: position.x,
                y: position.y,
                isCurrent: guiItem.isCurrent
            }));

            if (previousPosition) {
                ctx.data.grid.getArrowsPositions(previousPosition, position)
                    .forEach((item) => {
                        arrow(item.start.x,
                            item.start.y,
                            item.end.x,
                            item.end.y,
                            ctx.data.grid.getArrowType()
                        ).forEach((path) => arrows.push(path));
                    })
            }

            let currentHeight = position.y + itemProps.height + (2 * itemProps.margin);
            if (currentHeight > maxHeight) {
                maxHeight = currentHeight;
            }
        }

        children.push({
            tag: 'svg',
            style: {
                width: ctx.data.grid.getWidth(),
                height: maxHeight,
                zIndex: 100
            },
            children: arrows
        });

        me.tag = 'div';
        me.style = {
            width: ctx.data.grid.getWidth(),
            height: maxHeight,
            position: 'relative'
        };
        me.children = children;
    }
}

export function create(data: ICanvasData): b.IBobrilNode {
    return { component: canvasComponent, data: data };
}
