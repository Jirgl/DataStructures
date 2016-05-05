import * as b from 'bobril';

export interface ITextboxData {
    onChange: (value: string) => void;
    isDisabled?: boolean;
}

interface ITextboxCtx extends b.IBobrilCtx {
    data: ITextboxData;
}

let textboxComoponent: b.IBobrilComponent = {
    render(ctx: ITextboxCtx, me: b.IBobrilNode) {
        me.tag = 'input';

        if (ctx.data.isDisabled) {
            me.attrs = { disabled: 'true' };
        }

        me.data = { onChange: ctx.data.onChange };
    },
    onChange(ctx: ITextboxCtx, value: any): void {
        ctx.data.onChange(value);
    }
}

export function create(data: ITextboxData): b.IBobrilNode {
    return { component: textboxComoponent, data: data };
}
