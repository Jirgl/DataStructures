module JirglStructures {
    export interface ILangTileData {
        isActive: boolean;
        activeImageUrl: string;
        hoverImageUrl: string;
        inactiveImageUrl: string;
        changeState?: (isActive: boolean) => {};
    }

    enum TileState {
        Active, Inactive, Hover
    }

    interface ILangTileCtx {
        data: ILangTileData;
        state: TileState;
    }

    var langTileComponent: IBobrilComponent = {
        init(ctx: ILangTileCtx) {
            ctx.state = ctx.data.isActive ? TileState.Active : TileState.Inactive;
        },
        render(ctx: ILangTileCtx, me: IBobrilNode) {
            me.tag = "div";
            me.style = {
                cursor: "pointer",
                width: 50,
                height: 33
            }

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
        onClick(ctx: ILangTileCtx, event: IBobrilMouseEvent): boolean {
            //ctx.data.changeState()

            return false;
        },
        onMouseEnter(ctx: ILangTileCtx): void {
            ctx.state = ctx.data.isActive ? TileState.Active : TileState.Hover;
            b.invalidate();
        },
        onMouseLeave(ctx: ILangTileCtx): void {
            ctx.state = ctx.data.isActive ? TileState.Active : TileState.Inactive;
            b.invalidate();
        }
    }

    export function langTile(data: ILangTileData): IBobrilNode {
        return { component: langTileComponent, data: data };
    }
}