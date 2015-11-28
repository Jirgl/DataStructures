module JirglStructures {
    export interface ILangTileData {
        isActive: boolean;
        activeImageUrl: string;
        hoverImageUrl: string;
        inactiveImageUrl: string;
        setLang: () => void;
    }

    interface ILangTileCtx {
        data: ILangTileData;
        hover: boolean;
    }

    var langTileComponent: IBobrilComponent = {
        init(ctx: ILangTileCtx, me: IBobrilNode) {
            b.style(me, b.sprite(ctx.data.inactiveImageUrl));
        },
        render(ctx: ILangTileCtx, me: IBobrilNode) {
            me.tag = "div";
            me.style = {
                cursor: "pointer",
                width: 50,
                height: 33
            }

            b.style(me, b.sprite(ctx.data.inactiveImageUrl));

            if (ctx.data.isActive)
                b.style(me, b.sprite(ctx.data.activeImageUrl));
            else if (ctx.hover)
                b.style(me, b.sprite(ctx.data.hoverImageUrl));
        },
        onClick(ctx: ILangTileCtx): boolean {
            ctx.data.setLang();
            return false;
        },
        onMouseEnter(ctx: ILangTileCtx): void {
            ctx.hover = true;
            b.invalidate();
        },
        onMouseLeave(ctx: ILangTileCtx): void {
            ctx.hover = false;
            b.invalidate();
        }
    }

    export function langTile(data: ILangTileData): IBobrilNode {
        return { component: langTileComponent, data: data };
    }
}