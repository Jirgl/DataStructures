import * as b from 'bobril';

export interface IButtonData {
    content: string;
    onClick: () => void;
}

interface IButtonCtx extends b.IBobrilCtx {
    data: IButtonData;
}

let buttonComoponent: b.IBobrilComponent = {
    render(ctx: IButtonCtx, me: b.IBobrilNode) {
        me.tag = 'button';
        me.children = ctx.data.content;
    },
    onClick(ctx: IButtonCtx, event: b.IBobrilMouseEvent): boolean {
        ctx.data.onClick();
        return true;
    }
}

export function create(data: IButtonData): b.IBobrilNode {
    return { component: buttonComoponent, data: data };
}
