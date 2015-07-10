/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.mouse.d.ts" />

module JirglStructures {
    export interface IButtonData {
        content: string;
        onClick: () => void;
    }

    interface IButtonCtx {
        data: IButtonData;
    }

    var buttonComoponent: IBobrilComponent = {
        render(ctx: IButtonCtx, me: IBobrilNode) {
            me.tag = "button";
            me.children = ctx.data.content;
        },
        onClick(ctx: IButtonCtx, event: IBobrilMouseEvent): boolean {
            ctx.data.onClick();
            return true;
        }
    }

    export function button(data: IButtonData): IBobrilNode {
        return { component: buttonComoponent, data: data };
    }
}