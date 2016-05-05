import * as b from 'bobril';

export interface IComboboxData {
    options: string[];
    onChange: (value: string) => void;
}

interface IComboboxCtx extends b.IBobrilCtx {
    data: IComboboxData;
}

let comboboxComoponent: b.IBobrilComponent = {
    render(ctx: IComboboxCtx, me: b.IBobrilNode) {
        let children = [];
        for (let i = 0; i < ctx.data.options.length; i++) {
            children.push({ tag: 'option', children: ctx.data.options[i] });
        }

        me.tag = 'select';
        me.data = { onChange: ctx.data.onChange };
        me.children = children;
    },
    onChange(ctx: IComboboxCtx, value: any): void {
        ctx.data.onChange(value);
        b.invalidate();
    }
}

export function create(data: IComboboxData): b.IBobrilNode {
    return { component: comboboxComoponent, data: data };
}
