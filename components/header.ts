/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export enum Size {
        H1,
        H2,
        H3,
        H4,
        H5,
        H6
    }

    export interface IHeaderData {
        content: string;
        size: Size;
    }

    interface IHeaderCtx {
        data: IHeaderData;
    }

    var headerComponent: IBobrilComponent = {
        toTag(size: Size): string {
            switch (size) {
            case Size.H1:
                return "h1";
            case Size.H2:
                return "h2";
            case Size.H3:
                return "h3";
            case Size.H4:
                return "h4";
            case Size.H5:
                return "h5";
            case Size.H6:
                return "h6";
            default:
                return "h2";
            }
        },
        render(ctx: IHeaderCtx, me: IBobrilNode) {
            me.tag = this.toTag(ctx.data.size);
            me.children = ctx.data.content;
        }
    }

    export function header(data: IHeaderData): IBobrilNode {
        return { component: headerComponent, data: data };
    }
}