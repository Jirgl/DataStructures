import * as f from 'bobflux';
import { changeAction, setContent, execute } from './actions';
import { stackCursor } from './cursor';
import { Actions } from './state';
import { create as canvas } from '../../../components/canvas';
import { create as dataStructureComposition } from '../../../compositions/dataStructure';
import { ListGrid } from '../listGrid';

export const Stack = () => {
    const state = f.getState(stackCursor);
    const iterator = state.stack.getIterator();

    return dataStructureComposition({
        title: 'Stack',
        content: canvas({
            contentIterator: iterator,
            grid: new ListGrid(iterator)
        }),
        actions: state.actions,
        onActionChange: (action) => {
            if (action > -1) changeAction(action);
            return state.selectedAction;
        },
        isValueDisabled: state.selectedAction === Actions['pop'],
        onValueChange: setContent,
        onExecuteClick: execute
    });
}
