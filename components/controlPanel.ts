/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export interface IControlPanelData {
        options: IBobrilNode;
        actions: IBobrilNode;
        valueBox: IBobrilNode;
        submitButton: IBobrilNode;
    }

    interface IControlPanelCtx {
        data: IControlPanelData;
    }

    var controlPanelComoponent: IBobrilComponent = {
        render(ctx: IControlPanelCtx, me: IBobrilNode) {
            me.tag = "table";

            me.children = [
                { tag: "td", children: ctx.data.actions },
                { tag: "td", children: ctx.data.options },
                { tag: "td", children: ctx.data.valueBox },
                { tag: "td", children: ctx.data.submitButton }
            ];
        }
    }

    export function controlPanel(data: IControlPanelData): IBobrilNode {
        return { component: controlPanelComoponent, data: data };
    }
}