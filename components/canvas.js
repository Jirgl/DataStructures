/// <reference path="../models/iterator.ts" />
/// <reference path="item.ts" />
/// <reference path="../bobril/bobril.media.d.ts"/>
var JirglStructures;
(function (JirglStructures) {
    var canvasComponent = {
        render: function (ctx, me) {
            var width = b.getMedia().width - 500;
            var iterator = ctx.data.contentIterator;
            iterator.reset();
            var children = [];
            var maxHeight = JirglStructures.itemHeight + (2 * JirglStructures.itemMargin);
            while (iterator.hasNext()) {
                var guiItem = iterator.next();
                var position = ctx.data.grid.getPosition(width);
                children.push(JirglStructures.item({ content: guiItem.content, x: position.x, y: position.y, isCurrent: guiItem.isCurrent }));
                var currentHeight = position.y + JirglStructures.itemHeight + (2 * JirglStructures.itemMargin);
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
    };
    function canvas(data) {
        return { component: canvasComponent, data: data };
    }
    JirglStructures.canvas = canvas;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=canvas.js.map