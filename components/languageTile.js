var JirglStructures;
(function (JirglStructures) {
    var langTileComponent = {
        init: function (ctx, me) {
            b.style(me, b.sprite(ctx.data.inactiveImageUrl));
        },
        render: function (ctx, me) {
            me.tag = "div";
            me.style = {
                cursor: "pointer",
                width: 50,
                height: 33
            };
            b.style(me, b.sprite(ctx.data.inactiveImageUrl));
            if (ctx.data.isActive)
                b.style(me, b.sprite(ctx.data.activeImageUrl));
            else if (ctx.hover)
                b.style(me, b.sprite(ctx.data.hoverImageUrl));
        },
        onClick: function (ctx) {
            ctx.data.setLang();
            return false;
        },
        onMouseEnter: function (ctx) {
            ctx.hover = true;
            b.invalidate();
        },
        onMouseLeave: function (ctx) {
            ctx.hover = false;
            b.invalidate();
        }
    };
    function langTile(data) {
        return { component: langTileComponent, data: data };
    }
    JirglStructures.langTile = langTile;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=languageTile.js.map