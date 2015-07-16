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

    export interface IHeaderData {
        content: string;
        size: HeaderSize;
    }

    interface IHeaderCtx {
        data: IHeaderData;
    }

    var headerComponent: IBobrilComponent = {
        toTag(size: HeaderSize): string {
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