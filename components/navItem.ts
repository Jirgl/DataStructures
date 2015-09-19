/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export interface INavData {
        content: string;
        leftPosition: number;
        topPosition: number;
        isActive: boolean;
        routeParamName: string;
        backgroundUrl: string;
    }

    interface INavItemCtx {
        data: INavData;
    }

    function getItem(ctx: INavItemCtx): IBobrilNode {
        var item = {
            tag: "div",
            children: b.link({
                tag: "a",
                style: {
                    position: "absolute",
                    left: 70,
                    top: -15
                },
                children: ctx.data.content
            }, ctx.data.routeParamName)
        };

        b.style(item, b.sprite(ctx.data.backgroundUrl), {
            position: "absolute",
            left: ctx.data.leftPosition,
            top: ctx.data.topPosition,
            textAlign: "center"
        });

        return item;
    }

    function getHighlightedBar(ctx: INavItemCtx): IBobrilNode {
        return {
            tag: "div",
            style: {
                position: "absolute",
                left: ctx.data.leftPosition,
                top: ctx.data.topPosition + 30,
                textAlign: "center",
                backgroundColor: ctx.data.isActive ? "#080" : "#CCC",
                width: 200,
                height: 3
            }
        };
    }

    var navItemComponent: IBobrilComponent = {
        render(ctx: INavItemCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children =
            [
                getItem(ctx),
                getHighlightedBar(ctx)
            ];
        }
    }

    export function navItem(data: INavData): IBobrilNode {
        return { component: navItemComponent, data: data };
    }
}