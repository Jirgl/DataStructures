import * as f from 'bobflux';
import { changeAction, changeParameter, setContent, execute } from './actions';
import { binaryTreeCursor } from './cursor';
import { Actions, Parameters } from './state';
import { create as canvas } from '../../../components/canvas';
import { create as dataStructureComposition } from '../../../compositions/dataStructure';
import { TreeGrid } from '../treeGrid';

export const BinaryTree = () => {
    const state = f.getState(binaryTreeCursor);
    const iterator = state.binaryTree.getIterator();

    return dataStructureComposition({
        title: 'Binary tree',
        content: canvas({
            iterator: iterator,
            getIndexOfCurrentIteratorItem: () => f.getState(binaryTreeCursor).indexOfCurrentItem,
            grid: new TreeGrid(state.binaryTree.getDepth(), iterator)
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
        isValueDisabled: state.selectedAction === Actions['get'] || state.selectedAction === Actions['remove'],
        onValueChange: setContent,
        onExecuteClick: execute
    });
}
