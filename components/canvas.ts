/// <reference path="../models/iterator.ts" />
/// <reference path="item.ts" />
/// <reference path="../bobril/bobril.media.d.ts"/>

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
            var children = [];
            var maxHeight = itemHeight + (2 * itemMargin);

            while (iterator.hasNext()) {
                var guiItem = iterator.next();
                var position = ctx.data.grid.getPosition(width);
                children.push(item({ content: guiItem.content, x: position.x, y: position.y, isCurrent: guiItem.isCurrent }));

                var currentHeight = position.y + itemHeight + (2 * itemMargin);
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight;
                }
            }

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