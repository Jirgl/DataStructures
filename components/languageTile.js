var JirglStructures;
(function (JirglStructures) {
    var TileState;
    (function (TileState) {
        TileState[TileState["Active"] = 0] = "Active";
        TileState[TileState["Inactive"] = 1] = "Inactive";
        TileState[TileState["Hover"] = 2] = "Hover";
    })(TileState || (TileState = {}));
    var langTileComponent = {
        init: function (ctx) {
            ctx.state = ctx.data.isActive ? TileState.Active : TileState.Inactive;
        },
        render: function (ctx, me) {
            me.tag = "div";
            me.style = {
                cursor: "pointer",
                width: 50,
                height: 33
            };
            switch (ctx.state) {
                case TileState.Active:
                    b.style(me, b.sprite(ctx.data.activeImageUrl));
                    break;
                case TileState.Hover:
                    b.style(me, b.sprite(ctx.data.hoverImageUrl));
                    break;
                default:
                    b.style(me, b.sprite(ctx.data.inactiveImageUrl));
                    break;
            }
        },
        onClick: function (ctx, event) {
            //ctx.data.changeState()
            return false;
        },
        onMouseEnter: function (ctx) {
            ctx.state = ctx.data.isActive ? TileState.Active : TileState.Hover;
            b.invalidate();
        },
        onMouseLeave: function (ctx) {
            ctx.state = ctx.data.isActive ? TileState.Active : TileState.Inactive;
            b.invalidate();
        }
    };
    function langTile(data) {
        return { component: langTileComponent, data: data };
    }
    JirglStructures.langTile = langTile;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=languageTile.js.map