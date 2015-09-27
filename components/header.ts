/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export enum HeaderType {
        AppHeader,
        PageHeader,
        TopicHeader
    }

    export enum HeaderEffect {
        Dented
    }

    function toStyle(size: number, effect: HeaderEffect): any {
        var style = {
            fontSize: size,
            fontFamily: Font.baseFontFamily
        };

        switch (effect) {
        case HeaderEffect.Dented:
            style["color"] = Color.appHeaderForeground;
            style["fontFamily"] = Font.semiboldFontFamily;
            style["textShadow"] = "0 1px 1px #666, -1px -2px 1px #000";
            break;
        }

        return style;
    }

    function toSize(type: HeaderType): number {
        switch (type) {
        case HeaderType.AppHeader:
            return 50;
        default:
            return 24;
        }
    }

    export interface IHeaderData {
        content: string;
        type: HeaderType;
        effect?: HeaderEffect;
    }

    interface IHeaderCtx {
        data: IHeaderData;
    }

    var headerComponent: IBobrilComponent = {
        render(ctx: IHeaderCtx, me: IBobrilNode) {
            me.tag = "div";
            me.style = toStyle(toSize(ctx.data.type), ctx.data.effect);
            me.children = ctx.data.content;
        }
    }

    export function header(data: IHeaderData): IBobrilNode {
        return { component: headerComponent, data: data };
    }
}