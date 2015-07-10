/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export interface ITextboxData {
        onChange: (value: string) => void;
        isDisabled?: boolean;
    }

    interface ITextboxCtx {
        data: ITextboxData;
    }

    var textboxComoponent: IBobrilComponent = {
        render(ctx: ITextboxCtx, me: IBobrilNode) {
            me.tag = "input";

            if (ctx.data.isDisabled) {
                me.attrs = { disabled: "true" };
            }

            me.data = { onChange: ctx.data.onChange };
        },
        onChange(ctx: ITextboxCtx, value: any): void {
            ctx.data.onChange(value);
        }
    }

    export function textbox(data: ITextboxData): IBobrilNode {
        return { component: textboxComoponent, data: data };
    }
}