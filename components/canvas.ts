/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../models/iterator.ts" />
/// <reference path="item.ts" />
/// <reference path="arrow.ts" />

module JirglStructures {
    export interface IGuiContent {
        getContent(): string;
        isCurrent;
    }

    export interface ICanvasData<T> {
        contentIterator: IIterator<IGuiContent>;
        grid: IGrid;
    }

    interface ICanvasCtx<T> {
        data: ICanvasData<T>;
        arrow: Arrow;
    }

    var canvasComponent: IBobrilComponent = {
        init<T>(ctx: ICanvasCtx<T>) {
            ctx.arrow = new Arrow();
        },
        render<T>(ctx: ICanvasCtx<T>, me: IBobrilNode) {
            var iterator = ctx.data.contentIterator;
            var children: IBobrilNode[] = [];
            var arrows: IBobrilNode[] = [];
            var maxHeight = itemHeight + (2 * itemMargin);

            while (iterator.hasNext()) {
                var guiItem = iterator.next();
                var position = ctx.data.grid.getPosition();
                var previousPosition = ctx.data.grid.getPositionOfPreviousItem();
                children.push(item({
                    content: guiItem.getContent(),
                    x: position.x,
                    y: position.y,
                    isCurrent: guiItem.isCurrent
                }));

                if (previousPosition !== undefined) {
                    var itemArrows = ctx.data.grid.getArrowsPositions(previousPosition, position);
                    for (var index = 0; index < itemArrows.length; index++) {
                        arrows.push(ctx.arrow.getArrowPath(itemArrows[index].start, itemArrows[index].end, ctx.data.grid.getArrowType()));
                    }
                }

                var currentHeight = position.y + itemHeight + (2 * itemMargin);
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight;
                }
            }children.push({
                component: b.vg,
                data: { width: ctx.data.grid.getWidth(), height: maxHeight, zIndex: 100 },
                children: arrows
            });

            me.tag = "div";
            me.style = {
                width: ctx.data.grid.getWidth(),
                height: maxHeight,
                background: "#CCC",
                position: "relative"
            };
            me.children = children;
        }
    }

    export function canvas<T>(data: ICanvasData<T>): IBobrilNode {
        return { component: canvasComponent, data: data };
    }
}