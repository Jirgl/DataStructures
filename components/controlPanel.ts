/// <reference path="../bobril/bobril.d.ts" />

module JirglStructures {
    export interface IControlPanelData {
        actions: IBobrilNode;
        options?: IBobrilNode;
        valueBox: IBobrilNode;
        submitButton: IBobrilNode;
    }

    interface IControlPanelCtx {
        data: IControlPanelData;
    }

    var controlPanelComoponent: IBobrilComponent = {
        render(ctx: IControlPanelCtx, me: IBobrilNode) {
            me.tag = "table";

            var children = [{ tag: "td", children: ctx.data.actions }];
            if (ctx.data.options) {
                children.push({ tag: "td", children: ctx.data.options });
            }

            children.push({ tag: "td", children: ctx.data.valueBox });
            children.push({ tag: "td", children: ctx.data.submitButton });

            me.children = children;
        }
    }

    export function controlPanel(data: IControlPanelData): IBobrilNode {
        return { component: controlPanelComoponent, data: data };
    }
}