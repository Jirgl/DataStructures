/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export interface IComboboxData {
        options: string[];
        onChange: (value: string) => void;
    }

    interface IComboboxCtx {
        data: IComboboxData;
    }

    var comboboxComoponent: IBobrilComponent = {
        render(ctx: IComboboxCtx, me: IBobrilNode) {
            var children = [];
            for (var i = 0; i < ctx.data.options.length; i++) {
                children.push({ tag: "option", children: ctx.data.options[i] });
            }

            me.tag = "select";
            me.data = { onChange: ctx.data.onChange };
            me.children = children;
        },
        onChange(ctx: IComboboxCtx, value: any): void {
            ctx.data.onChange(value);
            b.invalidate();
        }
    }

    export function combobox(data: IComboboxData): IBobrilNode {
        return { component: comboboxComoponent, data: data };
    }
}