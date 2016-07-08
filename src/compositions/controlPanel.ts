import * as b from 'bobril';
import * as m from 'bobril-m';

export interface IControlPanelData {
    actions: b.IBobrilNode;
    options?: b.IBobrilNode;
    valueBox: b.IBobrilNode;
    executeButton: b.IBobrilNode;
    iteratorSlider: b.IBobrilNode;
    iterateButton: b.IBobrilNode;
}

const flexStyle = { display: 'flex', alignItems: 'center' };

function getBlock(children: b.IBobrilNode): b.IBobrilNode {
    return b.styledDiv(children, { flex: 1 });
}

export function create(data: IControlPanelData): b.IBobrilNode {
    return {
        children: [
            b.styledDiv([
                getBlock(data.actions),
                getBlock(data.options),
                getBlock(data.valueBox),
                getBlock(data.executeButton)
            ], flexStyle),
            b.styledDiv([
                getBlock(data.iteratorSlider),
                getBlock(data.iterateButton),
            ], flexStyle)
        ]
    };
}
