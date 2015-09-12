/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.style.d.ts"/>

module JirglStructures {
    export interface IPageHeaderData {
        content: string;
    }

    interface IPageHeaderCtx {
        data: IPageHeaderData;
    }

    var pageHeaderComponent: IBobrilComponent = {
        render(ctx: IPageHeaderCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = [
                b.style({ tag: "div" }, b.sprite("assets/metal.jpg")),
                {
                    tag: "div",
                    style: { position: "relative", top: -200, left: 200 },
                    children: header({ content: ctx.data.content, size: HeaderSize.H1 })
                }
            ];
        }
    }

    export function pageHeader(data: IPageHeaderData): IBobrilNode {
        return { component: pageHeaderComponent, data: data };
    }
}