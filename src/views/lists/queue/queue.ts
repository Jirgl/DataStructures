import * as f from 'bobflux';
import { changeAction, setContent, execute } from './actions';
import { queueCursor } from './cursor';
import { Actions } from './state';
import { create as canvas } from '../../../components/canvas';
import { create as dataStructureComposition } from '../../../compositions/dataStructure';
import { ListGrid } from '../listGrid';

export const Queue = () => {
    const state = f.getState(queueCursor);
    const iterator = state.queue.getIterator();

    return dataStructureComposition({
        title: 'Queue',
        content: canvas({
            contentIterator: iterator,
            grid: new ListGrid(iterator)
        }),
        actions: state.actions,
        onActionChange: (action) => {
            if (action > -1) changeAction(action);
            return state.selectedAction;
        },
        isValueDisabled: state.selectedAction === Actions['dequeue'],
        onValueChange: setContent,
        onExecuteClick: execute
    });
}
