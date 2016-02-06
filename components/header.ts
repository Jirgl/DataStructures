module JirglStructures {
    export enum HeaderType {
        AppHeader,
        PageHeader,
        TopicHeader
    }

    export interface IHeaderData {
        content: string;
        type: HeaderType;
    }

    interface IHeaderCtx {
        data: IHeaderData;
    }

    function toSize(type: HeaderType): number {
        switch (type) {
            case HeaderType.AppHeader:
                return 40;
            default:
                return 26;
        }
    }

    function toStyle(type: HeaderType): any {
        var style: any = {};
        switch (type) {
            case HeaderType.AppHeader:
                style.fontSize = toSize(type);
                style.fontFamily = Font.baseFontFamily;
                style.fontWeight = "bold";
                style.color = Color.lightForeground;
                break;
            default:
                style.fontSize = toSize(type);
                style.fontFamily = Font.baseFontFamily;
                style.color = Color.darkForeground;
        }

        return style;
    }

    var headerComponent: IBobrilComponent = {
        render(ctx: IHeaderCtx, me: IBobrilNode) {
            me.tag = "div";
            me.style = toStyle(ctx.data.type);
            me.children = ctx.data.content;
        }
    }

    export function header(data: IHeaderData): IBobrilNode {
        return { component: headerComponent, data: data };
    }
}