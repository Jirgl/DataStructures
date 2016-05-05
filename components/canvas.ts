module JirglStructures {
    export interface IGuiContent {
        key: string;
        data: string;
        isCurrent;
    }

    export interface ICanvasData {
        contentIterator: IIterator<IGuiContent>;
        grid: IGrid;
    }

    interface ICanvasCtx {
        data: ICanvasData;
        arrow: Arrow;
    }

    var canvasComponent: IBobrilComponent = {
        init<T>(ctx: ICanvasCtx) {
            ctx.arrow = new Arrow();
        },
        render<T>(ctx: ICanvasCtx, me: IBobrilNode) {
            const iterator = ctx.data.contentIterator;
            const children: IBobrilNode[] = [];
            const arrows: IBobrilNode[] = [];
            let maxHeight = Item.itemHeight + (2 * Item.itemMargin);

            while (iterator.hasNext()) {
                const guiItem = iterator.next();
                const position = ctx.data.grid.getPosition();
                const previousPosition = ctx.data.grid.getPositionOfPreviousItem();
                children.push(item({
                    content: guiItem.key,
                    x: position.x,
                    y: position.y,
                    isCurrent: guiItem.isCurrent
                }));

                if (previousPosition !== undefined) {
                    const itemArrows = ctx.data.grid.getArrowsPositions(previousPosition, position);
                    for (let index = 0; index < itemArrows.length; index++) {
                        arrows.push(ctx.arrow.getArrowPath(itemArrows[index].start, itemArrows[index].end, ctx.data.grid.getArrowType()));
                    }
                }

                var currentHeight = position.y + Item.itemHeight + (2 * Item.itemMargin);
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight;
                }
            }

            children.push({
                component: b.vg,
                data: { width: ctx.data.grid.getWidth(), height: maxHeight, zIndex: 100 },
                children: arrows
            });

            me.tag = "div";
            me.style = {
                width: ctx.data.grid.getWidth(),
                height: maxHeight,
                position: "relative"
            };
            me.children = children;
        }
    }

    export function canvas(data: ICanvasData): IBobrilNode {
        return { component: canvasComponent, data: data };
    }
}