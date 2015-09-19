/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export enum HeaderSize {
        H1,
        H2,
        H3,
        H4,
        H5,
        H6
    }

    export enum HeaderEffect {
        Dented
    }

    function toTag(size: HeaderSize): string {
        switch (size) {
            case HeaderSize.H1:
                return "h1";
            case HeaderSize.H2:
                return "h2";
            case HeaderSize.H3:
                return "h3";
            case HeaderSize.H4:
                return "h4";
            case HeaderSize.H5:
                return "h5";
            case HeaderSize.H6:
                return "h6";
            default:
                return "h2";
        }
    }

    function toStyle(effect: HeaderEffect): any {
        switch (effect) {
        case HeaderEffect.Dented:
            return {
                color: "#EEE",
                fontSize: 80,
                fontFamily: "Segoe UI semibold",
                textShadow: "0 1px 1px #666, -1px -2px 1px #000"
            }
        default:
            return {};
        }
    }

    export interface IHeaderData {
        content: string;
        size: HeaderSize;
        effect?: HeaderEffect;
    }

    interface IHeaderCtx {
        data: IHeaderData;
    }

    var headerComponent: IBobrilComponent = {
        render(ctx: IHeaderCtx, me: IBobrilNode) {
            me.tag = toTag(ctx.data.size);
            me.style = toStyle(ctx.data.effect);
            me.children = ctx.data.content;
        }
    }

    export function header(data: IHeaderData): IBobrilNode {
        return { component: headerComponent, data: data };
    }
}