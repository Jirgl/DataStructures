/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.media.d.ts"/>
/// <reference path="../models/iterator.ts" />
/// <reference path="item.ts" />
/// <reference path="arrow.ts" />

module JirglStructures {
    export interface ICanvasData {
        contentIterator: IIterator<GuiItem>;
        grid: IGrid;
    }

    interface ICanvasCtx {
        data: ICanvasData;
    }

    var canvasComponent: IBobrilComponent = {
        render(ctx: ICanvasCtx, me: IBobrilNode) {
            var width = b.getMedia().width - 500;
            var iterator = ctx.data.contentIterator;
            iterator.reset();
            var children: IBobrilNode[] = [];
            var arrows: IBobrilNode[] = [];
            var previousPosition: Position;
            var maxHeight = itemHeight + (2 * itemMargin);

            while (iterator.hasNext()) {
                var guiItem = iterator.next();
                var position = ctx.data.grid.getItemPosition(width);
                children.push(item({ content: guiItem.content, x: position.x, y: position.y, isCurrent: guiItem.isCurrent }));

                if (previousPosition !== undefined) {
                    var itemArrows = ctx.data.grid.getArrowsPositions(previousPosition, position);
                    for (var index = 0; index < itemArrows.length; index++) {
                        arrows.push(arrow(itemArrows[index], ctx.data.grid.getArrowType()));
                    }
                }

                var currentHeight = position.y + itemHeight + (2 * itemMargin);
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight;
                }

                previousPosition = position;
            }

            children.push({
                component: b.vg,
                data: { width: width, height: maxHeight },
                children: arrows
            });

            me.tag = "div";
            me.style = {
                width: width,
                height: maxHeight,
                background: "#CCC",
                position: "relative"
            };
            me.children = children;
        }
    }

    export function canvas(data: ICanvasData): IBobrilNode {
        return { component: canvasComponent, data: data };
    }
}