import * as b from 'bobril';
import * as m from 'bobril-m';

export interface IControlPanelData {
    actions: b.IBobrilNode;
    options?: b.IBobrilNode;
    valueBox: b.IBobrilNode;
    submitButton: b.IBobrilNode;
}

function getBlock(children: b.IBobrilNode): b.IBobrilNode {
    return {
        tag: 'div',
        style: { flex: 1 },
        children: children
    };
}

export function create(data: IControlPanelData): b.IBobrilNode {
    return {
        tag: 'div',
        style: { display: 'flex', alignItems: 'center' },
        children: [
            getBlock(data.actions),
            getBlock(data.options),
            getBlock(data.valueBox),
            getBlock(data.submitButton)
        ]
    };
}
