import * as f from 'bobflux';
import { changeAction, changeParameter, setContent, execute } from './actions';
import { linkedListCursor } from './cursor';
import { Actions, Parameters } from './state';
import { create as canvas } from '../../../components/canvas';
import { create as dataStructureComposition } from '../../../compositions/dataStructure';
import { ListGrid } from '../listGrid';

export const LinkedList = () => {
    const state = f.getState(linkedListCursor);
    const iterator = state.linkedList.getIterator();

    return dataStructureComposition({
        title: 'Linked list',
        content: canvas({
            contentIterator: iterator,
            grid: new ListGrid(iterator)
        }),
        actions: state.actions,
        onActionChange: (action) => {
            if (action > -1) changeAction(action);
            return state.selectedAction;
        },
        parameters: state.parameters.map((param) => {
            return {
                title: param,
                index: Parameters[param]
            };
        }),
        onParameterChange: (parameter) => {
            if (parameter > -1) changeParameter(parameter);
            return state.selectedParameter;
        },
        isValueDisabled: state.selectedAction === Actions['remove'],
        onValueChange: setContent,
        onExecuteClick: execute
    });
}
