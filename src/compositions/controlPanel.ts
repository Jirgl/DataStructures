import * as b from 'bobril';
import * as m from 'bobril-m';

export interface IControlPanelData {
    actions: b.IBobrilNode;
    options?: b.IBobrilNode;
    valueBox: b.IBobrilNode;
    submitButton: b.IBobrilNode;
}

function getBlock(children: b.IBobrilNode): b.IBobrilNode {
    return b.styledDiv(children, { flex: 1 });
}

export function create(data: IControlPanelData): b.IBobrilNode {
    return b.styledDiv([
        getBlock(data.actions),
        getBlock(data.options),
        getBlock(data.valueBox),
        getBlock(data.submitButton)
    ], { display: 'flex', alignItems: 'center' });
}
