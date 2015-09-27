/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.style.d.ts"/>

module JirglStructures {
    export interface IAppHeaderData {
        content: string;
        leftPosition: number;
        topPosition: number;
    }

    interface IAppHeaderCtx {
        data: IAppHeaderData;
    }

    var appHeaderComponent: IBobrilComponent = {
        render(ctx: IAppHeaderCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                b.style({ tag: "div" }, b.sprite("assets/metal.jpg")),
                {
                    tag: "div",
                    style: {
                        position: "relative",
                        left: ctx.data.leftPosition,
                        top: ctx.data.topPosition
                    },
                    children: header({
                        content: ctx.data.content,
                        type: HeaderType.AppHeader,
                        effect: HeaderEffect.Dented
                    })
                }
            ];
        }
    }

    export function appHeader(data: IAppHeaderData): IBobrilNode {
        return { component: appHeaderComponent, data: data };
    }
}