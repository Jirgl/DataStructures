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
                return 24;
        }
    }

    function toStyle(type: HeaderType): any {
        const style: any = {};
        switch (type) {
            case HeaderType.AppHeader:
                style.fontSize = toSize(type);
                style.fontFamily = Font.baseFontFamily;
                style.fontWeight = "bold";
                style.color = Color.baseForeground;
            default:
                style.fontSize = toSize(type);
                style.fontFamily = Font.baseFontFamily;
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