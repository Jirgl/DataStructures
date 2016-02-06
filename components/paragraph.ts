module JirglStructures {
    export interface IParagraphData {
        content: string;
    }

    interface IParagraphCtx {
        data: IParagraphData;
    }

    var paragraphComponent: IBobrilComponent = {
        render(ctx: IParagraphCtx, me: IBobrilNode) {
            me.tag = "div";
            me.style = {
                fontSize: 16,
                padding: 20,
                textAlign: "justify",
                fontFamily: Font.lightFontFamily,
                color: Color.lightForeground
            };
            me.children = ctx.data.content;
        }
    }

    export function paragraph(data: IParagraphData): IBobrilNode {
        return { component: paragraphComponent, data: data };
    }
}