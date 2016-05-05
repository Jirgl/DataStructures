var JirglStructures;
(function (JirglStructures) {
    var canvasComponent = {
        init: function (ctx) {
            ctx.arrow = new JirglStructures.Arrow();
        },
        render: function (ctx, me) {
            var iterator = ctx.data.contentIterator;
            var children = [];
            var arrows = [];
            var maxHeight = JirglStructures.Item.itemHeight + (2 * JirglStructures.Item.itemMargin);
            while (iterator.hasNext()) {
                var guiItem = iterator.next();
                var position = ctx.data.grid.getPosition();
                var previousPosition = ctx.data.grid.getPositionOfPreviousItem();
                children.push(JirglStructures.item({
                    content: guiItem.key,
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
                var currentHeight = position.y + JirglStructures.Item.itemHeight + (2 * JirglStructures.Item.itemMargin);
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
    };
    function canvas(data) {
        return { component: canvasComponent, data: data };
    }
    JirglStructures.canvas = canvas;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=canvas.js.map