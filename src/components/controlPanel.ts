import * as b from 'bobril';

export interface IControlPanelData {
    actions: b.IBobrilNode;
    options?: b.IBobrilNode;
    valueBox: b.IBobrilNode;
    submitButton: b.IBobrilNode;
}

interface IControlPanelCtx extends b.IBobrilCtx {
    data: IControlPanelData;
}

let controlPanelComoponent: b.IBobrilComponent = {
    render(ctx: IControlPanelCtx, me: b.IBobrilNode) {
        me.tag = 'table';

        let children = [{ tag: 'td', children: ctx.data.actions }];
        if (ctx.data.options) children.push({ tag: 'td', children: ctx.data.options });
        children.push({ tag: 'td', children: ctx.data.valueBox });
        children.push({ tag: 'td', children: ctx.data.submitButton });

        me.children = children;
    }
}

export function create(data: IControlPanelData): b.IBobrilNode {
    return { component: controlPanelComoponent, data: data };
}
