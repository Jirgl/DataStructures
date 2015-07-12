/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export var itemWidth = 80;
    export var itemHeight = 80;
    export var itemMargin = 30;

    export interface IItemData {
        content: string;
        x: number;
        y: number;
        isCurrent: boolean;
    }

    interface IItemCtx {
        data: IItemData;
    }

    var itemComponent: IBobrilComponent = {
        render(ctx: IItemCtx, me: IBobrilNode) {
            me.tag = "div";
            me.style = {
                background: ctx.data.isCurrent ? "green" : "red",
                width: itemWidth,
                height: itemHeight,
                position: "absolute",
                left: ctx.data.x,
                top: ctx.data.y,
                margin: itemMargin
            };
            me.children = ctx.data.content;
        }
    }

    export function item(data: IItemData): IBobrilNode {
        return { component: itemComponent, data: data };
    }
}