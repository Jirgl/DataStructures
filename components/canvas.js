/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../models/iterator.ts" />
/// <reference path="item.ts" />
/// <reference path="arrow.ts" />
var JirglStructures;
(function (JirglStructures) {
    var canvasComponent = {
        render: function (ctx, me) {
            var iterator = ctx.data.contentIterator;
            var children = [];
            var arrows = [];
            var maxHeight = JirglStructures.itemHeight + (2 * JirglStructures.itemMargin);
            while (iterator.hasNext()) {
                var guiItem = iterator.next();
                var position = ctx.data.grid.getPosition();
                var previousPosition = ctx.data.grid.getPositionOfPreviousItem();
                children.push(JirglStructures.item({
                    content: guiItem.getContent(),
                    x: position.x,
                    y: position.y,
                    isCurrent: guiItem.isCurrent
                }));
                if (previousPosition !== undefined) {
                    var itemArrows = ctx.data.grid.getArrowsPositions(previousPosition, position);
                    for (var index = 0; index < itemArrows.length; index++) {
                        arrows.push(JirglStructures.arrow(itemArrows[index], ctx.data.grid.getArrowType()));
                    }
                }
                var currentHeight = position.y + JirglStructures.itemHeight + (2 * JirglStructures.itemMargin);
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight;
                }
            }
            children.push({
                component: b.vg,
                data: { width: ctx.data.grid.getWidth(), height: maxHeight },
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
    };
    function canvas(data) {
        return { component: canvasComponent, data: data };
    }
    JirglStructures.canvas = canvas;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=canvas.js.map