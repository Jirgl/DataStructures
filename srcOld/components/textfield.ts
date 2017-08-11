import * as b from 'bobril';
import * as m from 'bobril-m';

export interface ITextfieldData {
    isDisabled: boolean;
    onChange: (value: string) => void;
    maxLength?: number;
}

interface ITextfieldCtx extends b.IBobrilCtx {
    data: ITextfieldData;
    value: string
}

let textfieldComponent: b.IBobrilComponent = {
    init(ctx: ITextfieldCtx) {
        ctx.value = '';
    },
    render(ctx: ITextfieldCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        me.children = m.TextField({
            value: ctx.value,
            onChange: (value: string) => {
                if (ctx.data.maxLength && value.length > ctx.data.maxLength) return;

                ctx.data.onChange(value);
                ctx.value = value;
                b.invalidate();
            },
            disabled: ctx.data.isDisabled,
            labelText: 'content'
        });
    }
}

export function create(data: ITextfieldData): b.IBobrilNode {
    return { component: textfieldComponent, data: data };
}
