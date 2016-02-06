/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export module Item {
        export var itemWidth = 80;
        export var itemHeight = 80;
        export var itemMargin = 30;
        export var arrowMargin = 2;
    }

    export interface IItemData<T> {
        content: T;
        x: number;
        y: number;
        isCurrent: boolean;
    }

    interface IItemCtx<T> {
        data: IItemData<T>;
    }

    var itemComponent: IBobrilComponent = {
        render<T>(ctx: IItemCtx<T>, me: IBobrilNode) {
            me.tag = "div";
            me.style = {
                color: Color.lightForeground,
                background: ctx.data.isCurrent ? Color.majorColor : Color.darkBackground,
                width: Item.itemWidth,
                height: Item.itemHeight,
                position: "absolute",
                left: ctx.data.x,
                top: ctx.data.y,
                margin: Item.itemMargin
            };
            me.children = ctx.data.content;
        }
    }

    export function item<T>(data: IItemData<T>): IBobrilNode {
        return { component: itemComponent, data: data };
    }
}