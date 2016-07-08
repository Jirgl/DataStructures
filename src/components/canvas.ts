import * as b from 'bobril';
import { create as arrow } from './arrow';
import { IGrid } from './grid';
import { create as item, itemProps } from './item';
import { IIterator } from '../models/iterator';

export interface IContent {
    content: string;
    isHighlighted: boolean;
}

export interface ICanvasData {
    iterator: IIterator<IContent>;
    getIndexOfCurrentIteratorItem?: () => number;
    grid: IGrid;
}

interface ICanvasCtx extends b.IBobrilCtx {
    data: ICanvasData;
}

let canvasComponent: b.IBobrilComponent = {
    render(ctx: ICanvasCtx, me: b.IBobrilNode) {
        const d = ctx.data;
        const iterator = d.iterator;
        const children: b.IBobrilNode[] = [];
        const arrows: b.IBobrilNode[] = [];
        let maxHeight = itemProps.size + (2 * itemProps.margin);

        let index = 0;
        while (iterator.hasNext()) {
            let guiItem = iterator.next();
            let position = d.grid.getPosition();
            let previousPosition = d.grid.getPositionOfPreviousItem();
            children.push(item({
                content: guiItem.content,
                x: position.x,
                y: position.y,
                isHighlighted: guiItem.isHighlighted,
                scale: d.getIndexOfCurrentIteratorItem && d.getIndexOfCurrentIteratorItem() === index ? 1.2 : 1
            }));
            index++;
            if (previousPosition) {
                d.grid.getArrowsPositions(previousPosition, position)
                    .forEach((item) => {
                        arrow(item.start.x,
                            item.start.y,
                            item.end.x,
                            item.end.y,
                            d.grid.getArrowType()
                        ).forEach((path) => arrows.push(path));
                    })
            }

            let currentHeight = position.y + itemProps.size + (2 * itemProps.margin);
            if (currentHeight > maxHeight) {
                maxHeight = currentHeight;
            }
        }

        children.push({
            tag: 'svg',
            style: {
                //shapeRendering: 'crispEdges',
                width: d.grid.getWidth(),
                height: maxHeight,
                zIndex: 100
            },
            children: arrows
        });

        me.tag = 'div';
        me.style = {
            width: d.grid.getWidth(),
            height: maxHeight,
            position: 'relative'
        };
        me.children = children;
    }
}

export function create(data: ICanvasData): b.IBobrilNode {
    return { component: canvasComponent, data: data };
}
